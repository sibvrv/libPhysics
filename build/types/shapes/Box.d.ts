export = Box;
/**
 * A 3d box shape.
 * @class Box
 * @constructor
 * @param {Vec3} halfExtents
 * @author schteppe
 * @extends Shape
 */
declare function Box(halfExtents: import("../math/Vec3")): void;
declare class Box {
    /**
     * A 3d box shape.
     * @class Box
     * @constructor
     * @param {Vec3} halfExtents
     * @author schteppe
     * @extends Shape
     */
    constructor(halfExtents: import("../math/Vec3"));
    /**
     * @property halfExtents
     * @type {Vec3}
     */
    halfExtents: Vec3;
    /**
     * Used by the contact generator to make contacts with other convex polyhedra for example
     * @property convexPolyhedronRepresentation
     * @type {ConvexPolyhedron}
     */
    convexPolyhedronRepresentation: ConvexPolyhedron;
    constructor: typeof Box;
    updateConvexPolyhedronRepresentation(): void;
    calculateLocalInertia(mass: number, target: import("../math/Vec3")): import("../math/Vec3");
    getSideNormals(sixTargetVectors: any[], quat: any): any[];
    volume(): number;
    updateBoundingSphereRadius(): void;
    boundingSphereRadius: number;
    forEachWorldCorner(pos: any, quat: any, callback: any): void;
    calculateWorldAABB(pos: any, quat: any, min: any, max: any): void;
}
declare namespace Box { }
declare var Vec3_1: typeof import("../math/Vec3");
declare var ConvexPolyhedron: typeof import("./ConvexPolyhedron");
