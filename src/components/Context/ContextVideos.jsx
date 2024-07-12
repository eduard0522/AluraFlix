import { createContext, useState, useEffect } from "react";
import Error from "../Errors/Error.jsx";

import { getGroups } from "../../api/groups.js";
import { getVideos}  from "../../api/videos.js";

const contextVideos = createContext()


function ContextProviderVideos ({children}) {

  const [videos ,setVideos] = useState([])
  const [grupos ,setGrupos] = useState([])
  const [openModalForm , setOpenModalForm] = useState(false)
  const [selectedVideo, setSelectedVideo] = useState(null)
  const [loading, setLoading] = useState(true)
  const [errors, setErrors] = useState([])
 
  let getData=  async () => {
      try {
        let grupos = await getGroups();
        let videos = await getVideos();

        if(grupos, videos){
          setGrupos(grupos);
          setVideos(videos);
          setLoading(false);
        }

        return "ok";
      } catch (error) {
        <Error message={error} />
      }
  }

  function ChangeStateModal() {
    return setOpenModalForm(!openModalForm)
  }


  useEffect(() => {
    getData();
  },[]);

  useEffect( () => {
    if( !loading ){
      if( videos.length  > 0 ) {  
      let defaultSelected = videos[0];
      let color = grupos.find( item => item.name == defaultSelected.group);
      setSelectedVideo({...defaultSelected, color: color.color});
    }}

  },[loading])

  function  updateSelectedVideo(video,color) {
    return setSelectedVideo({...video, color: color})
  }
  return(
    <contextVideos.Provider value={
      {videos,setVideos,grupos, openModalForm, ChangeStateModal,selectedVideo, updateSelectedVideo, errors,setErrors}}  >
        {children}
    </ contextVideos.Provider>
  )
}

export {
  contextVideos,
  ContextProviderVideos
}