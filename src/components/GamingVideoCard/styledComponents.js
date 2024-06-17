import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const VideoLink = styled(Link)`
  text-decoration: none;
`

export const VideoItem = styled.li`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 48px;
  margin-right: 16px;
  @media screen and (min-width: 768px) {
    width: 300px;
    margin-right: 20px;
  }
`

export const ThumnailImage = styled.img`
  width: 200px;
  height: 300px;
  @media screen and (min-width: 768px) {
    width: 300px;
    height: 350px;
  }
`

export const GamingContentSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 10px;
`

export const GamingTitle = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 500;
  color: ${props => props.titleColor};
  margin: 0px;
`

export const GamingViewCount = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  margin-top: 6px;
  color: #475569;
`
