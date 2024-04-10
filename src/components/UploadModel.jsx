import React from "react";

const UploadModel = ({ onFileUpload }) => {
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const base64String = e.target.result;
        localStorage.setItem("uploadedModel", base64String);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex flex-col">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Upload a 3D model in .GLB format.</h2>
          <p className="text-slate-400">We only allow .glb files for now</p>
          <p className="text-red-500">
            Refresh the page after uploading a new file!
          </p>
          <div className="card-actions justify-end">
            <input
              type="file"
              className="file-input w-full max-w-xs"
              onChange={handleFileChange}
              accept=".glb"
            />
          </div>
        </div>
      </div>

      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Upload your bake</h2>
          <p>We support .jpg / .png / .webg</p>
          <div className="card-actions justify-end">
            <input
              type="file"
              className="file-input w-full max-w-xs"
              onChange={handleFileChange}
              accept=".glb"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadModel;
