import { useContext, useEffect } from "react";
import { contextVideos } from "../components/Context/ContextVideos";
import { useForm , Controller} from "react-hook-form";
import { createVideo } from "../api/videos.js";


import InputAdd from "../components/ModalForm/InputAdd";
import SelectForm from "../components/ModalForm/SelectForm";
import TextArea from '../components/ModalForm/TexttArea' 
import ButtonShadowBlue from "../components/Buttons/ButtonShadowBlue";
import ButtonBorderWhithe from  "../components/Buttons/ButtonBorderWhithe"

function FormAddVideo() {

  const{grupos, videos,setVideos, errors: ERRORS , setErrors} = useContext(contextVideos);

  const {control , handleSubmit , formState : {  errors }, reset} = useForm();

  const newVideo = async (data) => {
    try {
      const video = await createVideo(data);
      if(video.status == 400 || video.status == 500){
        setErrors(video.data.message)
      }
      console.log(video.newVideo)
        setVideos([...videos, video.newVideo])
        alert(" Usuario creado exitosamente.");
        reset()
    } catch (error) {
      setErrors([error.message])
    }
  }


  useEffect(() => {
    const time  = setTimeout(() => {
      setErrors([]);
    },3000);

    return () => clearTimeout(time);
  },[errors])

  return(
    <form className="mt-12 flex flex-col gap-6 mx-auto md:w-[70%] lg:w-[50%] max-w-[600px] " 
     onSubmit={handleSubmit((data)=> newVideo(data))} >
      {
        ERRORS.length > 0  && <div>
            {ERRORS.map( (error, i)  => {
                return <div className="bg-red-500 text-white text-center p-2  mt-2  rounded"  key={i} >
                <p className="p-2" > {error}</p>
               </div>
            })}
        </div>
      }

      <h3 className="text-3xl font-medium border-y-2 border-gray-300 py-3"> Crear Tarjeta </h3>

      <Controller 
          name="name"
          control={control}
          rules={{required:" El campo título es requerido", minLength: {value:3, message: "El campo título debe contener minimo 3 caracteres." } }} 
          defaultValue=""
          render={({ field }) => 
            <InputAdd  {...field}  error={errors.name} placeholder="Ingrese un título"  label="Título"/>
          }>
        </Controller>
    
      <Controller
          name="group"
          control={control}
          rules={{required:" El campo grupo es requerido", minLength: {value:3, message: "El campo grupo debe contener minimo 3 caracteres." } }} 
          defaultValue=""

          render={({ field }) =>
        <SelectForm label="Grupo" opciones={ grupos } color="#e5dddd"  {...field}  error={errors.group}/>
        }>
        </Controller>

      <Controller
        name="image"
        control={control}
        rules={{required:" El campo imagen es requerido", minLength: {value:3, message: "El campo imagen debe contener minimo 3 caracteres." } }} 
        defaultValue=""
        render={({ field }) =>
          <InputAdd  label="Imagen"  placeholder="https://tuimagen.jpg" {...field} error={errors.image}/>
        }>
      </Controller>

    
      <Controller
        name="videoUrl"
        control={control}
        defaultValue=""
        rules={{required:" El campo video es requerido", minLength: {value:3, message: "El campo video debe contener minimo 3 caracteres." } }} 
        render={({ field }) =>
          <InputAdd  label="Video"  placeholder="https://tuvideo.com" {...field}  error={errors.videoUrl}/>
      }>
      </Controller>
      
  
      <Controller 
        name="description"
        control={control}
        defaultValue=""
        rules={{required:" El campo descripción es requerido", minLength: {value:3, message: "El campo descripción debe contener minimo 3 caracteres." } }} 
        render={({ field }) =>
          <TextArea label="Descripción" placeholder="Ingresa una descripción para el video" color="e5dddd" {...field} error={errors.Description}/>
      }>

      </Controller>
      
      <div className="flex flex-wrap  gap-4  justify-center md:justify-between items-center">
          <ButtonShadowBlue type="submit" text="Guardar"/>
          <ButtonBorderWhithe   text="Limpiar"/>
      </div>
 </form>
  )
}

export default FormAddVideo