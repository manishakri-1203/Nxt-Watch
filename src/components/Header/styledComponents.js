import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const NavbarHeaderContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${props => props.bgColor};
  width: 100%;
  height: 60px;
  padding: 12px;
  position: fixed;
  top: 0;
  @media screen and (min-width: 768px) {
    padding-top: 25px;
    padding-bottom: 25px;
    height: 80px;
  }
`

export const WebsiteLogoLink = styled(Link)`
  text-decoration: none;
`

export const HeaderLogoImg = styled.img`
  width: 100px;
  @media screen and (min-width: 768px) {
    width: 150px;
  }
`

export const ActionsContainer = styled.div`
  display: flex;
  align-items: center;
`

export const ThemeButton = styled.button`
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  margin-right: 18px;
`

export const ProfileImage = styled.img`
  width: 32px;
  height: 32px;
  margin-right: 18px;
  @media screen and (max-width: 767px) {
    display: none;
  }
`

export const MenuIconContainer = styled.span`
  margin-right: 18px;
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const LogoutIconButton = styled.button`
  background: transparent;
  border: none;
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const LogoutButton = styled.button`
  border-color: ${props => (props.isDarkTheme ? '#ffffff' : '#3b82f6')};
  border: 2px;
  border-style: solid;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#3b82f6')};
  background: transparent;
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 500;
  padding: 6px 18px 6px 18px;
  margin-right: 12px;
  border-radius: 4px;
  outline: none;
  cursor: pointer;
  @media screen and (max-width: 767px) {
    display: none;
  }
`
export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 180px;
  width: 300px;
  background-color: ${props => props.bgColor};
  padding: 16px;
  border-radius: 16px;
  @media screen and (min-width: 768px) {
    width: 350px;
  }
`

export const ModalDescription = styled.p`
  color: ${props => props.color};
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: 400;
  text-align: center;
`

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  margin-bottom: 12px;
`

export const CloseButton = styled.button`
  background: transparent;
  border: 2px solid #616e7c;
  color: #616e7c;
  font-size: 18px;
  font-weight: 500;
  font-family: 'Roboto';
  padding: 10px 14px;
  border-radius: 4px;
  outline: none;
  cursor: pointer;
`

export const ConfirmButton = styled.button`
  background-color: #3b82f6;
  color: #ffffff;
  border: none;
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 500;
  padding: 10px 14px;
  border-radius: 4px;
  outline: none;
  cursor: pointer;
`
