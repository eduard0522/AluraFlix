import { useContext } from "react";
import { contextVideos } from "../components/Context/ContextVideos";

/****  Components Design  ******/
import InputAdd from "../components/ModalForm/InputAdd";
import SelectForm from "../components/ModalForm/SelectForm";
import TextArea from '../components/ModalForm/TexttArea' 
import ButtonShadowBlue from "../components/Buttons/ButtonShadowBlue";
import ButtonBorderWhithe from  "../components/Buttons/ButtonBorderWhithe"


function FormAddVideo() {

  const{grupos} = useContext(contextVideos)
  
  return(
    <form className="mt-12 flex flex-col gap-6 mx-auto md:w-[70%] lg:w-[50%] max-w-[600px] " >

      <h3 className="text-3xl font-medium border-y-2 border-gray-300 py-3"> Crear Tarjeta </h3>

      <InputAdd  titulo="Titulo" placeholder="Ingrese un titulo para la tarjeta"/>

      <SelectForm titulo="Categorías" opciones={ grupos} color="#e5dddd" />

      <InputAdd  titulo="Imagen" placeholder="https://tuimagen.jpg"/>

      <InputAdd  titulo="Video" placeholder="https://tuvideo.com"/>

      <TextArea titulo="descripcion" placeholder="Ingresa una descripción para el video" color="e5dddd"/>

      <div className="flex flex-wrap  gap-4  justify-center md:justify-between items-center">
          <ButtonShadowBlue text="Guardar"/>
          <ButtonBorderWhithe  text="Limpiar"/>
      </div>
 </form>
  )
}

export default FormAddVideo