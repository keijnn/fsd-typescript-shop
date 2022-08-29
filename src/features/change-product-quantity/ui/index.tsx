//import modules
import clsx from 'clsx'

//import components
import { Button } from '@/shared/ui/button'

//import models
import { productCountIncremented, productCountDecremented } from '../model'

interface ChangeProductQuantityProps {
  id: number
  label: string
  className?: string
}

export const ChangeProductQuantity = ({
  id,
  label,
  className,
}: ChangeProductQuantityProps) => (
  <Button
    onClick={() =>
      label === '+' ? productCountIncremented(id) : productCountDecremented(id)
    }
    label={label}
    className={clsx('px-2', className)}
  />
)
