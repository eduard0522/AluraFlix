import axios from "./axios.js";

export const getVideos =  async () => {

  try {
    const videos = await axios.get("/");
    if(!videos)   throw new Error("An unexpected error ocurred.");
    return videos.data
  } catch (error) {
    return error.response
  }
}

export const createVideo = async (data) => {
  try {
    const video = await axios.post("/",data);
    console.log(video)
    return video.data
  } catch (error) {
    return error.response
  }
}

export const deleteVideo = async (id) => {
  try {
    const deleteVideo = await axios.delete(`/${id}`);
    return deleteVideo.data
  } catch (error) {
    return error
  }
}
