import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const canvas = document.getElementById('canvas')

// 1.Scene
const scene = new THREE.Scene();
scene.background = new THREE.Color('#F0F0F0')

// 2. Add camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
camera.position.z = 5;

// 3.Object
const geometry = new THREE.DodecahedronGeometry()
const material = new THREE.MeshLambertMaterial({color: '#468585', emissive: '#468585'})
const dodecahedron = new THREE.Mesh(geometry, material);

const boxGeometry = new THREE.BoxGeometry(2, 0.1, 2)
const boxMaterial = new THREE.MeshLambertMaterial({color: '#B4B4B4', emissive: '#468585'})
const box = new THREE.Mesh(boxGeometry, boxMaterial);
box.position.y = -1.5;

scene.add(box)
scene.add(dodecahedron)

// 4. Light
const light = new THREE.SpotLight('0x006769', 8)
light.position.set(1, 1, 1)
scene.add(light)

// 5. Renderer
// @ts-ignore
const renderer = new THREE.WebGLRenderer({canvas})

renderer.setSize(window.innerWidth, window.innerHeight, true)



// 6. Add control
// @ts-ignore
const controls = new OrbitControls(camera, renderer.domElement)

controls.enableZoom = true;

// 7. ANIMATION

function animate(){
  requestAnimationFrame(animate)
  dodecahedron.rotation.x +=0.01
  dodecahedron.rotation.y +=0.01
  
  box.rotation.y +=0.01
  box.rotation.y +=0.01
  
  renderer.render(scene, camera)
  controls.update()
}

animate();



