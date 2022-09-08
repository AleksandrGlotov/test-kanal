import { useEffect, useState } from 'react'
import * as S from './styles'
import { useDispatch, useSelector } from 'react-redux';
import { getUsers, getData, signIn } from '../../Redux/postsReducer';
import { getUsersFilter, getPhotos, getPosts} from '../../Redux/selectors';
import { PostCard } from './PostCard';


export const Posts = () => {

    const users = useSelector(getUsersFilter)
    const userPhoto = useSelector(getPhotos)
    const userPosts = useSelector(getPosts)


    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getUsers());
        dispatch(getData())
        dispatch(signIn())
    }, [])

    const [show, setShow] = useState(false)

    useEffect(() => {
      const timeout = setTimeout(() => {
        setShow(true)
      }, 1000)
  
      return () => clearTimeout(timeout)
  
    }, [show])

    if (!show) 
        return <S.Show>Идет загрузка данных</S.Show>

    return (
        <S.PostContainer>
            {
                users.map( u => <PostCard 
                    key={u.id}
                    user={u}
                    userPhoto={userPhoto}
                    userPosts={userPosts}
                 />
                )
            }
        </S.PostContainer>
    )
}