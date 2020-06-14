export = ConeTwistConstraint;
/**
 * @class ConeTwistConstraint
 * @constructor
 * @author schteppe
 * @param {Body} bodyA
 * @param {Body} bodyB
 * @param {object} [options]
 * @param {Vec3} [options.pivotA]
 * @param {Vec3} [options.pivotB]
 * @param {Vec3} [options.axisA]
 * @param {Vec3} [options.axisB]
 * @param {Number} [options.maxForce=1e6]
 * @extends PointToPointConstraint
 */
declare function ConeTwistConstraint(bodyA: Body, bodyB: Body, options?: {
    pivotA?: import("../math/Vec3");
    pivotB?: import("../math/Vec3");
    axisA?: import("../math/Vec3");
    axisB?: import("../math/Vec3");
    maxForce?: number;
}): void;
declare class ConeTwistConstraint {
    /**
     * @class ConeTwistConstraint
     * @constructor
     * @author schteppe
     * @param {Body} bodyA
     * @param {Body} bodyB
     * @param {object} [options]
     * @param {Vec3} [options.pivotA]
     * @param {Vec3} [options.pivotB]
     * @param {Vec3} [options.axisA]
     * @param {Vec3} [options.axisB]
     * @param {Number} [options.maxForce=1e6]
     * @extends PointToPointConstraint
     */
    constructor(bodyA: Body, bodyB: Body, options?: {
        pivotA?: import("../math/Vec3");
        pivotB?: import("../math/Vec3");
        axisA?: import("../math/Vec3");
        axisB?: import("../math/Vec3");
        maxForce?: number;
    });
    axisA: any;
    axisB: any;
    collideConnected: boolean;
    angle: any;
    coneEquation: import("../equations/ConeEquation");
    twistEquation: import("../equations/RotationalEquation");
    twistAngle: any;
    update(): void;
}
declare namespace ConeTwistConstraint {
    export { ConeTwistConstraint as constructor };
}
