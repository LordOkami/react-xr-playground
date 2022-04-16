import usePromise from "react-promise-suspense";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";

import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";

const dracoDecoderPath =
  "https://www.gstatic.com/draco/versioned/decoders/1.4.1/";

const dracoLoader = new DRACOLoader();
const gltfLoader = new GLTFLoader();
const fbxLoader = new FBXLoader();

dracoLoader.setDecoderPath(dracoDecoderPath);
gltfLoader.setDRACOLoader(dracoLoader);

const fetchGlb = (url) => {
  return new Promise((resolve, reject) => {
    gltfLoader.load(
      url,
      (result) => {
        resolve(result);
      },
      null,
      (error) => reject(error)
    );
  });
};

const fetchFbx = (url) => {
  return new Promise((resolve, reject) => {
    fbxLoader.load(
      url,
      (result) => {
        resolve(result);
      },
      null,
      (error) => reject(error)
    );
  });
};

const useFBX = (url) => {
  return usePromise(fetchFbx, [url]);
};

const useGLTF = (url) => {
  return usePromise(fetchGlb, [url]);
};

export { useFBX, useGLTF };
