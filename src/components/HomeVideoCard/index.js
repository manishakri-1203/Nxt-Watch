import {BsDot} from 'react-icons/bs'
import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'

import {
  VideoLink,
  VideoItem,
  ThumbnailImage,
  VideoDetailsConatiner,
  ProfileImage,
  ContentSection,
  VideoTitle,
  ChannelName,
  ViewsAndDateContainer,
  ViewsText,
  DateText,
} from './styledComponents'

const HomeVideoCard = props => (
  <ThemeAndVideoContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const titleColor = isDarkTheme ? '#f9f9f9' : '#181818'
      const textColor = isDarkTheme ? '#475569' : '#424242'

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
            <VideoDetailsConatiner>
              <ProfileImage src={profileImageUrl} alt="channel logo" />
              <ContentSection>
                <VideoTitle color={titleColor}>{title}</VideoTitle>
                <ChannelName color={textColor}>{name}</ChannelName>
                <ViewsAndDateContainer>
                  <ViewsText color={textColor}>{viewCount} views</ViewsText>
                  <BsDot size={25} color={textColor} />
                  <DateText color={textColor}>{publishedAt} ago</DateText>
                </ViewsAndDateContainer>
              </ContentSection>
            </VideoDetailsConatiner>
          </VideoItem>
        </VideoLink>
      )
    }}
  </ThemeAndVideoContext.Consumer>
)

export default HomeVideoCard
