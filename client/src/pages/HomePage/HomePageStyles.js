import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const HomePageContainer = styled.div`
  width: 100vw;
  height: 100vh;
`

export const HomePageElement = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const HomePageText = styled.div`
  width: 100%;
  margin: 0 auto;
`
export const HomePageHeading = styled.h1`
  text-align: center;
  font-size: 3rem;
`
export const HomePageP = styled.p`
  text-align: center;
`
export const HomePageForm = styled.form`
  max-width: 40rem;
  padding: 1rem;
`
export const HomePageCard = styled.div`
  background: white;
  padding: 2rem;
  margin-top: 2rem;
  border-radius: 4px;
  border: 3px solid #fab700;
  box-shadow: .5rem .5rem 0 #fab700;
  
`

export const HomePageUserInfo = styled.div`
 display: flex;
 margin-bottom: 20px;
 justify-content: space-between;
`

export const HomePageField = styled.div`
  margin-bottom: 20px;
`

export const HomePageLabel = styled.label`
  position: relative;
  
`

export const HomePageInputSpan = styled.span`
  position: absolute;
  left: 0;
  top: 0;
  padding: 0.375rem 0.25rem;
  margin: 8px 0.25rem;
  white-space: nowrap;
  transform: translate(0, 0);
  transform-origin: 0 0;
  background: white;
  transition: transform 120ms ease-in;
  font-weight: bold;
  line-height: 1.2;

  
`

export const HomePageInput = styled.input`
  	box-sizing: border-box;
	 display: block;
	 width: 100%;
	 border: 3px solid #fab700;
	 padding: 0.75rem 0.5rem;
	 color: black;
	 background: transparent;
	 border-radius: 4px;

   :focus ~ ${HomePageInputSpan} {
    transform: translate(0.25rem, -65%) scale(0.8);
	 color: #fab700;
  }
  :not(:placeholder-shown) ~${HomePageInputSpan}{
    transform: translate(0.25rem, -65%) scale(0.8);
	 color: #fab700;
  }
`

export const SearchButtonContainer = styled.div`
  margin-top: 25px;
`

export const SearchButton = styled(Link)`
  color: black;
	padding: 0.75rem 1.5rem;
	background: #fab700;
	border: none;
	border-radius: 4px;
	font-weight: 900;
  text-decoration: none;
`

