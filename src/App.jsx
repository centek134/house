/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable react/no-unknown-property */
import "./App.css"
import { useRef} from "react";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera, Loader } from "@react-three/drei";
import { House, PageContent, Hero } from "./components/index";
const App = () => {
  const camera = useRef();
  return (
  <div className="wrapper">
    <section className="wrapper__canvas">
      <Canvas shadows="soft">
        <PerspectiveCamera ref={camera} rotation = {[-0.6,0,0]} makeDefault position = {[0,10,13]} />
        <color attach="background" args = {["#ECF2F9"]} />
        <spotLight angle={2} intensity={0.7}  castShadow position = {[0,10,2.9]}/>
        {/* <spotLight intensity={0.7} castShadow position = {[0,10,2.9]}/> */}
        <ambientLight intensity={0.5}/>
        <House camera={camera}/>
      </Canvas>
    </section>
    <section className="wrapper__page">
      <Hero/>
      <PageContent/>
    </section>
    <div className="wrapper__scroll-overlay"></div>
    <Loader/>
  </div>
  );
};

export default App


