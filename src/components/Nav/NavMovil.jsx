import ButtonHomeMovil from "../Buttons/ButtonHomeMovil"
import { MdAddCircleOutline } from "react-icons/md";
function NavMovil() {
  return(
    <nav className="w-full h-20 bg-black flex items-center justify-around border-t-4 border-BluePoyect ">
     <ButtonHomeMovil />
     <MdAddCircleOutline  className="text-whiteColor text-5xl"/>
    </nav>
  )
}

export default NavMovil
