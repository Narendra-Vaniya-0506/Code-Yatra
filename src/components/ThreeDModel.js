import React, { Suspense, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, Html, Environment } from '@react-three/drei';
import * as THREE from 'three';

// Loading component
function Loader() {
  return (
    <Html center>
      <div style={{ 
        color: 'white', 
        fontSize: '14px',
        background: 'rgba(0,0,0,0.7)',
        padding: '10px 20px',
        borderRadius: '20px',
        backdropFilter: 'blur(10px)'
      }}>
        Loading 3D Model...
      </div>
    </Html>
  );
}

// 3D Laptop Model Component
function LaptopModel() {
  const meshRef = useRef();
  
  // For now, we'll create a simple laptop placeholder
  // Once you have the actual .glb file, replace this with useGLTF
  return (
    <group>
      {/* Laptop Base */}
      <mesh ref={meshRef} position={[0, -0.5, 0]}>
        <boxGeometry args={[3, 0.2, 2]} />
        <meshStandardMaterial 
          color="#1a1a1a" 
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>
      
      {/* Laptop Screen */}
      <mesh position={[0, 0.5, -0.9]} rotation={[0.2, 0, 0]}>
        <boxGeometry args={[2.8, 1.8, 0.1]} />
        <meshStandardMaterial 
          color="#000000" 
          metalness={0.9}
          roughness={0.1}
        />
      </mesh>
      
      {/* Screen Display */}
      <mesh position={[0, 0.5, -0.85]} rotation={[0.2, 0, 0]}>
        <planeGeometry args={[2.6, 1.6]} />
        <meshBasicMaterial 
          color="#0066cc" 
          emissive="#0066cc"
          emissiveIntensity={0.2}
        />
      </mesh>
      
      {/* Keyboard */}
      <mesh position={[0, -0.4, 0.2]}>
        <boxGeometry args={[2.5, 0.05, 1.5]} />
        <meshStandardMaterial 
          color="#2a2a2a" 
          metalness={0.5}
          roughness={0.5}
        />
      </mesh>
    </group>
  );
}

// Main 3D Scene Component
export default function ThreeDModel() {
  return (
    <div style={{ 
      width: '100%', 
      height: '400px',
      position: 'relative',
      borderRadius: '20px',
      overflow: 'hidden',
      boxShadow: '0 10px 30px rgba(0,0,0,0.3)'
    }}>
      <Canvas
        camera={{ position: [5, 3, 5], fov: 50 }}
        style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}
      >
        <Suspense fallback={<Loader />}>
          {/* Lighting */}
          <ambientLight intensity={0.5} />
          <directionalLight 
            position={[10, 10, 5]} 
            intensity={1} 
            castShadow
            shadow-mapSize-width={2048}
            shadow-mapSize-height={2048}
          />
          <pointLight position={[-10, -10, -10]} intensity={0.5} />
          
          {/* Environment */}
          <Environment preset="city" />
          
          {/* 3D Model */}
          <LaptopModel />
          
          {/* Controls */}
          <OrbitControls
            enablePan={false}
            enableZoom={true}
            enableRotate={true}
            autoRotate
            autoRotateSpeed={2}
            minDistance={3}
            maxDistance={10}
            minPolarAngle={Math.PI / 4}
            maxPolarAngle={Math.PI / 2}
          />
        </Suspense>
      </Canvas>
      
      {/* Instructions */}
      <div style={{
        position: 'absolute',
        bottom: '10px',
        left: '50%',
        transform: 'translateX(-50%)',
        color: 'white',
        fontSize: '12px',
        background: 'rgba(0,0,0,0.5)',
        padding: '5px 15px',
        borderRadius: '15px',
        backdropFilter: 'blur(5px)'
      }}>
        Drag to rotate • Scroll to zoom
      </div>
    </div>
  );
}

// Component for actual GLB file (once available)
export function LaptopGLBModel({ modelPath = '/models/laptop.glb' }) {
  const { scene } = useGLTF(modelPath);
  
  return (
    <primitive 
      object={scene} 
      scale={[2, 2, 2]} 
      position={[0, -1, 0]}
    />
  );
}
