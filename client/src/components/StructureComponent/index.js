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
  Button,
  ContainerHeading, HeadingH2
} from '../../Styles/GlobalSectionStyle';



const StructureInfo = ({ heading, link, image, score }) => {

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

  return (
    <>
      <GContainer>
        <GHeadingContainer borderColor={color(score)}>
          <GHeadingTitle>
            <GHeadingH2>Structure Information</GHeadingH2>
            <GHeadingP borderColor={color(score)}>Score {score}</GHeadingP>
          </GHeadingTitle>
          <GHeadingButton>
            <Button {...getToggleProps()}>
              {isExpanded ? 'Hide Details' : 'See Details'}
            </Button>
          </GHeadingButton>
        </GHeadingContainer>

        <GDetailsContainer {...getCollapseProps()}>
          <ContainerHeading>
            <HeadingH2>Headings</HeadingH2>
          </ContainerHeading>
          <GDetailContainer>
            <GDetailHeading>
              {heading.score === 1 ? <CheckCircleOutlineIcon sx={{ color: '#4caf50' }} /> : <CancelIcon sx={{ color: '#f44336' }} />}
              <GDetailP>Title</GDetailP>
            </GDetailHeading>
            <GTitleContainer>
              <GDetailTitle textColor={heading.score === 1 ? '#4caf50' : '#f44336'}>
                {heading.title}
                {heading.score === 0 ?
                  <Tooltip title="Heading elements should follow sequentially-descending order(h1>h2>h3>h4>h5>h6)" placement='right-start' >
                    <InfoIcon fontSize='10px' sx={{ marginLeft: '5px', marginBottom: '2px' }} />
                  </Tooltip>
                  : null}
              </GDetailTitle>
            </GTitleContainer>
          </GDetailContainer>
          <hr />
          <GDetailContainer>
            <GDetailHeading>
              {heading.h1Score === 1 ? <CheckCircleOutlineIcon sx={{ color: '#4caf50' }} /> : <CancelIcon sx={{ color: '#f44336' }} />}
              <GDetailP>Heading Structure</GDetailP>
            </GDetailHeading>
            <GTitleContainer>
              <GDetailTitle textColor={heading.h1Score === 1 ? '#4caf50' : '#f44336'}>
                {heading.headerStructure.map((item, index) => (
                  <span key={index}>
                    {(index ? '> ' : '') + item.tagName}
                  </span>
                ))}
                {heading.h1Score === 0 ?
                  <Tooltip title="Heading elements should have one H1 tag" placement='right-start' >
                    <InfoIcon fontSize='10px' sx={{ marginLeft: '5px', marginBottom: '2px' }} />
                  </Tooltip>
                  : null}
              </GDetailTitle>
            </GTitleContainer>
          </GDetailContainer>
          <hr />
          <ContainerHeading>
            <HeadingH2>Links</HeadingH2>
          </ContainerHeading>
          <GDetailContainer>
            <GDetailHeading>
              {link.score === 1 ? <CheckCircleOutlineIcon sx={{ color: '#4caf50' }} /> : <CancelIcon sx={{ color: '#f44336' }} />}
              <GDetailP>Title</GDetailP>
            </GDetailHeading>
            <GTitleContainer>
              <GDetailTitle textColor={link.score === 1 ? '#4caf50' : '#f44336'}>
                {link.title}
                {link.score === 0 ?
                  <Tooltip title="Links should be crawlable" placement='right-start' >
                    <InfoIcon fontSize='10px' sx={{ marginLeft: '5px', marginBottom: '2px' }} />
                  </Tooltip>
                  : null}
              </GDetailTitle>
            </GTitleContainer>
          </GDetailContainer>
          <hr />
          <GDetailContainer>
            <GDetailHeading>
              {link.score === 1 ? <CheckCircleOutlineIcon sx={{ color: '#4caf50' }} /> : <CancelIcon sx={{ color: '#f44336' }} />}
              <GDetailP>Total link</GDetailP>
            </GDetailHeading>
            <GTitleContainer>
              <GDetailTitle textColor={link.score === 1 ? '#4caf50' : '#f44336'}>
                {link.totalLinks}
                {link.totalLinks === 0 ?
                  <Tooltip title="Page should have links" placement='right-start' >
                    <InfoIcon fontSize='10px' sx={{ marginLeft: '5px', marginBottom: '2px' }} />
                  </Tooltip>
                  : null}
              </GDetailTitle>
            </GTitleContainer>
          </GDetailContainer>
          <hr />
          <GDetailContainer>
            <GDetailHeading>
              {link.score === 1 ? <CheckCircleOutlineIcon sx={{ color: '#4caf50' }} /> : <CancelIcon sx={{ color: '#f44336' }} />}
              <GDetailP>Total Internal Link</GDetailP>
            </GDetailHeading>
            <GTitleContainer>
              <GDetailTitle textColor={link.score === 1 ? '#4caf50' : '#f44336'}>
                {link.totalInternalLink}
              </GDetailTitle>
            </GTitleContainer>
          </GDetailContainer>
          <hr />
          <GDetailContainer>
            <GDetailHeading>
              {link.score === 1 ? <CheckCircleOutlineIcon sx={{ color: '#4caf50' }} /> : <CancelIcon sx={{ color: '#f44336' }} />}
              <GDetailP>Total External Links</GDetailP>
            </GDetailHeading>
            <GTitleContainer>
              <GDetailTitle textColor={link.score === 1 ? '#4caf50' : '#f44336'}>
                {link.totalExternalLink}
              </GDetailTitle>
            </GTitleContainer>
          </GDetailContainer>
          <hr />
          <ContainerHeading>
            <HeadingH2>Images</HeadingH2>
          </ContainerHeading>
          <GDetailContainer>
            <GDetailHeading>
              {image.score === 1 ? <CheckCircleOutlineIcon sx={{ color: '#4caf50' }} /> : <CancelIcon sx={{ color: '#f44336' }} />}
              <GDetailP>Image Title</GDetailP>
            </GDetailHeading>
            <GTitleContainer>
              <GDetailTitle textColor={image.score === 1 ? '#4caf50' : '#f44336'}>
                {image.title}
                {image.score === 0 ?
                  <Tooltip title="Informative Images should have [alt] attribute" placement='right-start' >
                    <InfoIcon fontSize='10px' sx={{ marginLeft: '5px', marginBottom: '2px' }} />
                  </Tooltip>
                  : null}
              </GDetailTitle>
            </GTitleContainer>
          </GDetailContainer>
          <hr />
          <GDetailContainer>
            <GDetailHeading>
              {image.score === 1 ? <CheckCircleOutlineIcon sx={{ color: '#4caf50' }} /> : <CancelIcon sx={{ color: '#f44336' }} />}
              <GDetailP>Total Image</GDetailP>
            </GDetailHeading>
            <GTitleContainer>
              <GDetailTitle textColor={image.score === 1 ? '#4caf50' : '#f44336'}>
                {image.totalImage}
              </GDetailTitle>
            </GTitleContainer>
          </GDetailContainer>
        </GDetailsContainer>
      </GContainer>

    </>
  )
}

export default StructureInfo
