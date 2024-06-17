import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const NavigationContainer = styled.div`
  display: flex;
`
export const NavigationLargeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 250px;
  height: 92%;
  position: fixed;
  top: 80px;
  background-color: ${props => props.bgColor};
  @media screen and (max-width: 767px) {
    display: none;
  }
`

export const NavOptions = styled.ul`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 0;
  margin-top: 10px;
`

export const NavLink = styled(Link)`
  text-decoration: none;
`

export const NavItem = styled.li`
  list-style-type: none;
  display: flex;
  align-items: center;
  background-color: ${props => props.bgColor};
  padding-left: 20px;
`

export const NavText = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 500;
  margin-left: 20px;
  color: ${props => props.color};
`

export const ContactInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 20px;
  margin-bottom: 40px;
`

export const ContactHeading = styled.p`
  font-family: 'Roboto';
  font-size: 20px;
  color: ${props => props.color};
`

export const ContactIconContainer = styled.div`
  display: flex;
  align-items: center;
`

export const ContactIcon = styled.img`
  width: 32px;
  height: 32px;
  margin-right: 16px;
`

export const ConatctNote = styled.p`
  width: 180px;
  color: ${props => props.color};
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 400;
`

export const NavigationSmallContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 60px;
  padding: 10px;
  background-color: ${props => props.bgColor};
  position: fixed;
  bottom: 0;
  @media screen and (min-width: 768px) {
    display: none;
  }
`
