import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import CanvasErrorBoundary from './CanvasErrorBoundary';
import { supportsWebGL } from '../utils/webgl';

const Ring = () => {
  const ringRef = useRef();

  useFrame(() => {
    if (ringRef.current) {
      ringRef.current.rotation.x += 0.002;
      ringRef.current.rotation.y += 0.004;
    }
  });

  return (
    <mesh ref={ringRef}>
      <torusGeometry args={[3.0, 0.39, 8, 40]} />
      <meshBasicMaterial
        color="#1e90ff"
        wireframe={true}
        wireframeLinewidth={2}
        transparent={true}
        opacity={0.4}
      />
    </mesh>
  );
};

const MovingStars = () => {
  const starsRef = useRef();

  useFrame(() => {
    if (starsRef.current) {
      starsRef.current.rotation.y += 0.0002;
    }
  });

  return (
    <group ref={starsRef}>
      <Stars 
        radius={50} 
        depth={50} 
        count={5000} 
        factor={6} 
        saturation={0} 
        fade={true}
      />
    </group>
  );
};

const Starfield = () => (
  <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#0a192f] via-[#0d1b33] to-[#111827]" />
);

const RingCanvas = () => {
  // Never mount a WebGL canvas we can't create — a failed context blanks the page.
  if (!supportsWebGL()) return <Starfield />;

  return (
    <div className="absolute inset-0 z-0">
      <CanvasErrorBoundary fallback={<Starfield />}>
        <Canvas
          camera={{ position: [0, 0, 10], fov: 45 }}
          gl={{ powerPreference: 'default', failIfMajorPerformanceCaveat: false }}
          dpr={[1, 2]}
        >
          <ambientLight intensity={0.2} />
          <directionalLight position={[5, 5, 5]} intensity={0.5} />
          <Ring />
          <MovingStars />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            enableRotate={false}
          />
        </Canvas>
      </CanvasErrorBoundary>
    </div>
  );
};

export default RingCanvas;
