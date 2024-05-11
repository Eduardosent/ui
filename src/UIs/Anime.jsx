import * as THREE from 'three';
import { animate, init } from '../js/script';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const renderer = new THREE.WebGLRenderer({antialias:true});
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//shapes
const geometry = new THREE.BoxGeometry( 1, 1, 1 );
//const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const material = new THREE.MeshStandardMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

const light = new THREE.AmbientLight( 0x404040 ); // soft white light
scene.add( light );
const directionalLight = new THREE.DirectionalLight( 0xffffff, 0.5 );
directionalLight.position.set(10,10,10)
scene.add( directionalLight );

//plane 
const geometryp = new THREE.PlaneGeometry( 10, 10 );
const materialplane = new THREE.MeshBasicMaterial( {color: 0xffff00, side: THREE.DoubleSide} );
const plane = new THREE.Mesh( geometryp, materialplane );
plane.rotation.x += Math.PI *.5
scene.add( plane );



export default function Anime(){

    //var pa = anime.path('svg path');
    /*7+console.log(scene,camera,renderer,cube)
    camera.position.z = 5
    camera.position.y = 2
    camera.position.x = 3*/

    camera.position.set(2,2,-2)
    camera.lookAt(cube.position)

    renderer.render( scene, camera );

    setInterval(()=>{
        cube.rotation.y += .01
        renderer.render( scene, camera );
    },1000/60)

    init()
    animate()

    return(
        <div className='anime'>
        </div>
    )
}