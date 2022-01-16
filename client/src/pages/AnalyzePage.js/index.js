import { useState, useEffect } from 'react'
import axios from 'axios'
import Pie from '../../components/AnaylzeHeadingComponent'
import {
  AnalyzContainer,
  AnalyzHeader,
  AnalyzH1,
  AnalyzImageContainer,
  ScreenShot,
  AnalyzInfo,
  AnalyzHeaderContainer,
  AnalyzHeaderLeft,
  AnalyzeScore,
  AnalyzHederRight,
  AnalyzTitle,
  AnalyzScoreContainer
} from './AnalyzPageStyles'
import ScoreComponents from '../../components/ScoreComponent'

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

  }, [url])
  return (
    <>
      <div>
        {isLoading ? "Loading" :
          data ?
            <>
              <AnalyzContainer>
                <AnalyzHeaderContainer>
                  <AnalyzTitle>
                    <AnalyzH1>{url}</AnalyzH1>
                  </AnalyzTitle>
                  <hr />
                  <AnalyzHeader>
                    <AnalyzHeaderLeft>
                      <AnalyzImageContainer>
                        <ScreenShot src={`data:image/png;base64,${data.data.screenShot}`} />
                      </AnalyzImageContainer>

                    </AnalyzHeaderLeft>
                    <AnalyzHederRight>
                      <AnalyzScoreContainer>
                        <AnalyzInfo>
                          <Pie percentage={data.data.score.totalScore} colour="green" />
                        </AnalyzInfo>
                        <AnalyzeScore>
                          <ScoreComponents score={data.data.score} />
                        </AnalyzeScore>
                      </AnalyzScoreContainer>
                    </AnalyzHederRight>
                  </AnalyzHeader>
                </AnalyzHeaderContainer>

              </AnalyzContainer>

            </>
            :
            err ? <p>Something went wrong, please try again</p> : ''}

      </div>

    </>
  )
}

export default AnalyzePage
