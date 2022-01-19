import lighthouse from 'lighthouse';

export function createLightHouseReportWithBrowser(browser, url, options) {
  //allows us to talk via devtools protocol
  const endpoint = browser.wsEndpoint()
  const endpointURL = new URL(endpoint);
  return lighthouse(
    url,
    Object.assign({}, {
      port: endpointURL.port
    }, options)
  )
}

export const getPageSpeed = async (lhAudits) => {
  const fcpData = lhAudits["first-contentful-paint"]
  const spiData = lhAudits["speed-index"]
  const lcpData = lhAudits["largest-contentful-paint"]
  const ttiData = lhAudits["interactive"]
  const tbtData = lhAudits["total-blocking-time"]
  const clsData = lhAudits["cumulative-layout-shift"]

  const pageSpeedData = {
    fcp: {
      title: fcpData.title,
      desc: fcpData.description,
      score: fcpData.score * 10,
      value: fcpData.displayValue
    },
    spi: {
      title: spiData.title,
      desc: spiData.description,
      score: spiData.score * 10,
      value: spiData.displayValue
    },
    lcp: {
      title: lcpData.title,
      desc: lcpData.description,
      score: lcpData.score * 25,
      value: lcpData.displayValue
    },
    tti: {
      title: ttiData.title,
      desc: ttiData.description,
      score: ttiData.score * 10,
      value: ttiData.displayValue
    },
    tbt: {
      title: tbtData.title,
      desc: tbtData.description,
      score: tbtData.score * 30,
      value: tbtData.displayValue
    },
    cls: {
      title: clsData.title,
      desc: clsData.description,
      score: clsData.score * 15,
      value: clsData.displayValue
    }
  }

  return pageSpeedData

}