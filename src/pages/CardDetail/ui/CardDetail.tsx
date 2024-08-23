import { classNames } from 'shared/lib/classNames/classNames'
import cls from './CardDetail.module.scss'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from 'app/stores/lib/reduxHooks'
import {
  fetchCommentById,
  fetchPostById,
} from 'pages/MainPage/api/postsActionCreator'
import { CommentList } from 'widgets/Comment'
import { Link } from 'react-router-dom'

interface CardDetailProps {
  clasName?: string
}

export const CardDetail = ({ clasName }: CardDetailProps) => {
  const { id } = useParams<{ id: string }>()
  const { post, isLoading } = useAppSelector((state) => state.postReducer)
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (id) {
      dispatch(fetchCommentById(Number(id)))
      dispatch(fetchPostById(Number(id)))
    }
  }, [dispatch, id])

  return (
    <>
      <Link className={cls.backLink} to="/test-zadanye">
        Назад к постам
      </Link>
      <div className="container">
        {isLoading ? (
          <div className={cls.loader}>Загрузка поста...</div>
        ) : (
          <div className={classNames(cls.CardDetail, {}, [clasName])}>
            <div className={cls.postContent}>
              <div className={cls.img}></div>
              <div className={cls.textContent}>
                <div className={cls.title}>{post.title}</div>
                <div>{post.body}</div>
              </div>
            </div>
            <div className={cls.title}>Комментарий к посту:</div>
            <div>
              <CommentList />
            </div>
          </div>
        )}
      </div>
    </>
  )
}
