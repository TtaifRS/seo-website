import styled from 'styled-components';

export const ScoreContainer = styled.div`
  width: 100%;
  height: 100%;

  @media screen and (max-width: 768px) {
    display: none;
  }
 
`

export const ScoreContainerFirstRow = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px auto;
`

export const ScoreContainerSecondRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;
`

export const CardContainer = styled.div`
  
  
`

export const CardScore = styled.div`
  width: 80px;
  margin: 20px auto;
  line-height: 80px;
  border-radius: 50%;
  text-align: center;
  font-size: 32px;
  font-weight: bold;
  border: 8px solid white;
  color: white;
`

export const CardTitle = styled.p`
  font-size: 32px;
  font-weight: bold;
  text-align: center;
  margin-top: 0;
  color: white
`