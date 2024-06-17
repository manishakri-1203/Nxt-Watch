import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {MdClose} from 'react-icons/md'
import {BsSearch} from 'react-icons/bs'

import Header from '../Header'
import NavigationBar from '../NavigationBar'
import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'
import FailureView from '../FailureView'
import HomeVideos from '../HomeVideos'

import {
  LoaderViewContainer,
  HomeViewContainer,
  BannerContainer,
  BannerLeftPart,
  BannerLogoImage,
  BannerText,
  BannerButton,
  BannerRightPart,
  BannerCloseButton,
  SearchContainer,
  SearchInputBox,
  SearchIconButton,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Home extends Component {
  state = {
    homeVideos: [],
    apiStatus: apiStatusConstants.initial,
    searchInput: '',
    bannerDisplay: 'flex',
  }

  componentDidMount() {
    this.getVideos()
  }

  getVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const {searchInput} = this.state
    const apiUrl = `https://apis.ccbp.in/videos/all?search=${searchInput}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(apiUrl, options)
    // console.log(response)
    if (response.ok) {
      const fetchedData = await response.json()
      // console.log(data)
      const updatedData = fetchedData.videos.map(video => ({
        id: video.id,
        publishedAt: video.published_at,
        title: video.title,
        thumbnailUrl: video.thumbnail_url,
        viewCount: video.view_count,
        name: video.channel.name,
        profileImageUrl: video.channel.profile_image_url,
      }))
      this.setState({
        homeVideos: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderVideosView = () => {
    const {homeVideos} = this.state

    return <HomeVideos homeVideos={homeVideos} onRetry={this.onRetry} />
  }

  renderLoaderView = () => (
    <LoaderViewContainer data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </LoaderViewContainer>
  )

  renderFailureView = () => <FailureView onRetry={this.onRetry} />

  onCloseBanner = () => this.setState({bannerDisplay: 'none'})

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onRetry = () => {
    this.setState({searchInput: ''}, this.getVideos)
  }

  getSearchResults = () => {
    this.getVideos()
  }

  renderHomeVideosView = () => {
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
    const {searchInput, bannerDisplay} = this.state
    return (
      <ThemeAndVideoContext.Consumer>
        {value => {
          const {isDarkTheme} = value

          const bgColor = isDarkTheme ? '#181818' : '#f9f9f9'
          const textColor = isDarkTheme ? '#f9f9f9' : ' #231f20'
          const display = bannerDisplay === 'flex' ? 'flex' : 'none'
          const searchIconBgColor = isDarkTheme ? '#424242' : '#ebebeb'

          return (
            <>
              <Header />
              <NavigationBar />
              <HomeViewContainer bgColor={bgColor} data-testid="home">
                <BannerContainer data-testid="banner" display={display}>
                  <BannerLeftPart>
                    <BannerLogoImage
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                      alt="nxt watch logo"
                    />
                    <BannerText>
                      Buy Nxt Watch Premium prepaid plans with UPI
                    </BannerText>
                    <BannerButton type="button">GET IT NOW</BannerButton>
                  </BannerLeftPart>
                  <BannerRightPart>
                    <BannerCloseButton
                      type="button"
                      onClick={this.onCloseBanner}
                      data-testid="close"
                    >
                      <MdClose size={30} color="#231f20" />
                    </BannerCloseButton>
                  </BannerRightPart>
                </BannerContainer>
                <SearchContainer>
                  <SearchInputBox
                    type="search"
                    color={textColor}
                    value={searchInput}
                    onChange={this.onChangeSearchInput}
                    placeholder="Search"
                  />
                  <SearchIconButton
                    type="button"
                    data-testid="searchButton"
                    onClick={this.getSearchResults}
                    bgColor={searchIconBgColor}
                  >
                    <BsSearch size={14} color=" #606060" />
                  </SearchIconButton>
                </SearchContainer>
                {this.renderHomeVideosView()}
              </HomeViewContainer>
            </>
          )
        }}
      </ThemeAndVideoContext.Consumer>
    )
  }
}

export default Home
