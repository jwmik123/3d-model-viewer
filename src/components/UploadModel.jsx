import React from "react";

const UploadModel = () => {
  const handleFileChange = (event, fileType) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const base64String = e.target.result;
        if (fileType === "model") {
          localStorage.setItem("uploadedModel", base64String);
        } else if (fileType === "texture") {
          localStorage.setItem("uploadedTexture", base64String);
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
      <li>
        {" "}
        <div role="alert" className="alert alert-warning">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 stroke-current shrink-0"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
          <span>Refresh the page after uploading an object or texture.</span>
        </div>
      </li>
    </ul>
  );
};

export default UploadModel;
