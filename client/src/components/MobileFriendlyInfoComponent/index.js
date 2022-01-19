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

  const { viewPort } = mobileInfo

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

        </GDetailsContainer>
      </GContainer>

    </>
  )
}

export default MobileFriendlyInfo


