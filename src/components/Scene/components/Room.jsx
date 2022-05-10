import { useFBX, useGLTF } from "../../../hooks/useModel";

const roomUrl = "/scenes/room-bake.glb";

const Room = ({ url, animation, ...props }) => {
  const glb = useGLTF(roomUrl);

  return (
    <primitive object={glb} dispose={null} scale={[10, 10, 10]} {...props} />
  );
};

export default Room;
