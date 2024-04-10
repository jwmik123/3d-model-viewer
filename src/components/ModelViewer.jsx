import React, { Suspense, useEffect } from "react";
import { Canvas, useLoader, extend } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { Grid, OrbitControls } from "@react-three/drei";

const Model = ({ fileUrl }) => {
  const dracoLoader = new DRACOLoader();
  dracoLoader.setDecoderPath("/draco/gltf/");

  const glb = useLoader(GLTFLoader, fileUrl, (loader) => {
    loader.setDRACOLoader(dracoLoader);
  });
  const textureUrl = "/bakedFinal.jpg";
  const texture = useLoader(TextureLoader, textureUrl);
  texture.flipY = true;
  glb.scene.traverse((child) => {
    if (child.isMesh) {
      child.material.map = texture;
      child.material.needsUpdate = true;
    }
  });

  return <primitive object={glb.scene} scale={0.5} position={[0, 0, 0]} />;
};

const ModelViewer = ({ base64Model }) => {
  // Convert Base64 string to Blob
  const convertBase64ToBlob = (base64) => {
    const parts = base64.split(";base64,");
    const contentType = parts[0].split(":")[1];
    const raw = window.atob(parts[1]);
    const rawLength = raw.length;
    const uInt8Array = new Uint8Array(rawLength);

    for (let i = 0; i < rawLength; ++i) {
      uInt8Array[i] = raw.charCodeAt(i);
    }

    return new Blob([uInt8Array], { type: contentType });
  };

  // Create a Blob URL if a base64Model is provided
  let fileUrl;
  if (base64Model) {
    const blob = convertBase64ToBlob(base64Model);
    fileUrl = URL.createObjectURL(blob);
  }

  return (
    <div className="hero min-h-screen bg-base-200">
      <Canvas className="w-full h-full block">
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Suspense fallback={null}>
          {console.log(fileUrl)}
          {fileUrl && <Model fileUrl={fileUrl} />}
        </Suspense>
        <Grid args={[20, 20]} position={[0, -1, 0]} cellColor={0x333333} />
        <OrbitControls maxPolarAngle={Math.PI / 2} />
      </Canvas>
    </div>
  );
};

export default ModelViewer;
