import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./index.css";
const FileLink = () => {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(location.state.result);
    setCopied(!copied);
  };
  const handleBackButton = () => {
    navigate("/");
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
        <div className="p-6 h-[20rem] w-[16rem] md:h-[24rem] md:w-[35rem]  text-wrap rounded-xl bg-[#15004f] shadow-sm shadow-[#F8F9FA] space-y-4 md:space-y-6 sm:p-8">
          <br></br>
          <div className="text-wrap break-words">
            <a href={location.state.result} target="_blank">
              {location.state.result}
            </a>
          </div>
          <button
            onClick={handleCopy}
            className={`bg-blue-500 text-white w-[7rem] md:w-[10rem] h-10 px-4 py-2 rounded  ${
              copied ? "bg-green-500" : "hover:bg-blue-600"
            }`}
          >
            {copied ? "Copied!" : "Copy"}
          </button>

          <br />

          <button
            onClick={handleBackButton}
            className="w-[7rem] md:w-[10rem] h-10  bg-transparent hover:bg-[#231b74] text-sm md:text-xl font-semibold  py-1 px-3 border  border-blue-500  rounded-lg"
          >
            back button
          </button>
        </div>
      </div>
    </>
  );
};

export default FileLink;
