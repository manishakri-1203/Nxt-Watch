import React from 'react'

const ThemeAndVideoContext = React.createContext({
  isDarkTheme: false,
  savedVideos: [],
  activeTab: 'Home',
  toggleTheme: () => {},
  changeActiveTab: () => {},
  addVideo: () => {},
})

export default ThemeAndVideoContext
