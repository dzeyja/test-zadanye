import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Posts, PostsInitialState } from './types/postTypes'
import { fetchPosts } from '../api/postsActionCreator'

const initialState: PostsInitialState = {
  posts: [],
  isLoading: false,
  totalPages: 0,
}

const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    removePost: (state, action: PayloadAction<number>) => {
      return {
        ...state,
        posts: state.posts.filter((el) => el.id !== action.payload),
      }
    },
    setToogleLike: (state, action: PayloadAction<number>) => {
      return state.posts.forEach((post) => {
        if (post.id === action.payload) {
          post.likePost = !post.likePost
        }
      })
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(
      fetchPosts.fulfilled,
      (state, action: PayloadAction<Posts[]>) => {
        state.isLoading = false
        state.posts = action.payload
        state.totalPages = Math.ceil(100 / 10)
      }
    )
    builder.addCase(fetchPosts.rejected, (state) => {
      state.isLoading = false
    })
  },
})

export default postSlice.reducer
export const { removePost, setToogleLike } = postSlice.actions
