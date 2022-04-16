import { useMemo } from 'react';
import { Shape, Path, ExtrudeBufferGeometry, Vector3, DoubleSide } from 'three';

const VERTICES = [
	new Vector3(-1, 1, 0),
	new Vector3(1, 1, 0),
	new Vector3(1, -1, 0),
	new Vector3(-1, -1, 0),
];

export default function Frame(props) {
	const {
		thickness = 0.1,
		frameThickness = 0.2,
		frameThicknessX = 0,
		frameThicknessY = 0,
		w = 1,
		h = 1,
		color = 'gold',
		metalness = 1,
		roughness = 0.5,
		envMap,
	} = props;

	const width = w / 2;
	const height = h / 2;

	const geometry = useMemo(() => {
		const shape = new Shape();
		const shapeVerts = VERTICES.map((p) => {
			const vec = p.clone();
			vec.x = vec.x * (width + (frameThicknessX + frameThickness));
			vec.y = vec.y * (height + (frameThicknessY + frameThickness));
			return vec;
		});

		shape.moveTo(shapeVerts[0].x, shapeVerts[0].y, shapeVerts[0].z);
		shapeVerts.forEach((point) => shape.lineTo(point.x, point.y, point.z));
		shape.closePath();

		const path = new Path();
		const pathVerts = VERTICES.slice();

		path.moveTo(
			pathVerts[0].x * width,
			pathVerts[0].y * height,
			pathVerts[0].z,
		);
		pathVerts.forEach((point) =>
			path.lineTo(point.x * width, point.y * height, point.z),
		);
		path.closePath();

		shape.holes = [path];

		const extrudeSettings = {
			depth: thickness,
			bevelEnabled: false,
			bevelSegments: 1,
			steps: 2,
			bevelSize: 0.01,
			bevelThickness: 0.01,
		};

		const geometry = new ExtrudeBufferGeometry(shape, extrudeSettings);

		return geometry;
	}, [
		frameThickness,
		frameThicknessX,
		frameThicknessY,
		width,
		height,
		thickness,
	]);

	return (
		<group {...props}>
			<mesh geometry={geometry}>
				<meshBasicMaterial
					attach="material"
					metalness={metalness}
					roughness={roughness}
					color={color}
					side={DoubleSide}
					envMap={envMap}
				/>
			</mesh>
			{props.children}
		</group>
	);
}
