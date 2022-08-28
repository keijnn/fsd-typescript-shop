import clsx from "clsx"
import { ChangeEvent } from "react"

interface InputProps {
  label: string
  className?: string
  onChange?: (event: ChangeEvent<HTMLInputElement>) => string
}

export const Input = ({ label, className, onChange }: InputProps) => (
  <input
    className={clsx('h-10 outline-none px-2 rounded-md', className)}
    onChange={onChange}
    placeholder={label}
  />
)