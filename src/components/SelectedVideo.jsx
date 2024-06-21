import ButtonTecnologi from "./Buttons/ButtonTecnologi"
import { forwardRef, useContext } from "react"
import { contextVideos } from "./Context/ContextVideos"

function  SelectedVideo(props,ref) {
      const{ selectedVideo } = useContext(contextVideos)
      const video = selectedVideo
      
      {if (video){
        return(
          <section  ref={ref} className="bg-[url('./fondo.png')]  w-full md:min-h-[40vh] lg:h-[100vh]  bg-cover bg-no-repeat relative flex items-center">

             
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-BluePoyectOpasity "> </div>  
         
          <div className="w-full  lg:h-1/2  flex justify-evenly  relative  p-4">
              <div className="w-1/2 h-full flex flex-col  gap-4 lg:gap-10 text-whiteColor  justify-between items-start"> 
                <ButtonTecnologi titulo={video.group} color={ video.color } />
                <h2 className="  text-3xl lg:text-5xl font-bold"> { video.name}</h2>
                <p className=" lg:text-xl"> {video.description} </p>
              </div>
              <div className="border-4  sm:w-[400px] lg:w-[500px]  lg:h-[350px]  rounded-xl bg-cover bg-no-repeat" 
                  style={{backgroundImage:`url(${video.image})`,  borderColor:`${video.color}`, boxShadow:`inset 0px 0px 17px 8px ${video.color} `}}>
              </div>
          </div>
        </section>
       ) }else{
        return <h1> No hay video seleccionado</h1>
      }
       
      }
      
  }
    

export default  forwardRef(SelectedVideo)