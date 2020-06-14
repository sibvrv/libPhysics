export = Shape;
/**
 * Base class for shapes
 * @class Shape
 * @constructor
 * @param {object} [options]
 * @param {number} [options.collisionFilterGroup=1]
 * @param {number} [options.collisionFilterMask=-1]
 * @param {number} [options.collisionResponse=true]
 * @param {number} [options.material=null]
 * @author schteppe
 */
declare function Shape(options?: {
    collisionFilterGroup?: number;
    collisionFilterMask?: number;
    collisionResponse?: number;
    material?: number;
}): void;
declare class Shape {
    /**
     * Base class for shapes
     * @class Shape
     * @constructor
     * @param {object} [options]
     * @param {number} [options.collisionFilterGroup=1]
     * @param {number} [options.collisionFilterMask=-1]
     * @param {number} [options.collisionResponse=true]
     * @param {number} [options.material=null]
     * @author schteppe
     */
    constructor(options?: {
        collisionFilterGroup?: number;
        collisionFilterMask?: number;
        collisionResponse?: number;
        material?: number;
    });
    /**
     * Identifyer of the Shape.
     * @property {number} id
     */
    id: number;
    /**
     * The type of this shape. Must be set to an int > 0 by subclasses.
     * @property type
     * @type {Number}
     * @see Shape.types
     */
    type: Number;
    /**
     * The local bounding sphere radius of this shape.
     * @property {Number} boundingSphereRadius
     */
    boundingSphereRadius: number;
    /**
     * Whether to produce contact forces when in contact with other bodies. Note that contacts will be generated, but they will be disabled.
     * @property {boolean} collisionResponse
     */
    collisionResponse: number | boolean;
    /**
     * @property {Number} collisionFilterGroup
     */
    collisionFilterGroup: number;
    /**
     * @property {Number} collisionFilterMask
     */
    collisionFilterMask: number;
    /**
     * @property {Material} material
     */
    material: number;
    /**
     * @property {Body} body
     */
    body: any;
    constructor: typeof Shape;
    updateBoundingSphereRadius(): never;
    volume(): number;
    calculateLocalInertia(mass: number, target: import("../math/Vec3")): never;
}
declare namespace Shape {
    export const idCounter: number;
    export const types: Object;
}
