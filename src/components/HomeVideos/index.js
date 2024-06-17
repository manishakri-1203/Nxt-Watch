import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'
import HomeVideoCard from '../HomeVideoCard'

import {
  HomeVideoList,
  NoVideosViewContainer,
  NoVideosViewImage,
  NoVideosViewHeading,
  NoVideosViewDescription,
  NoVideosViewButton,
} from './styledComponents'

const HomeVideos = props => (
  <ThemeAndVideoContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const headingColor = isDarkTheme ? '#f1f5f9' : '#1e293b'
      const descriptionColor = isDarkTheme ? '#e2e8f0' : '#475569'

      const {homeVideos, onRetry} = props
      const videosCount = homeVideos.length

      const onClickRetry = () => {
        onRetry()
      }

      return videosCount > 0 ? (
        <HomeVideoList>
          {homeVideos.map(eachVideo => (
            <HomeVideoCard key={eachVideo.id} videoDetails={eachVideo} />
          ))}
        </HomeVideoList>
      ) : (
        <NoVideosViewContainer>
          <NoVideosViewImage
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
            alt="no videos"
          />
          <NoVideosViewHeading headingColor={headingColor}>
            No Search results found
          </NoVideosViewHeading>
          <NoVideosViewDescription descriptionColor={descriptionColor}>
            Try different key words or remove search filter
          </NoVideosViewDescription>
          <NoVideosViewButton type="button" onClick={onClickRetry}>
            Retry
          </NoVideosViewButton>
        </NoVideosViewContainer>
      )
    }}
  </ThemeAndVideoContext.Consumer>
)

export default HomeVideos
