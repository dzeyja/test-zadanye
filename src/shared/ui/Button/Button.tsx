import { ButtonHTMLAttributes, FC } from 'react'
import cls from './Button.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'

export enum ButtonTheme {
  DELETE = 'delete',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLElement> {
  className?: string
  theme?: ButtonTheme
}

export const Button: FC<ButtonProps> = (props) => {
  const { className, theme, children, ...otherProps } = props

  return (
    <button
      {...otherProps}
      className={classNames(cls.Button, {}, [className, cls[theme]])}
    >
      {children}
    </button>
  )
}
