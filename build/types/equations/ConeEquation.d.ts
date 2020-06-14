export = ConeEquation;
/**
 * Cone equation. Works to keep the given body world vectors aligned, or tilted within a given angle from each other.
 * @class ConeEquation
 * @constructor
 * @author schteppe
 * @param {Body} bodyA
 * @param {Body} bodyB
 * @param {Vec3} [options.axisA] Local axis in A
 * @param {Vec3} [options.axisB] Local axis in B
 * @param {Vec3} [options.angle] The "cone angle" to keep
 * @param {number} [options.maxForce=1e6]
 * @extends Equation
 */
declare function ConeEquation(bodyA: Body, bodyB: Body, options: any): void;
declare class ConeEquation {
    /**
     * Cone equation. Works to keep the given body world vectors aligned, or tilted within a given angle from each other.
     * @class ConeEquation
     * @constructor
     * @author schteppe
     * @param {Body} bodyA
     * @param {Body} bodyB
     * @param {Vec3} [options.axisA] Local axis in A
     * @param {Vec3} [options.axisB] Local axis in B
     * @param {Vec3} [options.angle] The "cone angle" to keep
     * @param {number} [options.maxForce=1e6]
     * @extends Equation
     */
    constructor(bodyA: Body, bodyB: Body, options: any);
    axisA: any;
    axisB: any;
    /**
     * The cone angle to keep
     * @property {number} angle
     */
    angle: any;
    constructor: typeof ConeEquation;
    computeB(h: any): number;
}
