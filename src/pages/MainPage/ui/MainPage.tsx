import { classNames } from 'shared/lib/classNames/classNames'
import cls from './MainPage.module.scss'
import { CardsList } from 'widgets/Card'
import { useEffect, useState } from 'react'
import { fetchPosts } from '../api/postsActionCreator'
import { useAppDispatch, useAppSelector } from 'app/stores/lib/reduxHooks'
import { Pagination } from 'widgets/Pagination'

interface MainPageProps {
  clasName?: string
}

export const MainPage = ({ clasName }: MainPageProps) => {
  const [currentPage, setCurrentPage] = useState<number>(1)
  const { isLoading } = useAppSelector((state) => state.postReducer)

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchPosts({ limit: 10, currentPage }))
  }, [dispatch, currentPage])

  return (
    <div className="container">
      <div className={classNames(cls.MainPage, {}, [clasName])}>
        {isLoading ? (
          <div className={cls.loader}>Загрузка...</div>
        ) : (
          <>
            <CardsList />
            <Pagination setCurrentPage={setCurrentPage} />
          </>
        )}
      </div>
    </div>
  )
}
