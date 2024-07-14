import { contextVideos } from "../Context/ContextVideos";
import {  useContext, useEffect, useState } from "react";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { useForm , Controller} from "react-hook-form";
import { useParams , useNavigate } from "react-router-dom";
import { updateVideoRequest } from "../../api/videos";
import InputForm from "./InputUpdate";
import SelectForm from "./SelectForm";
import TextArea from "./TexttArea";
import ButtonShadowBlue from "../Buttons/ButtonShadowBlue";
import ButtonBorderWhite from "../Buttons/ButtonBorderWhithe";
import { getVideo } from "../../api/videos";

function ModalFormEdit() {

  const [video, setVideo] = useState(null);
  const { id } = useParams();
  const{ videos,setVideos,grupos, ChangeStateModal } = useContext(contextVideos);
  const { control, handleSubmit , reset} = useForm();
  const navigate = useNavigate();

  useEffect(() => {
    if(id){
      const data = async () => {
        const response = await getVideo(id);
        console.log(response)
        if(response) setVideo(response);
      }
      data();
    }
  },[]);

  const updateVideo = async ( data ) => {
     try {
      const update = await updateVideoRequest(id,data);
      if(update.error){
        alert("Ocurrio un error inesperado.");
      }
      if(update) {
        alert(" Video actualizado correctamente.");
        reset()
        ChangeStateModal(false);
        setVideos(videos.map((video) =>  video._id === id  ? update.data : video))
        navigate("/")
      }
    } catch (error) {
      console.log(error)
    } 
  }

  if(video !== null)
  return(
       <dialog open={true}  

       className="w-[95%]  mx-auto  bg-BluePoyectDark border-4 border-frontColor rounded-xl 
       p-2 py-6  fixed  left-0 right-0 top-[50%] translate-y-[-50%] max-w-[600px] md:px-16   md:w-4/5"> 

          <h2 className="text-center text-BluePoyect font-bold text-2xl  my-4 md:text-3xl lg:text-left"> EDITAR CARD: </h2>
          <form className="flex flex-col gap-2 items-center max-h-[80vh] overflow-auto"

            onSubmit={ handleSubmit((data) => updateVideo(data))} 
          >
              <Controller
                name="name"
                control={control}
                defaultValue= { video.name}
                render={ ({field}) => 
                  <InputForm label={"Título"} placeholder={"¿ Qué es JavaScript ?"}  {...field}  />
                }
              />
              
              <Controller
                name="image"
                defaultValue={video.image}
                control={control}
                render={ ({field}) => 
                  <InputForm label={"Imagen"} placeholder={"https://tuimagen.jpg"} {...field}  />
                }
              />
             
             <Controller
                name="group"
                defaultValue={video.group}
                control={control}
                render={ ({field}) => 
                  <SelectForm label={"Categorías"} opciones={ grupos} color={"#2271D1"}  {...field}  />
                }
              />
           
              <Controller
                name="videoUrl"
                defaultValue={video.videoUrl}
                control={control}
                render={ ({field}) => 
                  <InputForm label={"Video"} placeholder={"https://tuvideo.com"} {...field}  />
                }
              />

              <Controller
                name="description"
                defaultValue={video.description}
                control={control}
                render={ ({field}) => 
                  <TextArea label={"Descripción"} placeholder={"Ingresa alguna descripción"} color={"#2271D1"}  {...field} />
                }
              />

              <div className="flex flex-col  gap-4 items-center w-full md:flex-row  md:justify-between"  >
                  <ButtonShadowBlue type="submit" text={"GUARDAR"} />
                  <ButtonBorderWhite text={"LIMPIAR"} />
              </div>
          </form>
          <IoMdCloseCircleOutline className="absolute top-1 right-1 text-whiteColor text-3xl hover:cursor-pointer " onClick={() => ChangeStateModal() }/>
        </dialog> 
  )
}

export default ModalFormEdit