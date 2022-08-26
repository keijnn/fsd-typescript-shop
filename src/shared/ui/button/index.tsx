//import modules
import { Product } from '@/shared/api/products'
import clsx from 'clsx'

interface ButtonProps {
  label: string
  className?: string
  buttonClicked?: () => Product
}

export const Button = ({ label, className, buttonClicked }: ButtonProps) => {

  return (
    <button
      onClick={buttonClicked}
      className={clsx(
        'bg-white text-lg rounded-lg hover:bg-blue-200 active:bg-blue-300',
        className
      )}
    >
      {label}
    </button>
  )
}



