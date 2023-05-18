/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
import React from "react";

export const Floor = () => {
    return (
        <mesh rotation={[-0.5 * Math.PI, 0, 0]} position={[0, -0.5, 0]} receiveShadow >
          <planeBufferGeometry receiveShadow attach={"geometry"} args={[100, 100, 1, 1]} />
          <shadowMaterial  attach={"material"} opacity={1} />
        </mesh>
    );
};