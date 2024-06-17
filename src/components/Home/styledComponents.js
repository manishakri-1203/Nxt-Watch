import styled from 'styled-components'

export const HomeViewContainer = styled.div`
  background-color: ${props => props.bgColor};
  min-height: 100vh;
  margin-top: 80px;
  margin-bottom: 60px;
  overflow-y: auto;
  @media screen and (min-width: 768px) {
    margin-left: 250px;
    margin-bottom: 0px;
  }
`

export const BannerContainer = styled.div`
  display: ${props => props.display};
  justify-content: space-between;
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  width: 100%;
  height: 220px;
  padding: 20px;
`

export const BannerLeftPart = styled.div`
  width: 60%;
`

export const BannerLogoImage = styled.img`
  width: 100px;
  @media screen and (min-width: 768px) {
    width: 150px;
  }
`

export const BannerText = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  color: #1e293b;
  font-weight: 500;
  line-height: 1.5;
  @media screen and (min-width: 576px) {
    font-size: 20px;
    width: 420px;
  }
`

export const BannerButton = styled.button`
  background: transparent;
  border: 1px solid #000000;
  color: #000000;
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 500;
  padding: 10px 16px;
`

export const BannerRightPart = styled.div``

export const BannerCloseButton = styled.button`
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
`

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #606060;
  width: 90%;
  height: 40px;
  margin-top: 20px;
  margin-left: 16px;
  @media screen and (min-width: 768px) {
    width: 60%;
  }
`

export const SearchInputBox = styled.input`
  width: 100%;
  border: none;
  background: transparent;
  outline: none;
  color: ${props => props.color};
  font-family: 'Roboto';
  font-size: 16px;
  padding: 10px;
`

export const SearchIconButton = styled.button`
  background-color: ${props => props.bgColor};
  border: none;
  outline: none;
  cursor: pointer;
  border-left: 1px solid #606060;
  height: 39px;
  padding: 6px 32px;
`

export const LoaderViewContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
`
