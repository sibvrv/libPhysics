export = RaycastResult;
/**
 * Storage for Ray casting data.
 * @class RaycastResult
 * @constructor
 */
declare function RaycastResult(): void;
declare class RaycastResult {
    /**
     * @property {Vec3} rayFromWorld
     */
    rayFromWorld: any;
    /**
     * @property {Vec3} rayToWorld
     */
    rayToWorld: any;
    /**
     * @property {Vec3} hitNormalWorld
     */
    hitNormalWorld: any;
    /**
     * @property {Vec3} hitPointWorld
     */
    hitPointWorld: any;
    /**
     * @property {boolean} hasHit
     */
    hasHit: boolean;
    /**
     * The hit shape, or null.
     * @property {Shape} shape
     */
    shape: any;
    /**
     * The hit body, or null.
     * @property {Body} body
     */
    body: Body;
    /**
     * The index of the hit triangle, if the hit shape was a trimesh.
     * @property {number} hitFaceIndex
     * @default -1
     */
    hitFaceIndex: number;
    /**
     * Distance to the hit. Will be set to -1 if there was no hit.
     * @property {number} distance
     * @default -1
     */
    distance: number;
    /**
     * If the ray should stop traversing the bodies.
     * @private
     * @property {Boolean} _shouldStop
     * @default false
     */
    _shouldStop: boolean;
    reset(): void;
    abort(): void;
    set(rayFromWorld: import("../math/Vec3"), rayToWorld: import("../math/Vec3"), hitNormalWorld: import("../math/Vec3"), hitPointWorld: import("../math/Vec3"), shape: any, body: Body, distance: number): void;
}
