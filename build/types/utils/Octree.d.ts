export = Octree;
/**
 * @class Octree
 * @param {AABB} aabb The total AABB of the tree
 * @param {object} [options]
 * @param {number} [options.maxDepth=8]
 * @extends OctreeNode
 */
declare function Octree(aabb: import("../collision/AABB"), options?: {
    maxDepth?: number;
}): void;
declare class Octree {
    /**
     * @class Octree
     * @param {AABB} aabb The total AABB of the tree
     * @param {object} [options]
     * @param {number} [options.maxDepth=8]
     * @extends OctreeNode
     */
    constructor(aabb: import("../collision/AABB"), options?: {
        maxDepth?: number;
    });
    /**
     * Maximum subdivision depth
     * @property {number} maxDepth
     */
    maxDepth: number;
}
