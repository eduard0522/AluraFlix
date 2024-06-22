import { Link } from 'react-router-dom'

import Logo from '/Logo.svg'


function HeaderMovil() {
  return(
    <Link to="/">
        <div className='w-full h-16 bg-black flex items-center justify-center border-b-4 border-BluePoyect shadow-[inset_2px_0px_17px_1px_#2271D1]'> 
           <img src={Logo} alt="Logo aluraflix" className='w-2/5' />
        </div>
    </Link>
  )
}

export default HeaderMovil