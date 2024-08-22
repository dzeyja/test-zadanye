import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Card.module.scss'
import { Posts } from 'pages/MainPage/model/types/postTypes'
import { FC } from 'react'
import { useAppDispatch, useAppSelector } from 'app/stores/lib/reduxHooks'
import { removePost, setToogleLike } from 'pages/MainPage/model/postSlice'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { FcLike } from 'react-icons/fc'
import { FcLikePlaceholder } from 'react-icons/fc'

interface CardProps {
  className?: string
  post: Posts
}

export const Card: FC<CardProps> = ({ className, post }) => {
  const {} = useAppSelector((state) => state.postReducer)
  const dispatch = useAppDispatch()

  const removeBtn = (id: number) => {
    dispatch(removePost(id))
  }

  const toogleLike = (id: number) => {
    dispatch(setToogleLike(id))
  }

  return (
    <>
      <div className={classNames(cls.Card, {}, [className])}>
        <div className={cls.img}></div>
        <div className={cls.cardContent}>
          <div className={cls.text_content}>
            <h1>{post.body}</h1>
          </div>
          <div className={cls.actions}>
            <Button
              theme={ButtonTheme.DELETE}
              onClick={() => removeBtn(post.id)}
            >
              Удалить
            </Button>

            <div onClick={() => toogleLike(post.id)}>
              {post.likePost ? (
                <FcLike className={cls.fcLike} />
              ) : (
                <FcLikePlaceholder className={cls.fcLike} />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
