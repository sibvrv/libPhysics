export = ConvexPolyhedron;
/**
 * A set of polygons describing a convex shape.
 * @class ConvexPolyhedron
 * @constructor
 * @extends Shape
 * @description The shape MUST be convex for the code to work properly. No polygons may be coplanar (contained
 * in the same 3D plane), instead these should be merged into one polygon.
 *
 * @param {array} points An array of Vec3's
 * @param {array} faces Array of integer arrays, describing which vertices that is included in each face.
 *
 * @author qiao / https://github.com/qiao (original author, see https://github.com/qiao/three.js/commit/85026f0c769e4000148a67d45a9e9b9c5108836f)
 * @author schteppe / https://github.com/schteppe
 * @see http://www.altdevblogaday.com/2011/05/13/contact-generation-between-3d-convex-meshes/
 * @see http://bullet.googlecode.com/svn/trunk/src/BulletCollision/NarrowPhaseCollision/btPolyhedralContactClipping.cpp
 *
 * @todo Move the clipping functions to ContactGenerator?
 * @todo Automatically merge coplanar polygons in constructor.
 */
declare function ConvexPolyhedron(points: any[], faces: any[], uniqueAxes: any): void;
declare class ConvexPolyhedron {
    /**
     * A set of polygons describing a convex shape.
     * @class ConvexPolyhedron
     * @constructor
     * @extends Shape
     * @description The shape MUST be convex for the code to work properly. No polygons may be coplanar (contained
     * in the same 3D plane), instead these should be merged into one polygon.
     *
     * @param {array} points An array of Vec3's
     * @param {array} faces Array of integer arrays, describing which vertices that is included in each face.
     *
     * @author qiao / https://github.com/qiao (original author, see https://github.com/qiao/three.js/commit/85026f0c769e4000148a67d45a9e9b9c5108836f)
     * @author schteppe / https://github.com/schteppe
     * @see http://www.altdevblogaday.com/2011/05/13/contact-generation-between-3d-convex-meshes/
     * @see http://bullet.googlecode.com/svn/trunk/src/BulletCollision/NarrowPhaseCollision/btPolyhedralContactClipping.cpp
     *
     * @todo Move the clipping functions to ContactGenerator?
     * @todo Automatically merge coplanar polygons in constructor.
     */
    constructor(points: any[], faces: any[], uniqueAxes: any);
    /**
     * Array of Vec3
     * @property vertices
     * @type {Array}
     */
    vertices: Array;
    worldVertices: any[];
    worldVerticesNeedsUpdate: boolean;
    /**
     * Array of integer arrays, indicating which vertices each face consists of
     * @property faces
     * @type {Array}
     */
    faces: Array;
    /**
     * Array of Vec3
     * @property faceNormals
     * @type {Array}
     */
    faceNormals: Array;
    worldFaceNormalsNeedsUpdate: boolean;
    worldFaceNormals: any[];
    /**
     * Array of Vec3
     * @property uniqueEdges
     * @type {Array}
     */
    uniqueEdges: Array;
    /**
     * If given, these locally defined, normalized axes are the only ones being checked when doing separating axis check.
     * @property {Array} uniqueAxes
     */
    uniqueAxes: any;
    constructor: typeof ConvexPolyhedron;
    computeEdges(): void;
    computeNormals(): void;
    getFaceNormal(i: number, target: import("../math/Vec3")): void;
    clipAgainstHull(posA: any, quatA: any, hullB: any, posB: any, quatB: any, separatingNormal: any, minDist: any, maxDist: any, result: any): void;
    findSeparatingAxis(hullB: any, posA: any, quatA: any, posB: any, quatB: any, target: any, faceListA: any, faceListB: any): boolean;
    testSepAxis(axis: import("../math/Vec3"), hullB: ConvexPolyhedron, posA: import("../math/Vec3"), quatA: import("../math/Quaternion"), posB: import("../math/Vec3"), quatB: import("../math/Quaternion")): number;
    calculateLocalInertia(mass: number, target: import("../math/Vec3")): void;
    getPlaneConstantOfFace(face_i: number): number;
    clipFaceAgainstHull(separatingNormal: any, posA: any, quatA: any, worldVertsB1: any, minDist: any, maxDist: any, result: any): void;
    clipFaceAgainstPlane(inVertices: any[], outVertices: any[], planeNormal: import("../math/Vec3"), planeConstant: number): any[];
    computeWorldVertices(position: any, quat: any): void;
    computeLocalAABB(aabbmin: any, aabbmax: any): void;
    computeWorldFaceNormals(quat: import("../math/Quaternion")): void;
    updateBoundingSphereRadius(): void;
    boundingSphereRadius: number;
    calculateWorldAABB(pos: import("../math/Vec3"), quat: import("../math/Quaternion"), min: import("../math/Vec3"), max: import("../math/Vec3")): void;
    volume(): number;
    getAveragePointLocal(target: import("../math/Vec3")): import("../math/Vec3");
    transformAllPoints(offset: import("../math/Vec3"), quat: import("../math/Quaternion")): void;
    pointIsInside(p: any): false | 1 | -1;
}
declare namespace ConvexPolyhedron { }
