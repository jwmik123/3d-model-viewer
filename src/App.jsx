import { useState, useEffect } from "react";
import "./App.css";
import UploadModel from "./components/UploadModel";
import ModelViewer from "./components/ModelViewer";

function App() {
  const [file, setFile] = useState(null);

  useEffect(() => {
    const storedModel = localStorage.getItem("uploadedModel");
    if (storedModel) {
      setFile(storedModel);
    }
  }, []);

  const handleFileUpload = (base64String) => {
    setFile(null);
    localStorage.setItem("uploadedModel", base64String);
    setTimeout(() => setFile(base64String), 0);
  };

  return (
    <>
      <div className="flex">
        <UploadModel onFileUpload={handleFileUpload} />
        {file && <ModelViewer base64Model={file} />}
      </div>
    </>
  );
}

export default App;
