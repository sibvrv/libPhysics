export = Broadphase;
/**
 * Base class for broadphase implementations
 * @class Broadphase
 * @constructor
 * @author schteppe
 */
declare function Broadphase(): void;
declare class Broadphase {
    /**
    * The world to search for collisions in.
    * @property world
    * @type {World}
    */
    world: World;
    /**
     * If set to true, the broadphase uses bounding boxes for intersection test, else it uses bounding spheres.
     * @property useBoundingBoxes
     * @type {Boolean}
     */
    useBoundingBoxes: Boolean;
    /**
     * Set to true if the objects in the world moved.
     * @property {Boolean} dirty
     */
    dirty: boolean;
    collisionPairs(world: any, p1: any[], p2: any[]): never;
    needBroadphaseCollision(bodyA: Body, bodyB: Body): any;
    intersectionTest(bodyA: Body, bodyB: Body, pairs1: any[], pairs2: any[]): void;
    doBoundingSphereBroadphase(bodyA: any, bodyB: any, pairs1: any, pairs2: any): void;
    doBoundingBoxBroadphase(bodyA: Body, bodyB: Body, pairs1: any[], pairs2: any[]): void;
    makePairsUnique(pairs1: any, pairs2: any): void;
    setWorld(world: any): void;
    aabbQuery(world: any, aabb: any, result: any[]): any[];
}
declare namespace Broadphase { }
