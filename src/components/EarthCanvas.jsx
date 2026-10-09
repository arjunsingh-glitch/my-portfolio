import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars, useTexture } from '@react-three/drei';

function Earth() {
  const earthRef = useRef();

  const [colorMap, normalMap, specularMap] = useTexture([
    '/assets/earth_daymap.jpg',
    '/assets/earth_normal_map.jpg',
    '/assets/earth_specular_map.jpg',
  ]);

  useFrame(() => {
    if (earthRef.current) {
      earthRef.current.rotation.y += 0.001;
    }
  });

  return (
    <mesh ref={earthRef}>
      <sphereGeometry args={[2.2, 64, 64]} />
      <meshPhongMaterial
        map={colorMap}
        normalMap={normalMap}
        specularMap={specularMap}
        specular="grey"
        shininess={5}
      />
    </mesh>
  );
}

const EarthCanvas = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 45 }}
      style={{ width: '100%', height: '100%' }}
    >
      <color attach="background" args={['#000810']} />
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 3, 5]} intensity={0.8} />
      <Suspense fallback={null}>
        <Earth />
        <Stars 
          radius={300} 
          depth={60} 
          count={1000} 
          factor={7} 
          saturation={0} 
          fade={true}
        />
      </Suspense>
      <OrbitControls 
        enableZoom={false} 
        autoRotate={true}
        autoRotateSpeed={0.3}
        enablePan={false}
        minPolarAngle={Math.PI / 2}
        maxPolarAngle={Math.PI / 2}
      />
    </Canvas>
  );
};

export default EarthCanvas;
