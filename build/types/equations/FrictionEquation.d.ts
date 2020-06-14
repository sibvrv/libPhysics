export = FrictionEquation;
/**
 * Constrains the slipping in a contact along a tangent
 * @class FrictionEquation
 * @constructor
 * @author schteppe
 * @param {Body} bodyA
 * @param {Body} bodyB
 * @param {Number} slipForce should be +-F_friction = +-mu * F_normal = +-mu * m * g
 * @extends Equation
 */
declare function FrictionEquation(bodyA: Body, bodyB: Body, slipForce: number): void;
declare class FrictionEquation {
    /**
     * Constrains the slipping in a contact along a tangent
     * @class FrictionEquation
     * @constructor
     * @author schteppe
     * @param {Body} bodyA
     * @param {Body} bodyB
     * @param {Number} slipForce should be +-F_friction = +-mu * F_normal = +-mu * m * g
     * @extends Equation
     */
    constructor(bodyA: Body, bodyB: Body, slipForce: number);
    ri: any;
    rj: any;
    t: any;
    constructor: typeof FrictionEquation;
    computeB(h: any): number;
}
