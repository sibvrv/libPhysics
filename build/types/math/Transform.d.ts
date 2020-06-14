export = Transform;
/**
 * @class Transform
 * @constructor
 */
declare function Transform(options: any): void;
declare class Transform {
    /**
     * @class Transform
     * @constructor
     */
    constructor(options: any);
    /**
     * @property {Vec3} position
     */
    position: any;
    /**
     * @property {Quaternion} quaternion
     */
    quaternion: any;
    pointToLocal(worldPoint: any, result: import("./Vec3")): import("./Vec3");
    pointToWorld(localPoint: any, result: import("./Vec3")): import("./Vec3");
    vectorToWorldFrame(localVector: any, result: any): any;
}
declare namespace Transform { }
