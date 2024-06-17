import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {RiMenuAddFill} from 'react-icons/ri'

import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'
import {
  NavigationContainer,
  NavigationLargeContainer,
  NavLink,
  NavOptions,
  NavItem,
  NavText,
  NavigationSmallContainer,
  ContactInfoContainer,
  ContactHeading,
  ContactIconContainer,
  ContactIcon,
  ConatctNote,
} from './styledComponents'

const NavigationBar = () => (
  <ThemeAndVideoContext.Consumer>
    {value => {
      const {isDarkTheme, activeTab, changeActiveTab} = value
      const bgColor = isDarkTheme ? '#383838' : '#f9f9f9'
      const activeTabBg = isDarkTheme ? ' #606060' : '#f1f5f9'
      const textColor = isDarkTheme ? '#f9f9f9' : '#231f20'

      const onClickHomeTab = () => {
        changeActiveTab('Home')
      }

      const onClickTrendingTab = () => {
        changeActiveTab('Trending')
      }

      const onClickGamingTab = () => {
        changeActiveTab('Gaming')
      }

      const onClickSavedVideosTab = () => {
        changeActiveTab('Saved')
      }

      return (
        <NavigationContainer>
          <NavigationLargeContainer bgColor={bgColor}>
            <NavOptions>
              <NavLink to="/">
                <NavItem
                  key="home"
                  onClick={onClickHomeTab}
                  bgColor={activeTab === 'Home' ? activeTabBg : 'none'}
                >
                  <AiFillHome
                    size={30}
                    color={activeTab === 'Home' ? '#ff0b37' : '#909090'}
                  />
                  <NavText color={textColor}>Home</NavText>
                </NavItem>
              </NavLink>
              <NavLink to="/trending">
                <NavItem
                  key="trending"
                  onClick={onClickTrendingTab}
                  bgColor={activeTab === 'Trending' ? activeTabBg : 'none'}
                >
                  <HiFire
                    size={30}
                    color={activeTab === 'Trending' ? '#ff0b37' : '#909090'}
                  />
                  <NavText color={textColor}>Trending</NavText>
                </NavItem>
              </NavLink>
              <NavLink to="/gaming">
                <NavItem
                  key="gaming"
                  onClick={onClickGamingTab}
                  bgColor={activeTab === 'Gaming' ? activeTabBg : 'none'}
                >
                  <SiYoutubegaming
                    size={30}
                    color={activeTab === 'Gaming' ? '#ff0b37' : '#909090'}
                  />
                  <NavText color={textColor}>Gaming</NavText>
                </NavItem>
              </NavLink>
              <NavLink to="/saved-videos">
                <NavItem
                  key="saved"
                  onClick={onClickSavedVideosTab}
                  bgColor={activeTab === 'Saved' ? activeTabBg : 'none'}
                >
                  <RiMenuAddFill
                    size={30}
                    color={activeTab === 'Saved' ? '#ff0b37' : '#909090'}
                  />
                  <NavText color={textColor}>Saved Videos</NavText>
                </NavItem>
              </NavLink>
            </NavOptions>
            <ContactInfoContainer>
              <ContactHeading color={textColor}>CONTACT US</ContactHeading>
              <ContactIconContainer>
                <ContactIcon
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                  alt="facebook logo"
                />
                <ContactIcon
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                  alt="twitter logo"
                />
                <ContactIcon
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                  alt="linked in logo"
                />
              </ContactIconContainer>
              <ConatctNote color={textColor}>
                Enjoy! Now to see your channels and recommendations!
              </ConatctNote>
            </ContactInfoContainer>
          </NavigationLargeContainer>
          <NavigationSmallContainer bgColor={bgColor}>
            <NavLink to="/">
              <AiFillHome
                size={30}
                color={activeTab === 'Home' ? '#ff0b37' : '#909090'}
                onClick={onClickHomeTab}
              />
            </NavLink>
            <NavLink to="/trending">
              <HiFire
                size={30}
                color={activeTab === 'Trending' ? '#ff0b37' : '#909090'}
                onClick={onClickTrendingTab}
              />
            </NavLink>
            <NavLink to="/gaming">
              <SiYoutubegaming
                size={30}
                color={activeTab === 'Gaming' ? '#ff0b37' : '#909090'}
                onClick={onClickGamingTab}
              />
            </NavLink>
            <NavLink to="/saved-videos">
              <RiMenuAddFill
                size={30}
                color={activeTab === 'Saved' ? '#ff0b37' : '#909090'}
                onClick={onClickSavedVideosTab}
              />
            </NavLink>
          </NavigationSmallContainer>
        </NavigationContainer>
      )
    }}
  </ThemeAndVideoContext.Consumer>
)

export default NavigationBar
