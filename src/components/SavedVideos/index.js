import {RiMenuAddFill} from 'react-icons/ri'

import Header from '../Header'
import NavigationBar from '../NavigationBar'
import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'
import VideoCard from '../VideoCard'

import {
  SavedVideosContainer,
  SavedTitleContainer,
  SavedTitleIconContainer,
  SavedVideosText,
  SavedVideoList,
  NoSavedVideosViewContainer,
  NoSavedVideosImage,
  NoSavedVideosHeading,
  NoSavedVideosDescription,
} from './styledComponents'

const SavedVideos = () => (
  <ThemeAndVideoContext.Consumer>
    {value => {
      const {isDarkTheme, savedVideos} = value
      const bgColor = isDarkTheme ? '#0f0f0f' : '#f9f9f9'
      const textColor = isDarkTheme ? '#f9f9f9' : '#231f20'
      const headingColor = isDarkTheme ? '#f1f5f9' : '#1e293b'
      const descriptionColor = isDarkTheme ? '#e2e8f0' : '#475569'
      const titleBgColor = isDarkTheme ? '#212121' : '#f4f4f4'

      return (
        <>
          <Header />
          <NavigationBar />
          <SavedVideosContainer data-testid="savedVideos" bgColor={bgColor}>
            {savedVideos.length > 0 ? (
              <>
                <SavedTitleContainer titleBgColor={titleBgColor}>
                  <SavedTitleIconContainer>
                    <RiMenuAddFill size={35} color="#ff0000" />
                    <SavedVideosText color={textColor}>
                      Saved Videos
                    </SavedVideosText>
                  </SavedTitleIconContainer>
                </SavedTitleContainer>
                <SavedVideoList>
                  {savedVideos.map(eachVideo => (
                    <VideoCard videoDetails={eachVideo} key={eachVideo.id} />
                  ))}
                </SavedVideoList>
              </>
            ) : (
              <NoSavedVideosViewContainer>
                <NoSavedVideosImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                  alt="no saved videos"
                />
                <NoSavedVideosHeading color={headingColor}>
                  No saved videos found
                </NoSavedVideosHeading>
                <NoSavedVideosDescription color={descriptionColor}>
                  You can save your videos while watching them
                </NoSavedVideosDescription>
              </NoSavedVideosViewContainer>
            )}
          </SavedVideosContainer>
        </>
      )
    }}
  </ThemeAndVideoContext.Consumer>
)

export default SavedVideos
