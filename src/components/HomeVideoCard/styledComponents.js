import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const VideoLink = styled(Link)`
  text-decoration: none;
`
export const VideoItem = styled.li`
  display: flex;
  flex-direction: column;
  align-self: center;
  width: 100%;
  margin-bottom: 24px;
  @media screen and (min-width: 768px) {
    width: 300px;
    margin-right: 20px;
    margin-bottom: 48px;
  }
`

export const ThumbnailImage = styled.img`
  width: 100%;
`

export const VideoDetailsConatiner = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
`

export const ProfileImage = styled.img`
  width: 30px;
  height: 30px;
  margin: 12px;
`

export const ContentSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 2px;
`

export const VideoTitle = styled.p`
  font-size: 16px;
  font-family: 'Roboto';
  color: ${props => props.color};
`

export const ChannelName = styled.p`
  font-family: 'Roboto';
  font-size: 13px;
  color: ${props => props.color};
  margin: 0;
`

export const ViewsAndDateContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 0;
`

export const ViewsText = styled.p`
  font-family: 'Roboto';
  font-size: 12px;
  color: ${props => props.color};
`

export const DateText = styled.p`
  font-family: 'Roboto';
  font-size: 12px;
  color: ${props => props.color};
`
