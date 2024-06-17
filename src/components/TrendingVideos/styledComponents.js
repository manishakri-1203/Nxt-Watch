import styled from 'styled-components'

export const TrendingVideosContainer = styled.div`
  background-color: ${props => props.bgColor};
  min-height: 100vh;
  margin-top: 80px;
  margin-bottom: 60px;
  overflow-y: auto;
  @media screen and (min-width: 768px) {
    margin-left: 250px;
    margin-bottom: 0px;
  }
`
export const TrendingTitleContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  background-color: ${props => props.titleBgColor};
  height: 120px;
  margin-bottom: 20px;
`

export const TitleIconContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;
`

export const TrendingText = styled.h1`
  color: ${props => props.textColor};
  font-family: 'Roboto';
  font-size: 28px;
  font-weight: 700;
  margin-left: 10px;
  @media screen and (min-width: 768px) {
    font-size: 36px;
  }
`

export const LoaderViewContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
`

export const TrendingVideoList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  margin: 0px;
  padding: 0px;
`
