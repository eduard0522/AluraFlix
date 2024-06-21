import { contextVideos } from "../components/Context/ContextVideos"
import Group from "../components/Group"
import NavMovil from "../components/Nav/NavMovil"
import HeaderMovil from "../components/HeaderMovil"
import { useContext } from "react"
import useWindowDimensions from "../Hooks/useWindowDimensions"
import ModalFormEdit from "../components/ModalForm/ModalForm"



function  Home() {
  const{ grupos } = useContext(contextVideos)
  const { width } = useWindowDimensions();

  return(
    <main className="pt-8  bg-GrayColor-900 min-h-[100vh]  w-full">
      <div className="w-full  px-4">
           {grupos.map( grupo =>  <Group key={grupo.id} group={grupo} />)}
      </div>
      
        <ModalFormEdit />
        { width < 620 && <NavMovil />}
    </main>
    )
}

export default Home