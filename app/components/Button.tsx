import React, { MouseEvent } from 'react'
import { IconType } from 'react-icons'

interface ButtonProps {
  label: string
  onClick: (e: MouseEvent<HTMLButtonElement>) => void
  disabled?: boolean
  outline?: boolean
  small?: boolean
  icon?: IconType
}
function Button({
  label,
  onClick,
  outline,
  disabled,
  small,
  icon: Icon,
}: ButtonProps) {
  return (
    <button
      className={`relative w-full rounded-lg p-6 transition hover:opacity-80 disabled:cursor-not-allowed disabled:opacity-70 
  ${outline ? 'bg-white' : 'bg-rose-500'}
  ${outline ? 'border-white' : 'border-rose-500'}
  ${outline ? 'text-black' : 'text-white'}
  `}
    >
      {label}
    </button>
  )
}

export default Button
