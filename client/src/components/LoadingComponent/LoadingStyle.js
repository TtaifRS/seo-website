import styled, { keyframes } from 'styled-components';


export const Container = styled.div`
 width: 100%;
 height: 100vh;

`

export const LoadingContainer = styled.div`

width: 50%;
height: 50%;
display: flex;
justify-content: center;
align-items: center;
margin: 0px auto;
`
export const LottieContainer = styled.div`
 
 
 margin-top: 200px;
`

export const LottieTextContainer = styled.div`

  width: 100%;
  position: absolute;
  bottom: 50px;
  display: flex;
  justify-content: center;
  align-items: center;

`

export const Loading = styled.div`

  font-size: 84px;
  font-weight: 800;
  text-align: center;

`

const loading = keyframes`
 0% {
    filter: blur(0);
    opacity: 1;
  }
  100% {
    filter: blur(5px);
    opacity: .2;
  }
`

export const Span = styled.span`
  display: inline-block;
  margin: 0 -.01em;
  animation: ${loading} 3.2s infinite alternate;
    @for $i from 1 through 6 {
      &:nth-child(#{$i+1}) {
        animation-delay: #{$i*.2}s;
      }
    }

`

