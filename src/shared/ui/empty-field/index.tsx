//import modules
import clsx from 'clsx'

interface EmptyFieldProps {
    className?: string
}

export const EmptyField = ({className}: EmptyFieldProps) => (
  <div className={clsx('flex justify-center items-center', className)}>
    <h1 className="text-xl font-extrabold">Empty</h1>
  </div>
)
