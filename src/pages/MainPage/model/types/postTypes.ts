export interface Posts {
  id: number
  title: string
  body: string
  likePost: boolean
}

export interface PostsInitialState {
  posts: Posts[]
  isLoading: boolean
  totalPages: number
}
