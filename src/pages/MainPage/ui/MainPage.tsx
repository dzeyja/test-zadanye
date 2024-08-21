import { classNames } from 'shared/lib/classNames/classNames'
import cls from './MainPage.module.scss'

interface MainPageProps {
  clasName?: string
}

export const MainPage = ({ clasName }: MainPageProps) => {
  return (
    <div className={classNames(cls.MainPage, {}, [clasName])}>MainPage</div>
  )
}
