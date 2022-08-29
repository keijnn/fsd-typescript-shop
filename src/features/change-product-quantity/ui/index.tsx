import { Button } from '@/shared/ui/button'
import {
  productCountIncremented,
  productCountDecremented,
} from '@/features/change-product-quantity/model'

import clsx from 'clsx'

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
