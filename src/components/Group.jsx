import ButtonTecnologi from "./Buttons/ButtonTecnologi"
import CardVideo from "./Card"
import { useContext } from "react"
import { contextVideos } from "./Context/ContextVideos"
function Group({group}) {
  const { videos} = useContext(contextVideos)
  return (
    <section className="flex flex-col">
       <ButtonTecnologi color={ group.color } titulo={group.name} />   
       <div className="flex flex-row mx-auto overflow-auto  gap-8 py-8 w-full md:justify-center">
           { videos.filter((video) => video.group === group.name).map(video => <CardVideo key={video.id} group={ group } />) }
       </div>
    </section>
  )
}

export default Group