import { createContext, useState, useEffect } from "react";

import data from '../../assets/db.json';

const contextVideos = createContext()

function ContextProviderVideos ({children}) {
  let videosJson = data.videos;
  let gruposJson = data.grupos
  
  const [videos ,setVideos] = useState([])
  const [grupos ,setGrupos] = useState([])
  const [openModalForm , setOpenModalForm] = useState(false)
  const [selectedVideo, setSelectedVideo] = useState(null)
 
  function ChangeStateModal() {
    return setOpenModalForm(!openModalForm)
  }

  useEffect(() => {
    setVideos(videosJson)  
    setGrupos(gruposJson)

    let defaultSelected = videosJson.find( video => video.id === 1)
    let color = gruposJson.find( grupo => grupo.name === defaultSelected.group)
    setSelectedVideo({...defaultSelected, color: color.color})
  },[])

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