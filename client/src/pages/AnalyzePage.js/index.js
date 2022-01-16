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
  AnalyzScoreContainer,
  AnalyzMetaTitle,
  AnalyzTitleHeading,
  AnalyzTitleText,
  AnalyzTitleDiv,
  AnalyzTitleTextDiv,
  AnalyzTable,
  Thead,
  TH,
  TR,
  TD,
  Tbody,
  AnalyzScoreHeader,
  AnalyzHeaderScoreLeft,
  AnalyzScoreHederRight
} from './AnalyzPageStyles'
import ScoreComponents from '../../components/ScoreComponent'
import GeneralInfo from '../../components/GenrealInfoComponent'

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
                  <AnalyzHeader>
                    <AnalyzHeaderLeft>
                      <AnalyzTitle>
                        <AnalyzH1>{url}</AnalyzH1>
                      </AnalyzTitle>
                      <AnalyzMetaTitle>
                        <AnalyzTitleDiv>
                          <AnalyzTitleHeading>Title</AnalyzTitleHeading>
                        </AnalyzTitleDiv>
                        <AnalyzTitleTextDiv>
                          <AnalyzTitleText>{data.data.meta.metaTitle.title}</AnalyzTitleText>
                        </AnalyzTitleTextDiv>
                      </AnalyzMetaTitle>
                      <hr />
                      <AnalyzMetaTitle>
                        <AnalyzTitleDiv>
                          <AnalyzTitleHeading>Description</AnalyzTitleHeading>
                        </AnalyzTitleDiv>
                        <AnalyzTitleTextDiv>
                          <AnalyzTitleText>{data.data.meta.description.getDescription.title}</AnalyzTitleText>
                        </AnalyzTitleTextDiv>
                      </AnalyzMetaTitle>
                      <hr />
                      <AnalyzMetaTitle>
                        <AnalyzTitleDiv>
                          <AnalyzTitleHeading>Library</AnalyzTitleHeading>
                        </AnalyzTitleDiv>
                        <AnalyzTable>
                          <Thead>
                            <TR>
                              <TH scope="col">Name</TH>
                              <TH scope="col">Version</TH>
                            </TR>
                          </Thead>
                          <Tbody>

                            {data.data.jsLibraries.length ?
                              data.data.jsLibraries.map((item, index) => (
                                <TR key={index}>
                                  <TD data-label="name">{item.name}</TD>
                                  <TD data-label="version">{item.version}</TD>
                                </TR>
                              )) : (
                                <TR>
                                  <TD></TD>
                                  <TD></TD>
                                </TR>
                              )
                            }

                          </Tbody>
                        </AnalyzTable>
                      </AnalyzMetaTitle>
                    </AnalyzHeaderLeft>
                    <AnalyzHederRight>
                      <AnalyzImageContainer>
                        <ScreenShot src={`data:image/png;base64,${data.data.screenShot}`} />
                      </AnalyzImageContainer>
                    </AnalyzHederRight>
                  </AnalyzHeader>
                </AnalyzHeaderContainer>
                <AnalyzScoreContainer>
                  <AnalyzScoreHeader>
                    <AnalyzHeaderScoreLeft>
                      <AnalyzeScore>
                        <ScoreComponents score={data.data.score} />
                      </AnalyzeScore>
                    </AnalyzHeaderScoreLeft>
                    <AnalyzScoreHederRight>
                      <AnalyzInfo>
                        <Pie percentage={data.data.score.totalScore} colour="green" />

                      </AnalyzInfo>
                      <h2>Total Score</h2>
                    </AnalyzScoreHederRight>
                  </AnalyzScoreHeader>

                </AnalyzScoreContainer>
                <div>
                  <GeneralInfo generalInfo={data.data.generalInfo} score={data.data.score.generalInfo} />
                </div>
              </AnalyzContainer>

            </>
            :
            err ? <p>Something went wrong, please try again</p> : ''}

      </div>

    </>
  )
}

export default AnalyzePage
