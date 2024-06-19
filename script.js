import "./style.css";
import {
  PerspectiveCamera,
  Scene,
  FogExp2,
  BufferGeometry,
  Float32BufferAttribute,
  PointsMaterial,
  Points,
  WebGLRenderer,
  TextureLoader,
  SphereGeometry,
  MeshStandardMaterial,
  Mesh,
  DirectionalLight,
  AmbientLight,
  GridHelper,
  Vector3,
} from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';



document.getElementById("loading-container").style.display = "flex";

var topBar = document.getElementById("topBar");
var btns = topBar.getElementsByClassName("link");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  if (current.length > 0) { 
    current[0].className = current[0].className.replace(" active", "");
  }
  this.className += " active";
  });
}


// Wait for all the content to load
window.addEventListener("load", function () {
  document.getElementById("loading-container").style.display = "none";
});


window.addEventListener("scroll", function () {
  var navHeight = window.innerHeight - 70;
  if (window.pageYOffset > navHeight) {
    document.querySelector("nav").classList.add("fixed");
  } else {
    document.querySelector("nav").classList.remove("fixed");
  }
});

//projects swiper
function initSwiper(numSlides) {
  const swiper = new Swiper(".mySwiper", {
    modules: [Navigation, Pagination, Autoplay],
    // speed: 500,
    slidesPerView: numSlides,
    spaceBetween: 30,
    loop: true,

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
      delay: 1500,
      disableOnInteraction: true,
      pauseOnMouseEnter: true,
    },
    pagination:{
        el: ".swiper-pagination",
    }
  });

}

// Define a media query
var mediaQuery600 = window.matchMedia("(max-width: 600px)");
var mediaQuery1140 = window.matchMedia("(max-width: 1140px)");

// Define a callback function
function handleMediaQueryChange600(mediaQuery) {
  if (mediaQuery600.matches) {
    initSwiper(1);
  } else {
    initSwiper(2);
  }
}

function handleMediaQueryChange1140(mediaQuery) {
  if (mediaQuery1140.matches) {
    initSwiper(2);
  } else {
    initSwiper(2);
  }
}

handleMediaQueryChange600(mediaQuery600);
mediaQuery600.addListener(handleMediaQueryChange600);
handleMediaQueryChange1140(mediaQuery1140);
mediaQuery1140.addListener(handleMediaQueryChange1140);


// Select the form by its ID
document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault(); // prevent reload

  var formData = new FormData(this);
  formData.append('service_id', import.meta.env.VITE_SERVICE_ID);
  formData.append('template_id', import.meta.env.VITE_TEMPLATE_ID);
  formData.append('user_id', import.meta.env.VITE_PUBLIC_KEY);

  fetch('https://api.emailjs.com/api/v1.0/email/send-form', {
      method: 'POST',
      body: formData,
      headers: {
          'Accept': 'application/json'
      }
  })
  .then(function(response) {
      if (response.ok) {
          alert('Your mail is sent!');
      } else {
          return response.json().then(function(error) {
              throw new Error(JSON.stringify(error));
          });
      }
  })
  .catch(function(error) {
      alert('Oops... ' + error.message);
  });

  event.target.elements.name.value = "";
  event.target.elements.email.value = "";
  event.target.elements.message.value = "";
});




// three js
let camera,
  scene,
  renderer,
  material,
  planet,
  planet1,
  sun,
  planet3,
  planet4,
  planet5,
  planet6,
  planet7,
  planet8,
  planet9,
  controls,
  t,
  gridHelper;
let mouseX = 0,
  mouseY = 0;
let windowHalfX = window.innerWidth / 2;
let windowHalfY = window.innerHeight / 2;

init();
animate();

function init() {
  camera = new PerspectiveCamera(
    50,
    window.innerWidth / window.innerHeight,
    1,
    10000
  );

  scene = new Scene();
  scene.fog = new FogExp2(0x0000ff, 0.001);

  const geometry = new BufferGeometry();
  const vertices = [];
  const size = 2000;

  for (let i = 0; i < 20000; i++) {
    const x = (Math.random() * size + Math.random() * size) / 2 - size / 2;
    const y = (Math.random() * size + Math.random() * size) / 2 - size / 2;
    const z = (Math.random() * size + Math.random() * size) / 2 - size / 2;

    vertices.push(x, y, z);
  }

  geometry.setAttribute("position", new Float32BufferAttribute(vertices, 3));

  material = new PointsMaterial({
    size: 2,
    color: 0xffffff,
  });

  const particles = new Points(geometry, material);
  scene.add(particles);

  renderer = new WebGLRenderer();
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  document.body.style.touchAction = "none";
  document.body.addEventListener("pointermove", onPointerMove);
  window.addEventListener("resize", onWindowResize);

  const normalTexture1 = new TextureLoader().load(
    "res/pics/normal_texture1.jpg"
  );
  const normalTexture2 = new TextureLoader().load(
    "res/pics/normal_texture2.jpg"
  );
  const normalTexture3 = new TextureLoader().load(
    "res/pics/normal_texture3.jpg"
  );

  //sun
  const sunTexture = new TextureLoader().load("res/pics/sun map.jpg");
  let sphere = new SphereGeometry(200, 64, 64);
  const sunmaterial = new MeshStandardMaterial({
    normalMap: normalTexture3,
    map: sunTexture,
    roughness: 0.1,
  });
  sun = new Mesh(sphere, sunmaterial);
  sun.position.z = 100;
  sun.position.x = -600;
  scene.add(sun);

  //planet 5
  const mercuryTexture = new TextureLoader().load("res/pics/mercury-map.jpg");
  sphere = new SphereGeometry(5, 64, 64);
  const material5 = new MeshStandardMaterial({
    normalMap: normalTexture2,
    map: mercuryTexture,
    roughness: 0.1,
  });
  planet5 = new Mesh(sphere, material5);
  planet5.position.z = 100;
  planet5.position.x = -300;
  scene.add(planet5);

  //planet 6
  const venusTexture = new TextureLoader().load("res/pics/venus-map.jpg");
  sphere = new SphereGeometry(13, 64, 64);
  const material6 = new MeshStandardMaterial({
    normalMap: normalTexture3,
    map: venusTexture,
    roughness: 0.1,
  });
  planet6 = new Mesh(sphere, material6);
  planet6.position.z = -200;
  planet6.position.x = -200;
  scene.add(planet6);

  //planet 2
  const earthTexture = new TextureLoader().load("res/pics/earth_daymap.jpg");
  sphere = new SphereGeometry(13, 64, 64);
  const material1 = new MeshStandardMaterial({
    normalMap: normalTexture1,
    map: earthTexture,
    roughness: 0.1,
  });
  planet1 = new Mesh(sphere, material1);
  planet1.position.z = 200;
  planet1.position.x = -100;
  scene.add(planet1);

  // Planet 1
  const gasTexture = new TextureLoader().load("res/pics/gas-planet-map.jpg");
  sphere = new SphereGeometry(10, 64, 64);
  const material2 = new MeshStandardMaterial({
    normalMap: normalTexture2,
    map: gasTexture,
    roughness: 0.1,
  });
  planet = new Mesh(sphere, material2);
  planet.position.z = -15;
  planet.position.x = 0;

  scene.add(planet);

  //planet 7
  const marsTexture = new TextureLoader().load("res/pics/mars-map.jpg");
  sphere = new SphereGeometry(7, 64, 64);
  const material7 = new MeshStandardMaterial({
    normalMap: normalTexture3,
    map: marsTexture,
    roughness: 0.1,
  });
  planet7 = new Mesh(sphere, material7);
  planet7.position.z = -100;
  planet7.position.x = 100;
  scene.add(planet7);

  //planet 3
  const jupiterTexture = new TextureLoader().load("res/pics/jupiter-map.jpg");
  sphere = new SphereGeometry(50, 64, 64);
  const material3 = new MeshStandardMaterial({
    normalMap: normalTexture3,
    map: jupiterTexture,
    roughness: 0.1,
  });
  planet3 = new Mesh(sphere, material3);
  planet3.position.z = -800;
  planet3.position.x = 10;
  scene.add(planet3);

  //planet 8
  const saturnTexture = new TextureLoader().load("res/pics/saturn-map.jpg");
  sphere = new SphereGeometry(60, 64, 64);
  const material8 = new MeshStandardMaterial({
    normalMap: normalTexture2,
    map: saturnTexture,
    roughness: 0.1,
  });
  planet8 = new Mesh(sphere, material8);
  planet8.position.z = 1000;
  planet8.position.x = 10;
  scene.add(planet8);

  //planet 8
  const uranusTexture = new TextureLoader().load("res/pics/uranus-map.jpg");
  sphere = new SphereGeometry(40, 64, 64);
  const material9 = new MeshStandardMaterial({
    normalMap: normalTexture2,
    map: uranusTexture,
    roughness: 0.1,
  });
  planet9 = new Mesh(sphere, material9);
  planet9.position.z = 500;
  planet9.position.x = 500;
  scene.add(planet9);

  //planet 4
  const neptuneTexture = new TextureLoader().load("res/pics/neptune-map.jpg");
  sphere = new SphereGeometry(17, 64, 64);
  const material4 = new MeshStandardMaterial({
    normalMap: normalTexture2,
    map: neptuneTexture,
    roughness: 0.1,
  });
  planet4 = new Mesh(sphere, material4);
  planet4.position.z = 100;
  planet4.position.x = 500;
  scene.add(planet4);

  // Lights
  const directionLight = new DirectionalLight(0xffffff);
  directionLight.position.set(-600, 0, 100).normalize;

  const ambientLight = new AmbientLight(0xffffff, 0.1);
  scene.add(directionLight, ambientLight);

  // Helpers

  // const lightHelper = new  PointLightHelper(pointLight2)
  gridHelper = new GridHelper(2000, 50);
  // scene.add(lightHelper, gridHelper)

  // controls = new OrbitControls(camera, renderer.domElement);
}

function moveCamera() {
  t = document.body.getBoundingClientRect().top;

  if (t < -500) {
    scene.rotation.x = 0;
    scene.rotation.y =  0;
    animateCameraToPosition(new Vector3(-1100, 0, -500));
    scene.remove(gridHelper);
  }
  if (t < -780) {
    scene.rotation.y = t * -0.0013 - 1;
  }
  if (t >= -600) {
    animateCameraToPosition(new Vector3(500, 300, 100));
    scene.add(gridHelper);
  }
}

document.body.onscroll = moveCamera;
moveCamera();

// Function to animate the camera to the target position
function animateCameraToPosition(targetPos) {
  var start = camera.position.clone();
  var end = targetPos.clone();
  var duration = 500; // Animation duration in milliseconds
  var startTime = null;

  function updateCameraPosition(timestamp) {
    if (!startTime) startTime = timestamp;
    var elapsed = timestamp - startTime;
    var t = elapsed / duration;
    t = Math.min(t, 1); // Clamp the value of t between 0 and 1

    // Linear interpolation to calculate the intermediate position
    var currentPosition = new Vector3().lerpVectors(start, end, t);
    camera.position.copy(currentPosition);

    if (t < 1) {
      // Continue the animation if t is less than 1
      requestAnimationFrame(updateCameraPosition);
    }
  }
  // Start the animation
  requestAnimationFrame(updateCameraPosition);
}

function onWindowResize() {
  windowHalfX = window.innerWidth / 2;
  windowHalfY = window.innerHeight / 2;

  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

function onPointerMove(event) {
  mouseX = event.clientX - windowHalfX;
  mouseY = event.clientY - windowHalfY;
}

function animate() {
  requestAnimationFrame(animate);

  planet.rotation.y += 0.002;
  planet1.rotation.y += 0.002;
  sun.rotation.y += 0.001;
  planet3.rotation.y += 0.003;
  planet4.rotation.y += 0.005;
  planet5.rotation.y += 0.001;
  planet6.rotation.y += 0.004;
  planet7.rotation.y += 0.003;
  planet8.rotation.y += 0.0005;
  planet9.rotation.y += 0.0009;
  // controls.update()
  render();
}

function render() {
  camera.lookAt(scene.position);
  renderer.render(scene, camera);
  if (t >= -600) {
    camera.position.x += (mouseX * 2 - camera.position.x) * 0.02;
    camera.position.y += (-mouseY * 2 - camera.position.y) * 0.02;
    scene.rotation.x += 0.001;
    scene.rotation.y += 0.002;
  }
}
