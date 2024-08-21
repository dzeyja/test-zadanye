import { classNames } from 'shared/lib/classNames/classNames'
import cls from './MainPage.module.scss'
import { CardsList } from 'widgets/Card'

interface MainPageProps {
  clasName?: string
}

export const MainPage = ({ clasName }: MainPageProps) => {
  return (
    <div className="container">
      <div className={classNames(cls.MainPage, {}, [clasName])}>
        <CardsList />
      </div>
    </div>
  )
}
