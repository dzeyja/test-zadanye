import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { Comments, Posts } from '../model/types/postTypes'

interface FetchPosts {
  limit: number
  currentPage: number
}

export const fetchPosts = createAsyncThunk(
  'post/fetchPosts',
  async ({ limit, currentPage }: FetchPosts, thunkApi) => {
    try {
      const response = await axios.get<Posts[]>(
        'https://jsonplaceholder.typicode.com/posts',
        {
          params: {
            _limit: limit,
            _page: currentPage,
          },
        }
      )
      return response.data
    } catch (e: any) {
      console.log(e.message)
    }
  }
)

export const fetchPostById = createAsyncThunk(
  'post/fetchPostById',
  async (id: number, thunkApi) => {
    try {
      const response = await axios.get<Posts>(
        `https://jsonplaceholder.typicode.com/posts/` + id
      )
      return response.data
    } catch (e: any) {
      console.log(e.message)
    }
  }
)

export const fetchCommentById = createAsyncThunk(
  'post/fetchCommentById',
  async (id: number, thunkApi) => {
    try {
      const response = await axios.get<Comments[]>(
        `https://jsonplaceholder.typicode.com/posts/${id}/comments`
      )
      return response.data
    } catch (e: any) {
      console.log(e.message)
    }
  }
)
