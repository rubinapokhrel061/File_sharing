import { BrowserRouter, Route, Routes } from "react-router-dom";

import Upload from "./Upload";

import FileLink from "./FileLink";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Upload />}></Route>

        <Route path="/filelink" element={<FileLink />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
