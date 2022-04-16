import { CubeCamera } from '@react-three/drei';
import { useMemo } from 'react';
import Frame from './Frame';
import Image from './Image';

export const IMAGE_SIZES = {
	A04: { w: 1.682, h: 2.378 },
	A02: { w: 1.189, h: 1.682 },
	A0: { w: 0.841, h: 1.189 },
	A1: { w: 0.594, h: 0.841 },
	A2: { w: 0.42, h: 0.594 },
	A3: { w: 0.297, h: 0.42 },
	A4: { w: 0.21, h: 0.297 },
	A5: { w: 0.148, h: 0.21 },
	A6: { w: 0.105, h: 0.148 },
	A7: { w: 0.074, h: 0.105 },
	A8: { w: 0.052, h: 0.074 },
	A9: { w: 0.037, h: 0.052 },
	A10: { w: 0.026, h: 0.037 },
};

export function scaleWH(wh, scale) {
	const { w, h } = wh;
	return { w: w * scale, h: h * scale };
}

export default function PictureFrame(props) {
	const {
		image,
		innersize = IMAGE_SIZES.A1,
		outtersize = IMAGE_SIZES.A0,
		frameThickness = 0.07,
	} = props;

	const matThicknessX = useMemo(
		() => (outtersize.w - innersize.w) / 2 - 0.001,
		[innersize, outtersize],
	);
	const matThicknessY = useMemo(
		() => (outtersize.h - innersize.h) / 2 - 0.001,
		[innersize, outtersize],
	);

	const outterW = useMemo(
		() => (outtersize.w > innersize.w ? outtersize.w : innersize.w),
		[innersize, outtersize],
	);
	const outterH = useMemo(
		() => (outtersize.h > innersize.h ? outtersize.h : innersize.h),
		[innersize, outtersize],
	);

	const outter = { w: outterW, h: outterH };

	return (
		<group {...props}>
			<Frame
				frameThickness={frameThickness}
				roughness={0.7}
				{...outter}
				color={'#314469'}>
				<Frame
					thickness={0.01}
					position={[0, 0, 0.01]}
					{...innersize}
					metalness={0}
					roughness={0.9}
					frameThicknessX={matThicknessX > 0 ? matThicknessX : 0}
					frameThicknessY={matThicknessY > 0 ? matThicknessY : 0}
					frameThickness={0}
					color={0xffffff}>
					<Image src={image.src || image} {...innersize} />
				</Frame>
			</Frame>
		</group>
	);
}
