import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars, useTexture } from '@react-three/drei';
import { assetUrl } from '../utils/assetUrl';
import CanvasErrorBoundary from './CanvasErrorBoundary';

function Earth() {
  const earthRef = useRef();

  const [colorMap, normalMap, specularMap] = useTexture([
    assetUrl('assets/earth_daymap.jpg'),
    assetUrl('assets/earth_normal_map.jpg'),
    assetUrl('assets/earth_specular_map.jpg'),
  ]);

  useFrame(() => {
    if (earthRef.current) {
      earthRef.current.rotation.y += 0.0015;
    }
  });

  return (
    <mesh ref={earthRef}>
      <sphereGeometry args={[1, 64, 64]} />
      <meshPhongMaterial
        map={colorMap}
        normalMap={normalMap}
        specularMap={specularMap}
        specular="grey"
      />
    </mesh>
  );
}

const ContactEarthCanvas = () => {
  return (
    <div
      style={{
        width: '100%',
        height: '400px',
        position: 'relative',
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 3], fov: 45 }}
        style={{ width: '100%', height: '100%' }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 3, 5]} />
        <CanvasErrorBoundary>
          <Suspense fallback={null}>
            <Earth />
          </Suspense>
        </CanvasErrorBoundary>
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1.2} />
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade />
      </Canvas>
    </div>
  );
};

export default ContactEarthCanvas; 