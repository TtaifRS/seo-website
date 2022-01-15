import styled from 'styled-components'



export const SearchBarContainer = styled.div`
  width: 100vw;
  height: 100vh;
`

export const SearchBarElement = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const SearchBarText = styled.div`
  width: 100%;
  margin: 0 auto;
`
export const SearchBarHeading = styled.h1`
  text-align: center;
  font-size: 3rem;
`
export const SearchBarP = styled.p``
export const SearchBarForm = styled.form`
  max-width: 40rem;
  padding: 1rem;
`
export const SearchBarCard = styled.div`
  background: white;
  padding: 2rem;
  margin-top: 2rem;
  border-radius: 4px;
  border: 3px solid #fab700;
  box-shadow: .5rem .5rem 0 #fab700;
  
`

export const SearchBarUserInfo = styled.div`
 display: flex;
 margin-bottom: 20px;
 justify-content: space-between;
`

export const SearchBarField = styled.div`
  /* width: 50%;
   */
`

export const SearchBarLabel = styled.label`
  position: relative;
`

export const SearchBarInputSpan = styled.span`
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

export const SearchBarInput = styled.input`
  	box-sizing: border-box;
	 display: block;
	 width: 100%;
	 border: 3px solid #fab700;
	 padding: 0.75rem 0.5rem;
	 color: black;
	 background: transparent;
	 border-radius: 4px;

   :focus ~ ${SearchBarInputSpan} {
    transform: translate(0.25rem, -65%) scale(0.8);
	 color: #fab700;
  }
  :not(:placeholder-shown) ~${SearchBarInputSpan}{
    transform: translate(0.25rem, -65%) scale(0.8);
	 color: #fab700;
  }
`

export const SearchButtonContainer = styled.div`
  margin-top: 15px;
`

export const SearchButton = styled.button`
  color: blcak;
	padding: 0.75rem 1.5rem;
	 background: #fab700;
	 border: none;
	 border-radius: 4px;
	 font-weight: 900;
`

