import ButtonsCard from "./Buttons/ButtonsCard"
import { useContext } from "react"
import { contextVideos } from "./Context/ContextVideos"


function CardVideo({ group , video,scrollToSection,videosDates}) {
  const{updateSelectedVideo } = useContext(contextVideos)
  return(
        <div className=" min-w-[340px]   h-72 rounded-xl overflow-hidden  sm:max-w-96" onClick={() => { updateSelectedVideo(video,group.color) , scrollToSection(videosDates) } }>
            <div
              className= "w-full h-[218px]  bg-cover bg-no-repeat rounded-t-xl  border-4"
              style={{backgroundImage:`url(${video.image})`,
                borderColor:`${group.color}`, boxShadow:`inset 0px 0px 17px 8px ${group.color}`
              }}
            >                  
            </div>
            <ButtonsCard color={group.color} />
        </div>

  )
}

export default CardVideo