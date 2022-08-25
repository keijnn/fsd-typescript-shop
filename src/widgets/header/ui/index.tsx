//import modules
import { NavigationLink } from './link'

//import icons
import Logo from './logo.png'

export const Header = () => {
  return (
    <header className="bg-[#f0eeeb] h-16 sticky top-0 w-full flex items-center justify-between px-20">
      <div>
        <img className="w-10" src={Logo} alt="logo" />
      </div>
      <nav className="font-semibold text-gray-500">
        <NavigationLink url="/shop" label="Shop" className="mr-20" />
        <NavigationLink url="/basket" label="Basket" />
      </nav>
    </header>
  )
}
