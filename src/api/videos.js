import axios from "./axios.js";

export const getVideos =  async () => {

  try {
    const videos = await axios.get("/api");
    if(!videos)   throw new Error("An unexpected error ocurred.");
    return videos.data
  } catch (error) {
    return error.response
  }
}

export const getVideo =  async (id) => {

  try {
    const video = await axios.get(`/api/${id}`);
    if(!video)   throw new Error("An unexpected error ocurred.");
    return video.data
  } catch (error) {
    return error
  }
} 

export const createVideo = async (data) => {
  try {
    const video = await axios.post("/api",data);
    console.log(video)
    return video.data
  } catch (error) {
    return error.response
  }
}

export const updateVideoRequest =  async (id, data) => {
  try {
    const video  = await axios.put(`/api/${id}`, data);
    if( video.status === 404){
      return video
    }
    return video
  } catch (error) {
    return error
  }
}


export const deleteVideo = async (id) => {
  try {
    const deleteVideo = await axios.delete(`/api/${id}`);
    return deleteVideo.data
  } catch (error) {
    return error
  }
}
