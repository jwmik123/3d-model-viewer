# 3D Model Viewer Project

## Description

This project is a React application that enables users to view 3D models in the browser. It uses `three.js` and `@react-three/fiber` for rendering 3D content. Users can upload 3D models and textures, which are then displayed in an interactive viewer with orbit controls for easy manipulation. The application supports `.glb` and `.gltf` formats for models and `.jpg`, `.png`, `.webp` for textures.

## Features

- Upload 3D models and textures via a simple, user-friendly interface.
- View uploaded 3D models in an interactive environment with orbit controls.
- Dynamically apply textures to models.
- Efficient loading and rendering of 3D models using DRACO compression.

## Installation

1. Clone the repository:

```
git clone https://github.com/jwmik123/3d-model-viewer.git
```

2. Navigate to the project directory:

```
cd 3d-model-viewer
```

3. Install dependencies:

```
npm install
```

4. Start the development server:

```
npm run dev
```

The application will be available at `http://localhost:3000`.

## Usage

- **Uploading a Model and Texture:**
  - Click on the upload areas to select and upload a 3D model and its texture.
  - Supported model formats: `.glb`, `.gltf`
  - Supported texture formats: `.jpg`, `.png`, `.webp`
- **Viewing the Model:**
  - Once uploaded, the model will be displayed in the viewer.
  - Use the mouse to orbit, zoom, and pan around the model.

## Technologies Used

- React
- Three.js
- @react-three/fiber
- @react-three/drei

#### Contribution

Contributions are welcome! If you have any improvements or feature suggestions, please open an issue or submit a pull request.

#### License

This project is open source and available under the [MIT License](LICENSE).
