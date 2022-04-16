import { useFBX, useGLTF } from "../hooks/useModel";

const roomUrl = "/scenes/room_02.fbx";

const Room = ({ url, animation, ...props }) => {
  const glb = useFBX(roomUrl);

  return (
    <primitive object={glb} dispose={null} scale={[0.1, 0.1, 0.1]} {...props} />
  );
};

export default Room;
