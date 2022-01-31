import { useState, useEffect } from 'react'
import axios from 'axios'
import jsPdf from 'jspdf';
import html2Canvas from 'html2canvas'
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
  AnalyzScoreHederRight,
  ScoreHeadline,
  ScoreHeadlineDiv,
  ButtonContainer,
  PrintButton
} from './AnalyzPageStyles'
import ScoreComponents from '../../components/ScoreComponent'
import GeneralInfo from '../../components/GenrealInfoComponent'
import MetaInfo from '../../components/MetaInfoComponent'
import StructureInfo from '../../components/StructureComponent'
import PageSpeedInfo from '../../components/PageSpeedInfoComponent'
import SocialMediaInfo from '../../components/SocialMediaComponent'
import MobileFriendlyInfo from '../../components/MobileFriendlyInfoComponent'
import MobilePage from '../../components/MobilePage';
import LoadingComponent from '../../components/LoadingComponent';
import ErrorComponent from '../../components/ErrorComponent';

const AnalyzePage = ({ url, keyword }) => {

  const color = (num) => {
    if (num >= 80) {
      return '#4caf50'
    }
    if (num >= 60 && num < 80) {
      return '#ff9800'
    }
    return '#f44336'
  }

  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState('')
  const [err, setErr] = useState(false)

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get(`api/v2/analyzers/?url=${url}&keyword=${keyword}`)
        setData(res.data);
        setIsLoading(false)
      } catch (err) {
        console.log(err)
        setIsLoading(false)
        setErr(true)
      }
    }
    fetchData()

  }, [url, keyword])


  function printDocument() {
    const input = document.getElementById('divToPrint');
    html2Canvas(input)
      .then((canvas) => {
        canvas.getContext('2d');
        var imgWidth = 210;
        var pageHeight = 295;
        var imgHeight = canvas.height * imgWidth / canvas.width;
        var heightLeft = imgHeight;
        console.log(canvas.height + "  " + canvas.width);


        var imgData = canvas.toDataURL("image/jpeg", 1.0);
        var position = 0;
        var pdf = new jsPdf('p', 'mm');
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);

        heightLeft -= pageHeight;

        while (heightLeft >= 0) {
          position = heightLeft - imgHeight;
          pdf.addPage();
          pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
          heightLeft -= pageHeight;
        }

        pdf.save(`report-${url}.pdf`);
      })
  }


  return (
    <>
      <div>
        <MobilePage />
        {isLoading ? <LoadingComponent /> :
          data && data.success ?
            <>
              <div id='divToPrint'>
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
                    <ScoreHeadlineDiv>
                      <ScoreHeadline>SEO SCORE</ScoreHeadline>
                    </ScoreHeadlineDiv>

                    <AnalyzScoreHeader>
                      <AnalyzHeaderScoreLeft>
                        <AnalyzeScore>
                          <ScoreComponents score={data.data.score} />
                        </AnalyzeScore>
                      </AnalyzHeaderScoreLeft>
                      <AnalyzScoreHederRight>
                        <AnalyzInfo>
                          <Pie percentage={data.data.score.totalScore} colour={color(data.data.score.totalScore)} />

                        </AnalyzInfo>
                        <h2>Total Score</h2>
                      </AnalyzScoreHederRight>
                    </AnalyzScoreHeader>

                  </AnalyzScoreContainer>
                  <div>
                    <GeneralInfo generalInfo={data.data.generalInfo} score={data.data.score.generalInfo} />
                  </div>
                  <div>
                    <MetaInfo metaInfo={data.data.meta} score={data.data.score.meta} />
                  </div>
                  <div>
                    <StructureInfo heading={data.data.headings} link={data.data.links} image={data.data.images} score={data.data.score.structure} />
                  </div>
                  <div>
                    <PageSpeedInfo pageSpeedInfo={data.data.pageSpeed} score={data.data.score.pageSpeed} />
                  </div>
                  <div>
                    <SocialMediaInfo socialInfo={data.data.socialMedia} />
                  </div>
                  <div>
                    <MobileFriendlyInfo mobileInfo={data.data.mobileFriendly} score={data.data.score.mobileFriendly} />
                  </div>
                </AnalyzContainer>
              </div>
              <ButtonContainer>
                <PrintButton onClick={printDocument}>Export as PDF</PrintButton>
              </ButtonContainer>
            </>
            :
            err ? <ErrorComponent /> : ''}

      </div>

    </>
  )
}

export default AnalyzePage
