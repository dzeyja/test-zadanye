import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Footer.module.scss'

interface FooterProps {
  className?: string
}

export const Footer = ({ className }: FooterProps) => {
  return <div className={classNames(cls.Footer, {}, [])}>Footer</div>
}
