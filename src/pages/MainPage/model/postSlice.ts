import { createSlice } from '@reduxjs/toolkit'
import { Posts } from './types/postTypes'
import { fetchPosts } from '../api/postsActionCreator'

interface PostsInitialState {
  posts: Posts[]
  isLoading: boolean
}

const initialState: PostsInitialState = {
  posts: [],
  isLoading: false,
}

const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.isLoading = false
      state.posts = action.payload
    })
    builder.addCase(fetchPosts.rejected, (state) => {
      state.isLoading = false
    })
  },
})

export default postSlice.reducer
