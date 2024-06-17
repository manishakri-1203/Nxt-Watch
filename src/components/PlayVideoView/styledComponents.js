import styled from 'styled-components'

export const VideoPlayer = styled.div`
  padding: 20px;
`
export const PlayVideoTitle = styled.p`
  color: ${props => props.color};
  font-family: 'Roboto';
  font-size: 25px;
`

export const PlayVideoStatusContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`

export const PlayVideoStatus = styled.p`
  color: ${props => props.color};
  font-family: 'Roboto';
  font-size: 16px;
`

export const PlayVideoDot = styled.span`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  padding-left: 5px;
  padding-right: 5px;
`

export const PlaySocialButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  @media screen and (max-width: 767px) {
    justify-content: flex-start;
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
`

export const SocialButton = styled.button`
  display: flex;
  align-items: center;
  margin-right: 10px;
  color: ${props => props.color};
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
`

export const ButtonText = styled.span`
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 500;
  margin-left: 5px;
  color: ${props => props.color};
`

export const HrLine = styled.hr`
  border: 1px solid #909090;
`

export const ChannelInfoContainer = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top: 20px;
`

export const ProfileImage = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 20px;
`

export const ChannelInfo = styled.div`
  display: flex;
  flex-direction: column;
`

export const ChannelName = styled.p`
  color: ${props => props.color};
  font-family: Roboto;
  font-size: 16px;
  margin: 0px;
`

export const ChannelSubscribers = styled.p`
  color: ${props => props.color};
  font-family: Roboto;
  font-size: 14px;
  margin: 0;
  margin-top: 8px;
`

export const ChannelDescription = styled.p`
  color: ${props => props.color};
  font-family: 'Roboto';
  font-size: 16px;
  margin-top: 36px;
`
