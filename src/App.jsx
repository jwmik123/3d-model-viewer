import { useState } from "react";
import "./App.css";
import UploadModel from "./components/UploadModel";
import ModelViewer from "./components/ModelViewer";

function App() {
  const [file, setFile] = useState(null);
  const [texture, setTexture] = useState(null);

  const handleModelUpload = (fileData) => {
    setFile(fileData); // Update the file data directly
  };

  const handleTextureUpload = (textureData) => {
    setTexture(textureData); // Update the texture data directly
  };

  return (
    <>
      <div className="flex">
        <UploadModel
          onModelUpload={handleModelUpload}
          onTextureUpload={handleTextureUpload}
        />
        {file ? (
          <ModelViewer
            key={file + texture} // key helps React identify the component instances
            base64Model={file}
            base64Texture={texture}
          />
        ) : (
          <div className="min-h-screen cursor-grab hero bg-base-200">
            <h1 className="text-2xl">Please upload a 3D model</h1>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
