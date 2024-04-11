import { useState, useEffect } from "react";
import "./App.css";
import UploadModel from "./components/UploadModel";
import ModelViewer from "./components/ModelViewer";

function App() {
  const [file, setFile] = useState(null);
  const [texture, setTexture] = useState(null);

  useEffect(() => {
    const storedModel = localStorage.getItem("uploadedModel");
    const storedTexture = localStorage.getItem("uploadedTexture");
    if (storedModel) {
      setFile(storedModel);
    }
    if (storedTexture) {
      setTexture(storedTexture);
    }
  }, []);

  const handleModelUpload = (base64String) => {
    setFile(null); // Reset file state to trigger re-render
    localStorage.setItem("uploadedModel", base64String);
    setTimeout(() => setFile(base64String), 0); // Update state after clear
  };

  const handleTextureUpload = (base64String) => {
    setTexture(null); // Reset texture state to trigger re-render
    localStorage.setItem("uploadedTexture", base64String);
    setTimeout(() => setTexture(base64String), 0); // Update state after clear
  };

  // Update the UploadModel component's onFileUpload prop usage accordingly
  return (
    <>
      <div className="flex">
        <UploadModel
          onModelUpload={handleModelUpload}
          onTextureUpload={handleTextureUpload}
        />
        {file && (
          <ModelViewer
            key={file + texture}
            base64Model={file}
            base64Texture={texture}
          />
        )}
      </div>
    </>
  );
}

export default App;
