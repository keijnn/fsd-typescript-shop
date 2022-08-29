//import modules
import clsx from "clsx"
import { ChangeEvent } from "react"

interface InputProps {
  label: string
  className?: string
  onChange?: (event: ChangeEvent<HTMLInputElement>) => string
  value: string
}

export const Input = ({ label, className, onChange, value }: InputProps) => (
  <input
    className={clsx('h-10 outline-none px-2 rounded-md', className)}
    onChange={onChange}
    placeholder={label}
    value={value}
  />
)