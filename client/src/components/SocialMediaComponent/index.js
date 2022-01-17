import useCollapse from 'react-collapsed'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CancelIcon from '@mui/icons-material/Cancel';

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

const SocialMediaInfo = ({ socialInfo }) => {


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

  const { score, facebook, youtube, linkedin, twitter, instagram } = socialInfo

  return (
    <>
      <GContainer>
        <GHeadingContainer borderColor={color(score)}>
          <GHeadingTitle>
            <GHeadingH2>Social Media Information</GHeadingH2>
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
              {facebook ? <CheckCircleOutlineIcon sx={{ color: '#4caf50' }} /> : <CancelIcon sx={{ color: '#f44336' }} />}
              <GDetailP>Facebook</GDetailP>
            </GDetailHeading>
            <GTitleContainer>
              <GDetailTitle textColor={facebook ? '#4caf50' : '#f44336'}>
                {facebook ? "Yes" : "No"}
              </GDetailTitle>
            </GTitleContainer>
          </GDetailContainer>
          <hr />
          <GDetailContainer>
            <GDetailHeading>
              {linkedin ? <CheckCircleOutlineIcon sx={{ color: '#4caf50' }} /> : <CancelIcon sx={{ color: '#f44336' }} />}
              <GDetailP>LinkedIn</GDetailP>
            </GDetailHeading>
            <GTitleContainer>
              <GDetailTitle textColor={linkedin ? '#4caf50' : '#f44336'}>
                {linkedin ? "Yes" : "No"}
              </GDetailTitle>
            </GTitleContainer>
          </GDetailContainer>
          <hr />
          <GDetailContainer>
            <GDetailHeading>
              {youtube ? <CheckCircleOutlineIcon sx={{ color: '#4caf50' }} /> : <CancelIcon sx={{ color: '#f44336' }} />}
              <GDetailP>Youtube</GDetailP>
            </GDetailHeading>
            <GTitleContainer>
              <GDetailTitle textColor={youtube ? '#4caf50' : '#f44336'}>
                {youtube ? "Yes" : "No"}
              </GDetailTitle>
            </GTitleContainer>
          </GDetailContainer>
          <hr />
          <GDetailContainer>
            <GDetailHeading>
              {instagram ? <CheckCircleOutlineIcon sx={{ color: '#4caf50' }} /> : <CancelIcon sx={{ color: '#f44336' }} />}
              <GDetailP>Instagram</GDetailP>
            </GDetailHeading>
            <GTitleContainer>
              <GDetailTitle textColor={instagram ? '#4caf50' : '#f44336'}>
                {instagram ? "Yes" : "No"}
              </GDetailTitle>
            </GTitleContainer>
          </GDetailContainer>
          <hr />
          <GDetailContainer>
            <GDetailHeading>
              {twitter ? <CheckCircleOutlineIcon sx={{ color: '#4caf50' }} /> : <CancelIcon sx={{ color: '#f44336' }} />}
              <GDetailP>Twitter</GDetailP>
            </GDetailHeading>
            <GTitleContainer>
              <GDetailTitle textColor={twitter ? '#4caf50' : '#f44336'}>
                {twitter ? "Yes" : "No"}
              </GDetailTitle>
            </GTitleContainer>
          </GDetailContainer>


        </GDetailsContainer>
      </GContainer>

    </>
  )
}

export default SocialMediaInfo
