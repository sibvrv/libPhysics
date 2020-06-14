export = AABB;
/**
 * Axis aligned bounding box class.
 * @class AABB
 * @constructor
 * @param {Object} [options]
 * @param {Vec3}   [options.upperBound]
 * @param {Vec3}   [options.lowerBound]
 */
declare function AABB(options?: {
    upperBound?: import("../math/Vec3");
    lowerBound?: import("../math/Vec3");
}): void;
declare class AABB {
    /**
     * Axis aligned bounding box class.
     * @class AABB
     * @constructor
     * @param {Object} [options]
     * @param {Vec3}   [options.upperBound]
     * @param {Vec3}   [options.lowerBound]
     */
    constructor(options?: {
        upperBound?: import("../math/Vec3");
        lowerBound?: import("../math/Vec3");
    });
    /**
     * The lower bound of the bounding box.
     * @property lowerBound
     * @type {Vec3}
     */
    lowerBound: Vec3;
    /**
     * The upper bound of the bounding box.
     * @property upperBound
     * @type {Vec3}
     */
    upperBound: Vec3;
    setFromPoints(points: any[], position: import("../math/Vec3"), quaternion: any, skinSize: number): AABB;
    copy(aabb: AABB): AABB;
    clone(): AABB;
    extend(aabb: AABB): void;
    overlaps(aabb: AABB): boolean;
    volume(): number;
    contains(aabb: AABB): boolean;
    getCorners(a: import("../math/Vec3"), b: import("../math/Vec3"), c: import("../math/Vec3"), d: import("../math/Vec3"), e: import("../math/Vec3"), f: import("../math/Vec3"), g: import("../math/Vec3"), h: import("../math/Vec3")): void;
    toLocalFrame(frame: any, target: AABB): AABB;
    toWorldFrame(frame: any, target: AABB): AABB;
    overlapsRay(ray: any): number;
}
declare var Vec3_1: typeof import("../math/Vec3");
