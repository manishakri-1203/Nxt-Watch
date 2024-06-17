import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  max-width: 350px;
  border-radius: 8px;
  box-shadow: 0px 8px 40px rgba(7, 7, 7, 0.08);
  padding: 24px;
  @media screen and (min-width: 768px) {
    width: 360px;
  }
`

export const LoginLogo = styled.img`
  width: 100px;
  margin-bottom: 16px;
  @media screen and (min-width: 768px) {
    width: 150px;
  }
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 20px;
`

export const InputLabel = styled.label`
  font-family: 'Roboto';
  color: #64748b;
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 8px;
  line-height: 16px;
`

export const InputField = styled.input`
  height: 40px;
  padding: 12px;
  font-family: 'Roboto';
  font-size: 16px;
  border: 1px solid #475569;
  border-radius: 4px;
  outline: none;
`

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`

export const CheckboxInput = styled.input`
  height: 16px;
  width: 16px;
  margin-right: 6px;
`

export const CheckboxLabel = styled.label`
  font-family: 'Roboto';
  font-size: 16px;
  color: #0f0f0f;
  font-weight: 500;
`

export const LoginButton = styled.button`
  width: 100%;
  margin-top: 24px;
  background-color: #3b82f6;
  color: #ffffff;
  border: none;
  height: 40px;
  border-radius: 10px;
  font-size: 16px;
  font-weight: 600;
  outline: none;
  cursor: pointer;
`

export const ErrorMsgText = styled.p`
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: 500;
  line-height: 1.3;
  color: #ff0b37;
  align-self: flex-start;
  margin-top: 4px;
`
