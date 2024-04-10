# 3D Model Viewer

This 3D Model Viewer is a web application built with React and Three.js, utilizing react-three-fiber for integration. It allows users to upload .glb files (with support for DRACO compression) to view 3D models interactively. The viewer includes basic lighting and grid floor setup for a better viewing experience.

## Features

- Upload and view .glb format 3D models
- Supports DRACO-compressed and non-DRACO models
- Interactive viewing with zoom, pan, and rotate functionalities
- Grid floor for reference and scale

## Getting Started

### Prerequisites

- Node.js installed on your system

### Installation

1. Clone the repository to your local machine:
   ```sh
   git clone https://your-repository-url-here.git
   ```
2. Navigate to the project directory:
   ```sh
   cd 3d-model-viewer
   ```
3. Install the required npm packages:
   ```sh
   npm install
   ```
4. Start the development server:
   ```sh
   npm run dev
   ```
   Your default web browser should open automatically to `http://localhost:5173`.

## Usage

1. **Uploading a Model**: Click the upload area or drag and drop your .glb file to view your 3D model.
2. **Interacting with the Model**: Use your mouse to zoom, pan, and rotate the model.

## Technologies Used

- [React](https://reactjs.org/) - A JavaScript library for building user interfaces
- [Three.js](https://threejs.org/) - A cross-browser JavaScript library and API used to create and display animated 3D computer graphics in a web browser
- [react-three-fiber](https://github.com/pmndrs/react-three-fiber) - A React renderer for Three.js
- [@react-three/drei](https://github.com/pmndrs/drei) - Useful helpers for react-three-fiber

## Contributing

Contributions are welcome! Please feel free to submit a pull request.

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Acknowledgments

- Special thanks to the Three.js and react-three-fiber communities for providing the tools and documentation to build this project.

---

Remember, this is a basic template. Depending on your project's complexity and requirements, you might want to add sections such as **Code Examples**, **Project Structure**, **Deployment Instructions**, **Future Work**, and **Contact Information**.
