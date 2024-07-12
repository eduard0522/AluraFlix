import axios from "./axios.js";

export const getGroups = async  ()  => {
  try {
     const response = await axios.get('/groups');
     return response.data;
  } catch (error) {
     throw new Error("An unexpected error ocurred.")
  }
}

