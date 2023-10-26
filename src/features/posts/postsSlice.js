import { createSlice } from '@reduxjs/toolkit'
import { getAllPosts } from '../../services/api'

export const counterSlice = createSlice({
    name: 'posts',
    initialState: {
        postsList: [],
        postsSelected: [],
    },
    reducers: {
        addAllPosts: (state, action) => {
            state.postsList = action.payload
        },

        saveSelectedPosts: (state, action) => {
            state.postsSelected = action.payload;
        },

        clearSelectedPosts: (state) => {
            state.postsSelected = [];
        }
    }
})

export const { addAllPosts, saveSelectedPosts, clearSelectedPosts } = counterSlice.actions

export const fetchPostsData = () => (dispatch) => {
    getAllPosts().then((posts) => dispatch(addAllPosts(posts)));
}

export default counterSlice.reducer