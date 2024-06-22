import { contextVideos } from "../Context/ContextVideos";
import {  useContext } from "react";
import { IoMdCloseCircleOutline } from "react-icons/io";
import InputForm from "./InputUpdate";
import SelectForm from "./SelectForm";
import TextArea from "./TexttArea";
import ButtonShadowBlue from "../Buttons/ButtonShadowBlue";
import BuuttonBorderWhite from "../Buttons/ButtonBorderWhithe";
import ButtonBorderWhite from "../Buttons/ButtonBorderWhithe";

function ModalFormEdit() {

  const{ grupos,openModalForm, ChangeStateModal } = useContext(contextVideos)
  return(
       <dialog open={openModalForm}  
       className="w-[95%]  mx-auto  bg-BluePoyectDark border-4 border-frontColor rounded-xl 
       p-2 py-6  fixed  left-0 right-0 top-[50%] translate-y-[-50%] max-w-[600px] md:px-16   md:w-4/5"> 
          <h2 className="text-center text-BluePoyect font-bold text-2xl  my-4 md:text-3xl lg:text-left"> EDITAR CARD: </h2>
          <form className="flex flex-col gap-2 items-center max-h-[80vh] overflow-auto ">
              <InputForm titulo={"Título"} placeholder={"¿ Qué es JavaScript ?"} />
              <SelectForm titulo={"Categorías"} opciones={ grupos} color={"#2271D1"} />
              <InputForm titulo={"Imagen"} placeholder={"https://tuimagen.jpg"}/>
              <InputForm titulo={"Video"} placeholder={"https://tuvideo.com"} />
              <TextArea titulo={"Descripción"} placeholder={"Ingresa alguna descripción"} color={"#2271D1"}/>
              <div className="flex flex-col  gap-4 items-center w-full md:flex-row  md:justify-between">
                  <ButtonShadowBlue text={"GUARDAR"} />
                  <ButtonBorderWhite text={"LIMPIAR"} />
              </div>
             
          </form>
          <IoMdCloseCircleOutline className="absolute top-1 right-1 text-whiteColor text-3xl hover:cursor-pointer " onClick={() => ChangeStateModal() }/>
        </dialog> 
  )
}

export default ModalFormEdit