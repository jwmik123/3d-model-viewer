import React from "react";

const UploadModel = () => {
  const handleFileChange = (event, fileType) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const base64String = e.target.result;
        // Distinguishing between model and texture for storage
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
    <div className="flex flex-col h-screen gap-10">
      <div className="shadow-xl card w-96 bg-base-100">
        <div className="card-body">
          <h2 className="card-title">Upload a 3D model</h2>
          <div className="justify-end card-actions">
            <input
              type="file"
              className="w-full max-w-xs file-input"
              onChange={(e) => handleFileChange(e, "model")}
              accept=".glb"
            />
          </div>
        </div>
      </div>
      <div className="shadow-xl card w-96 bg-base-100">
        <div className="card-body">
          <h2 className="card-title">Upload your bake</h2>
          <p>We support .jpg / .png / .webg</p>
          <div className="justify-end card-actions">
            <input
              type="file"
              className="w-full max-w-xs file-input"
              onChange={(e) => handleFileChange(e, "texture")}
              accept=".jpg,.png,.webp"
            />
          </div>
        </div>
      </div>
      <div className="shadow-xl card w-96 bg-base-100">
        <div className="card-body">
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
            <span>Refresh the page after uploading an object!</span>
          </div>
          <p>
            This tool is made to view and test your baked images on your
            objects.
          </p>
        </div>
      </div>
    </div>
  );
};

export default UploadModel;
