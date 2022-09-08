import * as S from './styles'
import logo from '../../assets/logo2.png'
import logo1 from '../../assets/logo1.png'
import exit from '../../assets/exit.svg'

export const Header = (props) => {

    return (
        <S.Container>
            <S.Logo href='/'>
                <img src={logo}/>
            </S.Logo>
            <S.LogoMob href='/'>
                <img src={logo1}/>
            </S.LogoMob>
                {props.isAuth 
                ? <S.Exit>
                    <S.UserName>AlexGlot</S.UserName>
                    <a href='/'>
                        <img src={exit}/>
                    </a>
                </S.Exit> 
                : ''}
                
            
        </S.Container>
    )
}