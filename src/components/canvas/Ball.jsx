import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";

import CanvasLoader from "../Loader";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

const Ball = ({ imgUrl, index = 0, baseColor = "#fff8eb" }) => {
  const [decal] = useTexture([imgUrl]);
  const groupRef = useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();

    // Her top farklı fazda olsun diye index ile kaydırıyoruz
    const phase = index * 0.7;

    // Hafif sağa-sola + hafif yukarı-aşağı (istersen sadece x bırak)
    groupRef.current.position.x = Math.sin(t * 0.8 + phase) * 0.12;
    groupRef.current.position.y = Math.sin(t * 0.6 + phase) * 0.06;

    // Çok az dönme de güzel duruyor (opsiyonel)
    groupRef.current.rotation.z = Math.sin(t * 0.7 + phase) * 0.08;
  });

  return (
    <group ref={groupRef}>
      <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
        <ambientLight intensity={0.25} />
        <directionalLight position={[0, 0, 0.05]} />
        <mesh castShadow receiveShadow scale={1}>
          <icosahedronGeometry args={[1, 1]} />
          <meshStandardMaterial
            color={baseColor}
            polygonOffset
            polygonOffsetFactor={-5}
            flatShading
          />
          <Decal
            position={[0, 0, 1]}
            rotation={[2 * Math.PI, 0, 6.25]}
            scale={1}
            map={decal}
            flatShading
          />
        </mesh>
      </Float>
    </group>
  );
};

export default Ball;
