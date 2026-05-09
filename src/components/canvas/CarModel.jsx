import React, { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';

const CarModel = (props) => {
  const group = useRef();
  // Load the model from the public directory
  const { scene } = useGLTF('/2023_toyota_gr86_rz_xeno_gt-spec_aero_kit.glb');
  
  // Enable shadows for all meshes in the model
  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
  }, [scene]);

  // Track mouse and scroll for interaction
  useFrame((state) => {
    if (!group.current) return;
    
    // Mouse tracking: state.pointer.x and state.pointer.y go from -1 to 1
    const targetYRotation = (state.pointer.x * Math.PI) / 4; // Max rotation of 45 deg
    const targetXRotation = (state.pointer.y * Math.PI) / 8; // Max tilt of 22.5 deg
    
    // Smooth interpolation for rotation
    group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, targetYRotation, 0.05);
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, targetXRotation, 0.05);
    
    // Scroll tracking for "driving" effect (bobbing)
    const scrollY = window.scrollY;
    // We keep the initial Y position from props if available, otherwise 0
    const baseY = props.position ? props.position[1] : 0;
    group.current.position.y = baseY + Math.sin(scrollY * 0.02) * 0.05;
  });

  return (
    <group ref={group} {...props} dispose={null}>
      {/* We scale the model depending on its original size. Often GLTF models need adjusting. */}
      {/* Rotation is applied to make the car face forward depending on how it was exported */}
      <primitive object={scene} scale={150} position={[0, -0.5, 0]} rotation={[0, -Math.PI / 2, 0]} />
    </group>
  );
};

// Preload the model for better performance
useGLTF.preload('/2023_toyota_gr86_rz_xeno_gt-spec_aero_kit.glb');

export default CarModel;
