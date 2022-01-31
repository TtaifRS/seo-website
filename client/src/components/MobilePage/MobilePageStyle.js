import styled from 'styled-components';

export const MobilePageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  
  justify-content: center;
  align-items: center;
  background-color: blanchedalmond;
  display: none;

  @media screen and (max-width: 768px){
    display: flex;
  }

`

export const MobilePageText = styled.div`
  text-align: center;
  line-height: 4rem;
  color: black
`

export const MobilePageH1 = styled.h1`
 font-size: 44px;
 
`