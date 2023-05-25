/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable react/no-unknown-property */
import "./App.css"
import {useState} from "react";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera, ScrollControls, Scroll } from "@react-three/drei";
import { House, Floor, PageContent, Hero } from "./components/index";
const App = () => {

  const [ mouseX, setMouseX ] = useState(-0.7)

  const mouseTrack = (e) => {
    const mouseX = (e.clientX / window.innerWidth / 6) * 2 - 1;
    setMouseX(mouseX)
  };

  
  return (
  <main onMouseMove={(e) => mouseTrack(e)} className="wrapper">
    <section className="wrapper__canvas">
      <Canvas shadows="soft">
        <color attach="background" args = {["#ECF2F9"]} />
          <PerspectiveCamera rotation = {[-0.6,0,0]} makeDefault position = {[0,10,13]} />
          <spotLight intensity={0.7} castShadow position = {[0,7,2.9]}/>
          <ambientLight intensity={0.5}/>
          <House mouseX = {mouseX}/>
          <Floor mouseX = {mouseX}/>
      </Canvas>
    </section>
    <section className="wrapper__page">
      <Hero/>
      <PageContent/>
    </section>
  </main>
  );
};

export default App


