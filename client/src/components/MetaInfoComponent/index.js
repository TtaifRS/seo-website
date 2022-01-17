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

const MetaInfo = ({ metaInfo, score }) => {

  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse()

  const color = (num) => {
    if (num >= 80) {
      return '#4caf50'
    }
    if (num >= 60 && num < 80) {
      return '#ff9800'
    }
    return '#f44336'
  }

  const {
    metaTitle,
    description
  } = metaInfo

  return (
    <>
      <GContainer>
        <GHeadingContainer borderColor={color(score)}>
          <GHeadingTitle>
            <GHeadingH2>Meta Information</GHeadingH2>
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
              {metaTitle.score === 1 ? <CheckCircleOutlineIcon sx={{ color: '#4caf50' }} /> : <CancelIcon sx={{ color: '#f44336' }} />}
              <GDetailP>Meta Title Width</GDetailP>
            </GDetailHeading>
            <GTitleContainer>
              <GDetailTitle textColor={metaTitle.score === 1 ? '#4caf50' : '#f44336'}>
                {metaTitle.width}px
                {metaTitle.score === 0 ?
                  <Tooltip title="Meta title width should be greater than 286px and less than 575px" placement='right-start' >
                    <InfoIcon fontSize='10px' sx={{ marginLeft: '5px', marginBottom: '2px' }} />
                  </Tooltip>
                  : null}
              </GDetailTitle>
            </GTitleContainer>
          </GDetailContainer>
          <hr />
          <GDetailContainer>
            <GDetailHeading>
              {description.lScore === 1 ? <CheckCircleOutlineIcon sx={{ color: '#4caf50' }} /> : <CancelIcon sx={{ color: '#f44336' }} />}

              <GDetailP>Meta Description Width</GDetailP>
            </GDetailHeading>
            <GTitleContainer>
              <GDetailTitle textColor={description.lScore === 1 ? '#4caf50' : '#f44336'}>
                {description.width ? `${description.width}px` : 'No Description'}
                {description.lScore === 0 ?
                  <Tooltip title={description.ldesc} placement='right-start' >

                    <InfoIcon fontSize='10px' sx={{ marginLeft: '5px', marginBottom: '2px' }} />

                  </Tooltip>

                  : null}
              </GDetailTitle>
            </GTitleContainer>
          </GDetailContainer>
          <hr />
          <GDetailContainer>
            <GDetailHeading>
              {description.cScore === 1 ? <CheckCircleOutlineIcon sx={{ color: '#4caf50' }} /> : <CancelIcon sx={{ color: '#f44336' }} />}

              <GDetailP>Call to Action</GDetailP>
            </GDetailHeading>
            <GTitleContainer>
              <GDetailTitle textColor={description.cScore === 1 ? '#4caf50' : '#f44336'}>
                {description.ctaInDesc ? "True" : "False"}
                {description.cScore < .5 ?
                  <Tooltip title={description.cDesc} placement='right-start' >

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

export default MetaInfo
