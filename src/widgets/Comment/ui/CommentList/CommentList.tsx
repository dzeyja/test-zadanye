import { useAppSelector } from 'app/stores/lib/reduxHooks'
import { Comment } from '../Comment/Comment'

export const CommentList = () => {
  const { comments } = useAppSelector((state) => state.postReducer)
  return (
    <>
      {comments.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </>
  )
}
