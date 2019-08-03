import * as THREE from 'three'
import { Vector2 } from 'three/src/math/Vector2'

export default class Canvas {
  w: number
  h: number
  renderer: any
  camera: any
  scene: any
  light: any
  mesh: any
  mouse: any
  scrollY: any

  constructor() {
    this.mouse = new Vector2(0, 0)
    this.scrollY = window.scrollY

    this.w = window.innerWidth
    this.h = window.innerHeight

    // Add canvas to #canvas-container
    this.renderer = new THREE.WebGLRenderer()
    // this.renderer = new THREE.WebGLRenderer({ alpha: true })
    this.renderer.setSize(this.w, this.h)
    this.renderer.setPixelRatio(window.devicePixelRatio)
    const container = document.getElementById("canvas-container")
    container.appendChild(this.renderer.domElement)

    // Camera
    const fov    = 60
    const fovRad = (fov / 2) * (Math.PI / 180)
    const dist   = (this.h / 2) / Math.tan(fovRad)
    this.camera = new THREE.PerspectiveCamera(fov, this.w / this.h, 1, dist * 2)
    this.camera.position.z = dist

    // Create scene
    this.scene = new THREE.Scene()

    // Set fixed light position
    this.light = new THREE.PointLight(0x00ffff)
    this.light.position.set(0, 0, 400)
    this.scene.add(this.light)

    // Create BoxGeometry
    const geo = new THREE.BoxGeometry(300, 300, 300)
    const mat = new THREE.MeshLambertMaterial({ color: 0xffffff })
    this.mesh = new THREE.Mesh(geo, mat)
    this.scene.add(this.mesh)

    this.render()
  }

  mouseMoved(x, y) {
    this.mouse.x =  x - (this.w / 2)
    this.mouse.y = -y + (this.h / 2)

    this.light.position.x = this.mouse.x
    this.light.position.y = this.mouse.y
  }

  scrolled(y) {
    this.scrollY = y
  }

  render() {
    requestAnimationFrame(() => {
      this.render()
    })

    // rotate 45 degree at 1s
    const sec = performance.now() / 1000
    this.mesh.rotation.x = sec * (Math.PI / 4)
    this.mesh.rotation.y = sec * (Math.PI / 4)

    this.mesh.rotation.x += 0.01
    this.mesh.rotation.y += 0.01
    this.mesh.position.y = this.scrollY

    this.renderer.render(this.scene, this.camera)
  }
}
