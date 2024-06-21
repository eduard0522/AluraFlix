import { useContext } from "react";
import { contextVideos } from "../Context/ContextVideos";
import { RiDeleteBin2Fill } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";



function ButtonsCard({color}) {
  const{ ChangeStateModal} =useContext(contextVideos)
  return(
    <div className="flex justify-evenly w-full h-[70px] text-whiteColor items-center border-4  border-t-0 rounded-b-xl text-xl"
        style={{borderColor:`${color}`}}>

          <button className="flex justify-between items-center gap-3">
              <RiDeleteBin2Fill className="text-3xl"/>
              <h3>BORRAR </h3>
          </button> 

          <button className="flex justify-between items-center gap-3" onClick={ChangeStateModal}>
             <FaEdit className="text-3xl"  />
              <h3> EDITAR </h3>
          </button>
         
    </div>
  )
}

export default ButtonsCard