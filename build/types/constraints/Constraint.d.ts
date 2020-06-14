export = Constraint;
/**
 * Constraint base class
 * @class Constraint
 * @author schteppe
 * @constructor
 * @param {Body} bodyA
 * @param {Body} bodyB
 * @param {object} [options]
 * @param {boolean} [options.collideConnected=true]
 * @param {boolean} [options.wakeUpBodies=true]
 */
declare function Constraint(bodyA: Body, bodyB: Body, options?: {
    collideConnected?: boolean;
    wakeUpBodies?: boolean;
}): void;
declare class Constraint {
    /**
     * Constraint base class
     * @class Constraint
     * @author schteppe
     * @constructor
     * @param {Body} bodyA
     * @param {Body} bodyB
     * @param {object} [options]
     * @param {boolean} [options.collideConnected=true]
     * @param {boolean} [options.wakeUpBodies=true]
     */
    constructor(bodyA: Body, bodyB: Body, options?: {
        collideConnected?: boolean;
        wakeUpBodies?: boolean;
    });
    /**
     * Equations to be solved in this constraint
     * @property equations
     * @type {Array}
     */
    equations: Array;
    /**
     * @property {Body} bodyA
     */
    bodyA: Body;
    /**
     * @property {Body} bodyB
     */
    bodyB: Body;
    /**
     * @property {Number} id
     */
    id: number;
    /**
     * Set to true if you want the bodies to collide when they are connected.
     * @property collideConnected
     * @type {boolean}
     */
    collideConnected: boolean;
    update(): never;
    enable(): void;
    disable(): void;
}
declare namespace Constraint {
    export const idCounter: number;
}
