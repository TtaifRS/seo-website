// import { useState } from 'react';
import useCollapse from 'react-collapsed'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CancelIcon from '@mui/icons-material/Cancel';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
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



const PageSpeedInfo = ({ pageSpeedInfo, score }) => {

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
    fcp,
    spi,
    lcp,
    tti,
    tbt,
    cls
  } = pageSpeedInfo

  return (
    <>
      <GContainer>
        <GHeadingContainer borderColor={color(score)}>
          <GHeadingTitle>
            <GHeadingH2>Page Speed Information</GHeadingH2>
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
            <HeadingH2>{fcp.title}</HeadingH2>
          </ContainerHeading>
          <GDetailContainer>
            <GDetailHeading>
              {parseFloat(fcp.value) >= 0 && parseFloat(fcp.value) < 1.8
                ? <CheckCircleOutlineIcon sx={{ color: '#4caf50' }} />
                : parseFloat(fcp.value) >= 1.8 && parseFloat(fcp.value) < 3.0
                  ? <WarningAmberIcon sx={{ color: '#ff9800' }} />
                  : <CancelIcon sx={{ color: '#f44336' }} />}
              <GDetailP>Description</GDetailP>
            </GDetailHeading>
            <GTitleContainer>
              <GDetailTitle textColor={parseFloat(fcp.value) >= 0 && parseFloat(fcp.value) < 1.8 ? '#4caf50' : parseFloat(fcp.value) >= 1.8 && parseFloat(fcp.value) < 3.0 ? '#ff9800' : '#f44336'}>
                First Contentful Paint marks the time at which the first text or image is painted.
              </GDetailTitle>
            </GTitleContainer>
          </GDetailContainer>
          <GDetailContainer>
            <GDetailHeading>
              {parseFloat(fcp.value) >= 0 && parseFloat(fcp.value) < 1.8
                ? <CheckCircleOutlineIcon sx={{ color: '#4caf50' }} />
                : parseFloat(fcp.value) >= 1.8 && parseFloat(fcp.value) < 3.0
                  ? <WarningAmberIcon sx={{ color: '#ff9800' }} />
                  : <CancelIcon sx={{ color: '#f44336' }} />}
              <GDetailP>Time to Load</GDetailP>
            </GDetailHeading>
            <GTitleContainer>
              <GDetailTitle textColor={parseFloat(fcp.value) >= 0 && parseFloat(fcp.value) < 1.8 ? '#4caf50' : parseFloat(fcp.value) >= 1.8 && parseFloat(fcp.value) < 3.0 ? '#ff9800' : '#f44336'}>
                {fcp.value}
                {parseFloat(fcp.value) >= 1.8 ?
                  <Tooltip title="Range(0-1.8)" placement='right-start' >

                    <InfoIcon fontSize='10px' sx={{ marginLeft: '5px', marginBottom: '2px' }} />

                  </Tooltip>

                  : null}
              </GDetailTitle>
            </GTitleContainer>
          </GDetailContainer>
          <hr />
          <ContainerHeading>
            <HeadingH2>{spi.title}</HeadingH2>
          </ContainerHeading>
          <GDetailContainer>
            <GDetailHeading>
              {parseFloat(spi.value) >= 0 && parseFloat(spi.value) < 3.4
                ? <CheckCircleOutlineIcon sx={{ color: '#4caf50' }} />
                : parseFloat(spi.value) >= 3.4 && parseFloat(spi.value) < 5.8
                  ? <WarningAmberIcon sx={{ color: '#ff9800' }} />
                  : <CancelIcon sx={{ color: '#f44336' }} />}
              <GDetailP>Description</GDetailP>
            </GDetailHeading>
            <GTitleContainer>
              <GDetailTitle textColor={parseFloat(spi.value) >= 0 && parseFloat(spi.value) < 3.4 ? '#4caf50' : parseFloat(spi.value) >= 3.4 && parseFloat(spi.value) < 5.8 ? '#ff9800' : '#f44336'}>
                Speed Index shows how quickly the contents of a page are visibly populated.
              </GDetailTitle>
            </GTitleContainer>
          </GDetailContainer>
          <hr />
          <GDetailContainer>
            <GDetailHeading>
              {parseFloat(spi.value) >= 0 && parseFloat(spi.value) < 3.4
                ? <CheckCircleOutlineIcon sx={{ color: '#4caf50' }} />
                : parseFloat(spi.value) >= 3.4 && parseFloat(spi.value) < 5.8
                  ? <WarningAmberIcon sx={{ color: '#ff9800' }} />
                  : <CancelIcon sx={{ color: '#f44336' }} />}
              <GDetailP>Time to Load</GDetailP>
            </GDetailHeading>
            <GTitleContainer>
              <GDetailTitle textColor={parseFloat(spi.value) >= 0 && parseFloat(spi.value) < 3.4 ? '#4caf50' : parseFloat(spi.value) >= 3.4 && parseFloat(spi.value) < 5.8 ? '#ff9800' : '#f44336'}>
                {spi.value}
                {parseFloat(spi.value) >= 3.4 ?
                  <Tooltip title="Range(0-3.4)" placement='right-start' >

                    <InfoIcon fontSize='10px' sx={{ marginLeft: '5px', marginBottom: '2px' }} />

                  </Tooltip>

                  : null}
              </GDetailTitle>
            </GTitleContainer>
          </GDetailContainer>
          <hr />
          <ContainerHeading>
            <HeadingH2>{lcp.title}</HeadingH2>
          </ContainerHeading>
          <GDetailContainer>
            <GDetailHeading>
              {parseFloat(lcp.value) >= 0 && parseFloat(lcp.value) < 2.5
                ? <CheckCircleOutlineIcon sx={{ color: '#4caf50' }} />
                : parseFloat(lcp.value) >= 2.5 && parseFloat(lcp.value) < 4.0
                  ? <WarningAmberIcon sx={{ color: '#ff9800' }} />
                  : <CancelIcon sx={{ color: '#f44336' }} />}
              <GDetailP>Description</GDetailP>
            </GDetailHeading>
            <GTitleContainer>
              <GDetailTitle textColor={parseFloat(lcp.value) >= 0 && parseFloat(lcp.value) < 2.5 ? '#4caf50' : parseFloat(lcp.value) >= 2.5 && parseFloat(lcp.value) < 4.0 ? '#ff9800' : '#f44336'}>
                Largest Contentful Paint marks the time at which the largest text or image is painted.
              </GDetailTitle>
            </GTitleContainer>
          </GDetailContainer>
          <hr />
          <GDetailContainer>
            <GDetailHeading>
              {parseFloat(lcp.value) >= 0 && parseFloat(lcp.value) < 2.5
                ? <CheckCircleOutlineIcon sx={{ color: '#4caf50' }} />
                : parseFloat(lcp.value) >= 2.5 && parseFloat(lcp.value) < 4.0
                  ? <WarningAmberIcon sx={{ color: '#ff9800' }} />
                  : <CancelIcon sx={{ color: '#f44336' }} />}
              <GDetailP>Time to Load</GDetailP>
            </GDetailHeading>
            <GTitleContainer>
              <GDetailTitle textColor={parseFloat(lcp.value) >= 0 && parseFloat(lcp.value) < 2.5 ? '#4caf50' : parseFloat(lcp.value) >= 2.5 && parseFloat(lcp.value) < 4.0 ? '#ff9800' : '#f44336'}>
                {lcp.value}
                {parseFloat(lcp.value) >= 2.5 ?
                  <Tooltip title="Range(0-2.5)" placement='right-start' >

                    <InfoIcon fontSize='10px' sx={{ marginLeft: '5px', marginBottom: '2px' }} />

                  </Tooltip>

                  : null}
              </GDetailTitle>
            </GTitleContainer>
          </GDetailContainer>
          <hr />
          <ContainerHeading>
            <HeadingH2>{tti.title}</HeadingH2>
          </ContainerHeading>
          <GDetailContainer>
            <GDetailHeading>
              {parseFloat(tti.value) >= 0 && parseFloat(tti.value) < 3.8
                ? <CheckCircleOutlineIcon sx={{ color: '#4caf50' }} />
                : parseFloat(tti.value) >= 3.8 && parseFloat(tti.value) < 7.0
                  ? <WarningAmberIcon sx={{ color: '#ff9800' }} />
                  : <CancelIcon sx={{ color: '#f44336' }} />}
              <GDetailP>Description</GDetailP>
            </GDetailHeading>
            <GTitleContainer>
              <GDetailTitle textColor={parseFloat(tti.value) >= 0 && parseFloat(tti.value) < 3.8 ? '#4caf50' : parseFloat(tti.value) >= 3.8 && parseFloat(tti.value) < 7.0 ? '#ff9800' : '#f44336'}>
                Time to interactive is the amount of time it takes for the page to become fully interactive.
              </GDetailTitle>
            </GTitleContainer>
          </GDetailContainer>
          <hr />
          <GDetailContainer>
            <GDetailHeading>
              {parseFloat(tti.value) >= 0 && parseFloat(tti.value) < 3.8
                ? <CheckCircleOutlineIcon sx={{ color: '#4caf50' }} />
                : parseFloat(tti.value) >= 3.8 && parseFloat(tti.value) < 7.0
                  ? <WarningAmberIcon sx={{ color: '#ff9800' }} />
                  : <CancelIcon sx={{ color: '#f44336' }} />}
              <GDetailP>Time to Load</GDetailP>
            </GDetailHeading>
            <GTitleContainer>
              <GDetailTitle textColor={parseFloat(tti.value) >= 0 && parseFloat(tti.value) < 3.8 ? '#4caf50' : parseFloat(tti.value) >= 3.8 && parseFloat(tti.value) < 7.0 ? '#ff9800' : '#f44336'}>
                {tti.value}
                {parseFloat(tti.value) >= 3.8 ?
                  <Tooltip title="Range(0-3.8)" placement='right-start' >

                    <InfoIcon fontSize='10px' sx={{ marginLeft: '5px', marginBottom: '2px' }} />

                  </Tooltip>

                  : null}
              </GDetailTitle>
            </GTitleContainer>
          </GDetailContainer>
          <hr />
          <ContainerHeading>
            <HeadingH2>{tbt.title}</HeadingH2>
          </ContainerHeading>
          <GDetailContainer>
            <GDetailHeading>
              {parseFloat(tbt.value) >= 0 && parseFloat(tbt.value) < 200
                ? <CheckCircleOutlineIcon sx={{ color: '#4caf50' }} />
                : parseFloat(tbt.value) >= 200 && parseFloat(tbt.value) < 600
                  ? <WarningAmberIcon sx={{ color: '#ff9800' }} />
                  : <CancelIcon sx={{ color: '#f44336' }} />}
              <GDetailP>Description</GDetailP>
            </GDetailHeading>
            <GTitleContainer>
              <GDetailTitle textColor={parseFloat(tbt.value) >= 0 && parseFloat(tbt.value) < 200 ? '#4caf50' : parseFloat(tbt.value) >= 200 && parseFloat(tbt.value) < 600 ? '#ff9800' : '#f44336'}>
                Time to interactive is the amount of time it takes for the page to become fully interactive.
              </GDetailTitle>
            </GTitleContainer>
          </GDetailContainer>
          <hr />
          <GDetailContainer>
            <GDetailHeading>
              {parseFloat(tbt.value) >= 0 && parseFloat(tbt.value) < 200
                ? <CheckCircleOutlineIcon sx={{ color: '#4caf50' }} />
                : parseFloat(tbt.value) >= 200 && parseFloat(tbt.value) < 600
                  ? <WarningAmberIcon sx={{ color: '#ff9800' }} />
                  : <CancelIcon sx={{ color: '#f44336' }} />}
              <GDetailP>Time to Load</GDetailP>
            </GDetailHeading>
            <GTitleContainer>
              <GDetailTitle textColor={parseFloat(tbt.value) >= 0 && parseFloat(tbt.value) < 200 ? '#4caf50' : parseFloat(tbt.value) >= 200 && parseFloat(tbt.value) < 600 ? '#ff9800' : '#f44336'}>
                {tbt.value}
                {parseFloat(tbt.value) >= 200 ?
                  <Tooltip title="Range(0-200)" placement='right-start' >

                    <InfoIcon fontSize='10px' sx={{ marginLeft: '5px', marginBottom: '2px' }} />

                  </Tooltip>

                  : null}
              </GDetailTitle>
            </GTitleContainer>
          </GDetailContainer>
          <hr />
          <ContainerHeading>
            <HeadingH2>{cls.title}</HeadingH2>
          </ContainerHeading>
          <GDetailContainer>
            <GDetailHeading>
              {parseFloat(cls.value) >= 0 && parseFloat(cls.value) < 0.1
                ? <CheckCircleOutlineIcon sx={{ color: '#4caf50' }} />
                : parseFloat(cls.value) >= 0.1 && parseFloat(cls.value) < 0.25
                  ? <WarningAmberIcon sx={{ color: '#ff9800' }} />
                  : <CancelIcon sx={{ color: '#f44336' }} />}
              <GDetailP>Description</GDetailP>
            </GDetailHeading>
            <GTitleContainer>
              <GDetailTitle textColor={parseFloat(cls.value) >= 0 && parseFloat(cls.value) < 0.1 ? '#4caf50' : parseFloat(cls.value) >= 0.1 && parseFloat(cls.value) < 0.25 ? '#ff9800' : '#f44336'}>
                Cumulative Layout Shift measures the movement of visible elements within the viewport.
              </GDetailTitle>
            </GTitleContainer>
          </GDetailContainer>
          <hr />
          <GDetailContainer>
            <GDetailHeading>
              {parseFloat(cls.value) >= 0 && parseFloat(cls.value) < 0.1
                ? <CheckCircleOutlineIcon sx={{ color: '#4caf50' }} />
                : parseFloat(cls.value) >= 0.1 && parseFloat(cls.value) < 0.25
                  ? <WarningAmberIcon sx={{ color: '#ff9800' }} />
                  : <CancelIcon sx={{ color: '#f44336' }} />}
              <GDetailP>Time to Load</GDetailP>
            </GDetailHeading>
            <GTitleContainer>
              <GDetailTitle textColor={parseFloat(cls.value) >= 0 && parseFloat(cls.value) < 0.1 ? '#4caf50' : parseFloat(cls.value) >= 0.1 && parseFloat(cls.value) < 0.25 ? '#ff9800' : '#f44336'}>
                {cls.value}
                {parseFloat(cls.value) >= 0.1 ?
                  <Tooltip title="Range(0-0.1)" placement='right-start' >

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

export default PageSpeedInfo
