import React, { useRef, useLayoutEffect } from 'react';
import * as THREE from 'three';
import { useTheme } from '@mui/material/styles';

import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

import dotnet from 'assets/images/icons/dotnet.png';
import webdesign from 'assets/images/icons/react.png';
import html5 from 'assets/images/icons/html5.png';
import css from 'assets/images/icons/css.png';

const ThreeComponent = () => {
  const ref = useRef();
  const theme = useTheme();
  const height = 900;

  const scene = new THREE.Scene();
  const renderer = new THREE.WebGLRenderer();

  useLayoutEffect(() => {
    const parent = ref.current;
    const width = parent.clientWidth;

    setTimeout(() => {
      const newWidth = parent.clientWidth;
      camera.aspect = newWidth / height;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, height);
    }, 400); // Timeout with 0 ms

    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);

    const controls = new OrbitControls(camera, renderer.domElement);

    renderer.setSize(0, 0);
    renderer.setClearColor(theme.palette.background.default, 1); // Set background color to white

    ref.current.appendChild(renderer.domElement);

    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({
      color: parseInt(theme.palette.primary.main.slice(1), 16),
      wireframe: true
    });

    const cube1 = new THREE.Mesh(geometry, material);
    cube1.position.set(5, 4, 0);
    scene.add(cube1);

    const cube2 = new THREE.Mesh(geometry, material);
    cube2.position.set(-18, 3, -16);
    scene.add(cube2);

    const cube3 = new THREE.Mesh(geometry, material);
    cube3.position.set(1, -6, -5);
    scene.add(cube3);

    const coneGeometry = new THREE.ConeGeometry(1, 2, 3);
    const cone1 = new THREE.Mesh(coneGeometry, material);
    cone1.position.set(-9, 8, -6);
    scene.add(cone1);

    const cone2 = new THREE.Mesh(coneGeometry, material);
    cone2.position.set(13, 1, -11);
    scene.add(cone2);

    const cone3 = new THREE.Mesh(coneGeometry, material);
    cone3.position.set(-7, -11, -18);
    scene.add(cone3);

    const cone4 = new THREE.Mesh(coneGeometry, material);
    cone4.position.set(5, 19, -20);
    scene.add(cone4);

    const icosahedronGeometry = new THREE.IcosahedronGeometry(1, 0);
    const icosahedron = new THREE.Mesh(icosahedronGeometry, material);
    icosahedron.position.set(-8, -4, -4);
    scene.add(icosahedron);

    const octahedronGeometry = new THREE.OctahedronGeometry(1, 0);
    const octahedron1 = new THREE.Mesh(octahedronGeometry, material);
    octahedron1.position.set(4, -4, -2);
    scene.add(octahedron1);

    const octahedron2 = new THREE.Mesh(octahedronGeometry, material);
    octahedron2.position.set(-4, 12, -9);
    scene.add(octahedron2);

    const textureLoader = new THREE.TextureLoader();
    const texture1 = textureLoader.load(dotnet); // Replace with your image path
    const circle1Material = new THREE.MeshMatcapMaterial({ map: texture1 });

    const texture2 = textureLoader.load(webdesign); // Replace with your image path
    const circle2Material = new THREE.MeshMatcapMaterial({ map: texture2 });

    const texture3 = textureLoader.load(html5); // Replace with your image path
    const circle3Material = new THREE.MeshMatcapMaterial({ map: texture3 });

    const texture4 = textureLoader.load(css); // Replace with your image path
    const circle4Material = new THREE.MeshMatcapMaterial({ map: texture4 });

    const cylinderGeometry = new THREE.CylinderGeometry(1, 1, 0.2, 64);
    const cylinder1 = new THREE.Mesh(cylinderGeometry, circle1Material);
    cylinder1.position.set(-21, 7, -14);
    scene.add(cylinder1);

    const cylinder2 = new THREE.Mesh(cylinderGeometry, circle2Material);
    cylinder2.position.set(27, 24, -28);
    scene.add(cylinder2);

    const cylinder3 = new THREE.Mesh(cylinderGeometry, circle3Material);
    cylinder3.position.set(16, -6, -13);
    scene.add(cylinder3);

    const cylinder4 = new THREE.Mesh(cylinderGeometry, circle4Material);
    cylinder4.position.set(-12, -14, -18);
    scene.add(cylinder4);

    camera.position.z = 10;

    const onWindowResize = () => {
      const newWidth = parent.clientWidth;
      camera.aspect = newWidth / height;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, height);
    };

    window.addEventListener('resize', onWindowResize);

    const animate = () => {
      requestAnimationFrame(animate);
      cube1.rotation.x += 0.01;
      cube1.rotation.y += 0.01;
      cube2.rotation.x += 0.01;
      cube2.rotation.y += 0.01;
      cube3.rotation.x += 0.01;
      cube3.rotation.y += 0.01;

      cone1.rotation.x += 0.01;
      cone1.rotation.y += 0.01;
      cone2.rotation.x += 0.01;
      cone2.rotation.y += 0.01;
      cone3.rotation.x += 0.01;
      cone3.rotation.y += 0.01;
      cone4.rotation.x += 0.01;
      cone4.rotation.y += 0.01;

      cylinder1.rotation.x += 0.01;
      cylinder1.rotation.y += 0.01;
      cylinder2.rotation.x -= 0.01;
      cylinder2.rotation.y -= 0.01;
      cylinder3.rotation.x += 0.01;
      cylinder3.rotation.y += 0.01;
      cylinder4.rotation.x -= 0.01;
      cylinder4.rotation.y -= 0.01;

      icosahedron.rotation.x += 0.01;
      icosahedron.rotation.y += 0.01;

      octahedron1.rotation.x += 0.01;
      octahedron1.rotation.y += 0.01;
      octahedron2.rotation.x += 0.01;
      octahedron2.rotation.y += 0.01;

      controls.update();

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      parent.removeChild(renderer.domElement);
      // window.removeEventListener('resize', onWindowResize);
    };
  }, [theme.palette.primary.main, theme.palette.background.default]);

  return <div style={{ display: 'flex', justifyContent: 'center' }} ref={ref}></div>;
};

export default ThreeComponent;
