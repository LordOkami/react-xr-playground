import { Object3D } from 'three';
export declare type ObjectsState<Key extends string, Value> = Map<Object3D, Record<Key, Value[]>>;
export declare const ObjectsState: {
    make: <Key extends string, Value>() => ObjectsState<Key, Value>;
    add: <Key_1 extends string, Value_1>(state: ObjectsState<Key_1, Value_1>, object: Object3D, key: Key_1, value: Value_1) => void;
    delete: <Key_2 extends string, Value_2>(state: ObjectsState<Key_2, Value_2>, object: Object3D, key: Key_2, value: Value_2) => void;
    has: <Key_3 extends string, Value_3>(state: ObjectsState<Key_3, Value_3>, object: Object3D, key: Key_3) => boolean;
    get: <Key_4 extends string, Value_4>(state: ObjectsState<Key_4, Value_4>, object: Object3D, key: Key_4) => Record<Key_4, Value_4[]>[Key_4] | undefined;
};
