import ButtonTecnologi from "./Buttons/ButtonTecnologi"
import CardVideo from "./CardVideo"
import { useContext } from "react"
import { contextVideos } from "./Context/ContextVideos"

function Group({group,scrollToSection,videosDates}) {
  const { videos} = useContext(contextVideos)
  return (
    <section className="md:text-center lg:text-left">
       <ButtonTecnologi color={group.color} titulo={group.name} />   
       <div className="flex flex-row mx-auto overflow-auto gap-8 py-8 w-full md:justify-center lg:justify-start ">
           { videos.filter((video) => video.group === group.name).map(video => <CardVideo key={video._id} group={ group } video={video} scrollToSection={scrollToSection} videosDates={videosDates}/>) }
       </div>
    </section>
  )
}

export default Group