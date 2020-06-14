export = RigidVehicle;
/**
 * Simple vehicle helper class with spherical rigid body wheels.
 * @class RigidVehicle
 * @constructor
 * @param {Body} [options.chassisBody]
 */
declare function RigidVehicle(options: any): void;
declare class RigidVehicle {
    /**
     * Simple vehicle helper class with spherical rigid body wheels.
     * @class RigidVehicle
     * @constructor
     * @param {Body} [options.chassisBody]
     */
    constructor(options: any);
    wheelBodies: any[];
    /**
     * @property coordinateSystem
     * @type {Vec3}
     */
    coordinateSystem: Vec3;
    /**
     * @property {Body} chassisBody
     */
    chassisBody: any;
    /**
     * @property constraints
     * @type {Array}
     */
    constraints: Array;
    wheelAxes: any[];
    wheelForces: any[];
    addWheel(options: {
        isFrontWheel?: boolean;
        position?: import("../math/Vec3");
        direction?: import("../math/Vec3");
        axis?: import("../math/Vec3");
        body?: Body;
    }): number;
    setSteeringValue(value: number, wheelIndex: any): void;
    setMotorSpeed(value: number, wheelIndex: any): void;
    disableMotor(wheelIndex: any): void;
    setWheelForce(value: number, wheelIndex: any): void;
    applyWheelForce(value: number, wheelIndex: any): void;
    addToWorld(world: any): void;
    _update(): void;
    removeFromWorld(world: any): void;
    getWheelSpeed(wheelIndex: any): any;
}
declare var Vec3: typeof import("../math/Vec3");
