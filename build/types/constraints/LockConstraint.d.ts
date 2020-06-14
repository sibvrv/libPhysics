export = LockConstraint;
/**
 * Lock constraint. Will remove all degrees of freedom between the bodies.
 * @class LockConstraint
 * @constructor
 * @author schteppe
 * @param {Body} bodyA
 * @param {Body} bodyB
 * @param {object} [options]
 * @param {Number} [options.maxForce=1e6]
 * @extends PointToPointConstraint
 */
declare function LockConstraint(bodyA: Body, bodyB: Body, options?: {
    maxForce?: number;
}): void;
declare class LockConstraint {
    /**
     * Lock constraint. Will remove all degrees of freedom between the bodies.
     * @class LockConstraint
     * @constructor
     * @author schteppe
     * @param {Body} bodyA
     * @param {Body} bodyB
     * @param {object} [options]
     * @param {Number} [options.maxForce=1e6]
     * @extends PointToPointConstraint
     */
    constructor(bodyA: Body, bodyB: Body, options?: {
        maxForce?: number;
    });
    xA: any;
    xB: any;
    yA: any;
    yB: any;
    zA: any;
    zB: any;
    rotationalEquation1: import("../equations/RotationalEquation");
    rotationalEquation2: import("../equations/RotationalEquation");
    rotationalEquation3: import("../equations/RotationalEquation");
    update(): void;
}
declare namespace LockConstraint {
    export { LockConstraint as constructor };
}
