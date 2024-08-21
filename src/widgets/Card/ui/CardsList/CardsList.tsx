import { classNames } from 'shared/lib/classNames/classNames'
import { Card } from '../Card/Card'
import cls from './CardsList.module.scss'
import { useAppDispatch, useAppSelector } from 'app/stores/lib/reduxHooks'
import { useEffect } from 'react'
import { fetchPosts } from 'pages/MainPage/api/postsActionCreator'

interface CardsListProps {
  className?: string
}

export const CardsList = ({ className }: CardsListProps) => {
  const { posts } = useAppSelector((state) => state.postReducer)

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchPosts())
  }, [])

  return (
    <div className={classNames(cls.CardsList, {}, [className])}>
      {posts.map((post) => (
        <Card key={post.id} post={post} />
      ))}
    </div>
  )
}
