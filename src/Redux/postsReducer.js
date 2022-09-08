import { postsAPI } from '../api/api.js';

const SET_USERS = 'glot/posts/SET_USERS';
const SET_PHOTOS = 'glot/posts/SET_PHOTOS';
const SET_POSTS = 'glot/posts/SET_POSTS';
const SET_SIGNIN = 'glot/posts/SET_SIGNIN';

let initialState = {
    users: [ ],
    posts: [ ],
    photos: [ ],
    isAuth: false,
}

const postsReducer = (state = initialState, action) => {

    switch (action.type) {

        case SET_USERS: {
            return {...state, users: [ ...action.users]}
        }

        case SET_PHOTOS: {
            return {...state, photos: [ ...action.photos]}
        }

        case SET_POSTS: {
            return {...state, posts: [ ...action.posts]}
        }

        case SET_SIGNIN: {
            return {...state, isAuth: true}
        }

        default:
            return state;
    }
}
    
//ActionCreator
export const setUsers = (users) => ({ type: SET_USERS, users })
export const setPhotos = (photos) => ({ type: SET_PHOTOS, photos })
export const setPosts = (posts) => ({ type: SET_POSTS, posts })
export const signIn = (isAuth) => ({ type: SET_SIGNIN, isAuth })

// Thunk
export const getUsers = () => async (dispatch) => {

    let data = await postsAPI.getUsers()

    dispatch(setUsers(data));

}

export const getData = () => async (dispatch) => {

    let photoData = await postsAPI.getPhotos()
    let postData = await postsAPI.getPosts()

    dispatch(setPhotos(photoData));
    dispatch(setPosts(postData));
}

export default postsReducer