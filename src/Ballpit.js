import React from 'react';

import seed from 'seed-random';

const r = seed('sinomw', { global: true });

const polarRandom = () => (0.5 - r()) * 2;
const randomRange = (min, max) => min + r() * (max - min);
const polarRange = (min, max) => min + polarRandom() * (max - min);
const pickRandom = (arr) => arr[Math.floor(r() * arr.length)];

export const colors = [
	'#001219',
	'#005F73',
	'#0A9396',
	'#94D2BD',
	'#E9D8A6',
	'#EE9B00',
	'#CA6702',
	'#BB3E03',
	'#AE2012',
	'#9B2226',
];

const Ball = (props) => {
	return (
		<mesh {...props}>
			<sphereBufferGeometry
				args={[randomRange(0.2, 0.7), 12, 8]}
				attach="geometry"
			/>
			<meshBasicMaterial color={pickRandom(colors)} attach="material" />
		</mesh>
	);
};

export default function BallPit(props) {
	return (
		<group {...props}>
			{new Array(256).fill(0).map((v, i) => {
				return (
					<Ball
						key={`${i}-ball`}
						position={[polarRange(1, 10), polarRange(1, 10), polarRange(1, 10)]}
					/>
				);
			})}
		</group>
	);
}
