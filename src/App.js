import { UploadFile } from "./Api";
import "./index.css";
import { useEffect, useRef, useState } from "react";

function App() {
  const [file, setFile] = useState("");
  const [result, setResult] = useState("");

  const fileInput = useRef();

  const handleCopy = () => {
    navigator.clipboard.writeText(result);
    alert("Copied");
  };

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
  };

  return (
    <div
      className="flex w-screen  flex-col items-center
    justify-center  gap-10 mx-auto h-screen text-wrap lg:py-0"
    >
      <h1 className="font-bold text-2xl "> File Sharing </h1>
      <div className="p-6 h-[20rem] w-[16rem] md:h-[24rem] md:w-[35rem] overflow- rounded-xl bg-[#f4eeee] shadow-md shadow-[#F8F9FA] space-y-4 md:space-y-6 sm:p-8">
        <p className="text-black">Upload File and Share the Download link</p>
        <button
          className="w-[7rem] md:w-[10rem] h-10  bg-transparent hover:bg-[#a1b9dc] text-sm md:text-xl font-semibold  py-1 px-3 border  border-blue-500 hover:border-transparent rounded-lg"
          onClick={onUploadFileClick}
        >
          Upload
        </button>
        <input
          type="file"
          name="file"
          ref={fileInput}
          style={{ display: "none" }}
          onChange={(e) => setFile(e.target.files[0])}
        />
        {/* <input value={copyText} onChange={(e)=>setCopyText(e.target.value)} /> */}

        <div className="pt-3  break-words after:duration-100 after:invisible ">
          <a href={result} target="_blank">
            {result}
          </a>
          <button onClick={handleCopy}>Copy</button>
        </div>
      </div>
    </div>
  );
}

export default App;
