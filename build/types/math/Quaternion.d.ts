export = Quaternion;
/**
 * A Quaternion describes a rotation in 3D space. The Quaternion is mathematically defined as Q = x*i + y*j + z*k + w, where (i,j,k) are imaginary basis vectors. (x,y,z) can be seen as a vector related to the axis of rotation, while the real multiplier, w, is related to the amount of rotation.
 * @class Quaternion
 * @constructor
 * @param {Number} x Multiplier of the imaginary basis vector i.
 * @param {Number} y Multiplier of the imaginary basis vector j.
 * @param {Number} z Multiplier of the imaginary basis vector k.
 * @param {Number} w Multiplier of the real part.
 * @see http://en.wikipedia.org/wiki/Quaternion
 */
declare function Quaternion(x: number, y: number, z: number, w: number): void;
declare class Quaternion {
    /**
     * A Quaternion describes a rotation in 3D space. The Quaternion is mathematically defined as Q = x*i + y*j + z*k + w, where (i,j,k) are imaginary basis vectors. (x,y,z) can be seen as a vector related to the axis of rotation, while the real multiplier, w, is related to the amount of rotation.
     * @class Quaternion
     * @constructor
     * @param {Number} x Multiplier of the imaginary basis vector i.
     * @param {Number} y Multiplier of the imaginary basis vector j.
     * @param {Number} z Multiplier of the imaginary basis vector k.
     * @param {Number} w Multiplier of the real part.
     * @see http://en.wikipedia.org/wiki/Quaternion
     */
    constructor(x: number, y: number, z: number, w: number);
    /**
     * @property {Number} x
     */
    x: any;
    /**
     * @property {Number} y
     */
    y: any;
    /**
     * @property {Number} z
     */
    z: any;
    /**
     * The multiplier of the real quaternion basis vector.
     * @property {Number} w
     */
    w: any;
    set(x: number, y: number, z: number, w: number): Quaternion;
    toString(): string;
    toArray(): any[];
    setFromAxisAngle(axis: import("./Vec3"), angle: number): Quaternion;
    toAxisAngle(targetAxis?: import("./Vec3")): any[];
    setFromVectors(u: import("./Vec3"), v: import("./Vec3")): Quaternion;
    mult(q: any, target: any): any;
    inverse(target: Quaternion): Quaternion;
    conjugate(target: Quaternion): Quaternion;
    normalize(): Quaternion;
    normalizeFast(): Quaternion;
    vmult(v: import("./Vec3"), target: import("./Vec3")): import("./Vec3");
    copy(source: Quaternion): Quaternion;
    toEuler(target: import("./Vec3"), order: any): void;
    setFromEuler(x: number, y: number, z: number, order: string): Quaternion;
    clone(): Quaternion;
    slerp(toQuat: Quaternion, t: number, target?: Quaternion): Quaternion;
    integrate(angularVelocity: import("./Vec3"), dt: number, angularFactor: import("./Vec3"), target: Quaternion): Quaternion;
}
