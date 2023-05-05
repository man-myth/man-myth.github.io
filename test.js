import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { EffectComposer } from "three/addons/postprocessing/EffectComposer.js";
import { RenderPass } from "three/addons/postprocessing/RenderPass.js";
import { ShaderPass } from "three/addons/postprocessing/ShaderPass.js";
import { UnrealBloomPass } from "three/addons/postprocessing/UnrealBloomPass.js";

 
// 場景
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x000000); // 背景色必須改為黑色

// 相機
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(100, 100, 100); // 相機位置
camera.lookAt(scene.position); // 相機焦點

// 渲染器
const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('bg').appendChild(renderer.domElement);

// 物體
// 球形體
const sphereGeometry = new THREE.IcosahedronGeometry(20, 1);
const sphereMaterial = new THREE.MeshPhongMaterial({
	color: 0xffffff,
	emissive: 0x000000,
	specular: 0xffffff,
	shininess: 100,
	flatShading: true
});
const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
// 行星環（內）
const color = new THREE.Color().setRGB(Math.random(), Math.random(), Math.random());
const RingInsideGeometry = new THREE.RingGeometry(35, 28, 30, 30);
const RingMaterial = new THREE.MeshBasicMaterial({ color: color });
const ringInside = new THREE.Mesh(RingInsideGeometry, RingMaterial);
ringInside.layers.enable(1);
// 行星環（外）
const RingOutsideGeometry = new THREE.RingGeometry(42, 38, 30, 30);
const ringOutside = new THREE.Mesh(RingOutsideGeometry, RingMaterial);
ringOutside.layers.enable(1);
// 組合行星環
const ringGroup = new THREE.Object3D();
ringGroup.rotation.x = THREE.MathUtils.degToRad(90);
ringGroup.add(ringInside, ringOutside);
// 組合行星體
const planet = new THREE.Group();
planet.add(sphere, ringGroup);
planet.rotation.x = THREE.MathUtils.degToRad(-30);
planet.rotation.y = THREE.MathUtils.degToRad(-10);
scene.add(planet);
// 群星背景
const geometry = new THREE.BufferGeometry();
const particleAmount = 2000; // 群星數
const vertices = [...Array(particleAmount * 3)].map(() => 2000 * Math.random() - 1000);
geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
const particleTexture = new THREE.TextureLoader().load('https://i.imgur.com/9TwBBHH.png');
const material = new THREE.PointsMaterial({ size: 5, sizeAttenuation: true, map: particleTexture, transparent: true, alphaTest: 0.5, color: 0xf3f3af });
const particles = new THREE.Points(geometry, material);
scene.add(particles);
// 建立光源
// 環境光
const ambientLight = new THREE.AmbientLight(0x222222);
// 點光源
const pointLight = new THREE.PointLight(0x777777, 1, 0);
pointLight.position.set(100, 100, 0);
// 聚光燈
const spotLight = new THREE.SpotLight(0xffffff, 3, 150, Math.PI / 15, 1, 1);
			spotLight.position.set(50, 100, -80);
spotLight.castShadow = true;
spotLight.shadow.mapSize.width = 1024;
spotLight.shadow.mapSize.height = 1024;
spotLight.shadow.camera.near = 10;
spotLight.shadow.camera.far = 200;
spotLight.shadow.focus = 1;
scene.add(ambientLight, pointLight, spotLight);

// 建立 UnrealBloomPass 物件
const bloomPass = new UnrealBloomPass(
	new THREE.Vector2(window.innerWidth, window.innerHeight),
	3, // 強度
	0.5, // 射散
	0 // 縮放
);

// 建立 bloom 合成器
const bloomComposer = new EffectComposer(renderer);
bloomComposer.renderToScreen = false;

// 將 UnrealBloomPass 加入合成器
bloomComposer.addPass(new RenderPass(scene, camera));
bloomComposer.addPass(bloomPass);

// 建立 ShaderPass，並設定自定義著色器
const shaderMaterial = new THREE.ShaderMaterial({
	uniforms: {
		baseTexture: { value: null }, // base 紋理
		bloomTexture: { value: bloomComposer.renderTarget2.texture } // bloom 紋理
	},
	vertexShader: `
		varying vec2 vUv;
		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
		}
	`,
	fragmentShader: `
		uniform sampler2D baseTexture;
		uniform sampler2D bloomTexture;
		varying vec2 vUv; // 紋理座標
		void main() {
			// 輸出最終顏色
			gl_FragColor = texture2D(baseTexture, vUv) + vec4(1.0) * texture2D(bloomTexture, vUv);
		}
	`
});
const finalPass = new ShaderPass(shaderMaterial, 'baseTexture');
// 建立 Shader 合成器
const finalComposer = new EffectComposer(renderer);
// 將 ShaderPass 加入合成器
finalComposer.addPass(new RenderPass(scene, camera));
finalComposer.addPass(finalPass);

// 建立軌道控制器
const control = new OrbitControls(camera, renderer.domElement);

// 執行渲染
const bloomLayer = new THREE.Layers();
bloomLayer.set(1);

const materials = [];

const darkenMaterial = obj => {
	if (!bloomLayer.test(obj.layers)) {
		materials[obj.uuid] = obj.material
		obj.material = new THREE.MeshBasicMaterial({ color: 0x000000 })
	}
};

const restoreMaterial = obj => {
	if (materials[obj.uuid]) {
		obj.material = materials[obj.uuid]
		delete materials[obj.uuid]
	}
};

// 執行渲染
const animate = () => {
	requestAnimationFrame(animate)
	sphere.rotation.y += 0.01
	scene.traverse(darkenMaterial)
	bloomComposer.render()
	scene.traverse(restoreMaterial)
	finalComposer.render()
	renderer.render(scene, camera);
};
animate();

// 監聽螢幕寬高變化來做簡單 RWD 設定
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight)
  bloomComposer.setSize(window.innerWidth, window.innerHeight)
  finalComposer.setSize(window.innerWidth, window.innerHeight)
});
