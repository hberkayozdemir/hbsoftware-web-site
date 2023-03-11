import React from "react";
import { useGLTF } from "@react-three/drei";

export default function Gopher({ color, ...props }) {
  const { scene } = useGLTF("/scene.gltf");
  const meshes = [];

  // Loop through the children of the scene and find Mesh objects
  scene.traverse((object) => {
    console.log(object);
    if (object.type === "Mesh") {
      meshes.push(object);
    }
  });
  let x = (
    <group>
      {meshes.map((mesh) => {
        let materials = mesh.material;

        return (
          <mesh
            animations={mesh.animations}
            args={mesh.args}
            children={mesh.children}
            name={mesh.name}
            key={mesh.uuid}
            geometry={mesh.geometry}
            material={materials}
            position={mesh.position}
            rotation={mesh.rotation}
            scale={mesh.scale}
          />
        );
      })}
    </group>
  );
  console.log(x);
  return x;
}

useGLTF.preload("/scene.gltf");
