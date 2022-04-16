import { WebGLRenderer, Group, XRInputSource } from 'three';
export interface XRController {
    inputSource: XRInputSource;
    grip: Group;
    controller: Group;
    hand: Group;
}
export declare const XRController: {
    make: (id: number, gl: WebGLRenderer, onConnected: (c: XRController) => any, onDisconnected: (c: XRController) => any) => void;
};
