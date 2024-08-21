import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Card.module.scss'
import { Posts } from 'pages/MainPage/model/types/postTypes'
import { FC } from 'react'

interface CardProps {
  className?: string
  post: Posts
}

export const Card: FC<CardProps> = ({ className, post }) => {
  return (
    <>
      <div className={classNames(cls.Card, {}, [className])}>
        <div className={cls.img}></div>
        <div className={cls.text_content}>
          <h1>{post.title}</h1>
        </div>
      </div>
    </>
  )
}
