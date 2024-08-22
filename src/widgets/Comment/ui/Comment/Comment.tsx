import { FC } from 'react'
import cls from './Comment.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { Comments } from 'pages/MainPage'

interface CommentProps {
  className?: string
  comment: Comments
}

export const Comment: FC<CommentProps> = ({ className, comment }) => {
  return (
    <div className={classNames(cls.Comment, {}, [className])}>
      <div className={cls.email}>{comment.email}</div>
      <div className={cls.body}>{comment.body}</div>
    </div>
  )
}
