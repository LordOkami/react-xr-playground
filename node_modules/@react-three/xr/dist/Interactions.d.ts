import React, { ReactNode } from 'react';
import { Object3D, Intersection, XRHandedness } from 'three';
import { XRController } from './XRController';
export interface XRInteractionEvent {
    intersection?: Intersection;
    controller: XRController;
}
export declare type XRInteractionType = 'onHover' | 'onBlur' | 'onSelectStart' | 'onSelectEnd' | 'onSelect' | 'onSqueeze' | 'onSqueezeEnd' | 'onSqueezeStart';
export declare type XRInteractionHandler = (event: XRInteractionEvent) => any;
export declare const InteractionsContext: React.Context<{
    hoverState: Record<XRHandedness, Map<Object3D, Intersection>>;
    addInteraction: (object: Object3D, eventType: XRInteractionType, handler: XRInteractionHandler) => any;
    removeInteraction: (object: Object3D, eventType: XRInteractionType, handler: XRInteractionHandler) => any;
}>;
export declare function InteractionManager({ children }: {
    children: any;
}): JSX.Element;
export declare const useInteraction: (ref: any, type: XRInteractionType, handler?: XRInteractionHandler | undefined) => void;
export declare const Interactive: React.ForwardRefExoticComponent<{
    children: ReactNode;
    onHover?: XRInteractionHandler | undefined;
    onBlur?: XRInteractionHandler | undefined;
    onSelectStart?: XRInteractionHandler | undefined;
    onSelectEnd?: XRInteractionHandler | undefined;
    onSelect?: XRInteractionHandler | undefined;
    onSqueezeStart?: XRInteractionHandler | undefined;
    onSqueezeEnd?: XRInteractionHandler | undefined;
    onSqueeze?: XRInteractionHandler | undefined;
} & React.RefAttributes<unknown>>;
export declare function RayGrab({ children }: {
    children: ReactNode;
}): JSX.Element;
