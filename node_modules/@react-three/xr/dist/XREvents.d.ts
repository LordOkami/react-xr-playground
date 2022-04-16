import { XRController } from './XRController';
import { XRHandedness } from 'three';
export interface XREvent {
    originalEvent: any;
    controller: XRController;
}
export declare type XREventType = 'select' | 'selectstart' | 'selectend' | 'squeeze' | 'squeezestart' | 'squeezeend';
export declare const useXREvent: (event: XREventType, handler: (e: XREvent) => any, { handedness }?: {
    handedness?: XRHandedness | undefined;
}) => void;
