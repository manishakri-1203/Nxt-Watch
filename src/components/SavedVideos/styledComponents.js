import styled from 'styled-components'

export const SavedVideosContainer = styled.div`
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

export const SavedTitleContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  background-color: ${props => props.titleBgColor};
  height: 120px;
  margin-bottom: 20px;
`

export const SavedTitleIconContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;
`

export const SavedVideosText = styled.h1`
  color: ${props => props.color};
  font-family: 'Roboto';
  font-size: 28px;
  font-weight: 700;
  margin-left: 10px;
  @media screen and (min-width: 768px) {
    font-size: 36px;
  }
`

export const SavedVideoList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  margin: 0px;
  padding: 0px;
`

export const NoSavedVideosViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
`

export const NoSavedVideosImage = styled.img`
  width: 200px;
  @media screen and (min-width: 768px) {
    width: 450px;
  }
`

export const NoSavedVideosHeading = styled.h1`
  ont-family: 'Roboto';
  font-size: 24px;
  color: ${props => props.color};
  text-align: center;
`

export const NoSavedVideosDescription = styled.p`
  font-family: 'Roboto';
  color: ${props => props.color};
  font-size: 18px;
  text-align: center;
  width: 420px;
`
