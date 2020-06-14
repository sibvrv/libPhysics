export = HingeConstraint;
/**
 * Hinge constraint. Think of it as a door hinge. It tries to keep the door in the correct place and with the correct orientation.
 * @class HingeConstraint
 * @constructor
 * @author schteppe
 * @param {Body} bodyA
 * @param {Body} bodyB
 * @param {object} [options]
 * @param {Vec3} [options.pivotA] A point defined locally in bodyA. This defines the offset of axisA.
 * @param {Vec3} [options.axisA] An axis that bodyA can rotate around, defined locally in bodyA.
 * @param {Vec3} [options.pivotB]
 * @param {Vec3} [options.axisB]
 * @param {Number} [options.maxForce=1e6]
 * @extends PointToPointConstraint
 */
declare function HingeConstraint(bodyA: Body, bodyB: Body, options?: {
    pivotA?: import("../math/Vec3");
    axisA?: import("../math/Vec3");
    pivotB?: import("../math/Vec3");
    axisB?: import("../math/Vec3");
    maxForce?: number;
}): void;
declare class HingeConstraint {
    /**
     * Hinge constraint. Think of it as a door hinge. It tries to keep the door in the correct place and with the correct orientation.
     * @class HingeConstraint
     * @constructor
     * @author schteppe
     * @param {Body} bodyA
     * @param {Body} bodyB
     * @param {object} [options]
     * @param {Vec3} [options.pivotA] A point defined locally in bodyA. This defines the offset of axisA.
     * @param {Vec3} [options.axisA] An axis that bodyA can rotate around, defined locally in bodyA.
     * @param {Vec3} [options.pivotB]
     * @param {Vec3} [options.axisB]
     * @param {Number} [options.maxForce=1e6]
     * @extends PointToPointConstraint
     */
    constructor(bodyA: Body, bodyB: Body, options?: {
        pivotA?: import("../math/Vec3");
        axisA?: import("../math/Vec3");
        pivotB?: import("../math/Vec3");
        axisB?: import("../math/Vec3");
        maxForce?: number;
    });
    axisA: import("../math/Vec3");
    axisB: import("../math/Vec3");
    rotationalEquation1: import("../equations/RotationalEquation");
    rotationalEquation2: import("../equations/RotationalEquation");
    motorEquation: import("../equations/RotationalMotorEquation");
    enableMotor(): void;
    disableMotor(): void;
    setMotorSpeed(speed: number): void;
    setMotorMaxForce(maxForce: number): void;
    update(): void;
}
declare namespace HingeConstraint {
    export { HingeConstraint as constructor };
}
