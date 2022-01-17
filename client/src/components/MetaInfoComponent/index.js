// import { useState } from 'react';
import useCollapse from 'react-collapsed'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CancelIcon from '@mui/icons-material/Cancel';
import InfoIcon from '@mui/icons-material/Info';
import Tooltip from '@mui/material/Tooltip';
import {
  MContainer,
  MHeadingContainer,
  MHeadingTitle,
  MHeadingH2,
  MHeadingP,
  MHeadingButton,
  MDetailsContainer,
  MDetailContainer,
  MDetailHeading,
  MDetailP,
  MTitleContainer,
  MDetailTitle,
  Button
} from './MetaStyle';

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
      <MContainer>
        <MHeadingContainer borderColor={color(score)}>
          <MHeadingTitle>
            <MHeadingH2>Meta Information</MHeadingH2>
            <MHeadingP borderColor={color(score)}>Score {score}</MHeadingP>
          </MHeadingTitle>
          <MHeadingButton>
            <Button {...getToggleProps()}>
              {isExpanded ? 'Hide Details' : 'See Details'}
            </Button>
          </MHeadingButton>
        </MHeadingContainer>
        <MDetailsContainer {...getCollapseProps()}>
          <MDetailContainer>
            <MDetailHeading>
              {metaTitle.score === 1 ? <CheckCircleOutlineIcon sx={{ color: '#4caf50' }} /> : <CancelIcon sx={{ color: '#f44336' }} />}
              <MDetailP>Meta Title Width</MDetailP>
            </MDetailHeading>
            <MTitleContainer>
              <MDetailTitle textColor={metaTitle.score === 1 ? '#4caf50' : '#f44336'}>
                {metaTitle.width}px
                {metaTitle.score === 0 ?
                  <Tooltip title="Meta title width should be greater than 286px and less than 575px" placement='right-start' >
                    <InfoIcon fontSize='10px' sx={{ marginLeft: '5px', marginBottom: '2px' }} />
                  </Tooltip>
                  : null}
              </MDetailTitle>
            </MTitleContainer>
          </MDetailContainer>
          <hr />
          <MDetailContainer>
            <MDetailHeading>
              {description.lScore === 1 ? <CheckCircleOutlineIcon sx={{ color: '#4caf50' }} /> : <CancelIcon sx={{ color: '#f44336' }} />}

              <MDetailP>Meta Description Width</MDetailP>
            </MDetailHeading>
            <MTitleContainer>
              <MDetailTitle textColor={description.lScore === 1 ? '#4caf50' : '#f44336'}>
                {description.width}px
                {description.lscore === 0 ?
                  <Tooltip title={description.ldesc} placement='right-start' >

                    <InfoIcon fontSize='10px' sx={{ marginLeft: '5px', marginBottom: '2px' }} />

                  </Tooltip>

                  : null}
              </MDetailTitle>
            </MTitleContainer>
          </MDetailContainer>
          <hr />
          <MDetailContainer>
            <MDetailHeading>
              {description.cScore === 1 ? <CheckCircleOutlineIcon sx={{ color: '#4caf50' }} /> : <CancelIcon sx={{ color: '#f44336' }} />}

              <MDetailP>Call to Action</MDetailP>
            </MDetailHeading>
            <MTitleContainer>
              <MDetailTitle textColor={description.cScore === 1 ? '#4caf50' : '#f44336'}>
                {description.ctaInDesc ? "True" : "False"}
                {description.cScore < .5 ?
                  <Tooltip title={description.cDesc} placement='right-start' >

                    <InfoIcon fontSize='10px' sx={{ marginLeft: '5px', marginBottom: '2px' }} />

                  </Tooltip>

                  : null}
              </MDetailTitle>
            </MTitleContainer>
          </MDetailContainer>
        </MDetailsContainer>
      </MContainer>

    </>
  )
}

export default MetaInfo
