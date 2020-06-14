export = Trimesh;
/**
 * @class Trimesh
 * @constructor
 * @param {array} vertices
 * @param {array} indices
 * @extends Shape
 * @example
 *     // How to make a mesh with a single triangle
 *     var vertices = [
 *         0, 0, 0, // vertex 0
 *         1, 0, 0, // vertex 1
 *         0, 1, 0  // vertex 2
 *     ];
 *     var indices = [
 *         0, 1, 2  // triangle 0
 *     ];
 *     var trimeshShape = new Trimesh(vertices, indices);
 */
declare function Trimesh(vertices: any[], indices: any[]): void;
declare class Trimesh {
    /**
     * @class Trimesh
     * @constructor
     * @param {array} vertices
     * @param {array} indices
     * @extends Shape
     * @example
     *     // How to make a mesh with a single triangle
     *     var vertices = [
     *         0, 0, 0, // vertex 0
     *         1, 0, 0, // vertex 1
     *         0, 1, 0  // vertex 2
     *     ];
     *     var indices = [
     *         0, 1, 2  // triangle 0
     *     ];
     *     var trimeshShape = new Trimesh(vertices, indices);
     */
    constructor(vertices: any[], indices: any[]);
    /**
     * @property vertices
     * @type {Array}
     */
    vertices: Array;
    /**
     * Array of integers, indicating which vertices each triangle consists of. The length of this array is thus 3 times the number of triangles.
     * @property indices
     * @type {Array}
     */
    indices: Array;
    /**
     * The normals data.
     * @property normals
     * @type {Array}
     */
    normals: Array;
    /**
     * The local AABB of the mesh.
     * @property aabb
     * @type {Array}
     */
    aabb: Array;
    /**
     * References to vertex pairs, making up all unique edges in the trimesh.
     * @property {array} edges
     */
    edges: Int16Array;
    /**
     * Local scaling of the mesh. Use .setScale() to set it.
     * @property {Vec3} scale
     */
    scale: import("../math/Vec3");
    /**
     * The indexed triangles. Use .updateTree() to update it.
     * @property {Octree} tree
     */
    tree: any;
    constructor: typeof Trimesh;
    updateTree(): void;
    getTrianglesInAABB(aabb: import("../collision/AABB"), result: any[]): any;
    setScale(scale: import("../math/Vec3")): void;
    updateNormals(): void;
    updateEdges(): void;
    getEdgeVertex(edgeIndex: number, firstOrSecond: number, vertexStore: import("../math/Vec3")): void;
    getEdgeVector(edgeIndex: number, vectorStore: import("../math/Vec3")): void;
    getVertex(i: number, out: import("../math/Vec3")): import("../math/Vec3");
    _getUnscaledVertex(i: number, out: import("../math/Vec3")): import("../math/Vec3");
    getWorldVertex(i: number, pos: import("../math/Vec3"), quat: import("../math/Quaternion"), out: import("../math/Vec3")): import("../math/Vec3");
    getTriangleVertices(i: number, a: import("../math/Vec3"), b: import("../math/Vec3"), c: import("../math/Vec3")): void;
    getNormal(i: number, target: import("../math/Vec3")): import("../math/Vec3");
    calculateLocalInertia(mass: number, target: import("../math/Vec3")): import("../math/Vec3");
    computeLocalAABB(aabb: import("../collision/AABB")): void;
    updateAABB(): void;
    updateBoundingSphereRadius(): void;
    boundingSphereRadius: number;
    calculateWorldAABB(pos: import("../math/Vec3"), quat: import("../math/Quaternion"), min: import("../math/Vec3"), max: import("../math/Vec3")): void;
    volume(): number;
}
declare namespace Trimesh { }
