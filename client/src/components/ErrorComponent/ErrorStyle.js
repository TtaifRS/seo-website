import styled from 'styled-components';
import { Link } from 'react-router-dom'

export const ErrorPageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  
  justify-content: center;
  align-items: center;
  background-color: blanchedalmond;
  display: flex;

  @media screen and (max-width: 768px){
    display: none;
  }

`

export const ErrorPageText = styled.div`
  text-align: center;
  line-height: 4rem;
  color: black
`

export const ErrorPageH1 = styled.h1`
 font-size: 44px;
 
`

export const ButtonContainer = styled.div`
  position: absolute;
  bottom: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

`

export const BackButton = styled(Link)`
  border: none;
  background-color: #fab700;
  padding: 10px 15px;
  font-weight: bold;
  font-size: 16px;
  text-decoration: none;
  color: black
`