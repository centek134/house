/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */

import React, { useRef, useLayoutEffect, useState } from "react";
import { useGLTF } from "@react-three/drei";
import {gsap} from "gsap"
import { ScrollTrigger } from "gsap/all";

export const House = (props) => {
  const { nodes, materials } = useGLTF("/House.gltf");
  const room = useRef();
  const mm = useRef();
  const floor = useRef();
  const camera = props.camera;
  const monitorScreen = useRef();
  const mailBox = useRef();
  const flowers = useRef();
  const walk = useRef();
  const walkPlates = useRef()
  const stone1 = useRef();
  const stone2 = useRef();


  useLayoutEffect(()=> {
    const vid = document.getElementById("video");
    console.log(vid)
    gsap.registerPlugin(ScrollTrigger)
    mm.current = gsap.matchMedia();
    //======================TIMELINE "(min-width: 1500px)" ============================
      mm.current.add(
        "(min-width: 1500px)",() => {
          let tl = gsap.timeline({
            scrollTrigger:{
              trigger:".hero",
              start:"-1500px top",
              end:"top",
              scrub: true,
            }
          })
          tl.to(camera.current.position,{x:0,y:10,z:13});
        //first timeline
        tl = gsap.timeline({
          scrollTrigger:{
            trigger:".section-margin.--first",
            start:"-1500px top",
            end:"top",
            scrub: true,
          }
        });
        tl.fromTo(camera.current.position,{x:0,y:10,z:13}, {x:-7,duration:3});
        tl.fromTo(".about-me",{borderTopRightRadius:1000}, {duration:3, borderTopRightRadius:0}, "-=1");
        // second timeline
        tl = gsap.timeline({
          scrollTrigger:{
            trigger:".section-margin.--second",
            start:"-2000px top",
            end:"top",
            scrub: true,
          }
        });
        tl.fromTo(camera.current.position,{x:-7},{x:3.5,y:4.5,z:3,duration:5});
        tl.fromTo(".my-work",{borderTopLeftRadius:1000}, {duration:5, borderTopLeftRadius:0}, "+=2");
        // third timeline
        tl = gsap.timeline({
          scrollTrigger:{
            trigger:".section-margin.--third",
            start:"-2000px top",
            end:"top",
            scrub: true,
            markers:true
          }
        });
        tl.fromTo(camera.current.position,{x:3.5,y:4.5,z:3},{x:-2.5,y:3,z:7,duration:3});
        tl.fromTo(".contact-me",{borderTopRightRadius:1000}, {duration:3, borderTopRightRadius:0}, "+=2");

        tl = gsap.timeline({
          scrollTrigger:{
            trigger:".contact-me",
            start:"top",
            end:"bottom",
            markers:true
          }
        });
        tl.fromTo(walk.current.scale, {x:0, y:0, z:0}, {x:1,y:1,z:1,duration:0.5});
        tl.fromTo(walkPlates.current.scale, {x:0, y:0, z:0}, {x:1,y:1,z:1,duration:0.5});
        tl.fromTo(flowers.current.scale, {x:0, y:0, z:0}, {x:1,y:1,z:1,duration:0.5});
        tl.fromTo(mailBox.current.scale, {x:0, y:0, z:0}, {x:1,y:1,z:1,duration:0.5});
        tl.fromTo(stone1.current.scale, {x:0, y:0, z:0}, {x:0.14,y:0.14,z:0.14,duration:0.5});
        tl.fromTo(stone2.current.scale, {x:0, y:0, z:0}, {x:0.14,y:0.14,z:0.14,duration:0.5});



  });

  //======================TIMELINE "(min-width: 1250px) and (max-width:1499px)" ============================
        mm.current.add(
        "(min-width: 1250px) and (max-width:1499px)",() => {
        //first timeline
          let tl = gsap.timeline({
            scrollTrigger:{
            trigger:".hero",
            start:"-1500px top",
            end:"top",
            scrub: true,
          }
        });
          tl.to(camera.current.position,{x:0,y:10,z:13});
          tl = gsap.timeline({
          scrollTrigger:{
            trigger:".section-margin.--first",
            start:"-1500px top",
            end:"top",
            scrub: true,
            markers:true
          }
        });
        tl.to(camera.current.position, {x:-5.5,duration:5});
        tl.fromTo(".about-me",{borderTopRightRadius:1000}, {duration:3, borderTopRightRadius:0}, "-=1");
        //second timeline
        tl = gsap.timeline({
          scrollTrigger:{
            trigger:".section-margin.--second",
            start:"-2000px top",
            end:"top",
            scrub: true,
            markers:true
          }
        });
        tl.fromTo(camera.current.position,{x:-5.5,y:10,z:13}, {x:3.5,y:5,z:4,duration:5});
        tl.fromTo(".my-work",{borderTopLeftRadius:1000}, {duration:3, borderTopLeftRadius:0}, "-=1");
        //third timeline
        tl = gsap.timeline({
          scrollTrigger:{
            trigger:".section-margin.--third",
            start:"-2000px top",
            end:"bottom",
            scrub: true,
            markers:true
          }
        });
        tl.fromTo(camera.current.position, {x:3.5,y:5,z:4,duration:5},{x:-2,y:3,z:7,duration:3});
        tl.fromTo(".contact-me",{borderTopRightRadius:1000}, {duration:3, borderTopRightRadius:0}, "-=1");

        tl = gsap.timeline({
          scrollTrigger:{
            trigger:".contact-me",
            start:"top",
            end:"bottom",
            markers:true
          }
        });
        tl.fromTo(walk.current.scale, {x:0, y:0, z:0}, {x:1,y:1,z:1,duration:0.5});
        tl.fromTo(walkPlates.current.scale, {x:0, y:0, z:0}, {x:1,y:1,z:1,duration:0.5});
        tl.fromTo(flowers.current.scale, {x:0, y:0, z:0}, {x:1,y:1,z:1,duration:0.5});
        tl.fromTo(mailBox.current.scale, {x:0, y:0, z:0}, {x:1,y:1,z:1,duration:0.5});
        tl.fromTo(stone1.current.scale, {x:0, y:0, z:0}, {x:0.14,y:0.14,z:0.14,duration:0.5});
        tl.fromTo(stone2.current.scale, {x:0, y:0, z:0}, {x:0.14,y:0.14,z:0.14,duration:0.5});
  });
  //======================TIMELINE "(min-width: 969px) and (max-width:1249px)" ============================
        mm.current.add(
        "(min-width: 969px) and (max-width:1249px)",() => {
       //first timeline
       let tl = gsap.timeline({
        scrollTrigger:{
        trigger:".hero",
        start:"-1500px top",
        end:"top",
        scrub: true,
      }
    });
      tl.to(camera.current.position,{x:0,y:10,z:13});
      tl = gsap.timeline({
      scrollTrigger:{
        trigger:".section-margin.--first",
        start:"-1500px top",
        end:"top",
        scrub: true,
        markers:true
      }
    });
    tl.to(camera.current.position, {x:-4.5,duration:5});
    tl.fromTo(".about-me",{borderTopRightRadius:1000}, {duration:3, borderTopRightRadius:0}, "-=1");
    //second timeline
    tl = gsap.timeline({
      scrollTrigger:{
        trigger:".section-margin.--second",
        start:"-2000px top",
        end:"top",
        scrub: true,
        markers:true
      }
    });
    tl.fromTo(camera.current.position,{x:-4.5,y:10,z:13}, {x:3.5,y:5.5,z:5,duration:5});
    tl.fromTo(".my-work",{borderTopLeftRadius:1000}, {duration:3, borderTopLeftRadius:0}, "-=1");
    //third timeline
    tl = gsap.timeline({
      scrollTrigger:{
        trigger:".section-margin.--third",
        start:"-2000px top",
        end:"bottom",
        scrub: true,
        markers:true
      }
    });
    tl.fromTo(camera.current.position, {x:3.5,y:5.5,z:5,duration:5},{x:-2,y:3,z:8,duration:3});
    tl.fromTo(".contact-me",{borderTopRightRadius:1000}, {duration:3, borderTopRightRadius:0}, "-=1");

    tl = gsap.timeline({
      scrollTrigger:{
        trigger:".contact-me",
        start:"top",
        end:"bottom",
        markers:true
      }
    });
    tl.fromTo(walk.current.scale, {x:0, y:0, z:0}, {x:1,y:1,z:1,duration:0.5});
    tl.fromTo(walkPlates.current.scale, {x:0, y:0, z:0}, {x:1,y:1,z:1,duration:0.5});
    tl.fromTo(flowers.current.scale, {x:0, y:0, z:0}, {x:1,y:1,z:1,duration:0.5});
    tl.fromTo(mailBox.current.scale, {x:0, y:0, z:0}, {x:1,y:1,z:1,duration:0.5});
    tl.fromTo(stone1.current.scale, {x:0, y:0, z:0}, {x:0.14,y:0.14,z:0.14,duration:0.5});
    tl.fromTo(stone2.current.scale, {x:0, y:0, z:0}, {x:0.14,y:0.14,z:0.14,duration:0.5});
  });


  });

  return (
    <>
    <mesh ref={floor} rotation={[-0.5 * Math.PI, 0, -0.7]} position={[0, -0.5, 0]}  receiveShadow>
      <planeGeometry attach={"geometry"} args={[9, 9, 1, 1]} />
      <shadowMaterial  attach={"material"} opacity={0.2} />
    </mesh>
    <group ref={room} rotation={[0,-0.7,0]} {...props} dispose={null}>
      <group position={[-1.43, 1.8, -1.41]}>
        <mesh receiveShadow geometry={nodes.Cube.geometry} material={materials.house} />
        <mesh receiveShadow geometry={nodes.Cube_1.geometry} material={materials.floor} />
        <mesh castShadow geometry={nodes.Cube_2.geometry} material={materials.houseshadow} />
        <mesh castShadow geometry={nodes.Cube_3.geometry} material={materials.houseshadow} />
      </group>
      <mesh  geometry={nodes.carpet.geometry} material={materials.carpet} position={[1.37, 0.08, 0.69]} />
      <mesh castShadow geometry={nodes.poster.geometry} material={materials.Material} position={[-3.08, 2.39, -1.43]} rotation={[0, 0, -Math.PI / 2]} />
      <group position={[-2.38, 0.81, -1.43]} rotation={[-Math.PI, 0, -Math.PI]}>
        <mesh castShadow geometry={nodes.Cube007.geometry} material={materials.bedBlanket} />
        <mesh castShadow geometry={nodes.Cube007_1.geometry} material={materials["Material.002"]} />
        <mesh castShadow geometry={nodes.Cube007_2.geometry} material={materials.bedBackSphere} />
        <mesh castShadow geometry={nodes.Cube007_3.geometry} material={materials.bedBottom} />
        <mesh castShadow geometry={nodes.Cube007_4.geometry} material={materials.bedLegs} />
        <mesh castShadow geometry={nodes.Cube007_5.geometry} material={materials.bedMattress} />
        <mesh castShadow geometry={nodes.Cube007_6.geometry} material={materials.bedPillow} />
      </group>
      <mesh castShadow geometry={nodes.cat.geometry} material={materials["Material.004"]} position={[-0.82, 0.77, -1.33]} />
      <group position={[1.99, 1.21, -1.6]}>
        <mesh castShadow geometry={nodes.Cube020.geometry} material={materials["tableDesk.001"]} />
        <mesh castShadow geometry={nodes.Cube020_1.geometry} material={materials.mouse} />
        <mesh castShadow geometry={nodes.Cube020_2.geometry} material={materials["tableLegs.002"]} />
        <mesh castShadow geometry={nodes.Cube020_3.geometry} material={materials.mousepad} />
        <mesh castShadow geometry={nodes.Cube020_4.geometry} material={materials.drawerFront} />
        <mesh castShadow geometry={nodes.Cube020_5.geometry} material={materials.drawerInside} />
        <mesh castShadow geometry={nodes.Cube020_6.geometry} material={materials.drawerHandle} />
        <mesh castShadow geometry={nodes.Cube020_7.geometry} material={materials.pencilCase} />
        <mesh castShadow geometry={nodes.Cube020_8.geometry} material={materials.pencil1} />
        <mesh castShadow geometry={nodes.Cube020_9.geometry} material={materials.pencil3} />
        <mesh castShadow geometry={nodes.Cube020_10.geometry} material={materials.pencil2} />
      </group>
      <group position={[1.36, 1.25, -1.34]}>
        <mesh castShadow geometry={nodes.Cube016.geometry} material={materials["Material.001"]} />
        <mesh castShadow geometry={nodes.Cube016_1.geometry} material={materials.keyboard} />
      </group>
      <group position={[1.44, 1.54, -2.29]}>
        <mesh castShadow geometry={nodes.Cube011.geometry} material={materials.screenFrame} />
        <mesh castShadow geometry={nodes.Cube011_1.geometry} material={materials.standVertical} />
        <mesh castShadow geometry={nodes.Cube011_2.geometry} material={materials.stand} />
        <mesh castShadow geometry={nodes.Cube011_3.geometry} material={materials.screenVerticalJoin} />
      </group>
      <mesh ref={monitorScreen} castShadow geometry={nodes.monitorScreen.geometry} material={materials["computer-screen"]} position={[1.44, 1.76, -2.29]} rotation={[Math.PI / 2, 0, 0]} />
      <group position={[0.48, 1.55, -1.83]}>
        <mesh castShadow geometry={nodes.Cylinder015.geometry} material={materials.pot} />
        <mesh castShadow geometry={nodes.Cylinder015_1.geometry} material={materials["pot-ground"]} />
        <mesh castShadow geometry={nodes.Cylinder015_2.geometry} material={materials.petal} />
        <mesh castShadow geometry={nodes.Cylinder015_3.geometry} material={materials["flower-stem"]} />
        <mesh castShadow geometry={nodes.Cylinder015_4.geometry} material={materials["flower-circle"]} />
        <mesh castShadow geometry={nodes.Cylinder015_5.geometry} material={materials["petal.001"]} />
        <mesh castShadow geometry={nodes.Cylinder015_6.geometry} material={materials["flower-stem.001"]} />
        <mesh castShadow geometry={nodes.Cylinder015_7.geometry} material={materials["flower-circle.001"]} />
        <mesh castShadow geometry={nodes.Cylinder015_8.geometry} material={materials["petal.002"]} />
        <mesh castShadow geometry={nodes.Cylinder015_9.geometry} material={materials["flower-stem.002"]} />
        <mesh castShadow geometry={nodes.Cylinder015_10.geometry} material={materials["flower-circle.002"]} />
      </group>
      <mesh castShadow geometry={nodes.chair.geometry} material={materials.chair} position={[1.52, 0.52, -0.72]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh castShadow geometry={nodes.windowPlane.geometry} material={materials["Material.008"]} position={[-1.68, 2.9, -2.61]} rotation={[Math.PI / 2, 0, 0]} />
      <group position={[0.67, 2.49, -2.39]}>
        <mesh castShadow geometry={nodes.Cube030.geometry} material={materials.shelf} />
        <mesh castShadow geometry={nodes.Cube030_1.geometry} material={materials.shelfSupport} />
      </group>
      <group position={[1.07, 3.97, -2.14]} rotation={[0, -0.33, 0]}>
        <mesh castShadow geometry={nodes.Cube039.geometry} material={materials["bookPage.003"]} />
        <mesh castShadow geometry={nodes.Cube039_1.geometry} material={materials["bookCover.003"]} />
        <mesh castShadow geometry={nodes.Cube039_2.geometry} material={materials["bookPage.001"]} />
        <mesh castShadow geometry={nodes.Cube039_3.geometry} material={materials["bookCover.001"]} />
        <mesh castShadow geometry={nodes.Cube039_4.geometry} material={materials["bookPage.002"]} />
        <mesh castShadow geometry={nodes.Cube039_5.geometry} material={materials["bookCover.002"]} />
        <mesh castShadow geometry={nodes.Cube039_6.geometry} material={materials["bookPage.004"]} />
        <mesh castShadow geometry={nodes.Cube039_7.geometry} material={materials["bookCover.004"]} />
        <mesh castShadow geometry={nodes.Cube039_8.geometry} material={materials["bookPage.008"]} />
        <mesh castShadow geometry={nodes.Cube039_9.geometry} material={materials["bookCover.008"]} />
        <mesh castShadow geometry={nodes.Cube039_10.geometry} material={materials["bookPage.010"]} />
        <mesh castShadow geometry={nodes.Cube039_11.geometry} material={materials["bookCover.010"]} />
        <mesh castShadow geometry={nodes.Cube039_12.geometry} material={materials["bookPage.011"]} />
        <mesh castShadow geometry={nodes.Cube039_13.geometry} material={materials["bookCover.011"]} />
      </group>
      <group position={[1.07, 3.56, -2.38]}>
        <mesh castShadow geometry={nodes.Cube035.geometry} material={materials.shelfWideSupport} />
        <mesh castShadow geometry={nodes.Cube035_1.geometry} material={materials.shelf} />
      </group>
      <group position={[-2.19, 0.77, 0.11]}>
        <mesh castShadow geometry={nodes.Cylinder003.geometry} material={materials.legs} />
        <mesh castShadow geometry={nodes.Cylinder003_1.geometry} material={materials.lampStand} />
        <mesh castShadow geometry={nodes.Cylinder003_2.geometry} material={materials.lampCylinder} />
        <mesh castShadow geometry={nodes.Cylinder003_3.geometry} material={materials.nighstand} />
        <mesh castShadow geometry={nodes.Cylinder003_4.geometry} material={materials.nighstandDrawer} />
        <mesh castShadow geometry={nodes.Cylinder003_5.geometry} material={materials.nighstandKnox} />
        <mesh castShadow geometry={nodes.Cylinder003_6.geometry} material={materials.phone} />
        <mesh castShadow geometry={nodes.Cylinder003_7.geometry} material={materials.phoneScreen} />
      </group>
      <group position={[-1.91, 0.41, 1.68]} rotation={[0, Math.PI / 2, 0]}>
        <mesh castShadow geometry={nodes.Sphere011.geometry} material={materials["drawer.002"]} />
        <mesh castShadow geometry={nodes.Sphere011_1.geometry} material={materials["frames.001"]} />
        <mesh castShadow geometry={nodes.Sphere011_2.geometry} material={materials["wardrobe.001"]} />
        <mesh castShadow geometry={nodes.Sphere011_3.geometry} material={materials["Material.007"]} />
      </group>
      <mesh castShadow geometry={nodes.cardboard.geometry} material={materials.cardboard} position={[-2.5, 3.35, 2]} rotation={[Math.PI, -1.03, Math.PI]} />
      <group position={[-2.4, 3.19, 1.31]} rotation={[0, -0.65, 0]}>
        <mesh castShadow geometry={nodes.Cube022.geometry} material={materials.box} />
        <mesh castShadow geometry={nodes.Cube022_1.geometry} material={materials["box-cover"]} />
      </group>
      <group position={[-0.37, 0.47, 2.13]} rotation={[Math.PI / 2, 0, 1.53]}>
        <mesh castShadow geometry={nodes.Cylinder005.geometry} material={materials.bar} />
        <mesh castShadow geometry={nodes.Cylinder005_1.geometry} material={materials.plate} />
        <mesh castShadow geometry={nodes.Cylinder005_2.geometry} material={materials["plate.002"]} />
        <mesh castShadow geometry={nodes.Cylinder005_3.geometry} material={materials["plate.003"]} />
        <mesh castShadow geometry={nodes.Cylinder005_4.geometry} material={materials["plate.004"]} />
      </group>
      <group position={[-0.56, 0.26, 1.49]} rotation={[Math.PI / 2, 0, 0.44]}>
        <mesh castShadow geometry={nodes.Cylinder009.geometry} material={materials["bar.001"]} />
        <mesh castShadow geometry={nodes.Cylinder009_1.geometry} material={materials["plate.001"]} />
      </group>
      <group position={[0.13, 0.38, 1.34]} rotation={[-3.1, 0.98, -0.03]}>
        <mesh castShadow geometry={nodes.Cylinder013.geometry} material={materials["bar.002"]} />
        <mesh castShadow geometry={nodes.Cylinder013_1.geometry} material={materials["plate.005"]} />
      </group>
      <mesh castShadow geometry={nodes.ts.geometry} material={materials.ts} position={[0.2, 2.67, -1.96]} rotation={[Math.PI / 2, 0, -0.55]} />
      <mesh castShadow geometry={nodes["cube-ts"].geometry} material={materials["ts-cube.001"]} position={[0.12, 2.74, -2.03]} rotation={[0, -1.02, 0]} />
      <mesh castShadow geometry={nodes.js.geometry} material={materials["js.006"]} position={[0.44, 2.68, -2.05]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh castShadow geometry={nodes["cube-js"].geometry} material={materials["js-cube.001"]} position={[0.41, 2.74, -2.15]} rotation={[0, -1.57, 0]} />
      <mesh castShadow geometry={nodes.html.geometry} material={materials["Material.013"]} position={[0.32, 2.99, -1.99]} rotation={[Math.PI / 2, 0, -0.81]} />
      <mesh castShadow geometry={nodes["cube-html5"].geometry} material={materials["html5-cube.001"]} position={[0.25, 2.99, -2.05]} rotation={[0, -0.76, 0]} />
      <mesh castShadow geometry={nodes.jira.geometry} material={materials["js.004"]} position={[0.73, 2.74, -2.08]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh castShadow geometry={nodes["cube-jira"].geometry} material={materials["Material.013"]} position={[0.69, 2.74, -2.18]} rotation={[0, -1.57, 0]} />
      <mesh castShadow geometry={nodes["jira-logo"].geometry} material={materials["ts.001"]} position={[0.61, 2.74, -2.05]} rotation={[1.57, -Math.PI / 4, 1.57]} />
      <mesh castShadow geometry={nodes["cube-css3"].geometry} material={materials["css3-cube.001"]} position={[0.46, 2.99, -2.2]} rotation={[0, -0.86, 0]} />
      <mesh castShadow geometry={nodes.css3.geometry} material={materials["Material.012"]} position={[0.53, 2.99, -2.14]} rotation={[Math.PI / 2, 0, -0.71]} />
      <mesh castShadow geometry={nodes.react.geometry} material={materials["react.001"]} position={[0.35, 3.19, -2.18]} rotation={[Math.PI / 2, 0, -0.62]} />
      <mesh castShadow geometry={nodes["cube-react"].geometry} material={materials["react-cube.001"]} position={[0.29, 3.24, -2.25]} rotation={[0, -0.95, 0]} />
      <mesh castShadow geometry={nodes["react-logo"].geometry} material={materials["react.001"]} position={[0.36, 3.28, -2.15]} rotation={[0, -0.95, 0]} />
      <mesh castShadow geometry={nodes.sass.geometry} material={materials["js.009"]} position={[1.06, 2.75, -2.18]} rotation={[Math.PI / 2, 0, -0.64]} />
      <mesh castShadow geometry={nodes["cube--sass"].geometry} material={materials["js.010"]} position={[1, 2.74, -2.25]} rotation={[0, -0.94, 0]} />
      <mesh castShadow geometry={nodes.restapi.geometry} material={materials["js.001"]} position={[0.77, 2.99, -2.28]} rotation={[Math.PI / 2, 0, -1.02]} />
      <mesh castShadow geometry={nodes["cube-restapi"].geometry} material={materials["js.008"]} position={[0.69, 2.99, -2.33]} rotation={[0, -0.55, 0]} />
      <mesh castShadow geometry={nodes.github.geometry} material={materials["js.001"]} position={[0.69, 3.24, -2.25]} rotation={[Math.PI / 2, 0, -0.82]} />
      <mesh castShadow geometry={nodes["cube-github"].geometry} material={materials["js.003"]} position={[0.62, 3.24, -2.31]} rotation={[0, -0.75, 0]} />
      <mesh castShadow geometry={nodes.aem.geometry} material={materials["Material.009"]} position={[1.32, 2.74, -2.26]} rotation={[Math.PI / 2, 0, -0.64]} />
      <group position={[1.29, 2.74, -2.3]} rotation={[0, -0.94, 0]}>
        <mesh castShadow geometry={nodes.Cube069.geometry} material={materials["Material.010"]} />
        <mesh castShadow geometry={nodes.Cube069_1.geometry} material={materials["Material.011"]} />
      </group>
      <group ref={walk} scale={0} position={[1.42, -0.08, 3.39]}>
        <mesh receiveShadow geometry={nodes.Cube050.geometry} material={materials["walk-shadow"]} />
        <mesh castShadow geometry={nodes.Cube050_1.geometry} material={materials["walk-cast"]} />
      </group>
      <group ref={walkPlates} scale={0} position={[1.46, 0.06, 3.01]} rotation={[0, 0.19, 0]}>
        <mesh castShadow geometry={nodes.Cube052.geometry} material={materials.walkplate1} />
        <mesh castShadow geometry={nodes.Cube052_1.geometry} material={materials.walkplate2} />
      </group>
      <mesh ref={stone1} castShadow geometry={nodes.rock.geometry} material={materials.rock} position={[0.85, 0.05, 2.99]} scale={0} />
      <mesh ref={stone2} castShadow geometry={nodes.rock2.geometry} material={materials.rock} position={[1.97, 0.05, 3.61]} scale={0} />
      <group ref={flowers} scale={0} position={[0.95, 0.23, 3.9]} rotation={[0, 0, -0.2]}>
        <mesh castShadow geometry={nodes.Sphere004.geometry} material={materials["flower-stem.003"]} />
        <mesh castShadow geometry={nodes.Sphere004_1.geometry} material={materials["flower-circle.003"]} />
        <mesh castShadow geometry={nodes.Sphere004_2.geometry} material={materials["petal.003"]} />
        <mesh castShadow geometry={nodes.Sphere004_3.geometry} material={materials["flower-stem.004"]} />
        <mesh castShadow geometry={nodes.Sphere004_4.geometry} material={materials["flower-circle.004"]} />
        <mesh castShadow geometry={nodes.Sphere004_5.geometry} material={materials["petal.004"]} />
        <mesh castShadow geometry={nodes.Sphere004_6.geometry} material={materials["flower-stem.005"]} />
        <mesh castShadow geometry={nodes.Sphere004_7.geometry} material={materials["flower-circle.005"]} />
        <mesh castShadow geometry={nodes.Sphere004_8.geometry} material={materials["petal.005"]} />
      </group>
      <group scale={0} ref={mailBox} position={[2.2, 1.54, 3.55]} rotation={[-0.17, 0, 0]}>
        <mesh castShadow geometry={nodes.Cube055.geometry} material={materials.pole} />
        <mesh castShadow geometry={nodes.Cube055_1.geometry} material={materials.mailbox} />
        <mesh castShadow geometry={nodes.Cube055_2.geometry} material={materials["Material.003"]} />
        <mesh castShadow geometry={nodes.Cube055_3.geometry} material={materials.mailboxFlag} />
      </group>
    </group>
    </>
  )
}

useGLTF.preload("/House.gltf")
