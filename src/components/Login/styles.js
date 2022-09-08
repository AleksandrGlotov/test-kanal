import styled from 'styled-components'
import * as colors from '../../styles/colors'

export const Container = styled.div`
  height: calc(100vh - 138px);
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 744px) {
    height: auto;
  }
`

export const Login = styled.div`
  width: 480px;
  border-radius: 6px;
  box-shadow: 0px 4px 4px 0px #00000040;
  border: 5px solid ${colors.blue};
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 744px) {
    width: 288px;
  }
`

export const HeaderText = styled.h1`
  color: ${colors.blue};
  font-size: 24px;
  line-height: 70px;
  margin: 25px auto;
  text-align: center;

  @media (max-width: 744px) {
    line-height: 45px;
    margin: 8px auto 0;
  }
`

export const Form = styled.form`
  width: 440px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 744px) {
    width: 210px;
  }
`;

export const InputCont = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
  width: 100%;

  @media (max-width: 744px) {
    flex-direction: column;
    width: 210px;
    margin-bottom: 16px;
    align-items: flex-start;
  }
`

export const Label = styled.label`
  font-size: 24px;
  font-weight: 800;

  @media (max-width: 744px) {
    margin-bottom: 8px;
    line-height: 40px;
  }
`

export const Input = styled.input`
  width: 300px;
  height: 45px;
  border-radius: 10px;
  border: 4px solid ${colors.blue};
  background-color: #D9D9D9;
  padding: 0px 12px;

  &:invalid {
    border: 2px solid red;
  }

  &:valid {
    border: 2px solid green;
  }

  @media (max-width: 744px) {
    width: 210px;
  }
`;

export const Button = styled.button`
  width: 210px;
  height: 45px;
  background-color: #5995ef;
  font-size: 24px;
  font-weight: 800;
  background-color: ${colors.cream};
  border-radius: 10px;
  border: none;
  cursor: pointer;
  margin-bottom: 28px;
`;