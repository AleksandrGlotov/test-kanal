import * as S from './styles'


export const PostCard = (props) => {

    const photoId = props.userPhoto.find( photo => photo.id === props.user.id)
    const textId = props.userPosts.find( text => text.id === props.user.id)

    return (
        <S.Post>
            <S.PostHeader>
                <S.Photo src={photoId.url}></S.Photo>
                <S.HeaderText>
                    <S.PostText>Autor: {props.user.name}</S.PostText>
                    <S.PostText>Company: {props.user.company.name}</S.PostText>
                </S.HeaderText> 
            </S.PostHeader>
            <S.PostDescription>
                <S.PostText>Title: {textId.title}</S.PostText>
                <S.PostText>{textId.body}</S.PostText>
            </S.PostDescription>
        </S.Post>
    )
}