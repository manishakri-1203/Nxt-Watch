import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'
import {
  FailureViewContainer,
  FailureImage,
  FailureHeading,
  FailureDescription,
  FailureButton,
} from './styledComponents'

const FailureView = props => (
  <ThemeAndVideoContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const headingColor = isDarkTheme ? '#f1f5f9' : '#1e293b'
      const descriptionColor = isDarkTheme ? '#e2e8f0' : '#475569'

      const FailureImageUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'

      const {onRetry} = props

      const onClickRetry = () => {
        onRetry()
      }

      return (
        <FailureViewContainer>
          <FailureImage src={FailureImageUrl} alt="failure view" />
          <FailureHeading headingColor={headingColor}>
            Oops! Something Went Wrong
          </FailureHeading>
          <FailureDescription descriptionColor={descriptionColor}>
            We are having some trouble to complete your request. Please try
            again.
          </FailureDescription>
          <FailureButton type="button" onClick={onClickRetry}>
            Retry
          </FailureButton>
        </FailureViewContainer>
      )
    }}
  </ThemeAndVideoContext.Consumer>
)

export default FailureView
