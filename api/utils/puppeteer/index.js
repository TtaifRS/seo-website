import { init } from 'server-text-width';
const TEXT_WIDTH_LOOKUP_TABLE = {
  "Arial|12px|400|0": "JAJAJAJAJAJAJAJAJADVDVDVDVDVJAJAJAJAJAJAJAJAJAJAJAJAJAJAJAJAJAJADVDVEQGrGrKqIACSD/D/EqHADVD/DVDVGrGrGrGrGrGrGrGrGrGrDVDVHAHAHAGrMLIAIAIqIqIAHVJVIqDVGAIAGrJ/IqJVIAJVIqIAHVIqIALUIAIAHVDVDVDVFoGrD/GrGrGAGrGrDVGrGrCqCqGACqJ/GrGrGrGrD/GADVGrGAIqGAGAGAEADHEAHAGA"
}
const { getTextWidth } = init(TEXT_WIDTH_LOOKUP_TABLE);

export const encodeData = async (page) => {
  const encoding = await page.evaluate(() => {
    const element = document.querySelector('head > meta[charset]')
    if (element) {
      return {
        title: element.getAttribute('charset'),
        score: 1
      }
    }

    return {
      title: 'No Charset Found',
      score: 0
    };

  })

  return encoding
}

export const firstParaData = async (page) => {
  const para = await page.evaluate(() => {
    const el = document.querySelector("p")
    if (el) {
      return {
        title: el.innerText,
        score: 1
      }
    } else {
      return {
        score: 0
      }
    }

  })

  return para
}

export const metaDescription = async (page) => {
  const desc = await page.evaluate(() => {
    const el = document.querySelector("head > meta[name='description']")
    if (el && el !== "") {
      return {
        title: el.content,
        score: 1
      }
    }

    return {
      score: 0
    };
  })

  return desc
}

export const getMetaData = async (page) => {
  const getTitle = await page.title()
  const getDescription = await metaDescription(page)

  const descriptionTitle = getDescription.score === 1 ? getDescription.title : null

  const titleWidth = getTextWidth(getTitle)
  const descWidth = descriptionTitle ? getTextWidth(descriptionTitle) : null

  const ctaWord = ["book now", "order online", "sign up", "buy now", "learn more", "call now", "call us", "subscribe"]
  function contains(target, pattern) {
    let value = 0;
    pattern.forEach(function (word) {
      value = value + target.includes(word);
    });
    return (value === 1)
  }

  const ctaInDesc = descriptionTitle ? contains(descriptionTitle.toLowerCase(), ctaWord) : false


  const metaTitle = {
    title: getTitle,
    width: titleWidth.toFixed(2)
  }

  const description = {
    getDescription,
    width: descWidth ? descWidth.toFixed(2) : null,
    ctaInDesc
  }

  if (titleWidth > 285 && titleWidth < 575) {
    metaTitle.score = 1
  } else {
    metaTitle.score = 0
    metaTitle.desc = "Keep Title Length between 285 pixels and 575 pixels"
  }

  if (descWidth > 430 && descWidth < 920) {
    description.lScore = 1
  } else {
    description.lScore = 0
    description.ldesc = "Keep Description length between 430px to 920px"
  }

  if (ctaInDesc) {
    description.cScore = 1
  } else {
    description.cScore = 0
    description.cDesc = "Use a call-to-action in your meta descriptions"
  }

  return {
    metaTitle,
    description
  }
}

export const getSentenceRatio = async (bodyText) => {
  const sentenceArray = bodyText.split(/\w[.?!](\s|$)/).filter(Boolean)
  const filteredSentenceArray = sentenceArray.filter(function (el) {
    const ignoresList = [null, ' ', '\n']
    return el != ignoresList.map(ignore => ignore);
  });


  let validSentence = 0;
  let count = 0
  filteredSentenceArray.map(sentence => {
    const wordCount = sentence.split(' ').length
    if (wordCount > 2) {
      validSentence++
    }

    if (wordCount > 20) {
      count++
    }
  })

  const sentenceRatioCount = (count / validSentence) * 100

  const sentenceRatio = {
    title: `${sentenceRatioCount.toFixed(2)}% sentences have more than 20 words.`
  }

  if (sentenceRatioCount > 15) {
    sentenceRatio.score = 0;
    sentenceRatio.desc = "Only 15% sentences can have more than 20 words."
  } else {
    sentenceRatio.score = 1;
  }

  return sentenceRatio
}

export const headersData = async (page) => {
  const header = await page.$$eval('h1, h2, h3, h4, h5, h6', element => element.map(htag => {
    const tagName = htag.tagName
    return {
      tagName,
    }
  }))
  return header
}

export const getLinkData = async (page, URL) => {
  const alllinks = await page.$$eval('a[href]', element => element.map(link => {

    if (link.getAttribute('href').startsWith("https") && ! null) {
      return {
        url: link.getAttribute('href'),
        text: link.textContent
      }
    }

  }
  ))
  const links = alllinks.filter(function (el) {
    return el != null;
  });

  const allInternalLink = links.map(link => {
    if (link.url.includes(URL)) {
      return {
        url: link.url,
        text: link.text
      }
    }
  })

  const internalLink = allInternalLink.filter(el => el != null)
  const externalLink = links.filter(a => !internalLink.map(b => b.url).includes(a.url))

  const totalLink = internalLink.length + externalLink.length
  const totalInternalLink = internalLink.length
  const totalExternalLink = externalLink.length

  return {
    externalLink,
    totalLink,
    totalInternalLink,
    totalExternalLink
  }

}

export const getImageData = async (page) => {
  const allImages = await page.$$eval('img', element => element.map(image => {
    const imageSrc = image.getAttribute('src')

    return {
      imageSrc
    }
  }))
  return allImages
}