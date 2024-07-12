import { useContext } from "react";
import { contextVideos } from "../Context/ContextVideos";
import { RiDeleteBin2Fill } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";
import { deleteVideo } from "../../api/videos";
function ButtonsCard({color, id}) {

  const deleteVideoRequest = async (id) => {

    const sendRquest = await deleteVideo(id);
    if(sendRquest) setVideos([videos.map(video => video._id !== id)])
    console.log(sendRquest)
  }
  const{ ChangeStateModal, setVideos, videos} = useContext(contextVideos)
  return(
    <div className="flex justify-evenly w-full h-[70px] text-whiteColor items-center border-4  border-t-0 rounded-b-xl text-xl"
        style={{borderColor:`${color}`}}>

          <button className="flex justify-between items-center gap-3" onClick={ () => deleteVideoRequest(id)}>
              <RiDeleteBin2Fill className="text-3xl"/>
              <h3> BORRAR </h3>
          </button> 

          <button className="flex justify-between items-center gap-3" onClick={ChangeStateModal}>
             <FaEdit className="text-3xl"  />
              <h3> EDITAR </h3>
          </button>
         
    </div>
  )
}

export default ButtonsCard