import { useEffect } from "react";
import { useAnimations } from "@react-three/drei";

import { useFBX } from "./useModel";

const useAnimationManager = (url, name = null) => {
  const { animations } = useFBX(url);
  const { ref, mixer, actions, names } = useAnimations(animations);

  useEffect(() => {
    mixer.stopAllAction();
    actions[name ? name : names[0]].play();
  }, [actions, names, mixer, name]);

  return { ref };
};

export default useAnimationManager;
