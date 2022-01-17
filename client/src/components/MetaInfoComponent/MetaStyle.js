import styled from 'styled-components'

export const MContainer = styled.div`
  width: 100%;
  margin-top: 80px;
  margin-bottom: 80px;
`
export const MHeadingContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  border: 1px solid ${props => props.borderColor};
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  height: 60px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  padding: 10px;
  
`
export const MHeadingTitle = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1;
`

export const MHeadingButton = styled.div`
  margin-right: 30px;
`

export const Button = styled.button`
  border: 1px solid transparent;
  border-radius: 20px;
  background: blueviolet;
  padding: 10px 15px;
  color: white
`

export const MHeadingH2 = styled.h2`
  margin-left: 20px;
  
`

export const MHeadingP = styled.p`
  margin-left: 20px;
  padding: 5px 20px;
  border: 3px solid ${props => props.borderColor};
  border-radius: 20px;
  font-weight: bold;
`

export const MDetailsContainer = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  width: 70%;
  border-radius: 15px;
  margin: 10px auto;
  background-color: white
`
export const MDetailContainer = styled.div`
  display: flex;
  margin: 0px auto;
`
export const MDetailHeading = styled.div`
  display: flex;
  align-items: center;
  margin-left: 30px;
  width: 30%;
`
export const MDetailP = styled.p`
  margin-left: 20px;
  font-size: 18px;
  
`
export const MTitleContainer = styled.div`
width: 70%;
`
export const MDetailTitle = styled.p`
  margin-left: 80px;
  color: ${props => props.textColor}
`
