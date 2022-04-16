import { useMemo } from "react";
import { useGLTF } from "../hooks/useModel";
import * as SkeletonUtils from "three/examples/jsm/utils/SkeletonUtils";
import { useGraph } from '@react-three/fiber'

const glbUrl = "/objects/duck.glb";

const Duck = ({ ...props }) => {
  const { scene, materials, animations } = useGLTF(glbUrl);
  const clone = useMemo(() => SkeletonUtils.clone(scene), [scene]);
  // const { nodes } = useGraph(clone);

  return (
    <primitive object={clone} dispose={null} {...props} />
  );
};

export default Duck;
