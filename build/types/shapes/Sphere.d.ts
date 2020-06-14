export = Sphere;
/**
 * Spherical shape
 * @class Sphere
 * @constructor
 * @extends Shape
 * @param {Number} radius The radius of the sphere, a non-negative number.
 * @author schteppe / http://github.com/schteppe
 */
declare function Sphere(radius: number): void;
declare class Sphere {
    /**
     * Spherical shape
     * @class Sphere
     * @constructor
     * @extends Shape
     * @param {Number} radius The radius of the sphere, a non-negative number.
     * @author schteppe / http://github.com/schteppe
     */
    constructor(radius: number);
    /**
     * @property {Number} radius
     */
    radius: number;
    constructor: typeof Sphere;
    calculateLocalInertia(mass: any, target: any): any;
    volume(): number;
    updateBoundingSphereRadius(): void;
    boundingSphereRadius: number;
    calculateWorldAABB(pos: any, quat: any, min: any, max: any): void;
}
