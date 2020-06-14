export = Equation;
/**
 * Equation base class
 * @class Equation
 * @constructor
 * @author schteppe
 * @param {Body} bi
 * @param {Body} bj
 * @param {Number} minForce Minimum (read: negative max) force to be applied by the constraint.
 * @param {Number} maxForce Maximum (read: positive max) force to be applied by the constraint.
 */
declare function Equation(bi: Body, bj: Body, minForce: number, maxForce: number): void;
declare class Equation {
    /**
     * Equation base class
     * @class Equation
     * @constructor
     * @author schteppe
     * @param {Body} bi
     * @param {Body} bj
     * @param {Number} minForce Minimum (read: negative max) force to be applied by the constraint.
     * @param {Number} maxForce Maximum (read: positive max) force to be applied by the constraint.
     */
    constructor(bi: Body, bj: Body, minForce: number, maxForce: number);
    id: number;
    /**
     * @property {number} minForce
     */
    minForce: number;
    /**
     * @property {number} maxForce
     */
    maxForce: number;
    /**
     * @property bi
     * @type {Body}
     */
    bi: Body;
    /**
     * @property bj
     * @type {Body}
     */
    bj: Body;
    /**
     * SPOOK parameter
     * @property {number} a
     */
    a: number;
    /**
     * SPOOK parameter
     * @property {number} b
     */
    b: number;
    /**
     * SPOOK parameter
     * @property {number} eps
     */
    eps: number;
    /**
     * @property {JacobianElement} jacobianElementA
     */
    jacobianElementA: import("../math/JacobianElement");
    /**
     * @property {JacobianElement} jacobianElementB
     */
    jacobianElementB: import("../math/JacobianElement");
    /**
     * @property {boolean} enabled
     * @default true
     */
    enabled: boolean;
    /**
     * A number, proportional to the force added to the bodies.
     * @property {number} multiplier
     * @readonly
     */
    multiplier: number;
    constructor: typeof Equation;
    setSpookParams(stiffness: any, relaxation: any, timeStep: any): void;
    computeB(a: any, b: any, h: any): number;
    computeGq(): number;
    computeGW(): number;
    computeGWlambda(): number;
    computeGiMf(): number;
    computeGiMGt(): any;
    addToWlambda(deltalambda: number): void;
    computeC(): number;
}
declare namespace Equation {
    export const id: number;
}
