/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
import React from "react";

export const Floor = (props) => {
    return (
        <mesh rotation={[-0.5 * Math.PI, 0, props.mouseX]} position={[0, -0.5, 0]} receiveShadow >
          <planeBufferGeometry attach={"geometry"} args={[8, 9, 1, 1]} />
          <shadowMaterial  attach={"material"} opacity={0.2} />
        </mesh>
    );
};