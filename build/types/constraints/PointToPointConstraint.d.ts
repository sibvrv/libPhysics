export = PointToPointConstraint;
/**
 * Connects two bodies at given offset points.
 * @class PointToPointConstraint
 * @extends Constraint
 * @constructor
 * @param {Body} bodyA
 * @param {Vec3} pivotA The point relative to the center of mass of bodyA which bodyA is constrained to.
 * @param {Body} bodyB Body that will be constrained in a similar way to the same point as bodyA. We will therefore get a link between bodyA and bodyB. If not specified, bodyA will be constrained to a static point.
 * @param {Vec3} pivotB See pivotA.
 * @param {Number} maxForce The maximum force that should be applied to constrain the bodies.
 *
 * @example
 *     var bodyA = new Body({ mass: 1 });
 *     var bodyB = new Body({ mass: 1 });
 *     bodyA.position.set(-1, 0, 0);
 *     bodyB.position.set(1, 0, 0);
 *     bodyA.addShape(shapeA);
 *     bodyB.addShape(shapeB);
 *     world.addBody(bodyA);
 *     world.addBody(bodyB);
 *     var localPivotA = new Vec3(1, 0, 0);
 *     var localPivotB = new Vec3(-1, 0, 0);
 *     var constraint = new PointToPointConstraint(bodyA, localPivotA, bodyB, localPivotB);
 *     world.addConstraint(constraint);
 */
declare function PointToPointConstraint(bodyA: Body, pivotA: import("../math/Vec3"), bodyB: Body, pivotB: import("../math/Vec3"), maxForce: number): void;
declare class PointToPointConstraint {
    /**
     * Connects two bodies at given offset points.
     * @class PointToPointConstraint
     * @extends Constraint
     * @constructor
     * @param {Body} bodyA
     * @param {Vec3} pivotA The point relative to the center of mass of bodyA which bodyA is constrained to.
     * @param {Body} bodyB Body that will be constrained in a similar way to the same point as bodyA. We will therefore get a link between bodyA and bodyB. If not specified, bodyA will be constrained to a static point.
     * @param {Vec3} pivotB See pivotA.
     * @param {Number} maxForce The maximum force that should be applied to constrain the bodies.
     *
     * @example
     *     var bodyA = new Body({ mass: 1 });
     *     var bodyB = new Body({ mass: 1 });
     *     bodyA.position.set(-1, 0, 0);
     *     bodyB.position.set(1, 0, 0);
     *     bodyA.addShape(shapeA);
     *     bodyB.addShape(shapeB);
     *     world.addBody(bodyA);
     *     world.addBody(bodyB);
     *     var localPivotA = new Vec3(1, 0, 0);
     *     var localPivotB = new Vec3(-1, 0, 0);
     *     var constraint = new PointToPointConstraint(bodyA, localPivotA, bodyB, localPivotB);
     *     world.addConstraint(constraint);
     */
    constructor(bodyA: Body, pivotA: import("../math/Vec3"), bodyB: Body, pivotB: import("../math/Vec3"), maxForce: number);
    /**
     * Pivot, defined locally in bodyA.
     * @property {Vec3} pivotA
     */
    pivotA: any;
    /**
     * Pivot, defined locally in bodyB.
     * @property {Vec3} pivotB
     */
    pivotB: any;
    equationX: any;
    equationY: any;
    equationZ: any;
    update(): void;
}
