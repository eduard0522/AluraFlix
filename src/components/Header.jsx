import ButtonShadowBlue from './Buttons/ButtonShadowBlue'
import ButtonBorderWhite from './Buttons/ButtonBorderWhithe'
import Logo from '/Logo.svg'
import { NavLink , Link } from 'react-router-dom'

function Header() {
  return(
    <header
      className='w-full px-8 py-6 bg-black flex items-center justify-between border-b-4 border-BluePoyect shadow-[inset_2px_0px_17px_1px_#2271D1]'> 
        <Link to="/">
            <img src={Logo}
                alt="Logo aluraflix" 
                className='w-[200px]'
            />
        </Link>

        <nav className='flex justify-center gap-8'>
            <NavLink to= "/" >
                <ButtonShadowBlue  text={"HOME"}/>
            </NavLink> 
            <NavLink to="/agregarvideo" >
                <ButtonBorderWhite  text={"NUEVO VIDEO"}/>
            </NavLink>
        </nav>
    </header>
  )
}

export default Header