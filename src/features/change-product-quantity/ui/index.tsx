import { Button } from '@/shared/ui/button'
import clsx from 'clsx'

interface ChangeProductQuantityProps {
  label: string
  className?: string
  onClick?: () => void
}

export const ChangeProductQuantity = ({
  label,
  className,
  onClick,
}: ChangeProductQuantityProps) => (
  <Button onClick={onClick} label={label} className={clsx('px-2', className)} />
)
