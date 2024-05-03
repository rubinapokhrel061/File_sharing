import axios from "axios";
export const UploadFile = async (data) => {
  try {
    const response = await axios.post("http://localhost:5000/uploadfile", data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
