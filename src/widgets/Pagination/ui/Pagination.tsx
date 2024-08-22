import { useAppSelector } from 'app/stores/lib/reduxHooks'
import { getPagesArr } from 'shared/lib/getPagesArr/getPagesArr'
import cls from './Pagination.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'

interface PaginationProps {
  className?: string
  setCurrentPage: (value: number) => void
}

export const Pagination = ({ className, setCurrentPage }: PaginationProps) => {
  const { totalPages } = useAppSelector((state) => state.postReducer)
  const pages = getPagesArr(totalPages)

  const changePage = (page: number) => {
    setCurrentPage(page)
  }

  return (
    <div className={classNames(cls.Pagination, {}, [className])}>
      {pages.map((i) => (
        <button onClick={() => changePage(i)} className={cls.pageBtn} key={i}>
          {i}
        </button>
      ))}
    </div>
  )
}
