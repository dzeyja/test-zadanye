import { classNames } from 'shared/lib/classNames/classNames'
import cls from './CardDetail.module.scss'

interface CardDetailProps {
  clasName?: string
}

export const CardDetail = ({ clasName }: CardDetailProps) => {
  return (
    <div className={classNames(cls.CardDetail, {}, [clasName])}>CardDetail</div>
  )
}
