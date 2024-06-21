import InputForm from "./Input"
import SelectForm from "./SelectForm"
import { contextVideos } from "../Context/ContextVideos"
import {  useContext } from "react"
import TextArea from "./TexttArea"
import ButtonSaveForm from "../Buttons/ButtonSaveForm"

function ModalFormEdit() {
  const{ grupos } = useContext(contextVideos)
  return(
  <dialog open={true}  className="w-full  bg-BluePoyectDark border-4 border-frontColor rounded-xl p-4 absolute left-0 right-0 top-4"> 
      <h2 className="text-center text-whiteColor font-bold text-2xl "> EDITAR CARD: </h2>
      <form className="flex flex-col gap-4">
        <InputForm titulo={"Título"} placeholder={"¿ Qué es JavaScript ?"} />
        <SelectForm titulo={"Categorías"} opciones={ grupos} />
        <InputForm titulo={"Imagen"} placeholder={"https://tuimagen.jpg"}/>
        <InputForm titulo={"Video"} placeholder={"https://tuvideo.com"} />
        <TextArea titulo={"Descripción"} placeholder={"Ingresa alguna descripción"}/>
        <ButtonSaveForm />
      </form>
  </dialog> 
  )
}

export default ModalFormEdit