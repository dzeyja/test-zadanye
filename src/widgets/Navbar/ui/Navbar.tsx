import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Navbar.module.scss'
import { useAppDispatch, useAppSelector } from 'app/stores/lib/reduxHooks'
import { setOnlyFaovrite } from 'pages/MainPage/model/filterSlice'

interface NavbarProps {
  className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
  const { onlyFavorite } = useAppSelector((state) => state.filterReducer)
  const dispatch = useAppDispatch()

  const handleOnlyFavoriteFilter = () => {
    dispatch(setOnlyFaovrite())
  }

  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      Список постов
      <form>
        <label className={cls.filter}>
          <input
            type="checkbox"
            checked={onlyFavorite}
            onChange={handleOnlyFavoriteFilter}
          />
          Только залайканные
        </label>
      </form>
    </div>
  )
}
