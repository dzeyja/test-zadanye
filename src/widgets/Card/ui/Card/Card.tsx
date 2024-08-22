import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Card.module.scss'
import { FC, MouseEvent } from 'react'
import { useAppDispatch } from 'app/stores/lib/reduxHooks'
import { removePost, setToogleLike } from 'pages/MainPage/model/postSlice'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { FcLike } from 'react-icons/fc'
import { FcLikePlaceholder } from 'react-icons/fc'
import { useNavigate } from 'react-router-dom'
import { Posts } from 'pages/MainPage'

interface CardProps {
  className?: string
  post: Posts
}

export const Card: FC<CardProps> = ({ className, post }) => {
  const dispatch = useAppDispatch()
  const router = useNavigate()

  const removeBtn = (id: number, event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation()
    dispatch(removePost(id))
  }

  const toogleLike = (id: number, event: MouseEvent<HTMLDivElement>) => {
    event.stopPropagation()
    dispatch(setToogleLike(id))
  }

  return (
    <>
      <div
        onClick={() => router(`/posts/${post.id}`)}
        className={classNames(cls.Card, {}, [className])}
      >
        <div className={cls.img}></div>
        <div className={cls.cardContent}>
          <div className={cls.text_content}>
            <h1>{post.body}</h1>
          </div>
          <div className={cls.actions}>
            <Button
              theme={ButtonTheme.DELETE}
              onClick={(event: MouseEvent<HTMLButtonElement>) =>
                removeBtn(post.id, event)
              }
            >
              Удалить
            </Button>

            <div
              onClick={(event: MouseEvent<HTMLDivElement>) =>
                toogleLike(post.id, event)
              }
            >
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
