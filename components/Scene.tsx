"use client";
import {
  Center,
  Environment,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Perf } from "r3f-perf";
import React, { useRef, useState } from "react";
import { Model } from "./Sail";

type Props = {
  texture: number;
};

export default function Scene({ texture }: Props) {
  const cameraRef = useRef<any>(null);
  return (
    <Canvas shadows>
      <PerspectiveCamera
        ref={cameraRef}
        makeDefault={true}
        position={[0, 4, 8]}
        near={0.1}
        far={100}
      />
      <Perf position={"bottom-right"} />
      <Center top>
        <Model texture={texture} />
      </Center>
      <OrbitControls minPolarAngle={0} maxPolarAngle={Math.PI / 2} autoRotate />

      <ambientLight />
      <Environment preset="apartment" background blur={1} />
    </Canvas>
  );
}
