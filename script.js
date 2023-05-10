import './style.css';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import Swiper, { Autoplay, Navigation, Pagination } from 'swiper';



window.addEventListener('scroll', function () {
    var navHeight = window.innerHeight - 70;
    if (window.pageYOffset > navHeight) {
        document.querySelector('nav').classList.add('fixed');
    } else {
        document.querySelector('nav').classList.remove('fixed');
    }
});

//projects
function initSwiper(numSlides){
    var swiper = new Swiper(".mySwiper", {
        modules: [Navigation, Pagination, Autoplay],
        speed: 500,
        slidesPerView: numSlides,
        spaceBetween: 10,
        freeMode: true,
        grabCursor: true,
        loop: true,
        // pagination: {
        //     el: ".swiper-pagination",
        //     clickable: true,
        // },
    
        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    
    
        autoplay: {
            delay: 1500,
            disableOnInteraction: true,
        },
    
    });
    
}


// Define a media query
var mediaQuery600 = window.matchMedia('(max-width: 600px)');
var mediaQuery1140 = window.matchMedia('(max-width: 1140px)');
var mediaQuery390 = window.matchMedia('(max-width: 400px)');

// Define a callback function
function handleMediaQueryChange600(mediaQuery) {
  if (mediaQuery600.matches) {
    initSwiper(2)

  } else{
    initSwiper(4)
  }
}


handleMediaQueryChange600(mediaQuery600);

mediaQuery600.addListener(handleMediaQueryChange600);

function handleMediaQueryChange1140(mediaQuery) {
  if (mediaQuery1140.matches) {
    initSwiper(3)

  } else{
    initSwiper(4)
  }
}


handleMediaQueryChange1140(mediaQuery1140);

mediaQuery1140.addListener(handleMediaQueryChange1140);


function handleMediaQueryChange390(mediaQuery) {
  if (mediaQuery390.matches) {
    initSwiper(1)

  } else{
    initSwiper(4)
  }
}


handleMediaQueryChange390(mediaQuery390);

mediaQuery390.addListener(handleMediaQueryChange390);

//contact form
document.querySelector('#contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(e.target.elements.name.value);
    console.log(e.target.elements.email.value);
    console.log(e.target.elements.message.value);

    Email.send({
        SecureToken: "938bc9ef-b493-46b1-889a-3ed5e920edf8",
        To: 'manmeets1100@gmail.com',
        From: 'mnmyt.dev@gmail.com',
        Subject: "Inquiry from My Website",
        Body: "Name: " + e.target.elements.name.value +
            "<br> Email: " + e.target.elements.email.value +
            "<br> Message: " + e.target.elements.message.value
    }).then(
        message => alert("Thank you for connecting with me")
    );

    e.target.elements.name.value = '';
    e.target.elements.email.value = '';
    e.target.elements.message.value = '';
});

//three.js
let camera
let scene
let renderer
let material
let mouseX = 0
let mouseY = 0
let windowHalfX = window.innerWidth / 2
let windowHalfY = window.innerHeight / 2
let planet
let controls
let t
let gridHelper
init()
animate()

function init() {
    camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 1, 1000)
    // camera.position.z = 10
    // camera.position.setZ(100);
    // camera.position.setX(500);
    // camera.position.setY(300);
    // camera.position.set(0, 0, 100);

    scene = new THREE.Scene()
    scene.fog = new THREE.FogExp2(0x0000ff, 0.001)

    const geometry = new THREE.BufferGeometry()
    const vertices = []
    const size = 2000

    for (let i = 0; i < 20000; i++) {
        const x = (Math.random() * size + Math.random() * size) / 2 - size / 2
        const y = (Math.random() * size + Math.random() * size) / 2 - size / 2
        const z = (Math.random() * size + Math.random() * size) / 2 - size / 2

        vertices.push(x, y, z)
    }

    geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3))

    material = new THREE.PointsMaterial({
        size: 2,
        color: 0xffffff,
    })

    const particles = new THREE.Points(geometry, material)
    scene.add(particles)

    renderer = new THREE.WebGLRenderer()
    renderer.setPixelRatio(window.devicePixelRatio)
    renderer.setSize(window.innerWidth, window.innerHeight)
    document.body.appendChild(renderer.domElement)

    document.body.style.touchAction = 'none'
    document.body.addEventListener('pointermove', onPointerMove)
    window.addEventListener('resize', onWindowResize)


    // Planet
    const earthTexture = new THREE.TextureLoader().load('res/pics/gas_planet_map.jpg');
    const normalTexture = new THREE.TextureLoader().load('res/pics/normal_texture2.jpg');
    const sphere = new THREE.SphereGeometry(10, 64, 64);
    const material2 = new THREE.MeshStandardMaterial({ normalMap: normalTexture, map: earthTexture, roughness: 0.1 });
    planet = new THREE.Mesh(sphere, material2);
    planet.position.z = -15;
    scene.add(planet);

    // Lights

    const pointLight = new THREE.PointLight(0xffffff);
    pointLight.position.set(15, 15, 50);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.1);
    scene.add(pointLight, ambientLight);

    // Helpers

    // // const lightHelper = new THREE.PointLightHelper(pointLight)
    gridHelper = new THREE.GridHelper(2000, 50);
    // scene.add(lightHelper, gridHelper)

    // controls = new OrbitControls(camera, renderer.domElement);
    // camera.position.set(100, 100, 1000);
}

function moveCamera() {
    t = document.body.getBoundingClientRect().top;
    // console.log(t);
   
   
    if (t < -600) {
        scene.rotation.x = 0;
        scene.rotation.y = 0;
        animateCameraToPosition(new THREE.Vector3(20, -1, 7))
        scene.remove(gridHelper);
    }
    if (t < -780) {
        console.log(scene.rotation.y);
        scene.rotation.y = t * -0.0013 - 1;
    }

    // console.log("t: " + t);
    // console.log("X position: " + camera.position.x);
    // console.log("Y position: " + camera.position.y);
    // console.log("Z position: " + camera.position.z);
    if (t >= -600) {
        animateCameraToPosition(new THREE.Vector3(500, 300, 100))
        scene.add(gridHelper)
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
        var currentPosition = new THREE.Vector3().lerpVectors(start, end, t);
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
    windowHalfX = window.innerWidth / 2
    windowHalfY = window.innerHeight / 2

    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
}

function onPointerMove(event) {
    mouseX = event.clientX - windowHalfX
    mouseY = event.clientY - windowHalfY
}

function animate() {
    requestAnimationFrame(animate)

    // torus.rotation.x += 0.01;
    planet.rotation.y += 0.002;
    // torus.rotation.z += 0.01;
    // controls.update()
    render()
}

function render() {
    camera.lookAt(scene.position)
    renderer.render(scene, camera)
    if (t >= -600) {

        // console.log("mouseX: " + mouseX);
        // console.log("mouseY: " + mouseY);

        camera.position.x += (mouseX * 2 - camera.position.x) * 0.02
        camera.position.y += (-mouseY * 2 - camera.position.y) * 0.02
        scene.rotation.x += 0.001
        scene.rotation.y += 0.002
    }
   
    if (t < -600) {
        // camera.position.set(20, 0, 12);
        // camera.rotation.y = -100;

    }

}