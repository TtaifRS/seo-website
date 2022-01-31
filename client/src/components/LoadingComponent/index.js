import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';

import { LoadingContainer, LottieContainer, Container, LottieTextContainer, Loading, Span } from './LoadingStyle';


const LoadingComponent = () => {
  const lottieContainer = useRef(null)

  useEffect(() => {
    lottie.loadAnimation({
      container: lottieContainer.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('./loading-lottie.json')
    })
  })


  return (
    <>
      <Container>
        <LoadingContainer>
          <LottieContainer>
            <div className="lottieContainer" ref={lottieContainer}></div>
          </LottieContainer>

        </LoadingContainer>
        <LottieTextContainer>
          <section>
            <Loading>
              <Span>L</Span>
              <Span>O</Span>
              <Span>A</Span>
              <Span>D</Span>
              <Span>I</Span>
              <Span>N</Span>
              <Span>G</Span>
            </Loading>
          </section>
        </LottieTextContainer>

      </Container>

    </>
  );
};

export default LoadingComponent;
