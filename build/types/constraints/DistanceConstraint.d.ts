export = DistanceConstraint;
/**
 * Constrains two bodies to be at a constant distance from each others center of mass.
 * @class DistanceConstraint
 * @constructor
 * @author schteppe
 * @param {Body} bodyA
 * @param {Body} bodyB
 * @param {Number} [distance] The distance to keep. If undefined, it will be set to the current distance between bodyA and bodyB
 * @param {Number} [maxForce=1e6]
 * @extends Constraint
 */
declare function DistanceConstraint(bodyA: Body, bodyB: Body, distance?: number, maxForce?: number): void;
declare class DistanceConstraint {
    /**
     * Constrains two bodies to be at a constant distance from each others center of mass.
     * @class DistanceConstraint
     * @constructor
     * @author schteppe
     * @param {Body} bodyA
     * @param {Body} bodyB
     * @param {Number} [distance] The distance to keep. If undefined, it will be set to the current distance between bodyA and bodyB
     * @param {Number} [maxForce=1e6]
     * @extends Constraint
     */
    constructor(bodyA: Body, bodyB: Body, distance?: number, maxForce?: number);
    /**
     * @property {number} distance
     */
    distance: number;
    distanceEquation: any;
    update(): void;
}
