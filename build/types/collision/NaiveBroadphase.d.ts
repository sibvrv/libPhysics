export = NaiveBroadphase;
/**
 * Naive broadphase implementation, used in lack of better ones.
 * @class NaiveBroadphase
 * @constructor
 * @description The naive broadphase looks at all possible pairs without restriction, therefore it has complexity N^2 (which is bad)
 * @extends Broadphase
 */
declare function NaiveBroadphase(): void;
declare class NaiveBroadphase {
    constructor: typeof NaiveBroadphase;
    collisionPairs(world: any, pairs1: any[], pairs2: any[]): void;
    aabbQuery(world: any, aabb: import("./AABB"), result: any[]): any[];
}
