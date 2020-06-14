export = ContactEquation;
/**
 * Contact/non-penetration constraint equation
 * @class ContactEquation
 * @constructor
 * @author schteppe
 * @param {Body} bodyA
 * @param {Body} bodyB
 * @extends Equation
 */
declare function ContactEquation(bodyA: Body, bodyB: Body, maxForce: any): void;
declare class ContactEquation {
    /**
     * Contact/non-penetration constraint equation
     * @class ContactEquation
     * @constructor
     * @author schteppe
     * @param {Body} bodyA
     * @param {Body} bodyB
     * @extends Equation
     */
    constructor(bodyA: Body, bodyB: Body, maxForce: any);
    /**
     * @property restitution
     * @type {Number}
     */
    restitution: Number;
    /**
     * World-oriented vector that goes from the center of bi to the contact point.
     * @property {Vec3} ri
     */
    ri: any;
    /**
     * World-oriented vector that starts in body j position and goes to the contact point.
     * @property {Vec3} rj
     */
    rj: any;
    /**
     * Contact normal, pointing out of body i.
     * @property {Vec3} ni
     */
    ni: any;
    constructor: typeof ContactEquation;
    computeB(h: any): number;
    getImpactVelocityAlongNormal(): number;
}
