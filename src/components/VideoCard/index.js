import {BsDot} from 'react-icons/bs'
import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'

import {
  VideoLink,
  VideoItem,
  ThumbnailImage,
  MobileVideoDetailsContainer,
  ProfileImgage,
  ContentSection,
  VideoTitle,
  DateAndViewsCountContainer,
  ChannelName,
  ViewsText,
  DateText,
  DesktopVideoDetailsContainer,
} from './styledComponents'

const VideoCard = props => (
  <ThemeAndVideoContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const titleColor = isDarkTheme ? '#f9f9f9' : '#231f20'

      const {videoDetails} = props
      const {
        id,
        title,
        publishedAt,
        thumbnailUrl,
        name,
        profileImageUrl,
        viewCount,
      } = videoDetails

      return (
        <VideoLink to={`/videos/${id}`}>
          <VideoItem>
            <ThumbnailImage src={thumbnailUrl} alt="video thumbnail" />
            <MobileVideoDetailsContainer>
              <ProfileImgage src={profileImageUrl} alt="channel logo" />
              <ContentSection>
                <VideoTitle color={titleColor}>{title}</VideoTitle>
                <DateAndViewsCountContainer>
                  <ChannelName>{name}</ChannelName>
                  <BsDot color="#475569" size={25} />
                  <ViewsText>{viewCount} views</ViewsText>
                  <BsDot color="#475569" size={25} />
                  <DateText>{publishedAt}</DateText>
                </DateAndViewsCountContainer>
              </ContentSection>
            </MobileVideoDetailsContainer>
            <DesktopVideoDetailsContainer>
              <VideoTitle color={titleColor}>{title}</VideoTitle>
              <ChannelName>{name}</ChannelName>
              <DateAndViewsCountContainer>
                <ViewsText>{viewCount} views</ViewsText>
                <BsDot color="#475569" size={25} />
                <DateText>{publishedAt}</DateText>
              </DateAndViewsCountContainer>
            </DesktopVideoDetailsContainer>
          </VideoItem>
        </VideoLink>
      )
    }}
  </ThemeAndVideoContext.Consumer>
)

export default VideoCard
