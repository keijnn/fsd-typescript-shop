//import modules
import clsx from 'clsx'
import { Link, useLocation } from 'react-router-dom'

interface NavigationLinkProps {
  url: string
  label: string
  className?: string
}

export const NavigationLink = ({ url, label, className }: NavigationLinkProps) => {
  const activeUrl = useLocation()
  return (
    <>
      <Link
        className={clsx(
          'text-xl hover:text-blue-200',
          {
            ['text-blue-200']: activeUrl.pathname === url,
          },
          className
        )}
        to={url}
      >
        {label}
      </Link>
    </>
  )
}
