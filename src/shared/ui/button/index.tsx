//import modules
import clsx from 'clsx'

interface ButtonProps {
  label: string
  className?: string
  onClick?(): void
}

export const Button = ({ label, className, onClick }: ButtonProps) => (
  <button
    onClick={onClick}
    className={clsx(
      'bg-white text-lg rounded-lg p-1 hover:bg-blue-200 active:bg-blue-300',
      className
    )}
  >
    {label}
  </button>
)
