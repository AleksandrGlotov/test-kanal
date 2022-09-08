import GlobalStyles from './styles/global'
import { Login } from './components/Login/Login'
import { Header } from './components/Header/Header'
import { Posts } from './components/Posts/Posts'
import {BrowserRouter, Navigate} from "react-router-dom";
import {Routes, Route} from "react-router-dom";
import { PostCard } from './components/Posts/PostCard';
import { getIsAuth } from './Redux/selectors';
import { useSelector } from 'react-redux';


const App = () => {

  const isAuth = useSelector(getIsAuth)

  return (
    <BrowserRouter>
      <GlobalStyles />
      <Header isAuth={isAuth}/>
      <Routes>
        <Route exact path="/" element={<Navigate to={'/login'} /> } />
        <Route path="/login/" element={<Login />}/>
        <Route path="/posts/" element={<Posts/>}/>
        <Route path="*" element={<h1>404 - Not found</h1>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App 