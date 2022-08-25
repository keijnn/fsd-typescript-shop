interface InputProps {
    label: string
    className?: string
}

export const Input = ({label, className}:InputProps) => (
    <input placeholder={label} />
)