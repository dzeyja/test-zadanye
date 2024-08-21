import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { Posts } from '../model/types/postTypes'

export const fetchPosts = createAsyncThunk(
  'post/fetchPosts',
  async (_, thunkApi) => {
    try {
      const response = await axios.get<Posts[]>(
        'https://jsonplaceholder.typicode.com/posts'
      )
      return response.data
    } catch (e: any) {
      console.log(e)
    }
  }
)
