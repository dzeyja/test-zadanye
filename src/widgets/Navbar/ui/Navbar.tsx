import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Navbar.module.scss'
import { Link } from 'react-router-dom'

interface NavbarProps {
  className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <Link to={'/'}>Главная станица</Link>
      <Link to={'/cards'}>Карточка детель</Link>
    </div>
  )
}
