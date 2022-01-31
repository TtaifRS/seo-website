import styled from 'styled-components'

export const GContainer = styled.div`
  width: 100%;
  margin-top: 80px;
  margin-bottom: 80px;
`
export const GHeadingContainer = styled.div`
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
export const GHeadingTitle = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1;
`

export const GHeadingButton = styled.div`
  margin-right: 30px;
`

export const Button = styled.button`
  border: 1px solid transparent;
  border-radius: 20px;
  background: blanchedalmond;
  padding: 10px 15px;
  color: black;
  font-weight: bold;
  
  :hover{
    border: 2px solid blanchedalmond;
    background: white;
  }
`

export const GHeadingH2 = styled.h2`
  margin-left: 20px;
  width: 80%;
  
`

export const GHeadingP = styled.p`
  margin-left: 20px;
  padding: 5px 20px;
  border: 3px solid ${props => props.borderColor};
  border-radius: 20px;
  font-weight: bold;
`

export const GDetailsContainer = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  width: 70%;
  border-radius: 15px;
  margin: 10px auto;
  background-color: white;
  height: 100%;
`
export const GDetailContainer = styled.div`
  display: flex;
  margin: 0px auto;
`
export const GDetailHeading = styled.div`
  display: flex;
  align-items: center;
  margin-left: 30px;
  width: 30%;
`
export const GDetailP = styled.p`
  margin-left: 20px;
  font-size: 18px;
  
`
export const GTitleContainer = styled.div`
width: 70%;
`
export const GDetailTitle = styled.p`
  margin-left: 80px;
  color: ${props => props.textColor}
`

export const ContainerHeading = styled.div`
 position: relative;
 top: 15px;
 margin-left: 30px;
 margin-bottom: 30px;
`

export const HeadingH2 = styled.h2`


`