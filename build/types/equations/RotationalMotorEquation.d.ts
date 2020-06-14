export = RotationalMotorEquation;
/**
 * Rotational motor constraint. Tries to keep the relative angular velocity of the bodies to a given value.
 * @class RotationalMotorEquation
 * @constructor
 * @author schteppe
 * @param {Body} bodyA
 * @param {Body} bodyB
 * @param {Number} maxForce
 * @extends Equation
 */
declare function RotationalMotorEquation(bodyA: Body, bodyB: Body, maxForce: number): void;
declare class RotationalMotorEquation {
    /**
     * Rotational motor constraint. Tries to keep the relative angular velocity of the bodies to a given value.
     * @class RotationalMotorEquation
     * @constructor
     * @author schteppe
     * @param {Body} bodyA
     * @param {Body} bodyB
     * @param {Number} maxForce
     * @extends Equation
     */
    constructor(bodyA: Body, bodyB: Body, maxForce: number);
    /**
     * World oriented rotational axis
     * @property {Vec3} axisA
     */
    axisA: any;
    /**
     * World oriented rotational axis
     * @property {Vec3} axisB
     */
    axisB: any;
    /**
     * Motor velocity
     * @property {Number} targetVelocity
     */
    targetVelocity: number;
    constructor: typeof RotationalMotorEquation;
    computeB(h: any): number;
}
