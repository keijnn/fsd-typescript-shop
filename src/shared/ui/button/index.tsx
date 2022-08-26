//import modules
import { Product } from '@/shared/api/products'
import clsx from 'clsx'

interface ButtonProps {
  label: string
  className?: string
  onCLick?(): void
}

export const Button = ({ label, className }: ButtonProps) => {

  return (
    <button
      className={clsx(
        'bg-white text-lg rounded-lg hover:bg-blue-200 active:bg-blue-300',
        className
      )}
    >
      {label}
    </button>
  )
}



