import { AmbientLight, CubeTextureLoader, IcosahedronGeometry, Mesh, MeshLambertMaterial, PerspectiveCamera, Scene, WebGLRenderer } from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

// let textures = [
//     'https://picsum.photos/id/1/200/200',
//     'https://picsum.photos/id/2/200/200',
//     'https://picsum.photos/id/3/200/200',
//     'https://picsum.photos/id/4/200/200',
//     'https://picsum.photos/id/5/200/200',
//     'https://picsum.photos/id/6/200/200',
// ]
let textures = [
    'https://assets.codepen.io/911796/px.jpeg',
    'https://assets.codepen.io/911796/nx.jpeg',
    'https://assets.codepen.io/911796/py.jpeg',
    'https://assets.codepen.io/911796/ny.jpeg',
    'https://assets.codepen.io/911796/pz.jpeg',
    'https://assets.codepen.io/911796/nz.jpeg'
];

let camera,scene,renderer

function init(){
    //camera
    camera = new PerspectiveCamera(70,window.innerWidth/window.innerHeight,1,10000)
    camera.position.set(0,0,1000)

    //scene
    scene = new Scene()

    //renderer
    renderer = new WebGLRenderer()
    renderer.setSize(window.innerWidth,window.innerHeight)
    document.body.appendChild(renderer.domElement)

    //texture cube
    let cubeLoader = new CubeTextureLoader()
    let cubeTexture = cubeLoader.load(textures)

    scene.background = cubeTexture
    //controls
    new OrbitControls(camera,renderer.domElement)

    //sphere
    const geometry = new IcosahedronGeometry(400,10)
    const sphereMaterial = new MeshLambertMaterial({envMap:cubeTexture})
    const sphereMesh = new Mesh(geometry,sphereMaterial)
    scene.add(sphereMesh)

    //light
    const light = new AmbientLight('white')
    scene.add(light)
}

function animate(){
    requestAnimationFrame(animate)
    renderer.render(scene,camera)
}

export {init,animate}