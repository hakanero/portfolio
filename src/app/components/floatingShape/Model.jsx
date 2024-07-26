import React from "react";
import { useGLTF, Float, Torus, Box } from "@react-three/drei";
import { motion } from 'framer-motion-3d';
import { useTransform } from "framer-motion";

export default function Model({ mouse }) {

	const { nodes } = useGLTF("/medias/name.glb");
	return (
		<group>
			<Mesh node={nodes.h} multiplier={1.7} mouse={mouse} />
			<Mesh node={nodes.a1} multiplier={1.6} mouse={mouse}  />
			<Mesh node={nodes.k} multiplier={1.6} mouse={mouse}  />
			<Mesh node={nodes.a2} multiplier={1.2} mouse={mouse}  />
			<Mesh node={nodes.n} multiplier={1.15} mouse={mouse}  />
		</group>
	);
}

useGLTF.preload("/medias/name.glb");


function Mesh({ node, multiplier, mouse }) {
	const { geometry, material, position, scale, rotation } = node;
	const a = multiplier / 2;
	const rotationX = useTransform(mouse.x, [0, 1], [-Math.PI/2+rotation.x - a, -Math.PI/2+rotation.x + a]);
	const rotationY = useTransform(mouse.y, [0, 1], [Math.PI/2+rotation.y - a, Math.PI/2+rotation.y + a]);
	const positionX = useTransform(mouse.x, [0, 1], [position.x - multiplier*2, position.x + multiplier]);
	const positionY = useTransform(mouse.y, [0, 1], [-1+position.y + multiplier*2, -1+position.y - multiplier])


	return (
		<Float>
			<motion.mesh
				castShadow={true}
				receiveShadow={true}
				geometry={geometry}
				material={material}
				position={position}
				rotation={rotation}
				scale={scale}
				rotation-y={rotationX}
				rotation-x={rotationY}
				position-x={positionX}
				position-y={positionY}
			/>
		</Float>
	)
}