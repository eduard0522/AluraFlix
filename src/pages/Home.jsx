import { contextVideos } from "../components/Context/ContextVideos"
import Group from "../components/Group"
import { useContext } from "react"
import ModalFormEdit from "../components/ModalForm/ModalForm"
import BackgroundOpacity from "../components/BackgroundOpasity"
import SelectedVideo from "../components/SelectedVideo"
import { useRef } from "react";
import useWindowDimensions from "../Hooks/useWindowDimensions"



function  Home() {
  const{ grupos } = useContext(contextVideos)
  const{ openModalForm } = useContext(contextVideos)
  const {width} = useWindowDimensions()
  const videosDates = useRef(null)

  const scrollToSection = (sectionRef) => {
    if(width > 680 )  return sectionRef.current.scrollIntoView({ behavior: 'smooth' })
  };
  return(
  <>
    <main className="bg-GrayColor-900 min-h-[100vh]  w-full py-8 md:py-0">

        { width > 620 &&  <SelectedVideo ref={videosDates}  /> }
        { openModalForm && <BackgroundOpacity/> }
        <div className="w-full  px-4 py-8">
            {grupos.map( grupo =>  <Group key={grupo._id} group={grupo}  scrollToSection={scrollToSection} videosDates={videosDates}/>)}
        </div>
        <ModalFormEdit />
    </main>
  </>
    )
}

export default Home