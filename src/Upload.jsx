import { useNavigate } from "react-router-dom";
import { UploadFile } from "./Api";
import "./index.css";
import { useEffect, useRef, useState } from "react";

const Upload = () => {
  const navigate = useNavigate();
  const [file, setFile] = useState("");
  const [result, setResult] = useState("");
  const [uploadClicked, setUploadClicked] = useState(false);
  const [err, setErr] = useState("");
  const fileInput = useRef();

  useEffect(() => {
    const getImage = async () => {
      if (file) {
        const data = new FormData();
        data.append("name", file.name);
        data.append("file", file);
        const response = await UploadFile(data);
        setResult(response.path);
      }
    };
    getImage();
  }, [file]);

  const onUploadFileClick = () => {
    fileInput.current.click();
    setUploadClicked(true);
  };

  const getLink = (e) => {
    if (uploadClicked) {
      navigate("/filelink", {
        replace: true,
        state: {
          result: result,
        },
      });
      console.log("Button 2 clicked!");
    } else {
      e.preventDefault();
      console.log("Button 1 must be clicked first!");
      setErr({
        message: "File is required!",
      });
    }
  };

  return (
    <>
      <div className="area">
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <div
        className="flex w-screen  flex-col items-center
    justify-center  gap-10 mx-auto h-screen text-wrap lg:py-0"
      >
        <div className="p-6 h-[20rem] w-[16rem] md:h-[24rem] md:w-[35rem]  rounded-xl bg-[#15004f] shadow-sm shadow-[#F8F9FA] space-y-4 md:space-y-6 sm:p-8">
          <br></br>

          <p className="text-white md:text-xl">
            Upload File and Share the Download link
          </p>
          <br />
          <div className="flex flex-col">
            <button
              className="w-[7rem] md:w-[10rem] h-10  bg-transparent hover:bg-[#231b74] text-sm md:text-xl font-semibold  py-1 px-3 border  border-blue-500  rounded-lg"
              onClick={onUploadFileClick}
            >
              {result ? "Uploded" : "Upload"}
            </button>
            <input
              type="file"
              name="file"
              ref={fileInput}
              style={{ display: "none" }}
              onChange={(e) => setFile(e.target.files[0])}
            />

            {err.message && (
              <span className="text-[#e74c3c] mt-2 text-[14px] inline">
                {err.message}
              </span>
            )}
          </div>

          <button
            onClick={getLink}
            className="w-[7rem] md:w-[10rem] h-10 mt-2 bg-transparent hover:bg-[#231b74] text-sm md:text-xl font-semibold  py-1 px-3 border  border-blue-500  rounded-lg"
          >
            Get Link
          </button>
        </div>
      </div>
    </>
  );
};

export default Upload;
