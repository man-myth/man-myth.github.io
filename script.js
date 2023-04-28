import './style.css';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import * as $ from 'jquery'
import Swiper, { Autoplay, Navigation, Pagination } from 'swiper';
//nav bar
$(document).ready(function () {
    $(window).bind('scroll', function () {
        var navHeight = $(window).height() - 70;
        if ($(window).scrollTop() > navHeight) {
            $('nav').addClass('fixed');
        }
        else {
            $('nav').removeClass('fixed');
        }
    });
});


//projects
var swiper = new Swiper(".mySwiper", {
    modules: [Navigation, Pagination, Autoplay],
    speed: 500,
    slidesPerView: 3,
    spaceBetween: 30,
    freeMode: true,
    grabCursor: true,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },


    // autoplay: {
    //     delay: 2500,
    //     disableOnInteraction: false,
    // },



});



let camera
let scene
let renderer
let material
let mouseX = 0
let mouseY = 0
let windowHalfX = window.innerWidth / 2
let windowHalfY = window.innerHeight / 2
let torus

init()
animate()

function init() {
    camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 5, 2000)
    camera.position.z = 500

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


    // // Torus

    // const geometry2 = new THREE.TorusGeometry(10, 3, 16, 100);
    // const material2 = new THREE.MeshStandardMaterial({ color: 0xff6347 });
    // torus = new THREE.Mesh(geometry2, material2);

    // scene.add(torus);

    // // Lights

    // const pointLight = new THREE.PointLight(0xffffff);
    // pointLight.position.set(5, 5, 5);

    // const ambientLight = new THREE.AmbientLight(0xffffff);
    // scene.add(pointLight, ambientLight);

}
// function moveCamera() {
//     const t = document.body.getBoundingClientRect().top;
//     camera.position.z = t * -0.01;
//     camera.position.x = t * -0.0002;
//     camera.rotation.y = t * -0.0002;
// }

// document.body.onscroll = moveCamera;
// moveCamera();

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
    render()
    // torus.rotation.x += 0.01;
    // torus.rotation.y += 0.005;
    // torus.rotation.z += 0.01;
}

function render() {
    camera.position.x += (mouseX * 2 - camera.position.x) * 0.02
    camera.position.y += (-mouseY * 2 - camera.position.y) * 0.02
    camera.lookAt(scene.position)
    renderer.render(scene, camera)
    scene.rotation.x += 0.001
    scene.rotation.y += 0.002
}