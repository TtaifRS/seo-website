import styled from 'styled-components'

export const AnalyzContainer = styled.div`
margin-top: 60px;
  width: 100vw;
  height: 100%;

  @media screen and (max-width: 768px){
    display: none;
  }
`

export const AnalyzHeaderContainer = styled.div`
box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
transition: 0.3s;
width: 80%;
border-radius: 5px;
margin: 10px auto;
background-color: white;

`



export const AnalyzHeader = styled.div`
  width: 80%;
  height: 100%;
  padding: 10px 0;
  margin: 0 auto;
  display: flex;
  justify-content: space-evenly;

`

export const AnalyzScoreContainer = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  width: 80%;
  border-radius: 5px;
  margin: 10px auto;
  background-color: white;
  height: 100%;
`

export const ScoreHeadlineDiv = styled.div`
  margin-top: 20px 0;
`
export const ScoreHeadline = styled.h2`
  text-align: center;
  position: relative;
  top: 20px;
  margin-bottom: 20px;
`

export const AnalyzScoreHeader = styled.div`
  display: flex;
  margin: 30px auto;
`

export const AnalyzHeaderLeft = styled.div`
  width: 60%;
`
export const AnalyzHeaderScoreLeft = styled.div`
 
`
export const AnalyzTitle = styled.div``

export const AnalyzMetaTitle = styled.div`
  display: flex;
  width: 80%;

  &:last-child{
    margin-bottom: 30px;
  }
`
export const AnalyzTitleDiv = styled.div`
width: 100px;
`
export const AnalyzTitleHeading = styled.p`
  font-weight: bold;
`

export const AnalyzTitleTextDiv = styled.div`
  margin-left: 30px;


`


export const AnalyzTitleText = styled.p`
text-align: left;
`



export const AnalyzHederRight = styled.div`display:flex`
export const AnalyzScoreHederRight = styled.div`

margin-left: 80px;
  h2{
    text-align: center;
  }
`

export const AnalyzeScore = styled.div`
  margin: 30px 0;
`

export const AnalyzH1 = styled.h1`

`

export const AnalyzImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
`

export const ScreenShot = styled.img`
  width: 400px;
  height: 225px;
  padding: 10px;
  margin: 0 40px;


`

export const AnalyzInfo = styled.div`

display: flex;
justify-content: center;
margin-top: 20px;
`


export const AnalyzTable = styled.table`
border: 1px solid #ccc;
border-collapse: collapse;
margin: 0;
padding: 0;
width: 100%;
table-layout: fixed;
margin-left: 30px;



`
export const Thead = styled.thead`



`
export const TR = styled.tr`
background-color: #f8f8f8;
border: 1px solid #ddd;
padding: .35em;

`
export const TH = styled.th`
padding: .625em;
text-align: center;
font-size: .85em;
letter-spacing: .1em;
text-transform: uppercase;
`
export const Tbody = styled.tbody``
export const TD = styled.td`
padding: .625em;
text-align: center;

@media screen and(max-width: 768px){
  border-bottom: 1px solid #ddd;
  display: block;
  font-size: .8em;
  text-align: right;

    &:before{
    content: attr(data-label);
    float: left;
    font-weight: bold;
    text-transform: uppercase;
  }

    &:last-child{
    border-bottom: 0;
  }
}

`
export const ButtonContainer = styled.div`
display: flex;
justify-content: center;
margin-top: -10px;
margin-bottom: 30px;
@media screen and (max-width: 768px){
    display: none;
  }
`

export const PrintButton = styled.button`
border: none;
padding: 10px 15px;
background-color: #fab700;
font-weight: bold;
cursor: pointer;
color: white;

  :hover{
  border: 2px solid #fab700;
  background-color: white;
  color: black;
}
`