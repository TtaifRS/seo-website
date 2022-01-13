import { puppeteerData } from '../utils/puppeteerData.js'

export const analyzers = async (req, res, next) => {
  const { url, keyword } = req.query
  const pData = await puppeteerData(url, keyword)


  res.status(pData.status).json({
    success: pData.success,
    data: pData.data,
    error: pData.error
  })
}