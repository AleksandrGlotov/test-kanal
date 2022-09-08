import * as S from './styles'
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { signIn } from '../../Redux/postsReducer';
import { NavLink } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';



export const Login = () => {

  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')

  return (
    <S.Container>
      <S.Login>
        <S.HeaderText>Autorization</S.HeaderText>
        <S.Form action="/posts">
          <S.InputCont>
            <S.Label htmlFor="login">login</S.Label>
            <S.Input
              onChange={(e) => setLogin(e.target.value)}
              type="text"
              name="login"
              id="login"
              value={login}
              pattern="AlexGlot"
              required
            />
          </S.InputCont>
          <S.InputCont>
            <S.Label htmlFor="password">password</S.Label>
            <S.Input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              name="password"
              id="password"
              value={password}
              pattern="123456"
              required
            />
          </S.InputCont>
          <S.Button type="submit">Submit</S.Button>
        </S.Form>
      </S.Login>
    </S.Container>
    
  ) 
}