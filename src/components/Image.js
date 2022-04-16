import { useMemo } from 'react';
import { TextureLoader } from 'three';

export default function Image(props) {
	const { w = 1, h = 1, src } = props;
	const map = useMemo(() => {
		return new TextureLoader().load(src);
	}, [src]);

	return (
		<mesh {...props}>
			<planeBufferGeometry args={[w, h]} />
			<meshBasicMaterial attach="material" color={0xffffff} map={map} />
		</mesh>
	);
}
