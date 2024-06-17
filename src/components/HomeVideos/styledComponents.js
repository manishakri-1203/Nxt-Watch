import styled from 'styled-components'

export const HomeVideoList = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  padding: 0;
  @media screen and (min-width: 768px) {
    margin-left: 16px;
  }
`

export const NoVideosViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: none;
  margin-top: 48px;
  margin-bottom: 48px;
`

export const NoVideosViewImage = styled.img`
  width: 200px;
  @media screen and (min-width: 768px) {
    width: 450px;
  }
`

export const NoVideosViewHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 25px;
  color: ${props => props.headingColor};
  text-align: center;
`

export const NoVideosViewDescription = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  color: ${props => props.descriptionColor};
  text-align: center;
`

export const NoVideosViewButton = styled.button`
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 500;
  color: #f9f9f9;
  background-color: #4f46e5;
  border: none;
  padding: 10px 28px;
  border-radius: 4px;
  outline: none;
  cursor: pointer;
`
