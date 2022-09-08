import styled from 'styled-components'
import * as colors from '../../styles/colors'

export const PostContainer = styled.div`
  width: 947px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  gap: 13px;

  @media (max-width: 1440px) {
    width: 670px;
    gap: 20px;
  }

  @media (max-width: 744px) {
    width: 290px;
    gap: 10px;
  }
`

export const Post = styled.div`
  width: 467px;
  height: 388px;
  border-radius: 6px;
  box-shadow: 0px 4px 4px 0px #00000040;
  border: 5px solid ${colors.blue};
  display: flex;
  flex-direction: column;

  @media (max-width: 1440px) {
    width: 325px;
    height: 470px;
    padding-bottom: 32px;
  }

  @media (max-width: 744px) {
    width: 290px;
    height: 200px;
    padding-bottom: 13px;
  }
`

export const PostHeader = styled.div`
  display: flex;
  margin: 25px auto 10px;
  width: 425px;

  @media (max-width: 1440px) {
    width: 275px;
    flex-direction: column;
  }

  @media (max-width: 744px) {
    width: 258px;
    margin: 5px auto;
  }
`

export const Photo = styled.img`
  width: 150px;
  height: 150px;
  margin-right: 30px;

  @media (max-width: 1440px) {
    margin-bottom: 20px;
  }

  @media (max-width: 744px) {
    display: none;
  }
`
export const HeaderText = styled.div`
  display: flex;
  flex-direction: column;
`

export const PostText = styled.p`
  font-weight: 800;
  font-size: 16px;
  margin: 0;
  margin-bottom: 12px;
`

export const PostDescription = styled.div`
  display: flex;
  flex-direction: column;
  width: 425px;
  margin: 0 auto;

  @media (max-width: 1440px) {
    width: 275px;
    overflow: hidden;
  }

  @media (max-width: 744px) {
    width: 258px;
  }
`

export const Show = styled.h1`
  text-align: center;
`