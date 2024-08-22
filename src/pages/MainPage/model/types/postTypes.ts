export interface Posts {
  id: number
  title: string
  body: string
  likePost: boolean
}

export interface Comments {
  id: number
  name: string
  body: string
  email: string
}

export interface PostsInitialState {
  posts: Posts[]
  comments: Comments[]
  post: Posts
  isLoading: boolean
  totalPages: number
}
