import styled from 'styled-components'

export const FailureViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
`

export const FailureImage = styled.img`
  width: 200px;
  @media screen and (min-width: 768px) {
    width: 450px;
  }
`

export const FailureHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 24px;
  color: ${props => props.headingColor};
  text-align: center;
`

export const FailureDescription = styled.p`
  font-family: 'Roboto';
  color: ${props => props.descriptionColor};
  font-size: 18px;
  text-align: center;
  width: 420px;
`

export const FailureButton = styled.button`
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
