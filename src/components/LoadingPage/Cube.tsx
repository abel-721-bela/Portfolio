'use client';

import React, { useRef, useState, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text, RoundedBox, Float, ContactShadows } from '@react-three/drei';
import * as THREE from 'three';

interface CubeProps {
  onSequenceComplete: () => void;
  isThemeDark: boolean;
}

const Cube: React.FC<CubeProps> = ({ onSequenceComplete, isThemeDark }) => {
  const meshRef = useRef<THREE.Group>(null);
  const [step, setStep] = useState(0);
  const [isDone, setIsDone] = useState(false);

  // Target rotations for each step
  // 0: ABEL (Front)
  // 1: BIJU (Right)
  // 2: GEORGE (Top)
  const targetRotations = [
    new THREE.Euler(0, 0, 0),
    new THREE.Euler(0, -Math.PI / 2, 0),
    new THREE.Euler(Math.PI / 2, 0, 0),
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setStep((prev) => {
        if (prev < 2) return prev + 1;
        setIsDone(true);
        clearInterval(timer);
        setTimeout(onSequenceComplete, 1000);
        return prev;
      });
    }, 1500);

    return () => clearInterval(timer);
  }, [onSequenceComplete]);

  const rotationSpring = {
    x: 0,
    y: 0,
    z: 0,
    vx: 0,
    vy: 0,
    vz: 0
  };
  const springRef = useRef(rotationSpring);

  const [jumpY, setJumpY] = useState(0);
  const prevStep = useRef(step);

  useEffect(() => {
    if (prevStep.current !== step) {
      // Trigger jump
      setJumpY(0.25);
      prevStep.current = step;
    }
  }, [step]);

  useFrame((state, delta) => {
    if (!meshRef.current) return;

    const spring = springRef.current;
    const target = targetRotations[step];

    // Spring physics for rotation
    const stiffness = 80;
    const damping = 12;

    const ax = (target.x - meshRef.current.rotation.x) * stiffness - spring.vx * damping;
    const ay = (target.y - meshRef.current.rotation.y) * stiffness - spring.vy * damping;
    const az = (target.z - meshRef.current.rotation.z) * stiffness - spring.vz * damping;

    spring.vx += ax * delta;
    spring.vy += ay * delta;
    spring.vz += az * delta;

    meshRef.current.rotation.x += spring.vx * delta;
    meshRef.current.rotation.y += spring.vy * delta;
    meshRef.current.rotation.z += spring.vz * delta;

    // Jump / Gravity physics
    if (jumpY > 0 || meshRef.current.position.y > 0) {
      meshRef.current.position.y += jumpY * delta * 10;
      setJumpY((prev) => prev - delta * 4); // Gravity
      
      if (meshRef.current.position.y <= 0) {
        meshRef.current.position.y = 0;
        setJumpY(0);
      }
    }

    // Subtle idle float and final settle
    if (isDone) {
      meshRef.current.position.y = THREE.MathUtils.lerp(
        meshRef.current.position.y,
        Math.sin(state.clock.elapsedTime * 0.5) * 0.05,
        0.02
      );
      meshRef.current.scale.setScalar(
        THREE.MathUtils.lerp(meshRef.current.scale.x, 0.8, 0.02)
      );
    }
  });

  const textProps = {
    font: 'https://fonts.gstatic.com/s/playfairdisplay/v30/nuFiD-vYSZviVYUb_rj3ij__anPXPTs.ttf',
    fontSize: 0.12,
    color: isThemeDark ? '#f5f5f7' : '#1d1d1f',
    anchorX: 'center' as const,
    anchorY: 'middle' as const,
  };

  return (
    <group>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        <group ref={meshRef}>
          <RoundedBox args={[0.6, 0.6, 0.6]} radius={0.03} smoothness={4}>
            <meshStandardMaterial 
              color={isThemeDark ? '#1d1d1f' : '#ffffff'} 
              roughness={0.1} 
              metalness={0.1} 
            />
            
            {/* Front: ABEL */}
            <Text position={[0, 0, 0.31]} {...textProps}>
              ABEL
            </Text>
            
            {/* Right: BIJU */}
            <Text position={[0.31, 0, 0]} rotation={[0, Math.PI / 2, 0]} {...textProps}>
              BIJU
            </Text>
            
            {/* Top: GEORGE */}
            <Text position={[0, 0.31, 0]} rotation={[-Math.PI / 2, 0, 0]} {...textProps}>
              GEORGE
            </Text>
          </RoundedBox>
        </group>
      </Float>


      <ContactShadows
        opacity={0.4}
        scale={10}
        blur={2}
        far={4.5}
        resolution={256}
        color="#000000"
      />
    </group>
  );
};

export default Cube;
