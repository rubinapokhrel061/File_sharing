import axios from "axios";
export const UploadFile = async (data) => {
  try {
    const response = await axios.post(
      "https://file-sharing-serverside.onrender.com/uploadfile",
      data
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
