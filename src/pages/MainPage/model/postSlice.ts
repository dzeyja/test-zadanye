import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Comments, Posts, PostsInitialState } from './types/postTypes'
import {
  fetchCommentById,
  fetchPostById,
  fetchPosts,
} from '../api/postsActionCreator'

const initialState: PostsInitialState = {
  posts: [],
  comments: [],
  post: {
    id: 0,
    title: '',
    body: '',
    likePost: false,
  },
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
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.isLoading = true
      })
      .addCase(
        fetchPosts.fulfilled,
        (state, action: PayloadAction<Posts[]>) => {
          state.isLoading = false
          state.posts = action.payload
          state.totalPages = Math.ceil(100 / 10)
        }
      )
      .addCase(fetchPosts.rejected, (state) => {
        state.isLoading = false
      })
      // Редуссеры для получния поста по id
      .addCase(fetchPostById.pending, (state) => {
        state.isLoading = true
      })
      .addCase(
        fetchPostById.fulfilled,
        (state, action: PayloadAction<Posts>) => {
          state.isLoading = false
          state.post = action.payload
        }
      )
      .addCase(fetchPostById.rejected, (state) => {
        state.isLoading = false
      })
      // Редуссеры для получния комментария к посту по id
      .addCase(fetchCommentById.pending, (state) => {
        state.isLoading = true
      })
      .addCase(
        fetchCommentById.fulfilled,
        (state, action: PayloadAction<Comments[]>) => {
          state.isLoading = false
          state.comments = action.payload
        }
      )
      .addCase(fetchCommentById.rejected, (state) => {
        state.isLoading = false
      })
  },
})

export default postSlice.reducer
export const { removePost, setToogleLike } = postSlice.actions
