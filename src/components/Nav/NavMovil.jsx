import { Link } from 'react-router-dom'

import  ButtonHomeMovil  from "../Buttons/ButtonHomeMovil";
import { MdAddCircleOutline } from "react-icons/md";

function NavMovil() {
  return(
    
    <nav className="w-full h-20 bg-black flex items-center justify-around border-t-4 border-BluePoyect ">

        <Link to="/">
              <ButtonHomeMovil />
        </Link>
        <Link to="/agregarvideo">
            <MdAddCircleOutline  className="text-whiteColor text-5xl"/>
        </Link>
      
    </nav>
  )
}

export default NavMovil