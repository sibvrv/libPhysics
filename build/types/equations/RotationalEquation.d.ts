export = RotationalEquation;
/**
 * Rotational constraint. Works to keep the local vectors orthogonal to each other in world space.
 * @class RotationalEquation
 * @constructor
 * @author schteppe
 * @param {Body} bodyA
 * @param {Body} bodyB
 * @param {Vec3} [options.axisA]
 * @param {Vec3} [options.axisB]
 * @param {number} [options.maxForce]
 * @extends Equation
 */
declare function RotationalEquation(bodyA: Body, bodyB: Body, options: any): void;
declare class RotationalEquation {
    /**
     * Rotational constraint. Works to keep the local vectors orthogonal to each other in world space.
     * @class RotationalEquation
     * @constructor
     * @author schteppe
     * @param {Body} bodyA
     * @param {Body} bodyB
     * @param {Vec3} [options.axisA]
     * @param {Vec3} [options.axisB]
     * @param {number} [options.maxForce]
     * @extends Equation
     */
    constructor(bodyA: Body, bodyB: Body, options: any);
    axisA: any;
    axisB: any;
    maxAngle: number;
    constructor: typeof RotationalEquation;
    computeB(h: any): number;
}
