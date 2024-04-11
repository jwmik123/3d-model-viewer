import * as THREE from "three";
import React, { Suspense, useEffect, useRef } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";
import { TextureLoader } from "three";
import { Center, Grid, OrbitControls } from "@react-three/drei";
import Loader from "./Loader";

const Model = ({ fileUrl, textureUrl }) => {
  const dracoLoader = new DRACOLoader();
  dracoLoader.setDecoderPath("/draco/gltf/");

  const glb = useLoader(GLTFLoader, fileUrl, (loader) => {
    loader.setDRACOLoader(dracoLoader);
  });

  const materialRef = useRef();

  useEffect(() => {
    if (textureUrl) {
      const textureLoader = new TextureLoader();
      textureLoader.load(textureUrl, (texture) => {
        texture.flipY = false;
        texture.colorSpace = THREE.SRGBColorSpace;
        texture.needsUpdate = true;
        materialRef.current = new THREE.ShaderMaterial({
          uniforms: {
            uBakedDayTexture: new THREE.Uniform(texture),
          },
          vertexShader: `
              varying vec2 vUv;
              void main()
              {
                  vec4 modelPosition = modelMatrix * vec4(position, 1.0);
                  vec4 viewPosition = viewMatrix * modelPosition;
                  vec4 projectionPosition = projectionMatrix * viewPosition;
                  gl_Position = projectionPosition;
          
                  vUv = uv;
              }
            `,
          fragmentShader: `
              uniform sampler2D uBakedDayTexture;
              varying vec2 vUv;
              void main()
              {
                  vec3 bakedDayColor = texture2D(uBakedDayTexture, vUv).rgb;
                  gl_FragColor = vec4(bakedDayColor, 1.0);
              }
            `,
        });
      });
      updateMaterial();
    }
  }, [textureUrl]);

  const updateMaterial = () => {
    glb.scene.traverse((child) => {
      if (child.isMesh && materialRef.current) {
        child.material = materialRef.current;
      }
    });
  };

  useEffect(() => {
    if (materialRef.current) {
      updateMaterial();
    }
  }, [glb.scene, textureUrl]);

  return <primitive object={glb.scene} scale={0.5} position={[0, 0, 0]} />;
};

const ModelViewer = ({ base64Model, base64Texture }) => {
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

  // Create a Blob URL if a base64Model is provided &
  // Create a Blob URL if a base64Texture is provided
  let fileUrl, textureUrl;
  if (base64Model) {
    const blob = convertBase64ToBlob(base64Model);
    fileUrl = URL.createObjectURL(blob);
  }
  if (base64Texture) {
    const blob = convertBase64ToBlob(base64Texture);
    textureUrl = URL.createObjectURL(blob);
  }

  return (
    <div className="min-h-screen cursor-grab hero bg-base-200">
      <Suspense fallback={<Loader />}>
        <Canvas className="block w-full h-full">
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />

          <Center>
            {fileUrl && <Model fileUrl={fileUrl} textureUrl={textureUrl} />}
          </Center>

          <Grid args={[20, 20]} position={[0, -2, 0]} />
          <OrbitControls maxPolarAngle={Math.PI / 2} />
        </Canvas>
      </Suspense>
    </div>
  );
};

export default ModelViewer;
