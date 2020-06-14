export = GridBroadphase;
/**
 * Axis aligned uniform grid broadphase.
 * @class GridBroadphase
 * @constructor
 * @extends Broadphase
 * @todo Needs support for more than just planes and spheres.
 * @param {Vec3} aabbMin
 * @param {Vec3} aabbMax
 * @param {Number} nx Number of boxes along x
 * @param {Number} ny Number of boxes along y
 * @param {Number} nz Number of boxes along z
 */
declare function GridBroadphase(aabbMin: import("../math/Vec3"), aabbMax: import("../math/Vec3"), nx: number, ny: number, nz: number): void;
declare class GridBroadphase {
    /**
     * Axis aligned uniform grid broadphase.
     * @class GridBroadphase
     * @constructor
     * @extends Broadphase
     * @todo Needs support for more than just planes and spheres.
     * @param {Vec3} aabbMin
     * @param {Vec3} aabbMax
     * @param {Number} nx Number of boxes along x
     * @param {Number} ny Number of boxes along y
     * @param {Number} nz Number of boxes along z
     */
    constructor(aabbMin: import("../math/Vec3"), aabbMax: import("../math/Vec3"), nx: number, ny: number, nz: number);
    nx: number;
    ny: number;
    nz: number;
    aabbMin: import("../math/Vec3");
    aabbMax: import("../math/Vec3");
    bins: any[];
    binLengths: any[];
    constructor: typeof GridBroadphase;
    collisionPairs(world: any, pairs1: any, pairs2: any): void;
}
