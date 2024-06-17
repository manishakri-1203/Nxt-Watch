import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import Popup from 'reactjs-popup'
import {BsBrightnessHigh, BsMoon} from 'react-icons/bs'
import {MdMenu} from 'react-icons/md'
import {FiLogOut} from 'react-icons/fi'
import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'
import {
  NavbarHeaderContainer,
  WebsiteLogoLink,
  HeaderLogoImg,
  ActionsContainer,
  ThemeButton,
  ProfileImage,
  MenuIconContainer,
  ModalContainer,
  ModalDescription,
  ButtonsContainer,
  CloseButton,
  ConfirmButton,
  LogoutIconButton,
  LogoutButton,
} from './styledComponents'

const Header = props => (
  <ThemeAndVideoContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value
      const bgColor = isDarkTheme ? '#383838' : '#f9f9f9'
      const color = isDarkTheme ? '#ffffff' : '#231f20'

      const onChangeTheme = () => {
        toggleTheme()
      }

      const onClickLogout = () => {
        Cookies.remove('jwt_token')
        const {history} = props
        history.replace('/login')
      }

      return (
        <NavbarHeaderContainer bgColor={bgColor}>
          <WebsiteLogoLink to="/">
            <HeaderLogoImg
              src={
                isDarkTheme
                  ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
              }
              alt="website logo"
            />
          </WebsiteLogoLink>
          <ActionsContainer>
            <ThemeButton
              type="button"
              onClick={onChangeTheme}
              data-testid="theme"
            >
              {isDarkTheme ? (
                <BsBrightnessHigh color="#ffffff" size={30} />
              ) : (
                <BsMoon size={30} />
              )}
            </ThemeButton>
            <MenuIconContainer>
              <MdMenu size={30} color={color} />
            </MenuIconContainer>
            <ProfileImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
              alt="profile"
            />
            <Popup
              modal
              trigger={
                <LogoutIconButton type="button">
                  <FiLogOut size={30} color={color} />
                </LogoutIconButton>
              }
            >
              {close => (
                <ModalContainer bgColor={bgColor}>
                  <ModalDescription color={color}>
                    Are you sure, you want to Logout?
                  </ModalDescription>
                  <ButtonsContainer>
                    <CloseButton
                      type="button"
                      onClick={() => close()}
                      data-testid="close"
                    >
                      Cancel
                    </CloseButton>
                    <ConfirmButton type="button" onClick={onClickLogout}>
                      Confirm
                    </ConfirmButton>
                  </ButtonsContainer>
                </ModalContainer>
              )}
            </Popup>
            <Popup
              modal
              trigger={
                <LogoutButton type="button" isDarkTheme={isDarkTheme}>
                  Logout
                </LogoutButton>
              }
            >
              {close => (
                <ModalContainer bgColor={bgColor}>
                  <ModalDescription color={color}>
                    Are you sure, you want to Logout?
                  </ModalDescription>
                  <ButtonsContainer>
                    <CloseButton
                      type="button"
                      data-testid="close"
                      onClick={() => close()}
                    >
                      Cancel
                    </CloseButton>
                    <ConfirmButton type="button" onClick={onClickLogout}>
                      Confirm
                    </ConfirmButton>
                  </ButtonsContainer>
                </ModalContainer>
              )}
            </Popup>
          </ActionsContainer>
        </NavbarHeaderContainer>
      )
    }}
  </ThemeAndVideoContext.Consumer>
)

export default withRouter(Header)
