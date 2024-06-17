import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const VideoLink = styled(Link)`
  text-decoration: none;
`

export const VideoItem = styled.li`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 20px;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    padding-left: 40px;
  }
`

export const ThumbnailImage = styled.img`
  width: 100%;
  @media screen and (min-width: 768px) {
    width: 320px;
  }
`

export const MobileVideoDetailsContainer = styled.div`
  display: flex;
  align-items: center;
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const ProfileImgage = styled.img`
  width: 40px;
  height: 40px;
  margin-left: 10px;
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const ContentSection = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`

export const VideoTitle = styled.p`
  margin: 0;
  margin-top: 16px;
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 500;
  color: ${props => props.color};
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`

export const DateAndViewsCountContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 0;
`

export const ChannelName = styled.p`
  color: #475569;
  font-family: 'Roboto';
  font-size: 14px;
`

export const ViewsText = styled.p`
  color: #475569;
  font-family: 'Roboto';
  font-size: 14px;
`

export const DateText = styled.p`
  color: #475569;
  font-family: 'Roboto';
  font-size: 14px;
`
export const DesktopVideoDetailsContainer = styled.div`
  margin-left: 16px;
  @media screen and (max-width: 767px) {
    display: none;
  }
`
