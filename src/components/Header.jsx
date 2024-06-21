import ButtonShadowBlue from './Buttons/ButtonShadowBlue'
import ButtonBorderWhite from './Buttons/ButtonBorderWhithe'
import Logo from '/Logo.svg'
function Header() {
  return(
    <header
     className='w-full px-8 py-6 bg-black flex items-center justify-between border-b-4 border-BluePoyect shadow-[inset_2px_0px_17px_1px_#2271D1]'> 
        <img src={Logo} alt="Logo aluraflix" className='w-[200px]' />
        <nav className='flex justify-center gap-8'>
            <ButtonShadowBlue  text={"HOME"}/>
            <ButtonBorderWhite  text={"NUEVO VIDEO"}/>
        </nav>
    </header>
  )
}

export default Header