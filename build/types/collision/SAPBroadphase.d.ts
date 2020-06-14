export = SAPBroadphase;
/**
 * Sweep and prune broadphase along one axis.
 *
 * @class SAPBroadphase
 * @constructor
 * @param {World} [world]
 * @extends Broadphase
 */
declare function SAPBroadphase(world?: any): void;
declare class SAPBroadphase {
    /**
     * Sweep and prune broadphase along one axis.
     *
     * @class SAPBroadphase
     * @constructor
     * @param {World} [world]
     * @extends Broadphase
     */
    constructor(world?: any);
    /**
     * List of bodies currently in the broadphase.
     * @property axisList
     * @type {Array}
     */
    axisList: Array;
    /**
     * The world to search in.
     * @property world
     * @type {World}
     */
    world: World;
    /**
     * Axis to sort the bodies along. Set to 0 for x axis, and 1 for y axis. For best performance, choose an axis that the bodies are spread out more on.
     * @property axisIndex
     * @type {Number}
     */
    axisIndex: Number;
    _addBodyHandler: (e: any) => void;
    _removeBodyHandler: (e: any) => void;
    setWorld(world: any): void;
    dirty: boolean;
    collisionPairs(world: any, p1: any[], p2: any[]): void;
    sortList(): void;
    autoDetectAxis(): void;
    aabbQuery(world: any, aabb: any, result: any[]): any[];
}
declare namespace SAPBroadphase { }
