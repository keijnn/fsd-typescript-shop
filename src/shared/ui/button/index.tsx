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
      'bg-white text-gray-700 text-lg rounded-lg py-1 px-2 hover:bg-blue-200 active:bg-blue-300',
      className
    )}
  >
    {label}
  </button>
)
