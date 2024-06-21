import { createContext, useState, useEffect } from "react";

import data from '../../assets/db.json';

const contextVideos = createContext()

function ContextProviderVideos ({children}) {
  let videosJson = data.videos;
  let gruposJson = data.grupos
  
  const [videos ,setVideos] = useState([])
  const [grupos ,setGrupos] = useState([])

  useEffect(() => {
    setVideos(videosJson)  
    setGrupos(gruposJson)      
  },[])

  return(
    <contextVideos.Provider value={{videos,setVideos,grupos}}  >
        {children}
    </ contextVideos.Provider>
  )
}

export {
  contextVideos,
  ContextProviderVideos
}