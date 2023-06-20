/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */

import React, { useRef, useLayoutEffect} from "react";
import { useGLTF, Circle } from "@react-three/drei";
import {gsap} from "gsap"
import { ScrollTrigger} from "gsap/all";
export const House = (props) => {
  const { nodes, materials } = useGLTF("/House.gltf");
  const scale1 = useRef();
  const scale2= useRef();
  const scale3 = useRef();
  const scale4= useRef();
  const scale5 = useRef();
  const scale6= useRef();
  const scale7= useRef();
  const mm = useRef();
  const floor1 = useRef();
  const floor2 = useRef();
  const floor3 = useRef();
  const camera = props.camera;
  const mailBox = useRef();
  const flowers = useRef();
  const walk = useRef();
  const walkPlates = useRef()
  const stone1 = useRef();
  const stone2 = useRef();


  useLayoutEffect(()=> {
    gsap.registerPlugin(ScrollTrigger);
    mm.current = gsap.matchMedia();
    //======================TIMELINE "(min-width: 1500px)" ============================
    mm.current.add(
      "(min-width: 1500px)",() => {
        //setting up camera to middle
        let tl = gsap.timeline({
          scrollTrigger:{
            trigger:".hero",
            start:"-1500px top",
            end:"top",
            scrub: true
          }
        });
        tl.to(camera.current.position,{x:0,y:10,z:13});
        //popping up elements
        tl = gsap.timeline();
        tl.fromTo(scale1.current.scale,{x:0,y:0,z:0},{x:1,y:1,z:1,duration:1.5});
        tl.fromTo(scale2.current.scale,{x:0,y:0,z:0},{x:1,y:1,z:1,duration:0.6});
        tl.fromTo(scale3.current.scale,{x:0,y:0,z:0},{x:1,y:1,z:1,duration:0.6},"-=0.3");
        tl.fromTo(scale4.current.scale,{x:0,y:0,z:0},{x:1,y:1,z:1,duration:0.6},"-=0.3");
        tl.fromTo(scale5.current.scale,{x:0,y:0,z:0},{x:1,y:1,z:1,duration:0.6},"-=0.3");
        tl.fromTo(scale6.current.scale,{x:0,y:0,z:0},{x:1,y:1,z:1,duration:0.6},"-=0.3");
        tl.fromTo(scale7.current.scale,{x:0,y:0,z:0},{x:1,y:1,z:1,duration:0.6},"-=0.3");
        tl.fromTo(".first__name", {opacity:0, translateY:-20},{opacity:1, translateY:0, duration:0.75},"+=0.3");
        tl.fromTo(".first__title", {opacity:0, translateY:-20},{opacity:1, translateY:0, duration:0.75});
        tl.fromTo(".second__title", {opacity:0, translateY:-20},{opacity:1, translateY:0, duration:0.75});
        tl.fromTo(".hero__arrow", {opacity:0},{opacity:1,duration:0.75});
        //floor 1 animation
        tl = gsap.timeline({
          scrollTrigger:{
            trigger:".hero",
            start:"bottom",
            end:"2500px",
            scrub: true,
          }
        });
        tl.fromTo(floor1.current.scale, {x:0,y:0,z:0.05},{x:80,y:80,z:0.05,duration:1});
        //camera movement + about-me section radius
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
        //progress bar for about-me section
        tl = gsap.timeline({
          scrollTrigger:{
            trigger:".about-me",
            start:"top top",
            end:"bottom bottom",
            pin:".about-me .progress-bar-wrapper .progress-bar",
            pinSpacing:false,
            scrub: true,
            markers:true
          }
        });
        tl.fromTo(".about-me .progress-bar-wrapper .progress-bar",{scaleY:0}, {duration:10, scaleY:1});
        //floor 2 animation
        tl = gsap.timeline({
          scrollTrigger:{
            trigger:".section-margin.--second",
            start:"-3000px top",
            end:"top",
            scrub: true
          }
        });
        tl.fromTo(floor2.current.scale, {x:0,y:0,z:0.05},{x:80,y:80,z:0.05,duration:10});
        // camera movement + mywork section radius
        tl = gsap.timeline({
          scrollTrigger:{
            trigger:".section-margin.--second",
            start:"-2000px top",
            end:"top",
            scrub: true
          }
        });
        tl.fromTo(camera.current.position,{x:-7},{x:3.5,y:4.5,z:3,duration:5});
        tl.fromTo(".my-work",{borderTopLeftRadius:1000}, {duration:5, borderTopLeftRadius:0}, "+=2");
        //progress bar for my-work section
        tl = gsap.timeline({
          scrollTrigger:{
            trigger:".my-work",
            start:"top top",
            end:"bottom bottom",
            pin:".my-work .progress-bar-wrapper .progress-bar",
            pinSpacing:false,
            scrub: true
          }
        });
        tl.fromTo(".my-work .progress-bar-wrapper .progress-bar",{scaleY:0}, {duration:10, scaleY:1});
        // camera + contact-me section + floor 3
        tl = gsap.timeline({
          scrollTrigger:{
            trigger:".section-margin.--third",
            start:"-2000px top",
            end:"top",
            scrub: true
          }
        });
        tl.fromTo(camera.current.position,{x:3.5,y:4.5,z:3},{x:-2.5,y:3,z:7,duration:3});
        tl.fromTo(floor3.current.scale, {x:0,y:0,z:0.05},{x:25,y:25,z:0.05,duration:5});
        tl.fromTo(".contact-me",{borderTopRightRadius:1000}, {duration:3, borderTopRightRadius:0}, "-=2");
        //progress bar for contact-me section
        tl = gsap.timeline({
          scrollTrigger:{
            trigger:".contact-me",
            start:"top top",
            end:"bottom bottom",
            pin:".contact-me .progress-bar-wrapper .progress-bar",
            pinSpacing:false,
            scrub: true
          }
        });
        tl.fromTo(".contact-me .progress-bar-wrapper .progress-bar",{scaleY:0}, {duration:10, scaleY:1});
        //model animation for contact-me section
        tl = gsap.timeline({
          scrollTrigger:{
            trigger:".contact-me",
            start:"top",
            end:"bottom"
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
        //setting camera to middle
        let tl = gsap.timeline({
          scrollTrigger:{
            trigger:".hero",
            start:"-1500px top",
            end:"top",
            scrub: true
          }
        });
        tl.to(camera.current.position,{x:0,y:10,z:13});
        //popping up elements
        tl = gsap.timeline();
        tl.fromTo(scale1.current.scale,{x:0,y:0,z:0},{x:1,y:1,z:1,duration:1.5});
        tl.fromTo(scale2.current.scale,{x:0,y:0,z:0},{x:1,y:1,z:1,duration:0.6});
        tl.fromTo(scale3.current.scale,{x:0,y:0,z:0},{x:1,y:1,z:1,duration:0.6},"-=0.3");
        tl.fromTo(scale4.current.scale,{x:0,y:0,z:0},{x:1,y:1,z:1,duration:0.6},"-=0.3");
        tl.fromTo(scale5.current.scale,{x:0,y:0,z:0},{x:1,y:1,z:1,duration:0.6},"-=0.3");
        tl.fromTo(scale6.current.scale,{x:0,y:0,z:0},{x:1,y:1,z:1,duration:0.6},"-=0.3");
        tl.fromTo(scale7.current.scale,{x:0,y:0,z:0},{x:1,y:1,z:1,duration:0.6},"-=0.3");
        tl.fromTo(".first__name", {opacity:0, translateY:-20},{opacity:1, translateY:0, duration:0.75},"+=0.3");
        tl.fromTo(".first__title", {opacity:0, translateY:-20},{opacity:1, translateY:0, duration:0.75});
        tl.fromTo(".second__title", {opacity:0, translateY:-20},{opacity:1, translateY:0, duration:0.75});
        //floor 1 animation
        tl = gsap.timeline({
          scrollTrigger:{
            trigger:".hero",
            start:"bottom",
            end:"2500px",
            scrub: true
          }
        });
        tl.fromTo(floor1.current.scale, {x:0,y:0,z:0.05},{x:80,y:80,z:0.05,duration:10});
        //camera + about-me section
        tl = gsap.timeline({
          scrollTrigger:{
            trigger:".section-margin.--first",
            start:"-1500px top",
            end:"top",
            scrub: true
          }
        });
        tl.to(camera.current.position, {x:-5.5,duration:5});
        tl.fromTo(".about-me",{borderTopRightRadius:1000}, {duration:3, borderTopRightRadius:0}, "-=1");
        //progress bar for about-me section
        tl = gsap.timeline({
          scrollTrigger:{
            trigger:".about-me",
            start:"top top",
            end:"bottom bottom",
            pin:".about-me .progress-bar-wrapper .progress-bar",
            pinSpacing:false,
            scrub: true
          }
        });
        tl.fromTo(".about-me .progress-bar-wrapper .progress-bar",{scaleY:0}, {duration:10, scaleY:1});
        //floor 2 animation
        tl = gsap.timeline({
          scrollTrigger:{
            trigger:".section-margin.--second",
            start:"-3000px top",
            end:"top",
            scrub: true
          }
        });
        tl.fromTo(floor2.current.scale, {x:0,y:0,z:0.05},{x:80,y:80,z:0.05,duration:10});
        //camera + my-work section
        tl = gsap.timeline({
          scrollTrigger:{
            trigger:".section-margin.--second",
            start:"-2000px top",
            end:"top",
            scrub: true
          }
        });
        tl.fromTo(camera.current.position,{x:-5.5,y:10,z:13}, {x:3.5,y:5,z:4,duration:5});
        tl.fromTo(".my-work",{borderTopLeftRadius:1000}, {duration:3, borderTopLeftRadius:0}, "-=1");
        //progress bar for my-work section
        tl = gsap.timeline({
          scrollTrigger:{
            trigger:".my-work",
            start:"top top",
            end:"bottom bottom",
            pin:".my-work .progress-bar-wrapper .progress-bar",
            pinSpacing:false,
            scrub: true
          }
        });
        tl.fromTo(".my-work .progress-bar-wrapper .progress-bar",{scaleY:0}, {duration:10, scaleY:1});
        //camera + my-work section + floor 3
        tl = gsap.timeline({
          scrollTrigger:{
            trigger:".section-margin.--third",
            start:"-2000px top",
            end:"bottom",
            scrub: true
          }
        });
        tl.fromTo(camera.current.position, {x:3.5,y:5,z:4,duration:5},{x:-2,y:3,z:7,duration:3});
        tl.fromTo(floor3.current.scale, {x:0,y:0,z:0.05},{x:25,y:25,z:0.05,duration:5});
        tl.fromTo(".contact-me",{borderTopRightRadius:1000}, {duration:3, borderTopRightRadius:0}, "-=1");
        //progress bar for contact-me section
        tl = gsap.timeline({
          scrollTrigger:{
            trigger:".contact-me",
            start:"top top",
            end:"bottom bottom",
            pin:".contact-me .progress-bar-wrapper .progress-bar",
            pinSpacing:false,
            scrub: true
          }
        });
        tl.fromTo(".contact-me .progress-bar-wrapper .progress-bar",{scaleY:0}, {duration:10, scaleY:1});
        //model animation for contact-me section
        tl = gsap.timeline({
          scrollTrigger:{
            trigger:".contact-me",
            start:"top",
            end:"bottom"
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
        //setting camera to middle
        let tl = gsap.timeline({
          scrollTrigger:{
            trigger:".hero",
            start:"-1500px top",
            end:"top",
            scrub: true
          }
        });
        tl.to(camera.current.position,{x:0,y:10,z:13});
        //popping up elements
        tl = gsap.timeline();
        tl.fromTo(scale1.current.scale,{x:0,y:0,z:0},{x:1,y:1,z:1,duration:1.5});
        tl.fromTo(scale2.current.scale,{x:0,y:0,z:0},{x:1,y:1,z:1,duration:0.6});
        tl.fromTo(scale3.current.scale,{x:0,y:0,z:0},{x:1,y:1,z:1,duration:0.6},"-=0.3");
        tl.fromTo(scale4.current.scale,{x:0,y:0,z:0},{x:1,y:1,z:1,duration:0.6},"-=0.3");
        tl.fromTo(scale5.current.scale,{x:0,y:0,z:0},{x:1,y:1,z:1,duration:0.6},"-=0.3");
        tl.fromTo(scale6.current.scale,{x:0,y:0,z:0},{x:1,y:1,z:1,duration:0.6},"-=0.3");
        tl.fromTo(scale7.current.scale,{x:0,y:0,z:0},{x:1,y:1,z:1,duration:0.6},"-=0.3");
        tl.fromTo(".first__name", {opacity:0, translateY:-20},{opacity:1, translateY:0, duration:0.75},"+=0.3");
        tl.fromTo(".first__title", {opacity:0, translateY:-20},{opacity:1, translateY:0, duration:0.75});
        tl.fromTo(".second__title", {opacity:0, translateY:-20},{opacity:1, translateY:0, duration:0.75});
        //floor 1 animation
        tl = gsap.timeline({
          scrollTrigger:{
            trigger:".hero",
            start:"bottom",
            end:"2500px",
            scrub: true
          }
        });
        tl.fromTo(floor1.current.scale, {x:0,y:0,z:0.05},{x:80,y:80,z:0.05,duration:10});
        //camera + about-me section
        tl = gsap.timeline({
        scrollTrigger:{
          trigger:".section-margin.--first",
          start:"-1500px top",
          end:"top",
          scrub: true
        }
      });
      tl.to(camera.current.position, {x:-4.5,duration:5});
      tl.fromTo(".about-me",{borderTopRightRadius:1000}, {duration:3, borderTopRightRadius:0}, "-=1");
      //progress bar for about-me section
      tl = gsap.timeline({
        scrollTrigger:{
          trigger:".about-me",
          start:"top top",
          end:"bottom bottom",
          pin:".about-me .progress-bar-wrapper .progress-bar",
          pinSpacing:false,
          scrub: true
        }
      });
      tl.fromTo(".about-me .progress-bar-wrapper .progress-bar",{scaleY:0}, {duration:10, scaleY:1});
      //floor 2 animation
      tl = gsap.timeline({
          scrollTrigger:{
          trigger:".section-margin.--second",
          start:"-3000px top",
          end:"top",
          scrub: true
        }
      });
      tl.fromTo(floor2.current.scale, {x:0,y:0,z:0.05},{x:80,y:80,z:0.05,duration:10});
      //camera + my-work section
      tl = gsap.timeline({
        scrollTrigger:{
          trigger:".section-margin.--second",
          start:"-2000px top",
          end:"top",
          scrub: true
        }
      });
      tl.fromTo(camera.current.position,{x:-4.5,y:10,z:13}, {x:3.5,y:5.5,z:5,duration:5});
      tl.fromTo(".my-work",{borderTopLeftRadius:1000}, {duration:3, borderTopLeftRadius:0}, "-=1");
      //progress bar for my-work section
      tl = gsap.timeline({
        scrollTrigger:{
          trigger:".my-work",
          start:"top top",
          end:"bottom bottom",
          pin:".my-work .progress-bar-wrapper .progress-bar",
          pinSpacing:false,
          scrub: true
        }
      });
      tl.fromTo(".my-work .progress-bar-wrapper .progress-bar",{scaleY:0}, {duration:10, scaleY:1});
      //camera + contact-me + floor 3
      tl = gsap.timeline({
        scrollTrigger:{
          trigger:".section-margin.--third",
          start:"-2000px top",
          end:"bottom",
          scrub: true
        }
      });
      tl.fromTo(camera.current.position, {x:3.5,y:5.5,z:5,duration:5},{x:-2,y:3,z:8,duration:3});
      tl.fromTo(floor3.current.scale, {x:0,y:0,z:0.05},{x:25,y:25,z:0.05,duration:5});
      tl.fromTo(".contact-me",{borderTopRightRadius:1000}, {duration:3, borderTopRightRadius:0}, "-=1");
      //progress bar for contact-me section
      tl = gsap.timeline({
        scrollTrigger:{
          trigger:".contact-me",
          start:"top top",
          end:"bottom bottom",
          pin:".contact-me .progress-bar-wrapper .progress-bar",
          pinSpacing:false,
          scrub: true
        }
      });
      tl.fromTo(".contact-me .progress-bar-wrapper .progress-bar",{scaleY:0}, {duration:10, scaleY:1});
      //model animation for contact-me section
      tl = gsap.timeline({
        scrollTrigger:{
          trigger:".contact-me",
          start:"top",
          end:"bottom"
        }
      });
      tl.fromTo(walk.current.scale, {x:0, y:0, z:0}, {x:1,y:1,z:1,duration:0.5});
      tl.fromTo(walkPlates.current.scale, {x:0, y:0, z:0}, {x:1,y:1,z:1,duration:0.5});
      tl.fromTo(flowers.current.scale, {x:0, y:0, z:0}, {x:1,y:1,z:1,duration:0.5});
      tl.fromTo(mailBox.current.scale, {x:0, y:0, z:0}, {x:1,y:1,z:1,duration:0.5});
      tl.fromTo(stone1.current.scale, {x:0, y:0, z:0}, {x:0.14,y:0.14,z:0.14,duration:0.5});
      tl.fromTo(stone2.current.scale, {x:0, y:0, z:0}, {x:0.14,y:0.14,z:0.14,duration:0.5});
    });

    mm.current.add(
      "(max-width: 969px)",() => {
        //setting camera to middle
        let tl = gsap.timeline({
          scrollTrigger:{
          trigger:".hero",
          start:"-1500px top",
          end:"top",
          scrub: true
        }
      });
      tl.to(camera.current.position,{x:0,y:14,z:18});
      //popping up elements
      tl = gsap.timeline();
      tl.fromTo(scale1.current.scale,{x:0,y:0,z:0},{x:1,y:1,z:1,duration:1.5});
      tl.fromTo(scale2.current.scale,{x:0,y:0,z:0},{x:1,y:1,z:1,duration:0.6});
      tl.fromTo(scale3.current.scale,{x:0,y:0,z:0},{x:1,y:1,z:1,duration:0.6},"-=0.3");
      tl.fromTo(scale4.current.scale,{x:0,y:0,z:0},{x:1,y:1,z:1,duration:0.6},"-=0.3");
      tl.fromTo(scale5.current.scale,{x:0,y:0,z:0},{x:1,y:1,z:1,duration:0.6},"-=0.3");
      tl.fromTo(scale6.current.scale,{x:0,y:0,z:0},{x:1,y:1,z:1,duration:0.6},"-=0.3");
      tl.fromTo(scale7.current.scale,{x:0,y:0,z:0},{x:1,y:1,z:1,duration:0.6},"-=0.3");
      tl.fromTo(".first__name", {opacity:0, translateY:-20},{opacity:1, translateY:0, duration:0.75},"+=0.3");
      tl.fromTo(".first__title", {opacity:0, translateY:-20},{opacity:1, translateY:0, duration:0.75});
      tl.fromTo(".second__title", {opacity:0, translateY:-20},{opacity:1, translateY:0, duration:0.75});
      //camera + floor 1 animation
      tl = gsap.timeline({
        scrollTrigger:{
          trigger:".hero",
          start:"bottom",
          end:"3000px",
          scrub: true
        }
      });
      tl.fromTo(camera.current.position,{x:0,y:14,z:18},{x:0,y:9,z:10, duration:5});
      tl.fromTo(floor1.current.scale, {x:0,y:0,z:0.05},{x:80,y:80,z:0.05,duration:15});
      //about-me radius animation
      tl = gsap.timeline({
        scrollTrigger:{
          trigger:".section-margin.--first",
          start:"-1500px top",
          end:"top",
          scrub: true
        }
      });
      tl.fromTo(".about-me",{borderTopLeftRadius:1000,borderTopRightRadius:1000}, {borderTopLeftRadius:0, borderTopRightRadius:0, duration:3}, "-=1");
      //progress bar for about-me section
      tl = gsap.timeline({
        scrollTrigger:{
          trigger:".about-me",
          start:"top top",
          end:"bottom bottom",
          pin:".about-me .progress-bar-wrapper .progress-bar",
          pinSpacing:false,
          scrub: true
        }
      });
      tl.fromTo(".about-me .progress-bar-wrapper .progress-bar",{scaleY:0}, {duration:10, scaleY:1});
      //camera movement + floor 2 animation
      tl = gsap.timeline({
        scrollTrigger:{
          trigger:".section-margin.--second",
          start:"-3000px top",
          end:"top",
          scrub: true
        }
      });
      tl.fromTo(camera.current.position,{x:0,y:9,z:10}, {x:2.5,y:5,z:5,duration:4});
      tl.fromTo(floor2.current.scale, {x:0,y:0,z:0.05},{x:45,y:45,z:0.05,duration:8});
      //my-work radius animation
      tl = gsap.timeline({
        scrollTrigger:{
          trigger:".section-margin.--second",
          start:"-1500px top",
          end:"top",
          scrub: true
        }
      });
      tl.fromTo(".my-work",{borderTopLeftRadius:1000,borderTopRightRadius:1000}, {borderTopLeftRadius:0, borderTopRightRadius:0, duration:3}, "-=1");
      //progress bar for my-work section
      tl = gsap.timeline({
        scrollTrigger:{
          trigger:".my-work",
          start:"top top",
          end:"bottom bottom",
          pin:".my-work .progress-bar-wrapper .progress-bar",
          pinSpacing:false,
          scrub: true
        }
      });
      tl.fromTo(".my-work .progress-bar-wrapper .progress-bar",{scaleY:0}, {duration:10, scaleY:1});
      //camera + contact-me + floor 3
      tl = gsap.timeline({
        scrollTrigger:{
          trigger:".section-margin.--third",
          start:"-3000px top",
          end:"-500px bottom",
          scrub: true
        }
      });
      tl.fromTo(camera.current.position, {x:2.5,y:5,z:5,duration:5},{x:-1,y:3,z:10,duration:3});
      tl.fromTo(floor3.current.scale, {x:0,y:0,z:0.05},{x:25,y:25,z:0.05,duration:5});
      //contact-me radius animation
      tl = gsap.timeline({
        scrollTrigger:{
          trigger:".section-margin.--third",
          start:"-1500px top",
          end:"top",
          scrub: true
        }
      });
      tl.fromTo(".contact-me",{borderTopLeftRadius:1000,borderTopRightRadius:1000}, {borderTopLeftRadius:0, borderTopRightRadius:0, duration:3}, "-=1");
      //progress bar for contact-me section
      tl = gsap.timeline({
        scrollTrigger:{
          trigger:".contact-me",
          start:"top top",
          end:"bottom bottom",
          pin:".contact-me .progress-bar-wrapper .progress-bar",
          pinSpacing:false,
          scrub: true
        }
      });
      tl.fromTo(".contact-me .progress-bar-wrapper .progress-bar",{scaleY:0}, {duration:10, scaleY:1});
      //model animation for contact-me section
      tl = gsap.timeline({
        scrollTrigger:{
          trigger:".section-margin.--third",
          start:"-1400px top",
          end:"bottom"
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

// #F75C03
// 9fdbf5
//   
  return (
    <>
      {/* Floors with are used as backgrond change */}
      <Circle ref={floor1} scale={0} rotation={[-0.5 * Math.PI, 0, 0]} position={[0, -0.58, 0]}>
        <meshStandardMaterial color={"#eb688f"} attach={"material"} opacity={1} />
      </Circle>
      <Circle ref={floor2} scale={0} rotation={[-0.5 * Math.PI, 0, 0]} position={[0, -0.56, 0]}>
        <meshStandardMaterial color={"#7161ef"} attach={"material"} opacity={1} />
      </Circle>
      <Circle ref={floor3} scale={0} rotation={[-0.5 * Math.PI, 0, 0]} position={[0, -0.52, 0]}>
        <meshStandardMaterial color={"#00c46f"} attach={"material"} opacity={1} />
      </Circle>
      {/* Floor used for shadows */}
      <mesh rotation={[-0.5 * Math.PI, 0, -0.7]} position={[0, -0.5, 0]} receiveShadow >
        <planeGeometry attach={"geometry"} args={[9, 9, 1, 1]} />
        <shadowMaterial  attach={"material"} opacity={0.2} />
      </mesh>
      <group rotation={[0,-0.7,0]} {...props} dispose={null}>
        <group ref={scale1}>
          <group position={[-1.433, 1.794, -1.408]}>
            <mesh receiveShadow geometry={nodes.Cube.geometry} material={materials.house} />
            <mesh receiveShadow  geometry={nodes.Cube_1.geometry} material={materials.floor} />
            <mesh castShadow geometry={nodes.Cube_2.geometry} material={materials.houseshadow} />
            <mesh castShadow geometry={nodes.Cube_3.geometry} material={materials.houseshadow} />
          </group>
          <mesh castShadow geometry={nodes.windowPlane.geometry} material={materials["Material.008"]} position={[-1.678, 2.902, -2.612]} rotation={[Math.PI / 2, 0, 0]} />
        </group>
        <group ref={scale2}>
          <group position={[-2.382, 0.815, -1.432]} rotation={[-Math.PI, 0.003, -Math.PI]}>
            <mesh castShadow geometry={nodes.Cube007.geometry} material={materials.bedBlanket} />
            <mesh castShadow geometry={nodes.Cube007_1.geometry} material={materials["Material.002"]} />
            <mesh castShadow geometry={nodes.Cube007_2.geometry} material={materials.bedBackSphere} />
            <mesh castShadow geometry={nodes.Cube007_3.geometry} material={materials.bedBottom} />
            <mesh castShadow geometry={nodes.Cube007_4.geometry} material={materials.bedLegs} />
            <mesh castShadow geometry={nodes.Cube007_5.geometry} material={materials.bedMattress} />
            <mesh castShadow geometry={nodes.Cube007_6.geometry} material={materials.bedPillow} />
          </group>
        </group>
        <group ref={scale3}>
          <group position={[1.985, 1.206, -1.601]}>
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
          <group position={[1.355, 1.249, -1.339]}>
            <mesh castShadow geometry={nodes.Cube016.geometry} material={materials["Material.001"]} />
            <mesh castShadow geometry={nodes.Cube016_1.geometry} material={materials.keyboard} />
          </group>
          <group position={[1.441, 1.54, -2.295]}>
            <mesh castShadow geometry={nodes.Cube011.geometry} material={materials.screenFrame} />
            <mesh castShadow geometry={nodes.Cube011_1.geometry} material={materials.standVertical} />
            <mesh castShadow geometry={nodes.Cube011_2.geometry} material={materials.stand} />
            <mesh castShadow geometry={nodes.Cube011_3.geometry} material={materials.screenVerticalJoin} />
          </group>
          <mesh castShadow geometry={nodes.monitorScreen.geometry} material={materials["computer-screen"]} position={[1.441, 1.758, -2.293]} rotation={[Math.PI / 2, 0, 0]} />
          <group position={[0.479, 1.551, -1.832]}>
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
          <mesh castShadow geometry={nodes.chair.geometry} material={materials.chair} position={[1.519, 0.524, -0.716]} rotation={[Math.PI / 2, 0, 0]} />
        </group>
        <group ref={scale4}>
          <group position={[0.672, 2.492, -2.395]}>
            <mesh castShadow geometry={nodes.Cube030.geometry} material={materials.shelf} />
            <mesh castShadow geometry={nodes.Cube030_1.geometry} material={materials.shelfSupport} />
          </group>
          <group position={[1.068, 3.56, -2.383]}>
            <mesh castShadow geometry={nodes.Cube035.geometry} material={materials.shelfWideSupport} />
            <mesh castShadow geometry={nodes.Cube035_1.geometry} material={materials.shelf} />
          </group>
        </group>
        <group ref={scale7}>
        <mesh geometry={nodes.carpet.geometry} material={materials.carpet} position={[1.37, 0.076, 0.686]} />
          <mesh castShadow geometry={nodes.poster.geometry} material={materials.Material} position={[-3.085, 2.39, -1.425]} rotation={[0, 0, -Math.PI / 2]} />
          <group position={[1.071, 3.967, -2.135]} rotation={[0, -0.333, 0]}>
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
          <mesh castShadow geometry={nodes.ts.geometry} material={materials.ts} position={[0.201, 2.674, -1.962]} rotation={[Math.PI / 2, 0, -0.554]} />
          <mesh castShadow geometry={nodes["cube-ts"].geometry} material={materials["ts-cube.001"]} position={[0.123, 2.738, -2.029]} rotation={[0, -1.017, 0]} />
          <mesh castShadow geometry={nodes.js.geometry} material={materials["js.006"]} position={[0.448, 2.676, -2.075]} rotation={[Math.PI / 2, 0, -0.553]} />
          <mesh castShadow geometry={nodes["cube-js"].geometry} material={materials["js-cube.001"]} position={[0.362, 2.74, -2.147]} rotation={[0, -1.018, 0]} />
          <mesh castShadow geometry={nodes.html.geometry} material={materials["Material.013"]} position={[0.212, 2.989, -1.99]} rotation={[Math.PI / 2, 0, -0.807]} />
          <mesh castShadow geometry={nodes["cube-html5"].geometry} material={materials["html5-cube.001"]} position={[0.143, 2.988, -2.053]} rotation={[0, -0.764, 0]} />
          <mesh castShadow geometry={nodes.jira.geometry} material={materials["js.004"]} position={[0.725, 2.74, -2.143]} rotation={[Math.PI / 2, 0, 0]} />
          <mesh castShadow geometry={nodes["cube-jira"].geometry} material={materials["Material.013"]} position={[0.689, 2.738, -2.236]} rotation={[0, -1.571, 0]} />
          <mesh castShadow geometry={nodes["jira-logo"].geometry} material={materials["ts.001"]} position={[0.61, 2.738, -2.113]} rotation={[1.571, -Math.PI / 4, 1.571]} />
          <mesh castShadow geometry={nodes["cube-css3"].geometry} material={materials["css3-cube.001"]} position={[0.36, 2.988, -2.202]} rotation={[0, -0.857, 0]} />
          <mesh castShadow geometry={nodes.css3.geometry} material={materials["Material.012"]} position={[0.423, 2.988, -2.136]} rotation={[Math.PI / 2, 0, -0.714]} />
          <mesh castShadow geometry={nodes.react.geometry} material={materials["react.001"]} position={[0.246, 3.192, -2.179]} rotation={[Math.PI / 2, 0, -0.621]} />
          <mesh castShadow geometry={nodes["cube-react"].geometry} material={materials["react-cube.001"]} position={[0.182, 3.236, -2.249]} rotation={[0, -0.949, 0]} />
          <mesh castShadow geometry={nodes["react-logo"].geometry} material={materials["react.001"]} position={[0.26, 3.276, -2.147]} rotation={[0, -0.949, 0]} />
          <mesh castShadow geometry={nodes.sass.geometry} material={materials["js.009"]} position={[0.974, 2.747, -2.214]} rotation={[Math.PI / 2, 0, -0.043]} />
          <mesh castShadow geometry={nodes["cube--sass"].geometry} material={materials["js.010"]} position={[0.97, 2.742, -2.307]} rotation={[0, -1.528, 0]} />
          <mesh castShadow geometry={nodes.restapi.geometry} material={materials["js.001"]} position={[0.696, 2.985, -2.229]} rotation={[Math.PI / 2, 0, -0.371]} />
          <mesh castShadow geometry={nodes["cube-restapi"].geometry} material={materials["js.008"]} position={[0.66, 2.988, -2.315]} rotation={[0, -1.2, 0]} />
          <mesh castShadow geometry={nodes.github.geometry} material={materials["js.001"]} position={[0.575, 3.244, -2.237]} rotation={[Math.PI / 2, 0, -0.487]} />
          <mesh castShadow geometry={nodes["cube-github"].geometry} material={materials["js.003"]} position={[0.528, 3.244, -2.318]} rotation={[0, -1.084, 0]} />
          <mesh castShadow geometry={nodes.aem.geometry} material={materials["Material.009"]} position={[1.286, 2.746, -2.2]} rotation={[Math.PI / 2, 0, -0.287]} />
          <group position={[1.272, 2.745, -2.25]} rotation={[0, -1.284, 0]}>
            <mesh castShadow geometry={nodes.Cube069.geometry} material={materials["Material.010"]} />
            <mesh castShadow geometry={nodes.Cube069_1.geometry} material={materials["Material.011"]} />
          </group>
          <mesh castShadow geometry={nodes.agile.geometry} material={materials.AGILE} position={[0.912, 2.999, -2.245]} rotation={[Math.PI / 2, 0, -0.16]} scale={0.78} />
          <mesh castShadow geometry={nodes["cube-agile"].geometry} material={materials["cube-agile"]} position={[0.943, 2.998, -2.358]} rotation={[0, -1.411, 0]} />
          <mesh scale={0} castShadow geometry={nodes.blender.geometry} material={materials["AGILE.001"]} position={[0.608, 3.493, -2.289]} rotation={[Math.PI / 2, 0, -0.16]} />
          <mesh scale={0} castShadow geometry={nodes["cube-blender"].geometry} material={materials["cube-agile.001"]} position={[0.638, 3.491, -2.402]} rotation={[0, -1.411, 0]} />
          <mesh castShadow geometry={nodes.threejs.geometry} material={materials.threejs} position={[0.801, 3.21, -2.271]} rotation={[Math.PI / 2, 0, -0.359]} scale={0.652} />
          <mesh castShadow geometry={nodes["cube-threejs"].geometry} material={materials["cube-threejs"]} position={[0.819, 3.247, -2.398]} rotation={[0, 0.359, 0]} />
          <mesh castShadow geometry={nodes.Circle.geometry} material={materials["default"]} position={[0.867, 3.299, -2.285]} rotation={[1.465, -0.274, -0.374]} scale={0.317} />
          <mesh castShadow geometry={nodes.Circle001.geometry} material={materials["three-js-triangle"]} position={[0.896, 3.307, -2.296]} rotation={[0.589, -1.147, -1.024]} scale={0.317} />
          <mesh castShadow geometry={nodes.Circle002.geometry} material={materials["three-js-triangle"]} position={[0.847, 3.323, -2.277]} rotation={[0.589, -1.147, -1.024]} scale={0.317} />
          <mesh castShadow geometry={nodes.Circle003.geometry} material={materials["three-js-triangle"]} position={[0.858, 3.268, -2.281]} rotation={[1.889, 0.696, -0.475]} scale={0.317} />
          <mesh castShadow geometry={nodes.cardboard.geometry} material={materials.cardboard} position={[-2.497, 3.35, 2.002]} rotation={[Math.PI, -1.029, Math.PI]} />
          <group position={[-2.401, 3.187, 1.305]} rotation={[0, -0.654, 0]}>
            <mesh castShadow geometry={nodes.Cube022.geometry} material={materials.box} />
            <mesh castShadow geometry={nodes.Cube022_1.geometry} material={materials["box-cover"]} />
          </group>
          <mesh castShadow geometry={nodes.cat.geometry} material={materials["Material.004"]} position={[-0.824, 0.769, -1.332]} />
        </group>
        
        <group ref={scale6}>
          <group position={[-0.371, 0.474, 2.129]} rotation={[Math.PI / 2, 0, 1.531]}>
            <mesh castShadow geometry={nodes.Cylinder005.geometry} material={materials.bar} />
            <mesh castShadow geometry={nodes.Cylinder005_1.geometry} material={materials.plate} />
            <mesh castShadow geometry={nodes.Cylinder005_2.geometry} material={materials["plate.002"]} />
            <mesh castShadow geometry={nodes.Cylinder005_3.geometry} material={materials["plate.003"]} />
            <mesh castShadow geometry={nodes.Cylinder005_4.geometry} material={materials["plate.004"]} />
          </group>
          <group position={[-0.559, 0.258, 1.487]} rotation={[Math.PI / 2, 0, 0.44]}>
            <mesh castShadow geometry={nodes.Cylinder009.geometry} material={materials["bar.001"]} />
            <mesh castShadow geometry={nodes.Cylinder009_1.geometry} material={materials["plate.001"]} />
          </group>
          <group position={[0.133, 0.376, 1.338]} rotation={[-3.101, 0.975, -0.033]}>
            <mesh castShadow geometry={nodes.Cylinder013.geometry} material={materials["bar.002"]} />
            <mesh castShadow geometry={nodes.Cylinder013_1.geometry} material={materials["plate.005"]} />
          </group>
        </group>
        <group ref={scale5}>
          <group position={[-1.912, 0.411, 1.677]} rotation={[0, Math.PI / 2, 0]}>
            <mesh castShadow geometry={nodes.Sphere011.geometry} material={materials["drawer.002"]} />
            <mesh castShadow geometry={nodes.Sphere011_1.geometry} material={materials["frames.001"]} />
            <mesh castShadow geometry={nodes.Sphere011_2.geometry} material={materials["wardrobe.001"]} />
            <mesh castShadow geometry={nodes.Sphere011_3.geometry} material={materials["Material.007"]} />
          </group>
          <group position={[-2.189, 0.772, 0.115]}>
            <mesh castShadow geometry={nodes.Cylinder003.geometry} material={materials.legs} />
            <mesh castShadow geometry={nodes.Cylinder003_1.geometry} material={materials.lampStand} />
            <mesh castShadow geometry={nodes.Cylinder003_2.geometry} material={materials.lampCylinder} />
            <mesh castShadow geometry={nodes.Cylinder003_3.geometry} material={materials.nighstand} />
            <mesh castShadow geometry={nodes.Cylinder003_4.geometry} material={materials.nighstandDrawer} />
            <mesh castShadow geometry={nodes.Cylinder003_5.geometry} material={materials.nighstandKnox} />
            <mesh castShadow geometry={nodes.Cylinder003_6.geometry} material={materials.phone} />
            <mesh castShadow geometry={nodes.Cylinder003_7.geometry} material={materials.phoneScreen} />
          </group>
        </group>
        <group ref={walk} position={[1.418, -0.08, 3.39]}>
          <mesh receiveShadow geometry={nodes.Cube050.geometry} material={materials["walk-shadow"]} />
          <mesh castShadow geometry={nodes.Cube050_1.geometry} material={materials["walk-cast"]} />
        </group>
        <group ref={walkPlates} position={[1.461, 0.056, 3.014]} rotation={[0, 0.191, 0]}>
          <mesh castShadow geometry={nodes.Cube052.geometry} material={materials.walkplate1} />
          <mesh castShadow geometry={nodes.Cube052_1.geometry} material={materials.walkplate2} />
        </group>
        <mesh ref={stone1} castShadow geometry={nodes.rock.geometry} material={materials.rock} position={[0.849, 0.046, 2.988]} scale={0.142} />
        <mesh ref={stone2} castShadow geometry={nodes.rock2.geometry} material={materials.rock} position={[1.974, 0.046, 3.606]} scale={0.142} />
        <group ref={flowers} position={[0.954, 0.229, 3.9]} rotation={[0, 0, -0.197]}>
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
        <group ref={mailBox} position={[2.201, 1.537, 3.545]} rotation={[-0.168, 0, 0]}>
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
