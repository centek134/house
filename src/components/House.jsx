/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */


import React, { useRef, useLayoutEffect } from "react";
import { useGLTF } from "@react-three/drei";
import {gsap} from "gsap"
import { ScrollTrigger } from "gsap/all";
export const House = (props) => {
  const { nodes, materials } = useGLTF("/house.gltf");
  const mm = useRef();
  const room = useRef();
  const floor = useRef();
  const camera = props.camera;
  const light = props.light;


  useLayoutEffect(()=> {
    gsap.registerPlugin(ScrollTrigger)
    mm.current = gsap.matchMedia()
    mm.current.add({

    })
    //======================TIMELINE "(min-width: 1600px)" ============================
      mm.current.add(
        "(min-width: 1600px)",() => {
        //first timeline
        let tl = gsap.timeline({
          scrollTrigger:{
            trigger:".about-me",
            start:"-1500px top",
            end:"top",
            scrub: true,
            markers:true
          }
        });
        tl.to(camera.current.position, {x:-7,duration:5})
        // second timeline
        tl = gsap.timeline({
          scrollTrigger:{
            trigger:".my-work",
            start:"-1500px top",
            end:"top",
            scrub: true,
            markers:true
          }
        })
        .to(camera.current.position, {x:7,duration:5})
      //third timeline
        tl = gsap.timeline({
          scrollTrigger:{
            trigger:".contact-me",
            start:"-1500px top",
            end:"top",
            scrub: true,
            markers:true
          }
        })
        .to(camera.current.position, {x:-7,duration:5})
  });

  //======================TIMELINE "(min-width: 1250px) and (max-width:1599px)" ============================
        mm.current.add(
        "(min-width: 1250px) and (max-width:1599px)",() => {
        //first timeline
        let tl = gsap.timeline({
          scrollTrigger:{
            trigger:".about-me",
            start:"-1500px top",
            end:"top",
            scrub: true,
            markers:true
          }
        });
        tl.to(camera.current.position, {x:-5.5,duration:5});
        //second timeline
        tl = gsap.timeline({
          scrollTrigger:{
            trigger:".my-work",
            start:"-1500px top",
            end:"top",
            scrub: true,
            markers:true
          }
        });
        tl.to(camera.current.position, {x:5.5,duration:5});
        //third timeline
        tl = gsap.timeline({
          scrollTrigger:{
            trigger:".contact-me",
            start:"-1500px top",
            end:"top",
            scrub: true,
            markers:true
          }
        });
        tl.to(camera.current.position, {x:-5.5,duration:5});
  });
  //======================TIMELINE "(min-width: 969px) and (max-width:1249px)" ============================
        mm.current.add(
        "(min-width: 969px) and (max-width:1249px)",() => {
        //first timeline
        let tl = gsap.timeline({
          scrollTrigger:{
            trigger:".about-me",
            start:"-1500px top",
            end:"top",
            scrub: true,
            markers:true
          }
        });
        //second timeline
        tl.to(camera.current.position, {x:-4,duration:5});
        tl = gsap.timeline({
          scrollTrigger:{
            trigger:".my-work",
            start:"-1500px top",
            end:"top",
            scrub: true,
            markers:true
          }
        });
        tl.to(camera.current.position, {x:4,duration:5});
        //third timeline
        tl = gsap.timeline({
          scrollTrigger:{
            trigger:".contact-me",
            start:"-1500px top",
            end:"top",
            scrub: true,
            markers:true
          }
        });
        tl.to(camera.current.position, {x:-4,duration:5});
  });


  });

  return (
    <>
    <mesh ref={floor} rotation={[-0.5 * Math.PI, 0, -0.7]} position={[0, -0.5, 0]} receiveShadow >
      <planeBufferGeometry attach={"geometry"} args={[9, 9, 1, 1]} />
      <shadowMaterial  attach={"material"} opacity={0.2} />
    </mesh>
    <group ref={room} rotation={[0 ,-0.7, 0]} {...props} dispose={null}>
      <group position={[-0.37, 3.06, 0.03]}>
        <mesh receiveShadow  geometry={nodes.Cube.geometry} material={materials.house} />
        <mesh receiveShadow  geometry={nodes.Cube_1.geometry} material={materials.floor} />
        <mesh  castShadow receiveShadow geometry={nodes.Cube_2.geometry} material={materials.houseshadow} />
        <mesh castShadow receiveShadow geometry={nodes.Cube_3.geometry} material={materials.houseshadow} />
      </group>
      <mesh geometry={nodes.carpet.geometry} material={materials.carpet} position={[1.37, 0.08, 0.69]} />
      <mesh castShadow  geometry={nodes.poster.geometry} material={materials.Material} position={[-3.08, 2.39, -1.43]} rotation={[0, 0, -Math.PI / 2]} />
      <group position={[-1.07, 0.56, -1.44]} rotation={[-Math.PI, 0, -Math.PI]}>
        <mesh castShadow  geometry={nodes.Cube007.geometry} material={materials.bedBlanket} />
        <mesh castShadow  geometry={nodes.Cube007_1.geometry} material={materials["Material.002"]} />
        <mesh castShadow  geometry={nodes.Cube007_2.geometry} material={materials.bedBackSphere} />
        <mesh castShadow  geometry={nodes.Cube007_3.geometry} material={materials.bedBottom} />
        <mesh castShadow  geometry={nodes.Cube007_4.geometry} material={materials.bedLegs} />
        <mesh castShadow  geometry={nodes.Cube007_5.geometry} material={materials.bedMattress} />
        <mesh castShadow  geometry={nodes.Cube007_6.geometry} material={materials.bedPillow} />
      </group>
      <mesh castShadow  geometry={nodes.cat.geometry} material={materials["Material.004"]} position={[-0.86, 0.65, -1.49]} />
      <group position={[1.22, 1.13, -1.67]}>
        <mesh castShadow  geometry={nodes.Cube020.geometry} material={materials["tableDesk.001"]} />
        <mesh castShadow  geometry={nodes.Cube020_1.geometry} material={materials.mouse} />
        <mesh castShadow  geometry={nodes.Cube020_2.geometry} material={materials["tableLegs.002"]} />
        <mesh castShadow  geometry={nodes.Cube020_3.geometry} material={materials.mousepad} />
        <mesh castShadow  geometry={nodes.Cube020_4.geometry} material={materials.drawerFront} />
        <mesh castShadow  geometry={nodes.Cube020_5.geometry} material={materials.drawerInside} />
        <mesh castShadow  geometry={nodes.Cube020_6.geometry} material={materials.drawerHandle} />
        <mesh castShadow  geometry={nodes.Cube020_7.geometry} material={materials.pencilCase} />
        <mesh castShadow  geometry={nodes.Cube020_8.geometry} material={materials.pencil1} />
        <mesh castShadow  geometry={nodes.Cube020_9.geometry} material={materials.pencil3} />
        <mesh castShadow  geometry={nodes.Cube020_10.geometry} material={materials.pencil2} />
      </group>
      <group position={[1.05, 1.25, -1.46]}>
        <mesh castShadow  geometry={nodes.Cube016.geometry} material={materials["Material.001"]} />
        <mesh castShadow  geometry={nodes.Cube016_1.geometry} material={materials.keyboard} />
      </group>
      <group position={[1.44, 1.75, -2.31]}>
        <mesh castShadow  geometry={nodes.Cube011.geometry} material={materials.screenFrame} />
        <mesh castShadow  geometry={nodes.Cube011_1.geometry} material={materials.standVertical} />
        <mesh castShadow  geometry={nodes.Cube011_2.geometry} material={materials.stand} />
        <mesh castShadow  geometry={nodes.Cube011_3.geometry} material={materials.screenVerticalJoin} />
      </group>
      <mesh castShadow  geometry={nodes.monitorScreen.geometry} material={materials.screen} position={[1.44, 1.76, -2.29]} rotation={[Math.PI / 2, 0, 0]} />
      <group position={[0.46, 1.28, -1.8]}>
        <mesh castShadow  geometry={nodes.Cylinder015.geometry} material={materials.pot} />
        <mesh castShadow  geometry={nodes.Cylinder015_1.geometry} material={materials["pot-ground"]} />
        <mesh castShadow  geometry={nodes.Cylinder015_2.geometry} material={materials.petal} />
        <mesh castShadow  geometry={nodes.Cylinder015_3.geometry} material={materials["flower-stem"]} />
        <mesh castShadow  geometry={nodes.Cylinder015_4.geometry} material={materials["flower-circle"]} />
        <mesh castShadow  geometry={nodes.Cylinder015_5.geometry} material={materials["petal.001"]} />
        <mesh castShadow  geometry={nodes.Cylinder015_6.geometry} material={materials["flower-stem.001"]} />
        <mesh castShadow  geometry={nodes.Cylinder015_7.geometry} material={materials["flower-circle.001"]} />
        <mesh castShadow  geometry={nodes.Cylinder015_8.geometry} material={materials["petal.002"]} />
        <mesh castShadow  geometry={nodes.Cylinder015_9.geometry} material={materials["flower-stem.002"]} />
        <mesh castShadow  geometry={nodes.Cylinder015_10.geometry} material={materials["flower-circle.002"]} />
      </group>
      <mesh castShadow  geometry={nodes.chair.geometry} material={materials.chair} position={[1.52, 1.18, -0.49]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh castShadow  geometry={nodes.windowPlane.geometry} material={materials["Material.008"]} position={[-1.68, 2.9, -2.54]} rotation={[Math.PI / 2, 0, 0]} />
      <group position={[0.67, 2.59, -2.22]}>
        <mesh castShadow  geometry={nodes.Cube030.geometry} material={materials.shelf} />
        <mesh castShadow  geometry={nodes.Cube030_1.geometry} material={materials.shelfSupport} />
      </group>
      <group position={[0.43, 3.76, -2.13]} rotation={[0, -0.33, 0]}>
        <mesh castShadow  geometry={nodes.Cube039.geometry} material={materials["bookPage.003"]} />
        <mesh castShadow  geometry={nodes.Cube039_1.geometry} material={materials["bookCover.003"]} />
        <mesh castShadow  geometry={nodes.Cube039_2.geometry} material={materials["bookPage.001"]} />
        <mesh castShadow  geometry={nodes.Cube039_3.geometry} material={materials["bookCover.001"]} />
        <mesh castShadow  geometry={nodes.Cube039_4.geometry} material={materials["bookPage.002"]} />
        <mesh castShadow  geometry={nodes.Cube039_5.geometry} material={materials["bookCover.002"]} />
        <mesh castShadow  geometry={nodes.Cube039_6.geometry} material={materials["bookPage.004"]} />
        <mesh castShadow  geometry={nodes.Cube039_7.geometry} material={materials["bookCover.004"]} />
        <mesh castShadow  geometry={nodes.Cube039_8.geometry} material={materials["bookPage.008"]} />
        <mesh castShadow  geometry={nodes.Cube039_9.geometry} material={materials["bookCover.008"]} />
        <mesh castShadow  geometry={nodes.Cube039_10.geometry} material={materials["bookPage.010"]} />
        <mesh castShadow  geometry={nodes.Cube039_11.geometry} material={materials["bookCover.010"]} />
        <mesh castShadow  geometry={nodes.Cube039_12.geometry} material={materials["bookPage.011"]} />
        <mesh castShadow  geometry={nodes.Cube039_13.geometry} material={materials["bookCover.011"]} />
      </group>
      <group position={[0.04, 3.51, -2.39]}>
        <mesh castShadow  geometry={nodes.Cube035.geometry} material={materials.shelfWideSupport} />
        <mesh castShadow  geometry={nodes.Cube035_1.geometry} material={materials.shelf} />
      </group>
      <group position={[-2.68, 0.38, 0.59]}>
        <mesh castShadow  geometry={nodes.Cylinder003.geometry} material={materials.legs} />
        <mesh castShadow  geometry={nodes.Cylinder003_1.geometry} material={materials.lampStand} />
        <mesh castShadow  geometry={nodes.Cylinder003_2.geometry} material={materials.lampCylinder} />
        <mesh castShadow  geometry={nodes.Cylinder003_3.geometry} material={materials.nighstand} />
        <mesh castShadow  geometry={nodes.Cylinder003_4.geometry} material={materials.nighstandDrawer} />
        <mesh castShadow  geometry={nodes.Cylinder003_5.geometry} material={materials.nighstandKnox} />
        <mesh castShadow  geometry={nodes.Cylinder003_6.geometry} material={materials.phone} />
        <mesh castShadow  geometry={nodes.Cylinder003_7.geometry} material={materials.phoneScreen} />
      </group>
      <group position={[-1.91, 0.26, 1.68]} rotation={[0, Math.PI / 2, 0]}>
        <mesh castShadow  geometry={nodes.Sphere011.geometry} material={materials["drawer.002"]} />
        <mesh castShadow  geometry={nodes.Sphere011_1.geometry} material={materials["frames.001"]} />
        <mesh castShadow  geometry={nodes.Sphere011_2.geometry} material={materials["wardrobe.001"]} />
        <mesh castShadow  geometry={nodes.Sphere011_3.geometry} material={materials["Material.007"]} />
      </group>
      <mesh castShadow  geometry={nodes.cardboard.geometry} material={materials.cardboard} position={[-2.51, 3.24, 2]} rotation={[Math.PI, -1.03, Math.PI]} />
      <group position={[-2.4, 3.13, 1.31]} rotation={[0, -0.65, 0]}>
        <mesh castShadow  geometry={nodes.Cube022.geometry} material={materials.box} />
        <mesh castShadow  geometry={nodes.Cube022_1.geometry} material={materials["box-cover"]} />
      </group>
      <group position={[-0.37, 0.47, 2.13]} rotation={[Math.PI / 2, 0, 1.53]}>
        <mesh castShadow  geometry={nodes.Cylinder005.geometry} material={materials.bar} />
        <mesh castShadow  geometry={nodes.Cylinder005_1.geometry} material={materials.plate} />
        <mesh castShadow  geometry={nodes.Cylinder005_2.geometry} material={materials["plate.002"]} />
        <mesh castShadow  geometry={nodes.Cylinder005_3.geometry} material={materials["plate.003"]} />
        <mesh castShadow  geometry={nodes.Cylinder005_4.geometry} material={materials["plate.004"]} />
      </group>
      <group position={[-0.56, 0.26, 1.49]} rotation={[Math.PI / 2, 0, 0.44]}>
        <mesh castShadow  geometry={nodes.Cylinder009.geometry} material={materials["bar.001"]} />
        <mesh castShadow  geometry={nodes.Cylinder009_1.geometry} material={materials["plate.001"]} />
      </group>
      <group position={[0.13, 0.38, 1.34]} rotation={[-3.1, 0.98, -0.03]}>
        <mesh castShadow  geometry={nodes.Cylinder013.geometry} material={materials["bar.002"]} />
        <mesh castShadow  geometry={nodes.Cylinder013_1.geometry} material={materials["plate.005"]} />
      </group>
      <mesh castShadow  geometry={nodes.ts.geometry} material={materials["default"]} position={[0.13, 2.63, -1.97]} rotation={[Math.PI / 2, 0, -0.55]} />
      <mesh castShadow  geometry={nodes["cube-ts"].geometry} material={materials["ts-cube.001"]} position={[0.12, 2.74, -2.07]} rotation={[0, -1.02, 0]} />
      <mesh castShadow  geometry={nodes.js.geometry} material={materials["js.006"]} position={[0.36, 2.63, -2.09]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh castShadow  geometry={nodes["cube-js"].geometry} material={materials["js-cube.001"]} position={[0.41, 2.74, -2.19]} rotation={[0, -1.57, 0]} />
      <mesh castShadow  geometry={nodes.html.geometry} material={materials["Material.013"]} position={[0.25, 2.99, -2.06]} rotation={[Math.PI / 2, 0, -0.66]} />
      <mesh castShadow  geometry={nodes["cube-html5"].geometry} material={materials["html5-cube.001"]} position={[0.19, 2.99, -2.13]} rotation={[0, -0.91, 0]} />
      <mesh castShadow  geometry={nodes.jira.geometry} material={materials["js.004"]} position={[0.64, 2.71, -2.13]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh castShadow  geometry={nodes["cube-jira"].geometry} material={materials["Material.013"]} position={[0.69, 2.74, -2.22]} rotation={[0, -1.57, 0]} />
      <mesh castShadow  geometry={nodes["jira-logo"].geometry} material={materials["ts.001"]} position={[0.61, 2.74, -2.1]} rotation={[1.57, -Math.PI / 4, 1.57]} />
      <mesh castShadow  geometry={nodes["cube-css3"].geometry} material={materials["css3-cube.001"]} position={[0.44, 2.98, -2.27]} rotation={[0, -1.06, 0]} />
      <mesh castShadow  geometry={nodes.css3.geometry} material={materials["Material.012"]} position={[0.49, 2.95, -2.19]} rotation={[Math.PI / 2, 0, -0.52]} />
      <mesh castShadow  geometry={nodes.react.geometry} material={materials["react.001"]} position={[0.23, 3.17, -2.13]} rotation={[Math.PI / 2, 0, -0.19]} />
      <mesh castShadow  geometry={nodes["cube-react"].geometry} material={materials["react-cube.001"]} position={[0.3, 3.24, -2.24]} rotation={[0, -1.38, 0]} />
      <mesh castShadow  geometry={nodes["react-logo"].geometry} material={materials["react.001"]} position={[0.33, 3.28, -2.11]} rotation={[0, -1.38, 0]} />
      <mesh castShadow  geometry={nodes.sass.geometry} material={materials["js.009"]} position={[0.85, 2.71, -2.11]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh castShadow  geometry={nodes["cube--sass"].geometry} material={materials["js.010"]} position={[0.96, 2.74, -2.21]} rotation={[0, -1.57, 0]} />
      <mesh castShadow  geometry={nodes.restapi.geometry} material={materials["js.001"]} position={[0.77, 2.99, -2.19]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh castShadow  geometry={nodes["cube-restapi"].geometry} material={materials["js.008"]} position={[0.77, 2.98, -2.28]} rotation={[0, -1.57, 0]} />
      <mesh castShadow  geometry={nodes.github.geometry} material={materials["js.001"]} position={[0.51, 3.21, -2.21]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh castShadow  geometry={nodes["cube-github"].geometry} material={materials["js.003"]} position={[0.62, 3.23, -2.31]} rotation={[0, -1.57, 0]} />
      <mesh castShadow  geometry={nodes.aem.geometry} material={materials["Material.009"]} position={[1.15, 2.72, -2.14]} rotation={[Math.PI / 2, 0, 0]} />
      <group position={[1.23, 2.74, -2.23]} rotation={[0, -1.57, 0]}>
        <mesh castShadow  geometry={nodes.Cube069.geometry} material={materials["Material.010"]} />
        <mesh castShadow  geometry={nodes.Cube069_1.geometry} material={materials["Material.011"]} />
      </group>
      <group position={[1.42, -0.03, 3.39]}>
        <mesh receiveShadow  geometry={nodes.Cube050.geometry} material={materials["walk-shadow"]} />
        <mesh castShadow  geometry={nodes.Cube050_1.geometry} material={materials["walk-cast"]} />
      </group>
      <group>
      <mesh castShadow  geometry={nodes.walkPlate2.geometry} material={materials.walkplate2} position={[1.37, 0.06, 3.51]} rotation={[0, -0.11, 0]} />
      <mesh castShadow  geometry={nodes.walkPlate1.geometry} material={materials.walkplate1} position={[1.46, 0.06, 3.01]} rotation={[0, 0.19, 0]} />
      <mesh castShadow  geometry={nodes.walkPlate3.geometry} material={materials.walkplate1} position={[1.42, 0.06, 4]} rotation={[0, 0.02, 0]} />
      <mesh castShadow  geometry={nodes.rock.geometry} material={materials.rock} position={[0.85, 0.01, 2.99]} scale={0.14} />
      <mesh castShadow  geometry={nodes.rock2.geometry} material={materials.rock} position={[1.97, 0.01, 3.61]} scale={0.14} />
      <mesh castShadow  geometry={nodes.mailbox.geometry} material={materials.mailbox} position={[2.05, 1.55, 3.4]} />
      <mesh castShadow  geometry={nodes.maiboxDoor.geometry} material={materials["Material.003"]} position={[2.05, 1.55, 3.4]} />
      <mesh castShadow  geometry={nodes.pole.geometry} material={materials.pole} position={[2.05, 0.12, 3.4]} rotation={[-0.17, 0, 0]} />
      <mesh castShadow  geometry={nodes.mailboxFlag.geometry} material={materials.mailboxFlag} position={[2.32, 1.52, 3.59]} rotation={[0, 0, -Math.PI / 2]} />
      <mesh castShadow  geometry={nodes.list1.geometry} material={materials["default"]} position={[1.89, 1.44, 3.51]} rotation={[1.42, 0.44, -1.3]} />
      <mesh castShadow  geometry={nodes.list3.geometry} material={materials["default"]} position={[2.11, 1.37, 3.51]} rotation={[-Math.PI, 1.24, 3.11]} />
      <mesh castShadow  geometry={nodes.list2.geometry} material={materials["default"]} position={[2.11, 1.43, 3.51]} rotation={[0.59, 1.25, -0.6]} />
      </group>
      <group position={[0.98, 0.3, 3.9]} rotation={[0, 0, -0.2]}>
        <mesh castShadow  geometry={nodes.Sphere004.geometry} material={materials["flower-stem.003"]} />
        <mesh castShadow  geometry={nodes.Sphere004_1.geometry} material={materials["flower-circle.003"]} />
        <mesh castShadow  geometry={nodes.Sphere004_2.geometry} material={materials["petal.003"]} />
      </group>
      <group position={[0.82, 0.24, 4.08]} rotation={[-2.35, 1.41, 2.95]}>
        <mesh castShadow  geometry={nodes.Sphere001.geometry} material={materials["flower-stem.004"]} />
        <mesh castShadow  geometry={nodes.Sphere001_1.geometry} material={materials["flower-circle.004"]} />
        <mesh castShadow  geometry={nodes.Sphere001_2.geometry} material={materials["petal.004"]} />
      </group>
      <group position={[0.73, 0.32, 3.95]} rotation={[Math.PI, -0.78, 2.95]}>
        <mesh castShadow  geometry={nodes.Sphere002.geometry} material={materials["flower-stem.005"]} />
        <mesh castShadow  geometry={nodes.Sphere002_1.geometry} material={materials["flower-circle.005"]} />
        <mesh castShadow  geometry={nodes.Sphere002_2.geometry} material={materials["petal.005"]} />
      </group>
    </group>
    </>
  );
};

useGLTF.preload("/house.gltf");
