import React, { useEffect, useRef } from "react";
import { Canvas, useFrame, extend, useThree } from "@react-three/fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

extend({ OrbitControls });

const Donut = () => {
  function Donuts() {
    const mesh = useRef(null);
    useFrame(({ clock }) => {
      const t = clock.getElapsedTime();
      mesh.current.rotation.y = t / 1;
    });
    return (
      <mesh ref={mesh}>
        <torusGeometry args={[4, 1.5, 48, 72]} /> {/* Adjust the size here */}
        <meshNormalMaterial wireframe={true} />
      </mesh>
    );
  }

  function Donuts2() {
    const mesh = useRef(null);
    useFrame(({ clock }) => {
      const t = clock.getElapsedTime();
      mesh.current.rotation.x = t / 1;
    });
    return (
      <mesh ref={mesh}>
        <torusGeometry args={[4, 1.5, 48, 72]} /> {/* Adjust the size here */}
        <meshNormalMaterial wireframe={true} />
      </mesh>
    );
  }

  const CameraController = () => {
    const { camera, gl } = useThree();
    useEffect(() => {
      const controls = new OrbitControls(camera, gl.domElement);
      controls.minDistance = 5;
      controls.maxDistance = 20;
      camera.position.set(0, 0, 10); // Adjust the camera position here
      return () => {
        controls.dispose();
      };
    }, [camera, gl]);
    return null;
  };

  return (
    <Canvas style={{ width: '100%', height: '100%' }}>
      <CameraController />
      <Donuts />
      <Donuts2 />
    </Canvas>
  );
};

export default Donut;





