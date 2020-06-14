export = Vec3;
/**
 * 3-dimensional vector
 * @class Vec3
 * @constructor
 * @param {Number} x
 * @param {Number} y
 * @param {Number} z
 * @author schteppe
 * @example
 *     var v = new Vec3(1, 2, 3);
 *     console.log('x=' + v.x); // x=1
 */
declare function Vec3(x: number, y: number, z: number): void;
declare class Vec3 {
    /**
     * 3-dimensional vector
     * @class Vec3
     * @constructor
     * @param {Number} x
     * @param {Number} y
     * @param {Number} z
     * @author schteppe
     * @example
     *     var v = new Vec3(1, 2, 3);
     *     console.log('x=' + v.x); // x=1
     */
    constructor(x: number, y: number, z: number);
    /**
     * @property x
     * @type {Number}
     */
    x: Number;
    /**
     * @property y
     * @type {Number}
     */
    y: Number;
    /**
     * @property z
     * @type {Number}
     */
    z: Number;
    cross(v: Vec3, target: Vec3): Vec3;
    set(x: number, y: number, z: number): Vec3;
    setZero(): void;
    vadd(v: Vec3, target: Vec3): Vec3;
    vsub(v: Vec3, target: Vec3): Vec3;
    crossmat(): import("./Mat3");
    normalize(): number;
    unit(target: Vec3): Vec3;
    norm(): number;
    /**
     * Get the length of the vector
     * @method length
     * @return {Number}
     */
    length: any;
    norm2(): number;
    /**
     * Get the squared length of the vector.
     * @method lengthSquared
     * @return {Number}
     */
    lengthSquared: any;
    distanceTo(p: Vec3): number;
    distanceSquared(p: Vec3): number;
    mult(scalar: number, target: Vec3): Vec3;
    vmul(vector: number, target: Vec3): Vec3;
    /**
     * Multiply the vector with a scalar.
     * @method scale
     * @param {Number} scalar
     * @param {Vec3} target
     * @return {Vec3}
     */
    scale: any;
    addScaledVector(scalar: number, vector: Vec3, target: Vec3): Vec3;
    dot(v: Vec3): number;
    isZero(): boolean;
    negate(target: Vec3): Vec3;
    tangents(t1: any, t2: any): void;
    toString(): string;
    toArray(): number[];
    copy(source: Vec3): Vec3;
    lerp(v: Vec3, t: number, target: Vec3): void;
    almostEquals(v: Vec3, precision: number): boolean;
    almostZero(precision: number): boolean;
    isAntiparallelTo(v: Vec3, precision: number): boolean;
    clone(): Vec3;
}
declare namespace Vec3 {
    export const ZERO: Vec3;
    export const UNIT_X: Vec3;
    export const UNIT_Y: Vec3;
    export const UNIT_Z: Vec3;
}
