import { onCleanup } from 'solid-js'
import * as Three from 'three'

function ThreeJs() {
  const scene = new Three.Scene()
  const camera = new Three.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
  const renderer = new Three.WebGLRenderer()
  renderer.setSize((window.innerWidth / 3) * 2, (window.innerHeight / 3) * 2)
  const cb = () => renderer.setSize((window.innerWidth / 3) * 2, (window.innerHeight / 3) * 2)
  window.addEventListener('resize', cb)

  function animate() {
    requestAnimationFrame(animate)
    cube.rotation.x += 0.01
    cube.rotation.y += 0.01
    renderer.render(scene, camera)
  }

  let rootEle: HTMLDivElement | undefined
  const ele = <div ref={rootEle}></div>
  rootEle?.appendChild(renderer.domElement)
  onCleanup(() => {
    rootEle?.removeChild(renderer.domElement)
    window.removeEventListener('resize', cb)
    renderer.dispose()
  })
  const geometry = new Three.BoxGeometry(1, 1, 1)
  const material = new Three.MeshBasicMaterial({ color: 0x00ff00 })
  const cube = new Three.Mesh(geometry, material)
  scene.add(cube)

  camera.position.z = 5
  animate()
  return ele
}

export default ThreeJs
