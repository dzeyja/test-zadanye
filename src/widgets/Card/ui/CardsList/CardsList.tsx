import { classNames } from 'shared/lib/classNames/classNames'
import { Card } from '../Card/Card'
import cls from './CardsList.module.scss'
import { useAppSelector } from 'app/stores/lib/reduxHooks'

interface CardsListProps {
  className?: string
}

export const CardsList = ({ className }: CardsListProps) => {
  const { posts } = useAppSelector((state) => state.postReducer)

  return (
    <div className={classNames(cls.CardsList, {}, [className])}>
      {posts.map((post) => (
        <Card key={post.id} post={post} />
      ))}
    </div>
  )
}
