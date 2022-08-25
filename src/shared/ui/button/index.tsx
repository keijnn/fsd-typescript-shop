//import modules
import clsx from 'clsx'

interface ButtonProps {
  label: string
  className?: string
}

export const Button = ({ label, className }: ButtonProps) => (
  <button
    className={clsx(
      'bg-white text-xl rounded-lg hover:bg-blue-200 active:bg-blue-300',
      className
    )}
  >
    {label}
  </button>
)
