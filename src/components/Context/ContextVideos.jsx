import { createContext, useState, useEffect } from "react";

import data from '../../assets/db.json';
import { getGroups } from "../../api/groups.js";

const contextVideos = createContext()

function ContextProviderVideos ({children}) {
  let videosJson = data.videos;


  let gruposJson =  async () => {
      try {
        let grupos = await getGroups()
        setGrupos(grupos);
        setLoading(false)
        return grupos;
      } catch (error) {
        console.log(error)
      }
  }


  const [videos ,setVideos] = useState([])
  const [grupos ,setGrupos] = useState([])
  const [openModalForm , setOpenModalForm] = useState(false)
  const [selectedVideo, setSelectedVideo] = useState(null)
  const [loading, setLoading] = useState(true)
 
  function ChangeStateModal() {
    return setOpenModalForm(!openModalForm)
  }

  useEffect(() => {
    setVideos(videosJson)  
    gruposJson();
  },[]);

  useEffect( () => {
    if( !loading ){

      let defaultSelected = grupos[0]
      setSelectedVideo({...defaultSelected, color: defaultSelected.color});
    }
  },[loading])

  function  updateSelectedVideo(video,color) {
    return setSelectedVideo({...video, color: color})
  }
  return(
    <contextVideos.Provider value={{videos,setVideos,grupos, openModalForm, ChangeStateModal,selectedVideo, updateSelectedVideo}}  >
        {children}
    </ contextVideos.Provider>
  )
}

export {
  contextVideos,
  ContextProviderVideos
}