import puppeteer from 'puppeteer'
import urlExist from 'url-exist'
import _ from 'lodash'

import { createLightHouseReportWithBrowser, getPageSpeed } from './lighthouse-utlils.js'

import { encodeData, firstParaData, getImageData, getLinkData, getMetaData, getSentenceRatio, headersData } from './puppeteer/index.js'




export const puppeteerData = async (url, keyword) => {
  try {
    const URL = url
    console.log(URL)
    const validURL = await urlExist(URL)
    const browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    })

    const page = await browser.newPage()
    if (validURL) {
      await page.setViewport({ width: 1366, height: 768 })
      const time1 = Date.now()
      await page.goto(URL, { waitUntil: 'networkidle2', timeout: 0 })
      const time2 = Date.now()
      const base64 = await page.screenshot({ encoding: "base64" })
      await page.evaluate(_ => {
        window.scrollBy(0, window.innerHeight)
      })

      const bodyText = await page.$eval('*', el => el.innerText);

      const imageCount = (await page.$$('img')).length

      //generalInfo
      const encode = await encodeData(page)
      const firstPara = await firstParaData(page)
      const loadingTime = (time2 - time1) / 1000.0
      const faviconCheck = await urlExist(`${URL}/favicon.ico`)
      const favicon = { title: faviconCheck }
      if (faviconCheck) {
        favicon.score = 1
      } else {
        favicon.score = 0
      }
      const focusKeyWordInURLCheck = URL.includes(keyword)
      const focusKeyWordInURL = { title: focusKeyWordInURLCheck }
      if (focusKeyWordInURLCheck) {
        focusKeyWordInURL.score = 1
      } else {
        focusKeyWordInURL.score = 0
      }

      const friendlyUrlCheck = URL.includes('?')
      const friendlyUrl = { title: !friendlyUrlCheck }
      if (friendlyUrlCheck) {
        friendlyUrl.score = 0;
        friendlyUrl.desc = "Please don't use query parameter, it's not easy to remember."
      } else {
        friendlyUrl.score = 1
      }

      const numberOfWord = bodyText.trim().split(/\s+/).length
      const totalWordCount = {
        numberOfWord
      }

      if (numberOfWord > 500) {
        totalWordCount.score = 1
      } else {
        totalWordCount.score = 0
      }

      // Media content ratio (for every 150 words there needs to be an image or video) 
      const mediaRatioCount = (imageCount / numberOfWord) * 150
      const mediaRatio = {
        number: mediaRatioCount.toFixed(2)
      }

      if (mediaRatioCount >= 1) {
        mediaRatio.score = 1
      } else {
        mediaRatio.score = 0
      }


      //// Focus keyword ratio (for every 100 words there needs to be onc focus keyword) 
      const foundWordPattern = new RegExp('(\\w*' + keyword + '\\w*)', 'gi');

      const focuskeyWord = bodyText.match(foundWordPattern)
      let keyWordCount = 0;
      focuskeyWord ? keyWordCount = focuskeyWord.length : keyWordCount;
      const focusKeywordRatioCount = (keyWordCount / numberOfWord) * 100
      const focusKeywordRatio = {
        number: focusKeywordRatioCount.toFixed(2)
      }
      if (focusKeywordRatioCount >= 1) {
        focusKeywordRatio.score = 1
      } else {
        focusKeywordRatio.score = 0
      }


      //sentence ratio 
      const sentenceRatio = await getSentenceRatio(bodyText)

      //focuse keyword in first para 
      const focuseKeywordInParaCheck = firstPara.title ? await firstPara.title.includes(keyword) : false

      //meta 
      const meta = await getMetaData(page)

      //header order 
      const headerStructure = await headersData(page)
      const headerTag = headerStructure.map(tag => tag.tagName.toLowerCase())
      let search = "h1";

      let countH1 = headerTag.reduce(function (n, val) {
        return n + (val === search);
      }, 0);

      const headings = {
        headerStructure,
      }

      if (countH1 = 0) {
        headings.h1Score = 0
      } else {
        headings.h1Score = 1
      }

      //link section 
      const linksData = await getLinkData(page, URL)

      const links = {
        totalLinks: linksData.totalLink,
        totalInternalLink: linksData.totalInternalLink,
        totalExternalLink: linksData.totalExternalLink
      }

      //socialMedia 
      function socialMediaLink(text) {
        return linksData.externalLink.some(function (el) {
          const linkurl = el.url

          return linkurl.includes(text);
        });
      }

      const facebook = socialMediaLink('facebook')
      const twitter = socialMediaLink('twitter')
      const youtube = socialMediaLink('youtube')
      const instagram = socialMediaLink('instagram')
      const linkedin = socialMediaLink('inkedin')

      const socialArray = [facebook, twitter, youtube, instagram, linkedin]
      const socialScore = (socialArray.filter(Boolean).length) * 20

      const socialMedia = {
        facebook: facebook,
        youtube: youtube,
        linkedin: linkedin,
        twitter: twitter,
        instagram: instagram,
        score: socialScore
      }

      //image 
      const imageData = await getImageData(page)
      const checkSrcImage = imageData.map(x => _.isEmpty(x.imageSrc))
      const brokenImage = checkSrcImage.filter(Boolean).length

      const images = {
        totalImage: imageData.length,
        broakenImage: brokenImage.length
      }

      //
      //lighthousedata
      //
      const result = await createLightHouseReportWithBrowser(
        browser,
        URL,
        {
          output: "json",
          screenEmulation: { mobile: false },
          formFactor: 'desktop',
          logLevel: 'info',
          onlyAudits: [
            "first-contentful-paint",
            "speed-index",
            "largest-contentful-paint",
            "interactive",
            "total-blocking-time",
            "cumulative-layout-shift",
            "is-on-https",
            "doctype",
            "redirects",
            "dom-size",
            "errors-in-console",
            "geolocation-on-start",
            "notification-on-start",
            "hreflang",
            "canonical",
            "robots-txt",
            "heading-order",
            "crawlable-anchors",
            "image-alt",
            "js-libraries",
            "viewport",
          ],
        }
      )

      const lhReport = JSON.parse(result.report)
      const lhAudits = lhReport["audits"]
      const warning = lhReport["runWarnings"]

      //generalInfo
      const httpsData = lhAudits["is-on-https"]
      const doctypeData = lhAudits["doctype"]
      const redirectData = lhAudits["redirects"]
      const domSizeData = lhAudits["dom-size"]
      const errorInConsoleData = lhAudits["errors-in-console"]
      const geoLoactionOnStartData = lhAudits["geolocation-on-start"]
      const notificationOnStartData = lhAudits["notification-on-start"]
      const hreflnagData = lhAudits["hreflang"]
      const canonicalData = lhAudits["canonical"]
      const robotTxtData = lhAudits["robots-txt"]

      //page speed
      const pageSpeed = await getPageSpeed(lhAudits)
      //header 
      const headerOrder = lhAudits["heading-order"]

      headings.title = headerOrder["title"]
      headings.score = headerOrder["score"]

      //links
      const crawlableLinks = lhAudits["crawlable-anchors"]
      links.title = crawlableLinks.title
      links.score = crawlableLinks.score

      //image 
      const altImage = lhAudits["image-alt"]
      images.title = altImage.title
      images.score = altImage.score


      //js library 
      const jsLibraries = lhAudits["js-libraries"]?.["details"]?.["items"]?.map(item => {
        return {
          name: item.name,
          version: item.version
        }
      })

      //mobile friendly 
      const viewPortData = lhAudits["viewport"]


      await browser.close()


      const viewPort = {
        title: viewPortData.title,
        score: viewPortData.score
      }


      const mobileFriendly = {
        viewPort,
      }


      //all constant

      const doctype = {
        title: doctypeData.title,
        desc: doctypeData.description,
        score: doctypeData.score
      }

      const domSize = {
        size: domSizeData.numericValue,
        score: domSizeData.score
      }

      const redirects = {
        title: redirectData.title,
        desc: redirectData.description,
        score: redirectData.score
      }

      const https = {
        title: httpsData.title,
        desc: httpsData.description,
        score: httpsData.score
      }
      const errorInConsole = {
        title: errorInConsoleData.title,
        score: errorInConsoleData.score
      }

      const geoLoactionOnStart = {
        title: geoLoactionOnStartData.title,
        score: geoLoactionOnStartData.score
      }

      const notificationOnStart = {
        title: notificationOnStartData.title,
        score: notificationOnStartData.score
      }
      const hreflnag = {
        title: hreflnagData.title,
        score: hreflnagData.score
      }

      const canonical = {
        title: canonicalData.title,
        score: canonicalData.score
      }
      const robotTxt = {
        title: robotTxtData.title,
        score: robotTxtData.score
      }


      //return values 

      const generalInfo = {
        doctype,
        encode,
        domSize,
        firstPara,
        loadingTime: `${loadingTime} sec`,
        redirects,
        totalWordCount,
        mediaRatio,
        focusKeywordRatio,
        sentenceRatio,
        favicon,
        focusKeyWordInURL,
        friendlyUrl,
        https,
        errorInConsole,
        geoLoactionOnStart,
        notificationOnStart,
        hreflnag,
        canonical,
        robotTxt,
        focusKeyWordInPara: focuseKeywordInParaCheck
      }



      //calculate score 
      const totalGenralScore = (
        doctype.score +
        encode.score +
        domSize.score +
        firstPara.score +
        redirects.score +
        totalWordCount.score +
        mediaRatio.score +
        focusKeywordRatio.score +
        sentenceRatio.score +
        favicon.score +
        focusKeyWordInURL.score +
        friendlyUrl.score +
        https.score +
        errorInConsole.score +
        geoLoactionOnStart.score +
        notificationOnStart.score +
        hreflnag.score +
        canonical.score +
        robotTxt.score
      )

      const generalInfoScore = Math.round((totalGenralScore / 19) * 100)

      //meta score 
      const metaScore = 100 - (3 - (
        meta.metaTitle.score +
        meta.description.lScore +
        meta.description.cScore
      )) * 20

      //structure score 
      const headingScore = Math.round(((headings.score + headings.h1Score) / 2) * 100)
      const imageScore = images.score * 100
      const linkScore = links.score * 100

      const structureScore = Math.round((headingScore + imageScore + linkScore) / 3)

      //pageSpeedScore 
      const { fcp, spi, lcp, tti, tbt, cls } = pageSpeed
      const pageSpeedScore = Math.round(fcp.score + spi.score + lcp.score + tti.score + tbt.score + cls.score)

      //mobileFriendlyScore 
      const mobileFriendlyScore = Math.round(viewPort.score * 100)

      //totalScore
      const totalScore = Math.round(
        (generalInfoScore * 0.25) +
        (metaScore * 0.20) +
        (structureScore * 0.20) +
        (socialMedia.score * 0.05) +
        (pageSpeedScore * 0.25) +
        (mobileFriendlyScore * 0.05)
      )

      const score = {
        totalScore,
        generalInfo: generalInfoScore,
        meta: metaScore,
        structure: structureScore,
        socialMedia: socialMedia.score,
        pageSpeed: pageSpeedScore,
        mobileFriendly: mobileFriendlyScore
      }


      return {
        success: true,
        status: 200,
        data: {
          warning,
          score,
          generalInfo,
          meta,
          headings,
          links,
          images,
          socialMedia,
          pageSpeed,
          mobileFriendly,
          screenShot: base64,
          jsLibraries,
        }
      }
    } else {
      return {
        success: false,
        status: 400,
        message: "url is not valid"
      }
    }


  } catch (error) {
    console.log(error)
    return { status: 400, error, success: false }
  }
}

