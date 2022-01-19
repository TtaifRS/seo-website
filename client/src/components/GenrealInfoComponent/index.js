// import { useState } from 'react';
import useCollapse from 'react-collapsed'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CancelIcon from '@mui/icons-material/Cancel';
import InfoIcon from '@mui/icons-material/Info';
import Tooltip from '@mui/material/Tooltip';
import {
  GContainer,
  GHeadingContainer,
  GHeadingTitle,
  GHeadingH2,
  GHeadingP,
  GHeadingButton,
  GDetailsContainer,
  GDetailContainer,
  GDetailHeading,
  GDetailP,
  GTitleContainer,
  GDetailTitle,
  Button
} from '../../Styles/GlobalSectionStyle';

const GeneralInfo = ({ generalInfo, score }) => {

  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse()
  const {
    doctype,
    encode,
    domSize,
    firstPara,
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
  } = generalInfo

  const color = (num) => {
    if (num >= 80) {
      return '#4caf50'
    }
    if (num >= 60 && num < 80) {
      return '#ff9800'
    }
    return '#f44336'
  }

  return (
    <>
      <GContainer>
        <GHeadingContainer borderColor={color(score)}>
          <GHeadingTitle>
            <GHeadingH2>General Information</GHeadingH2>
            <GHeadingP borderColor={color(score)}>Score {score}</GHeadingP>
          </GHeadingTitle>
          <GHeadingButton>
            <Button {...getToggleProps()}>
              {isExpanded ? 'Hide Details' : 'See Details'}
            </Button>
          </GHeadingButton>

        </GHeadingContainer>
        <GDetailsContainer {...getCollapseProps()}>
          <GDetailContainer>
            <GDetailHeading>
              {doctype.score === 1 ? <CheckCircleOutlineIcon sx={{ color: '#4caf50' }} /> : <CancelIcon sx={{ color: '#f44336' }} />}

              <GDetailP>Doctype</GDetailP>
            </GDetailHeading>
            <GTitleContainer>
              <GDetailTitle textColor={doctype.score === 1 ? '#4caf50' : '#f44336'}>
                {doctype.title}
                {doctype.score === 0 ?
                  <Tooltip title="Page should have HTML doctype" placement='right-start' >

                    <InfoIcon fontSize='10px' sx={{ marginLeft: '5px', marginBottom: '2px' }} />

                  </Tooltip>

                  : null}
              </GDetailTitle>
            </GTitleContainer>
          </GDetailContainer>
          <hr />
          <GDetailContainer>
            <GDetailHeading>
              {encode.score === 1 ? <CheckCircleOutlineIcon sx={{ color: '#4caf50' }} /> : <CancelIcon sx={{ color: '#f44336' }} />}

              <GDetailP>Encode</GDetailP>
            </GDetailHeading>
            <GTitleContainer>
              <GDetailTitle textColor={encode.score === 1 ? '#4caf50' : '#f44336'}>
                {encode.title}
                {encode.score === 0 ?
                  <Tooltip title="Page should have UTF-8 enocoding" placement='right-start' >

                    <InfoIcon fontSize='10px' sx={{ marginLeft: '5px', marginBottom: '2px' }} />

                  </Tooltip>

                  : null}
              </GDetailTitle>
            </GTitleContainer>
          </GDetailContainer>
          <hr />
          <GDetailContainer>
            <GDetailHeading>
              {domSize.score > 0.5 ? <CheckCircleOutlineIcon sx={{ color: '#4caf50' }} /> : <CancelIcon sx={{ color: '#f44336' }} />}

              <GDetailP>Dom Size</GDetailP>
            </GDetailHeading>
            <GTitleContainer>
              <GDetailTitle textColor={domSize.score > 0.5 ? '#4caf50' : '#f44336'}>
                {domSize.size}
                {domSize.score < .5 ?
                  <Tooltip title="Dom size should be less than 1500 element" placement='right-start' >

                    <InfoIcon fontSize='10px' sx={{ marginLeft: '5px', marginBottom: '2px' }} />

                  </Tooltip>

                  : null}
              </GDetailTitle>
            </GTitleContainer>
          </GDetailContainer>
          <hr />
          <GDetailContainer>
            <GDetailHeading>
              {firstPara.score === 1 ? <CheckCircleOutlineIcon sx={{ color: '#4caf50' }} /> : <CancelIcon sx={{ color: '#f44336' }} />}

              <GDetailP>First Paragraph</GDetailP>
            </GDetailHeading>
            <GTitleContainer>
              <GDetailTitle textColor={firstPara.score === 1 ? '#4caf50' : '#f44336'}>
                {firstPara.title}
                {firstPara.score === 0 ?
                  <Tooltip title="Page should have atleast one Paragraph" placement='right-start' >

                    <InfoIcon fontSize='10px' sx={{ marginLeft: '5px', marginBottom: '2px' }} />

                  </Tooltip>

                  : null}
              </GDetailTitle>
            </GTitleContainer>
          </GDetailContainer>
          <hr />
          <GDetailContainer>
            <GDetailHeading>
              {redirects.score === 1 ? <CheckCircleOutlineIcon sx={{ color: '#4caf50' }} /> : <CancelIcon sx={{ color: '#f44336' }} />}

              <GDetailP>Redirects</GDetailP>
            </GDetailHeading>
            <GTitleContainer>
              <GDetailTitle textColor={redirects.score === 1 ? '#4caf50' : '#f44336'}>
                {redirects.title}
                {redirects.score === 0 ?
                  <Tooltip title="Redirects introduce additonal delay" placement='right-start' >

                    <InfoIcon fontSize='10px' sx={{ marginLeft: '5px', marginBottom: '2px' }} />

                  </Tooltip>

                  : null}
              </GDetailTitle>
            </GTitleContainer>
          </GDetailContainer>
          <hr />
          <GDetailContainer>
            <GDetailHeading>
              {totalWordCount.score === 1 ? <CheckCircleOutlineIcon sx={{ color: '#4caf50' }} /> : <CancelIcon sx={{ color: '#f44336' }} />}

              <GDetailP>Total Word</GDetailP>
            </GDetailHeading>
            <GTitleContainer>
              <GDetailTitle textColor={totalWordCount.score === 1 ? '#4caf50' : '#f44336'}>
                {totalWordCount.numberOfWord}
                {totalWordCount.score === 0 ?
                  <Tooltip title="Page should have atleast 500words" placement='right-start' >

                    <InfoIcon fontSize='10px' sx={{ marginLeft: '5px', marginBottom: '2px' }} />

                  </Tooltip>

                  : null}
              </GDetailTitle>
            </GTitleContainer>
          </GDetailContainer>
          <hr />
          <GDetailContainer>
            <GDetailHeading>
              {mediaRatio.score === 1 ? <CheckCircleOutlineIcon sx={{ color: '#4caf50' }} /> : <CancelIcon sx={{ color: '#f44336' }} />}

              <GDetailP>Media Ratio</GDetailP>
            </GDetailHeading>
            <GTitleContainer>
              <GDetailTitle textColor={mediaRatio.score === 1 ? '#4caf50' : '#f44336'}>
                {mediaRatio.number}
                {mediaRatio.score === 0 ?
                  <Tooltip title="For every 150 words there needs to be an image or video" placement='right-start' >

                    <InfoIcon fontSize='10px' sx={{ marginLeft: '5px', marginBottom: '2px' }} />

                  </Tooltip>

                  : null}
              </GDetailTitle>
            </GTitleContainer>
          </GDetailContainer>
          <hr />
          <GDetailContainer>
            <GDetailHeading>
              {focusKeywordRatio.score === 1 ? <CheckCircleOutlineIcon sx={{ color: '#4caf50' }} /> : <CancelIcon sx={{ color: '#f44336' }} />}

              <GDetailP>Focus Keyword Ratio</GDetailP>

            </GDetailHeading>
            <GTitleContainer>
              <GDetailTitle textColor={focusKeywordRatio.score === 1 ? '#4caf50' : '#f44336'}>
                {focusKeywordRatio.number}
                {focusKeywordRatio.score === 0 ?
                  <Tooltip title="For every 100 words there needs to be one focus keyword" placement='right-start' >

                    <InfoIcon fontSize='10px' sx={{ marginLeft: '5px', marginBottom: '2px' }} />

                  </Tooltip>

                  : null}
              </GDetailTitle>
            </GTitleContainer>
          </GDetailContainer>
          <hr />
          <GDetailContainer>
            <GDetailHeading>
              {sentenceRatio.score === 1 ? <CheckCircleOutlineIcon sx={{ color: '#4caf50' }} /> : <CancelIcon sx={{ color: '#f44336' }} />}

              <GDetailP>Sentence Ratio</GDetailP>
            </GDetailHeading>
            <GTitleContainer>
              <GDetailTitle textColor={sentenceRatio.score === 1 ? '#4caf50' : '#f44336'}>
                {sentenceRatio.title}
                {sentenceRatio.score === 0 ?
                  <Tooltip title="Only 15% sentences can have more than 20 words." placement='right-start' >

                    <InfoIcon fontSize='10px' sx={{ marginLeft: '5px', marginBottom: '2px' }} />

                  </Tooltip>

                  : null}
              </GDetailTitle>
            </GTitleContainer>
          </GDetailContainer>
          <hr />
          <GDetailContainer>
            <GDetailHeading>
              {favicon.score === 1 ? <CheckCircleOutlineIcon sx={{ color: '#4caf50' }} /> : <CancelIcon sx={{ color: '#f44336' }} />}

              <GDetailP>Favicon</GDetailP>
            </GDetailHeading>
            <GTitleContainer>
              <GDetailTitle textColor={favicon.score === 1 ? '#4caf50' : '#f44336'}>
                {favicon.title ? "True" : "False"}
                {favicon.score === 0 ?
                  <Tooltip title="Website should have a valid favicon" placement='right-start' >

                    <InfoIcon fontSize='10px' sx={{ marginLeft: '5px', marginBottom: '2px' }} />

                  </Tooltip>

                  : null}
              </GDetailTitle>
            </GTitleContainer>
          </GDetailContainer>
          <hr />
          <GDetailContainer>
            <GDetailHeading>
              {focusKeyWordInURL.score === 1 ? <CheckCircleOutlineIcon sx={{ color: '#4caf50' }} /> : <CancelIcon sx={{ color: '#f44336' }} />}

              <GDetailP>Focus Keyword In URL</GDetailP>
            </GDetailHeading>
            <GTitleContainer>
              <GDetailTitle textColor={focusKeyWordInURL.score === 1 ? '#4caf50' : '#f44336'}>
                {focusKeyWordInURL.title ? "True" : "False"}
                {focusKeyWordInURL.score === 0 ?
                  <Tooltip title="Focus keyword should be present in the URL" placement='right-start' >

                    <InfoIcon fontSize='10px' sx={{ marginLeft: '5px', marginBottom: '2px' }} />

                  </Tooltip>

                  : null}
              </GDetailTitle>
            </GTitleContainer>
          </GDetailContainer>
          <hr />
          <GDetailContainer>
            <GDetailHeading>
              {friendlyUrl.score === 1 ? <CheckCircleOutlineIcon sx={{ color: '#4caf50' }} /> : <CancelIcon sx={{ color: '#f44336' }} />}

              <GDetailP>Friendly URL</GDetailP>
            </GDetailHeading>
            <GTitleContainer>
              <GDetailTitle textColor={friendlyUrl.score === 1 ? '#4caf50' : '#f44336'}>
                {friendlyUrl.title ? "True" : "False"}
                {friendlyUrl.score === 0 ?
                  <Tooltip title="URL should be readable" placement='right-start' >

                    <InfoIcon fontSize='10px' sx={{ marginLeft: '5px', marginBottom: '2px' }} />

                  </Tooltip>

                  : null}
              </GDetailTitle>
            </GTitleContainer>
          </GDetailContainer>
          <hr />
          <GDetailContainer>
            <GDetailHeading>
              {https.score === 1 ? <CheckCircleOutlineIcon sx={{ color: '#4caf50' }} /> : <CancelIcon sx={{ color: '#f44336' }} />}

              <GDetailP>HTTPS</GDetailP>
            </GDetailHeading>
            <GTitleContainer>
              <GDetailTitle textColor={https.score === 1 ? '#4caf50' : '#f44336'}>
                {https.title}
                {https.score === 0 ?
                  <Tooltip title="Should use https" placement='right-start' >

                    <InfoIcon fontSize='10px' sx={{ marginLeft: '5px', marginBottom: '2px' }} />

                  </Tooltip>

                  : null}
              </GDetailTitle>
            </GTitleContainer>
          </GDetailContainer>
          <hr />
          <GDetailContainer>
            <GDetailHeading>
              {errorInConsole.score === 1 ? <CheckCircleOutlineIcon sx={{ color: '#4caf50' }} /> : <CancelIcon sx={{ color: '#f44336' }} />}

              <GDetailP>Error In Console</GDetailP>
            </GDetailHeading>
            <GTitleContainer>
              <GDetailTitle textColor={errorInConsole.score === 1 ? '#4caf50' : '#f44336'}>
                {errorInConsole.title}
                {errorInConsole.score === 0 ?
                  <Tooltip title="Avoid showing error in console" placement='right-start' >

                    <InfoIcon fontSize='10px' sx={{ marginLeft: '5px', marginBottom: '2px' }} />

                  </Tooltip>

                  : null}
              </GDetailTitle>
            </GTitleContainer>
          </GDetailContainer>
          <hr />

          <GDetailContainer>
            <GDetailHeading>
              {geoLoactionOnStart.score === 1 ? <CheckCircleOutlineIcon sx={{ color: '#4caf50' }} /> : <CancelIcon sx={{ color: '#f44336' }} />}

              <GDetailP>Loaction Request On Start</GDetailP>
            </GDetailHeading>
            <GTitleContainer>
              <GDetailTitle textColor={geoLoactionOnStart.score === 1 ? '#4caf50' : '#f44336'}>
                {geoLoactionOnStart.title}
                {geoLoactionOnStart.score === 0 ?
                  <Tooltip title="location request on page load decrease user experience" placement='right-start' >

                    <InfoIcon fontSize='10px' sx={{ marginLeft: '5px', marginBottom: '2px' }} />

                  </Tooltip>

                  : null}
              </GDetailTitle>
            </GTitleContainer>
          </GDetailContainer>
          <hr />
          <GDetailContainer>
            <GDetailHeading>
              {notificationOnStart.score === 1 ? <CheckCircleOutlineIcon sx={{ color: '#4caf50' }} /> : <CancelIcon sx={{ color: '#f44336' }} />}

              <GDetailP>Notification On Start</GDetailP>
            </GDetailHeading>
            <GTitleContainer>
              <GDetailTitle textColor={notificationOnStart.score === 1 ? '#4caf50' : '#f44336'}>
                {notificationOnStart.title}
                {notificationOnStart.score === 0 ?
                  <Tooltip title="Notification request decrease user experience" placement='right-start' >

                    <InfoIcon fontSize='10px' sx={{ marginLeft: '5px', marginBottom: '2px' }} />

                  </Tooltip>

                  : null}
              </GDetailTitle>
            </GTitleContainer>
          </GDetailContainer>
          <hr />
          <GDetailContainer>
            <GDetailHeading>
              {hreflnag.score === 1 ? <CheckCircleOutlineIcon sx={{ color: '#4caf50' }} /> : <CancelIcon sx={{ color: '#f44336' }} />}

              <GDetailP>Hreflnag</GDetailP>
            </GDetailHeading>
            <GTitleContainer>
              <GDetailTitle textColor={hreflnag.score === 1 ? '#4caf50' : '#f44336'}>
                {hreflnag.title}
                {hreflnag.score < 1 ?
                  <Tooltip title="hreflang links tell search engines the URLs for all the versions of a page so that they can display the correct version for each language or region." placement='right-start' >

                    <InfoIcon fontSize='10px' sx={{ marginLeft: '5px', marginBottom: '2px' }} />

                  </Tooltip>

                  : null}
              </GDetailTitle>
            </GTitleContainer>
          </GDetailContainer>
          <hr />
          <GDetailContainer>
            <GDetailHeading>
              {canonical.score === 1 ? <CheckCircleOutlineIcon sx={{ color: '#4caf50' }} /> : <CancelIcon sx={{ color: '#f44336' }} />}

              <GDetailP>Canonical</GDetailP>
            </GDetailHeading>
            <GTitleContainer>
              <GDetailTitle textColor={canonical.score === 1 ? '#4caf50' : '#f44336'}>
                {canonical.title}
                {canonical.score < 1 ?
                  <Tooltip title="Canonical links suggest which URL to show on search results" placement='right-start' >

                    <InfoIcon fontSize='10px' sx={{ marginLeft: '5px', marginBottom: '2px' }} />

                  </Tooltip>

                  : null}
              </GDetailTitle>
            </GTitleContainer>
          </GDetailContainer>
          <hr />
          <GDetailContainer>
            <GDetailHeading>
              {robotTxt.score === 1 ? <CheckCircleOutlineIcon sx={{ color: '#4caf50' }} /> : <CancelIcon sx={{ color: '#f44336' }} />}

              <GDetailP>RobotTxt</GDetailP>
            </GDetailHeading>
            <GTitleContainer>
              <GDetailTitle textColor={robotTxt.score === 1 ? '#4caf50' : '#f44336'}>
                {robotTxt.title}
                {robotTxt.score === 0 ?
                  <Tooltip title="Robot.txt file help search engine to crawl the website" placement='right-start' >

                    <InfoIcon fontSize='10px' sx={{ marginLeft: '5px', marginBottom: '2px' }} />

                  </Tooltip>

                  : null}
              </GDetailTitle>
            </GTitleContainer>
          </GDetailContainer>
        </GDetailsContainer>
      </GContainer>

    </>
  )
}

export default GeneralInfo
