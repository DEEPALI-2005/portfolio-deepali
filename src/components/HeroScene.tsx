'use client';

import React, { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { PerspectiveCamera, OrbitControls, Edges } from '@react-three/drei';
import * as THREE from 'three';

const FloatingShape = ({ position }: { position: [number, number, number] }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.003;
      meshRef.current.rotation.y += 0.005;
      meshRef.current.position.x = position[0] + mousePos.x * 0.5;
      meshRef.current.position.y = position[1] + mousePos.y * 0.5 + Math.sin(Date.now() * 0.001) * 0.2;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <icosahedronGeometry args={[0.8, 4]} />
      <meshStandardMaterial
        color="#00d9ff"
        wireframe={true}
        emissive="#00d9ff"
        emissiveIntensity={0.5}
      />
      <Edges scale={1.1} threshold={15} color="#6366f1" />
    </mesh>
  );
};

const Grid = () => {
  const gridRef = useRef<THREE.LineSegments>(null);

  useFrame(() => {
    if (gridRef.current) {
      gridRef.current.rotation.z += 0.0002;
    }
  });

  const gridSize = 20;
  const divisions = 20;
  const gridHelper = new THREE.GridHelper(gridSize, divisions, '#00d9ff', '#6366f1');
  gridHelper.position.z = -5;

  return (
    <primitive ref={gridRef} object={gridHelper} />
  );
};

const RotatingBox = () => {
  const boxRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (boxRef.current) {
      boxRef.current.rotation.x += 0.01;
      boxRef.current.rotation.y += 0.015;
      boxRef.current.position.z = Math.sin(Date.now() * 0.0005) * 2;
    }
  });

  return (
    <mesh ref={boxRef} position={[0, 0, 0]}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial
        color="#6366f1"
        wireframe={true}
        emissive="#6366f1"
        emissiveIntensity={0.3}
      />
      <Edges scale={1.05} threshold={15} color="#00d9ff" />
    </mesh>
  );
};

const Scene = () => {
  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 8]} />
      <color attach="background" args={['#0f172a']} />

      {/* Lighting */}
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#00d9ff" />
      <pointLight position={[-10, -10, 10]} intensity={0.8} color="#6366f1" />

      {/* Grid */}
      <Grid />

      {/* Rotating center box */}
      <RotatingBox />

      {/* Floating shapes */}
      <FloatingShape position={[-3, 3, -2]} />
      <FloatingShape position={[3, -2, -3]} />
      <FloatingShape position={[2, 2, 3]} />

      {/* Controls */}
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={1}
        maxPolarAngle={Math.PI * 0.6}
        minPolarAngle={Math.PI * 0.4}
      />
    </>
  );
};

export function HeroScene() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  if (!isLoaded) {
    return (
      <div className="w-full h-full bg-gradient-to-b from-primary to-secondary flex items-center justify-center">
        <div className="spinner"></div>
      </div>
    );
  }

  return (
    <Canvas style={{ width: '100%', height: '100%' }} performance={{ min: 0.5 }}>
      <Scene />
    </Canvas>
  );
}
