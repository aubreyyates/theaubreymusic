import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { useTheme } from '@mui/material/styles';

const ThreeSphere = () => {
  const ref = useRef();
  const theme = useTheme();

  useEffect(() => {
    const parent = ref.current;
    const width = parent.clientWidth;
    const height = 300;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();

    renderer.setSize(width, height);
    renderer.setClearColor(theme.palette.background.paper, 1);

    ref.current.appendChild(renderer.domElement);

    const material = new THREE.MeshBasicMaterial({
      color: parseInt(theme.palette.primary.main.slice(1), 16),
      wireframe: true
    });

    const geometry = new THREE.SphereGeometry();
    const sphere1 = new THREE.Mesh(geometry, material);
    sphere1.position.set(0, 0, 0);
    scene.add(sphere1);

    // const sphere2 = new THREE.Mesh(geometry, material);
    // sphere2.position.set(2, 0, 0);
    // scene.add(sphere2);

    // const sphere3 = new THREE.Mesh(geometry, material);
    // sphere3.position.set(-2, 0, 0);
    // scene.add(sphere3);

    camera.position.z = 2;
    let movementValue = 0.01;

    const animate = () => {
      requestAnimationFrame(animate);
      sphere1.rotation.x += 0.004;
      sphere1.rotation.y += 0.004;

      sphere1.position.x += movementValue;
      if (sphere1.position.x > 1) {
        movementValue = -0.01;
      } else if (sphere1.position.x < -1) {
        movementValue = 0.01;
      }
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      parent.removeChild(renderer.domElement);
    };
  }, [theme.palette.primary.main, theme.palette.background.paper]);

  return <div ref={ref} />;
};

export default ThreeSphere;
