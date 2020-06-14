export = RaycastVehicle;
/**
 * Vehicle helper class that casts rays from the wheel positions towards the ground and applies forces.
 * @class RaycastVehicle
 * @constructor
 * @param {object} [options]
 * @param {Body} [options.chassisBody] The car chassis body.
 * @param {integer} [options.indexRightAxis] Axis to use for right. x=0, y=1, z=2
 * @param {integer} [options.indexLeftAxis]
 * @param {integer} [options.indexUpAxis]
 */
declare function RaycastVehicle(options?: {
    chassisBody?: Body;
    indexRightAxis?: any;
    indexLeftAxis?: any;
    indexUpAxis?: any;
}): void;
declare class RaycastVehicle {
    /**
     * Vehicle helper class that casts rays from the wheel positions towards the ground and applies forces.
     * @class RaycastVehicle
     * @constructor
     * @param {object} [options]
     * @param {Body} [options.chassisBody] The car chassis body.
     * @param {integer} [options.indexRightAxis] Axis to use for right. x=0, y=1, z=2
     * @param {integer} [options.indexLeftAxis]
     * @param {integer} [options.indexUpAxis]
     */
    constructor(options?: {
        chassisBody?: Body;
        indexRightAxis?: any;
        indexLeftAxis?: any;
        indexUpAxis?: any;
    });
    /**
     * @property {Body} chassisBody
     */
    chassisBody: Body;
    /**
     * An array of WheelInfo objects.
     * @property {array} wheelInfos
     */
    wheelInfos: any[];
    /**
     * Will be set to true if the car is sliding.
     * @property {boolean} sliding
     */
    sliding: boolean;
    /**
     * @property {World} world
     */
    world: any;
    /**
     * Index of the right axis, 0=x, 1=y, 2=z
     * @property {integer} indexRightAxis
     * @default 1
     */
    indexRightAxis: any;
    /**
     * Index of the forward axis, 0=x, 1=y, 2=z
     * @property {integer} indexForwardAxis
     * @default 0
     */
    indexForwardAxis: any;
    /**
     * Index of the up axis, 0=x, 1=y, 2=z
     * @property {integer} indexUpAxis
     * @default 2
     */
    indexUpAxis: any;
    addWheel(options?: any): number;
    setSteeringValue(value: number, wheelIndex: any): void;
    applyEngineForce(value: number, wheelIndex: any): void;
    setBrake(brake: number, wheelIndex: any): void;
    addToWorld(world: any): void;
    preStepCallback: () => void;
    getVehicleAxisWorld(axisIndex: any, result: import("../math/Vec3")): void;
    updateVehicle(timeStep: any): void;
    currentVehicleSpeedKmHour: number;
    updateSuspension(deltaTime: any): void;
    removeFromWorld(world: any): void;
    castRay(wheel: any): number;
    updateWheelTransformWorld(wheel: any): void;
    updateWheelTransform(wheelIndex: any): void;
    getWheelTransformWorld(wheelIndex: any): any;
    updateFriction(timeStep: any): void;
}
