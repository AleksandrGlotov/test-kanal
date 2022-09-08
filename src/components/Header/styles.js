import styled from 'styled-components'
import * as colors from '../../styles/colors'

export const Container = styled.header`
  background-color: ${colors.cream};
  height: 118px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 1440px;
  margin: 0 auto 20px;

  @media (max-width: 1440px) {
    width: 744px;
  }

  @media (max-width: 744px) {
    width: 320px;
  }
`

export const Logo = styled.a`
  margin-left: 40px;

  @media (max-width: 744px) {
    display: none;
  }
`

export const LogoMob = styled.a`
  margin-left: 16px;
  display: none;

  @media (max-width: 744px) {
    display: block;
  }
`

export const Exit = styled.div`
  margin-left: 40px;
  display: flex;
  align-items: center;
  margin-right: 40px;

`

export const UserName = styled.span`
  font-weight: 800;
  font-size: 24px;
  margin-right: 32px;

  @media (max-width: 1440px) {
    display: none;
  }

`