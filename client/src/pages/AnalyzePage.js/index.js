import { useState, useEffect } from 'react'
import axios from 'axios'

const AnalyzePage = ({ url }) => {
  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState('')
  const [err, setErr] = useState(false)

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get(`analyzers/?url=${url}`)
        setData(res.data);
        setIsLoading(false)
      } catch (err) {
        console.log(err)
        setIsLoading(false)
        setErr(true)
      }
    }
    fetchData()

  }, [])

  return (
    <div>
      {isLoading ? "Loading" :
        data ? <h1>Total Score : {data.data.score.totalScore}</h1> :
          err ? <p>Something went wrong, please try again</p> : ''}


    </div>
  )
}

export default AnalyzePage
