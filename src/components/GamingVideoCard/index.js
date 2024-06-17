import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'
import {
  VideoLink,
  VideoItem,
  ThumnailImage,
  GamingContentSection,
  GamingTitle,
  GamingViewCount,
} from './styledComponents'

const GamingVideoCard = props => (
  <ThemeAndVideoContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const titleColor = isDarkTheme ? '#f9f9f9' : '#231f20'

      const {videoDetails} = props
      const {id, title, thumbnailUrl, viewCount} = videoDetails

      return (
        <VideoLink to={`/videos/${id}`}>
          <VideoItem>
            <ThumnailImage src={thumbnailUrl} alt="video thumbnail" />
            <GamingContentSection>
              <GamingTitle titleColor={titleColor}>{title}</GamingTitle>
              <GamingViewCount>{viewCount} Watching Worldwide</GamingViewCount>
            </GamingContentSection>
          </VideoItem>
        </VideoLink>
      )
    }}
  </ThemeAndVideoContext.Consumer>
)

export default GamingVideoCard
