//import modules
import { Button } from '@/shared/ui/button'
import { NavigationLink } from './link'

//import icons
import Logo from './logo.png'

export const Header = () => {
  return (
    <header className="bg-black h-14 flex items-center justify-between px-20">
      <div>
        <img className="w-10" src={Logo} alt="logo" />
      </div>
      <nav className="text-white">
        <NavigationLink url="/shop" label="Shop" className="mr-20" />
        <NavigationLink url="/basket" label="Basket" />
      </nav>
    </header>
  )
}
