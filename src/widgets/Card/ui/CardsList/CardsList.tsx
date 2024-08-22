import { classNames } from 'shared/lib/classNames/classNames'
import { Card } from '../Card/Card'
import cls from './CardsList.module.scss'
import { useAppSelector } from 'app/stores/lib/reduxHooks'

interface CardsListProps {
  className?: string
}

export const CardsList = ({ className }: CardsListProps) => {
  const { posts } = useAppSelector((state) => state.postReducer)
  const { onlyFavorite } = useAppSelector((state) => state.filterReducer)

  const filteredPosts = posts.filter((post) => {
    const matchedFavorite = onlyFavorite ? post.likePost : true

    return matchedFavorite
  })

  return (
    <div className={classNames(cls.CardsList, {}, [className])}>
      {filteredPosts.map((post) => (
        <Card key={post.id} post={post} />
      ))}
    </div>
  )
}
