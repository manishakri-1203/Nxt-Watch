import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'

import {HiFire} from 'react-icons/hi'

import Header from '../Header'
import NavigationBar from '../NavigationBar'
import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'
import FailureView from '../FailureView'
import VideoCard from '../VideoCard'

import {
  TrendingVideosContainer,
  TrendingTitleContainer,
  TitleIconContainer,
  TrendingText,
  LoaderViewContainer,
  TrendingVideoList,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class TrendingVideos extends Component {
  state = {
    trendingVideos: [],
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getVideos()
  }

  getVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const url = 'https://apis.ccbp.in/videos/trending'
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(url, options)
    console.log(response)
    if (response.ok) {
      const fetchedData = await response.json()
      console.log(fetchedData)
      const updatedData = fetchedData.videos.map(video => ({
        id: video.id,
        title: video.title,
        publishedAt: video.published_at,
        thumbnailUrl: video.thumbnail_url,
        viewCount: video.view_count,
        name: video.channel.name,
        profileImageUrl: video.channel.profile_image_url,
      }))
      this.setState({
        trendingVideos: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderVideosView = () => {
    const {trendingVideos} = this.state
    return (
      <TrendingVideoList>
        {trendingVideos.map(eachVideo => (
          <VideoCard videoDetails={eachVideo} key={eachVideo.id} />
        ))}
      </TrendingVideoList>
    )
  }

  renderLoaderView = () => (
    <LoaderViewContainer data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </LoaderViewContainer>
  )

  renderFailureView = () => <FailureView onRetry={this.onRetry} />

  onRetry = () => {
    this.getVideos()
  }

  renderTrendingVideosView = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderVideosView()
      case apiStatusConstants.inProgress:
        return this.renderLoaderView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      default:
        return null
    }
  }

  render() {
    return (
      <ThemeAndVideoContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const bgColor = isDarkTheme ? '#0f0f0f' : '#f9f9f9'
          const textColor = isDarkTheme ? '#f9f9f9' : '#231f20'
          const titleBgColor = isDarkTheme ? '#212121' : '#f4f4f4'

          return (
            <>
              <Header />
              <NavigationBar />
              <TrendingVideosContainer data-testid="trending" bgColor={bgColor}>
                <TrendingTitleContainer titleBgColor={titleBgColor}>
                  <TitleIconContainer>
                    <HiFire color="#ff0000" size={35} />
                    <TrendingText textColor={textColor}>Trending</TrendingText>
                  </TitleIconContainer>
                </TrendingTitleContainer>
                {this.renderTrendingVideosView()}
              </TrendingVideosContainer>
            </>
          )
        }}
      </ThemeAndVideoContext.Consumer>
    )
  }
}

export default TrendingVideos
