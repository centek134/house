/* eslint-disable no-undef */
/* eslint-disable react/no-unknown-property */
import "./App.css"
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { House } from "./House";
import { Floor } from "./Floor";
const App = () => {

  return (
    <main className="canvas-wrapper">
      <Canvas shadows="soft">
      <color attach="background" args={["#f4a261"]} />
        <PerspectiveCamera makeDefault position={[0,10,12]} />
        <spotLight intensity={0.6} power={1.2} angle={0.75} castShadow position={[0,9,3.5]}/>
        <ambientLight intensity={0.2}/>
        <OrbitControls/>
        <House/>
        <Floor/>
      </Canvas>
    </main>
  )
}

export default App
