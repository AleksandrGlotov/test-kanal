export const getUsersFilter = (state) => {
    return state.postsPage.users;
}

export const getPosts = (state) => {
    return state.postsPage.posts;
}

export const getPhotos = (state) => {
    return state.postsPage.photos;
}

export const getIsAuth = (state) => {
    return state.postsPage.isAuth;
}