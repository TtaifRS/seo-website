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

const MobileFriendlyInfo = ({ mobileInfo, score }) => {


  const color = (num) => {
    if (num >= 80) {
      return '#4caf50'
    }
    if (num >= 60 && num < 80) {
      return '#ff9800'
    }
    return '#f44336'
  }

  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse()

  const { viewPort, fontSize, tapTarget } = mobileInfo

  return (
    <>
      <GContainer>
        <GHeadingContainer borderColor={color(score)}>
          <GHeadingTitle>
            <GHeadingH2>Mobile Friendly Information</GHeadingH2>
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
              {viewPort.score === 1 ? <CheckCircleOutlineIcon sx={{ color: '#4caf50' }} /> : <CancelIcon sx={{ color: '#f44336' }} />}

              <GDetailP>viewPort</GDetailP>
            </GDetailHeading>
            <GTitleContainer>
              <GDetailTitle textColor={viewPort.score === 1 ? '#4caf50' : '#f44336'}>
                {viewPort.title}
                {viewPort.score === 0 ?
                  <Tooltip title='Does not have a meta name="viewport" tag with width or initial-scale' placement='right-start' >

                    <InfoIcon fontSize='10px' sx={{ marginLeft: '5px', marginBottom: '2px' }} />

                  </Tooltip>

                  : null}
              </GDetailTitle>
            </GTitleContainer>
          </GDetailContainer>
          <hr />
          <GDetailContainer>
            <GDetailHeading>
              {fontSize.score === 1 ? <CheckCircleOutlineIcon sx={{ color: '#4caf50' }} /> : <CancelIcon sx={{ color: '#f44336' }} />}

              <GDetailP>Font Size</GDetailP>
            </GDetailHeading>
            <GTitleContainer>
              <GDetailTitle textColor={fontSize.score === 1 ? '#4caf50' : '#f44336'}>
                {fontSize.title}
                {fontSize.score === 0 ?
                  <Tooltip title='Many search engines rank pages based on how mobile-friendly they are. Font sizes smaller than 12 px are often difficult to read on mobile devices and may require users to zoom in to display text at a comfortable reading size.' placement='right-start' >

                    <InfoIcon fontSize='10px' sx={{ marginLeft: '5px', marginBottom: '2px' }} />

                  </Tooltip>

                  : null}
              </GDetailTitle>
            </GTitleContainer>
          </GDetailContainer>
          <hr />
          <GDetailContainer>
            <GDetailHeading>
              {tapTarget.score === 1 ? <CheckCircleOutlineIcon sx={{ color: '#4caf50' }} /> : <CancelIcon sx={{ color: '#f44336' }} />}

              <GDetailP>Tap Target</GDetailP>
            </GDetailHeading>
            <GTitleContainer>
              <GDetailTitle textColor={tapTarget.score === 1 ? '#4caf50' : '#f44336'}>
                {tapTarget.title}
                {tapTarget.score < 1 ?
                  <Tooltip title='Tap targets are the areas of a web page that users on touch devices can interact with. Buttons, links, and form elements all have tap targets.' placement='right-start' >

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

export default MobileFriendlyInfo


