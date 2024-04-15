import React, { useState } from "react";

const UploadModel = ({ onModelUpload, onTextureUpload }) => {
  const handleFileChange = (event, fileType) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const fileResult = e.target.result;
        if (fileType === "model") {
          onModelUpload(fileResult);
        } else if (fileType === "texture") {
          onTextureUpload(fileResult);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <ul className="divide-y-2 menu bg-base-100">
      <li className="flex">
        <h2 className="text-xl font-bold">Upload a 3D model</h2>
        <p>Supported .glb / .gltf</p>
        <div className="">
          <input
            type="file"
            className="w-full max-w-xs file-input"
            onChange={(e) => handleFileChange(e, "model")}
            accept=".glb"
          />
        </div>
      </li>
      <li className="flex flex-col">
        <h2 className="text-xl font-bold">Upload your Baked Texture</h2>
        <p>Supported .jpg / .png / .webg</p>
        <div className="">
          <input
            type="file"
            className="w-full max-w-xs file-input"
            onChange={(e) => handleFileChange(e, "texture")}
            accept=".jpg,.png,.webp"
          />
        </div>
      </li>
    </ul>
  );
};

export default UploadModel;
