import styled from 'styled-components'

export const NotFoundContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.bgColor};
  overflow-y: auto;
  min-height: 92vh;
`

export const NotFoundViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
  margin-bottom: 80px;
  @media screen and (min-width: 768px) {
    margin-left: 160px;
  }
`
export const NotFoundImage = styled.img`
  width: 250px;
  @media screen and (min-width: 768px) {
    width: 400px;
  }
`

export const NotFoundHeading = styled.h1`
  color: ${props => props.headingColor};
  font-family: 'Roboto';
  font-size: 36px;
  font-weight: 500;
  text-align: center;
  margin-bottom: 10px;
`

export const NotFoundDescription = styled.p`
  color: ${props => props.noteColor};
  font-family: 'Roboto';
  text-align: center;
  font-size: 18px;
  width: 320px;
  margin-top: 0;
`
