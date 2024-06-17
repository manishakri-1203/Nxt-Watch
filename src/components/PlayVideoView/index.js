import ReactPlayer from 'react-player'

import {AiOutlineLike, AiOutlineDislike} from 'react-icons/ai'
import {BiListPlus} from 'react-icons/bi'

import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'

import {
  VideoPlayer,
  PlayVideoTitle,
  PlayVideoStatusContainer,
  PlayVideoStatus,
  PlayVideoDot,
  PlaySocialButtonsContainer,
  ButtonContainer,
  SocialButton,
  ButtonText,
  HrLine,
  ChannelInfoContainer,
  ProfileImage,
  ChannelInfo,
  ChannelName,
  ChannelSubscribers,
  ChannelDescription,
} from './styledComponents'

const PlayVideoView = props => {
  const {videoDetails, isLiked, isDisLiked, clickLiked, clickDisLiked} = props
  const {
    title,
    name,
    videoUrl,
    description,
    publishedAt,
    viewCount,
    profileImageUrl,
    subscriberCount,
  } = videoDetails

  const onClickLike = () => {
    clickLiked()
  }

  const onClickDisLike = () => {
    clickDisLiked()
  }

  return (
    <ThemeAndVideoContext.Consumer>
      {value => {
        const {isDarkTheme, addVideo, savedVideos} = value
        const textColor = isDarkTheme ? '#64748b' : '#231f20'
        const likeIconColor = isLiked ? '#2563eb' : '#64748b'
        const dislikeIconColor = isDisLiked ? '#2563eb' : '#64748b'

        let isSaved
        const index = savedVideos.findIndex(
          eachVideo => eachVideo.id === videoDetails.id,
        )
        if (index === -1) {
          isSaved = false
        } else {
          isSaved = true
        }

        const saveIconColor = isSaved ? '#2563eb' : textColor

        const onClickSave = () => {
          addVideo(videoDetails)
        }

        return (
          <VideoPlayer>
            <ReactPlayer url={videoUrl} controls width="100%" />
            <PlayVideoTitle color={textColor}>{title}</PlayVideoTitle>
            <PlayVideoStatusContainer>
              <PlayVideoStatus color={textColor}>
                {viewCount} views
                <PlayVideoDot> &#8226; </PlayVideoDot>
                {publishedAt}
              </PlayVideoStatus>
              <PlaySocialButtonsContainer>
                <ButtonContainer>
                  <SocialButton
                    type="button"
                    onClick={onClickLike}
                    color={likeIconColor}
                  >
                    <AiOutlineLike size={25} />
                    <ButtonText color={likeIconColor}>Like</ButtonText>
                  </SocialButton>
                </ButtonContainer>
                <ButtonContainer>
                  <SocialButton
                    type="button"
                    onClick={onClickDisLike}
                    color={dislikeIconColor}
                  >
                    <AiOutlineDislike size={25} />
                    <ButtonText color={dislikeIconColor}>Dislike</ButtonText>
                  </SocialButton>
                </ButtonContainer>
                <ButtonContainer>
                  <SocialButton
                    type="button"
                    onClick={onClickSave}
                    color={saveIconColor}
                  >
                    <BiListPlus size={25} />
                    <ButtonText>{isSaved ? 'Saved' : 'Save'}</ButtonText>
                  </SocialButton>
                </ButtonContainer>
              </PlaySocialButtonsContainer>
            </PlayVideoStatusContainer>
            <HrLine />
            <ChannelInfoContainer>
              <ProfileImage src={profileImageUrl} alt="channel logo" />
              <ChannelInfo>
                <ChannelName color={textColor}>{name}</ChannelName>
                <ChannelSubscribers color={textColor}>
                  {subscriberCount} subscribers
                </ChannelSubscribers>
                <ChannelDescription color={textColor}>
                  {description}
                </ChannelDescription>
              </ChannelInfo>
            </ChannelInfoContainer>
          </VideoPlayer>
        )
      }}
    </ThemeAndVideoContext.Consumer>
  )
}

export default PlayVideoView
