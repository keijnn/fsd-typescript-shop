//import modules
import { Button } from '@/shared/ui/button'
import clsx from 'clsx'

interface ProductProps {
  title: string
  description?: string
  category: string
  price: number
  rating?: { rate: number; count: number }
  className?: string
}

export const ProductCard = (props: ProductProps) => {
  const { title, category, price, className } = props

  return (
    <div
      className={clsx(
        'flex text-gray-700 flex-col justify-between items-center rounded-md p-6 bg-gray-300',
        className
      )}
    >
      <h1>{title}</h1>
      <div className="flex justify-between w-full">
        <p>{category}</p>
        <p>{price} $</p>
      </div>
      <Button label="Add to basket" className="p-1 text-gray-800" />
    </div>
  )
}
