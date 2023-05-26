/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable react/no-unknown-property */
import "./App.css"
import {useState, useLayoutEffect, useRef} from "react";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import { House, PageContent, Hero } from "./components/index";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
const App = () => {
  const camera = useRef();
  const light = useRef();

  return (
  <main className="wrapper">
    <section className="wrapper__canvas">
      <Canvas shadows="soft">
        <color attach="background" args = {["#ECF2F9"]} />
        <PerspectiveCamera ref={camera} rotation = {[-0.6,0,0]} makeDefault position = {[0,10,13]} />
        <spotLight ref={light} intensity={0.7} castShadow position = {[0,10,2.9]}/>
        <ambientLight intensity={0.5}/>
        <House light = {light} camera={camera}/>
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


