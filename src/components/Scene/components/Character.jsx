import { useMemo } from "react";
import { SkeletonUtils } from "three/examples/jsm/utils/SkeletonUtils";
import { useFBX } from "../hooks/useModel";
import useAnimationManager from "../hooks/useAnimationManager";

const characterUrl = "/characters/Michelle.fbx";
const animationUrl = "/animations/Michelle/idle_01.fbx";

const Character = ({ url, animation, ...props }) => {
  const fbx = useFBX(characterUrl);
  const model = useMemo(() => SkeletonUtils.clone(fbx), [fbx]);

  const { ref } = useAnimationManager(animationUrl);

  return (
    <primitive
      ref={ref}
      object={model}
      dispose={null}
      scale={[0.05, 0.05, 0.05]}
      {...props}
    />
  );
};

export default Character;
