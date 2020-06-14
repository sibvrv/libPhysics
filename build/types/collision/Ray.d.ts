export = Ray;
/**
 * A line in 3D space that intersects bodies and return points.
 * @class Ray
 * @constructor
 * @param {Vec3} from
 * @param {Vec3} to
 */
declare function Ray(from: import("../math/Vec3"), to: import("../math/Vec3")): void;
declare class Ray {
    /**
     * A line in 3D space that intersects bodies and return points.
     * @class Ray
     * @constructor
     * @param {Vec3} from
     * @param {Vec3} to
     */
    constructor(from: import("../math/Vec3"), to: import("../math/Vec3"));
    /**
     * @property {Vec3} from
     */
    from: any;
    /**
     * @property {Vec3} to
     */
    to: any;
    /**
     * @private
     * @property {Vec3} _direction
     */
    _direction: any;
    /**
     * The precision of the ray. Used when checking parallelity etc.
     * @property {Number} precision
     */
    precision: number;
    /**
     * Set to true if you want the Ray to take .collisionResponse flags into account on bodies and shapes.
     * @property {Boolean} checkCollisionResponse
     */
    checkCollisionResponse: boolean;
    /**
     * If set to true, the ray skips any hits with normal.dot(rayDirection) < 0.
     * @property {Boolean} skipBackfaces
     */
    skipBackfaces: boolean;
    /**
     * @property {number} collisionFilterMask
     * @default -1
     */
    collisionFilterMask: number;
    /**
     * @property {number} collisionFilterGroup
     * @default -1
     */
    collisionFilterGroup: number;
    /**
     * The intersection mode. Should be Ray.ANY, Ray.ALL or Ray.CLOSEST.
     * @property {number} mode
     */
    mode: number;
    /**
     * Current result object.
     * @property {RaycastResult} result
     */
    result: import("./RaycastResult");
    /**
     * Will be set to true during intersectWorld() if the ray hit anything.
     * @property {Boolean} hasHit
     */
    hasHit: boolean;
    /**
     * Current, user-provided result callback. Will be used if mode is Ray.ALL.
     * @property {Function} callback
     */
    callback: (result: any) => void;
    constructor: typeof Ray;
    intersectWorld(world: any, options: any): boolean;
    intersectBody(body: any, result: any): void;
    intersectBodies(bodies: any[], result?: import("./RaycastResult")): void;
    _updateDirection(): void;
    intersectShape(shape: import("../shapes/Shape"), quat: import("../math/Quaternion"), position: import("../math/Vec3"), body: Body): void;
    intersectBox(shape: import("../shapes/Shape"), quat: import("../math/Quaternion"), position: import("../math/Vec3"), body: Body, reportedShape: any): void;
    intersectPlane(shape: import("../shapes/Shape"), quat: import("../math/Quaternion"), position: import("../math/Vec3"), body: Body, reportedShape: any): void;
    getAABB(result: any): void;
    intersectHeightfield(shape: import("../shapes/Shape"), quat: import("../math/Quaternion"), position: import("../math/Vec3"), body: Body, reportedShape: any): void;
    intersectSphere(shape: import("../shapes/Shape"), quat: import("../math/Quaternion"), position: import("../math/Vec3"), body: Body, reportedShape: any): void;
    intersectConvex(shape: import("../shapes/Shape"), quat: import("../math/Quaternion"), position: import("../math/Vec3"), body: Body, reportedShape: any, options?: {
        faceList?: any[];
    }): void;
    intersectTrimesh(mesh: any, quat: import("../math/Quaternion"), position: import("../math/Vec3"), body: Body, reportedShape: any, options?: any): void;
    reportIntersection(normal: import("../math/Vec3"), hitPointWorld: import("../math/Vec3"), shape: import("../shapes/Shape"), body: Body, hitFaceIndex: any): boolean;
}
declare namespace Ray {
    export const CLOSEST: number;
    export const ANY: number;
    export const ALL: number;
    export { pointInTriangle };
}
declare function pointInTriangle(p: any, a: any, b: any, c: any): boolean;
