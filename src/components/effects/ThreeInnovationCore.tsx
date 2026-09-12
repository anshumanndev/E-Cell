import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface ThreeInnovationCoreProps {
  className?: string;
}

export const ThreeInnovationCore: React.FC<ThreeInnovationCoreProps> = ({ className = '' }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Width & Height detection
    let width = container.clientWidth || 400;
    let height = container.clientHeight || 420;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 100);
    camera.position.set(0, 0, 4.6);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'high-performance' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.3;
    container.appendChild(renderer.domElement);

    // Group for entire 3D rig
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // 1. Core Faceted Crystal (Radiant Amber Glass)
    const coreGeo = new THREE.IcosahedronGeometry(0.95, 0); // Faceted crystal
    const coreMat = new THREE.MeshPhysicalMaterial({
      color: 0xF59E0B,
      emissive: 0xB45309,
      emissiveIntensity: 0.6,
      roughness: 0.05,
      metalness: 0.15,
      transmission: 0.75,
      thickness: 1.5,
      reflectivity: 0.9,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
      transparent: true,
      opacity: 0.92,
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    mainGroup.add(coreMesh);

    // Inner glowing sphere
    const innerLightGeo = new THREE.SphereGeometry(0.35, 16, 16);
    const innerLightMat = new THREE.MeshBasicMaterial({
      color: 0xFFFBEB,
      transparent: true,
      opacity: 0.95,
    });
    const innerLightMesh = new THREE.Mesh(innerLightGeo, innerLightMat);
    mainGroup.add(innerLightMesh);

    // 2. Outer Wireframe Energy Shell (Deep Teal & Cyan)
    const wireGeo = new THREE.IcosahedronGeometry(1.4, 1);
    const wireMat = new THREE.MeshBasicMaterial({
      color: 0x0E7490,
      wireframe: true,
      transparent: true,
      opacity: 0.55,
    });
    const wireMesh = new THREE.Mesh(wireGeo, wireMat);
    mainGroup.add(wireMesh);

    // Outer wireframe glowing vertices
    const vertexPointsGeo = new THREE.IcosahedronGeometry(1.4, 1);
    const vertexPointsMat = new THREE.PointsMaterial({
      color: 0x06B6D4,
      size: 0.06,
      transparent: true,
      opacity: 0.85,
    });
    const vertexPoints = new THREE.Points(vertexPointsGeo, vertexPointsMat);
    mainGroup.add(vertexPoints);

    // 3. Floating Orbital Rings (Golden Amber & Cyan)
    const ringGroup1 = new THREE.Group();
    const ringGeo1 = new THREE.TorusGeometry(1.85, 0.024, 16, 120);
    const ringMat1 = new THREE.MeshBasicMaterial({
      color: 0xF59E0B,
      transparent: true,
      opacity: 0.8,
    });
    const ring1 = new THREE.Mesh(ringGeo1, ringMat1);
    ringGroup1.add(ring1);

    // Orbiting Golden Bead on Ring 1
    const beadGeo1 = new THREE.SphereGeometry(0.065, 12, 12);
    const beadMat1 = new THREE.MeshBasicMaterial({ color: 0xFBBF24 });
    const bead1 = new THREE.Mesh(beadGeo1, beadMat1);
    bead1.position.x = 1.85;
    ringGroup1.add(bead1);

    ringGroup1.rotation.x = Math.PI / 3.2;
    ringGroup1.rotation.y = Math.PI / 7;
    mainGroup.add(ringGroup1);

    const ringGroup2 = new THREE.Group();
    const ringGeo2 = new THREE.TorusGeometry(2.05, 0.02, 16, 120);
    const ringMat2 = new THREE.MeshBasicMaterial({
      color: 0x06B6D4,
      transparent: true,
      opacity: 0.7,
    });
    const ring2 = new THREE.Mesh(ringGeo2, ringMat2);
    ringGroup2.add(ring2);

    // Orbiting Cyan Bead on Ring 2
    const beadGeo2 = new THREE.SphereGeometry(0.055, 12, 12);
    const beadMat2 = new THREE.MeshBasicMaterial({ color: 0x38BDF8 });
    const bead2 = new THREE.Mesh(beadGeo2, beadMat2);
    bead2.position.x = 2.05;
    ringGroup2.add(bead2);

    ringGroup2.rotation.x = -Math.PI / 3.8;
    ringGroup2.rotation.y = Math.PI / 4.5;
    mainGroup.add(ringGroup2);

    // 4. Star Particles Swarm (Teal + Amber sparkles)
    const particlesCount = 85;
    const particlePositions = new Float32Array(particlesCount * 3);
    const particleColors = new Float32Array(particlesCount * 3);

    const colorTeal = new THREE.Color(0x0E7490);
    const colorGold = new THREE.Color(0xF59E0B);
    const colorCyan = new THREE.Color(0x06B6D4);
    const colorWhite = new THREE.Color(0xFFFFFF);

    for (let i = 0; i < particlesCount; i++) {
      const radius = 1.9 + Math.random() * 1.3;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      particlePositions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      particlePositions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      particlePositions[i * 3 + 2] = radius * Math.cos(phi);

      const r = Math.random();
      const chosenColor = r > 0.6 ? colorGold : r > 0.3 ? colorCyan : r > 0.1 ? colorTeal : colorWhite;
      particleColors[i * 3] = chosenColor.r;
      particleColors[i * 3 + 1] = chosenColor.g;
      particleColors[i * 3 + 2] = chosenColor.b;
    }

    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    particleGeo.setAttribute('color', new THREE.BufferAttribute(particleColors, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.055,
      vertexColors: true,
      transparent: true,
      opacity: 0.9,
    });
    const particleSystem = new THREE.Points(particleGeo, particleMat);
    mainGroup.add(particleSystem);

    // Lighting (Crisp & High Contrast)
    const ambientLight = new THREE.AmbientLight(0xFFFFFF, 1.4);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xFFFFFF, 2.0);
    dirLight.position.set(4, 5, 4);
    scene.add(dirLight);

    const pointLightAmber = new THREE.PointLight(0xF59E0B, 4.5, 8);
    pointLightAmber.position.set(0, 0, 0);
    scene.add(pointLightAmber);

    const pointLightCyan = new THREE.PointLight(0x06B6D4, 3.0, 8);
    pointLightCyan.position.set(-2.5, 2.5, 2.5);
    scene.add(pointLightCyan);

    // Mouse Interaction
    let targetRotationX = 0;
    let targetRotationY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      if (!container) return;
      const rect = container.getBoundingClientRect();
      const mouseX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const mouseY = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      targetRotationY = mouseX * 0.45;
      targetRotationX = -mouseY * 0.45;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Dynamic Resize Handling with ResizeObserver
    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        const { width: newWidth, height: newHeight } = entry.contentRect;
        if (newWidth > 0 && newHeight > 0) {
          camera.aspect = newWidth / newHeight;
          camera.updateProjectionMatrix();
          renderer.setSize(newWidth, newHeight);
        }
      }
    });

    resizeObserver.observe(container);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      const elapsedTime = clock.getElapsedTime();

      // Smooth idle rotation + mouse responsiveness
      coreMesh.rotation.y += 0.007;
      coreMesh.rotation.x += 0.004;

      wireMesh.rotation.y -= 0.005;
      wireMesh.rotation.z += 0.003;
      vertexPoints.rotation.y = wireMesh.rotation.y;
      vertexPoints.rotation.z = wireMesh.rotation.z;

      // Orbiting rings
      ringGroup1.rotation.z = elapsedTime * 0.45;
      ringGroup2.rotation.z = -elapsedTime * 0.38;

      // Orbiting particles
      particleSystem.rotation.y = elapsedTime * 0.12;
      particleSystem.rotation.x = elapsedTime * 0.06;

      // Subtle pulse on inner light
      innerLightMesh.scale.setScalar(1 + Math.sin(elapsedTime * 3) * 0.08);

      // Floating wave motion
      mainGroup.position.y = Math.sin(elapsedTime * 1.6) * 0.08;

      // Inertial smoothing towards mouse target
      mainGroup.rotation.y += (targetRotationY - mainGroup.rotation.y) * 0.06;
      mainGroup.rotation.x += (targetRotationX - mainGroup.rotation.x) * 0.06;

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      resizeObserver.disconnect();
      cancelAnimationFrame(animationFrameId);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-[380px] sm:h-[440px] md:h-[480px] lg:h-[500px] select-none pointer-events-auto flex items-center justify-center ${className}`}
    />
  );
};
