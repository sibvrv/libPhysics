export = WheelInfo;
/**
 * @class WheelInfo
 * @constructor
 * @param {Object} [options]
 *
 * @param {Vec3} [options.chassisConnectionPointLocal]
 * @param {Vec3} [options.chassisConnectionPointWorld]
 * @param {Vec3} [options.directionLocal]
 * @param {Vec3} [options.directionWorld]
 * @param {Vec3} [options.axleLocal]
 * @param {Vec3} [options.axleWorld]
 * @param {number} [options.suspensionRestLength=1]
 * @param {number} [options.suspensionMaxLength=2]
 * @param {number} [options.radius=1]
 * @param {number} [options.suspensionStiffness=100]
 * @param {number} [options.dampingCompression=10]
 * @param {number} [options.dampingRelaxation=10]
 * @param {number} [options.frictionSlip=10000]
 * @param {number} [options.steering=0]
 * @param {number} [options.rotation=0]
 * @param {number} [options.deltaRotation=0]
 * @param {number} [options.rollInfluence=0.01]
 * @param {number} [options.maxSuspensionForce]
 * @param {boolean} [options.isFrontWheel=true]
 * @param {number} [options.clippedInvContactDotSuspension=1]
 * @param {number} [options.suspensionRelativeVelocity=0]
 * @param {number} [options.suspensionForce=0]
 * @param {number} [options.skidInfo=0]
 * @param {number} [options.suspensionLength=0]
 * @param {number} [options.maxSuspensionTravel=1]
 * @param {boolean} [options.useCustomSlidingRotationalSpeed=false]
 * @param {number} [options.customSlidingRotationalSpeed=-0.1]
 */
declare function WheelInfo(options?: {
    chassisConnectionPointLocal?: import("../math/Vec3");
    chassisConnectionPointWorld?: import("../math/Vec3");
    directionLocal?: import("../math/Vec3");
    directionWorld?: import("../math/Vec3");
    axleLocal?: import("../math/Vec3");
    axleWorld?: import("../math/Vec3");
    suspensionRestLength?: number;
    suspensionMaxLength?: number;
    radius?: number;
    suspensionStiffness?: number;
    dampingCompression?: number;
    dampingRelaxation?: number;
    frictionSlip?: number;
    steering?: number;
    rotation?: number;
    deltaRotation?: number;
    rollInfluence?: number;
    maxSuspensionForce?: number;
    isFrontWheel?: boolean;
    clippedInvContactDotSuspension?: number;
    suspensionRelativeVelocity?: number;
    suspensionForce?: number;
    skidInfo?: number;
    suspensionLength?: number;
    maxSuspensionTravel?: number;
    useCustomSlidingRotationalSpeed?: boolean;
    customSlidingRotationalSpeed?: number;
}): void;
declare class WheelInfo {
    /**
     * @class WheelInfo
     * @constructor
     * @param {Object} [options]
     *
     * @param {Vec3} [options.chassisConnectionPointLocal]
     * @param {Vec3} [options.chassisConnectionPointWorld]
     * @param {Vec3} [options.directionLocal]
     * @param {Vec3} [options.directionWorld]
     * @param {Vec3} [options.axleLocal]
     * @param {Vec3} [options.axleWorld]
     * @param {number} [options.suspensionRestLength=1]
     * @param {number} [options.suspensionMaxLength=2]
     * @param {number} [options.radius=1]
     * @param {number} [options.suspensionStiffness=100]
     * @param {number} [options.dampingCompression=10]
     * @param {number} [options.dampingRelaxation=10]
     * @param {number} [options.frictionSlip=10000]
     * @param {number} [options.steering=0]
     * @param {number} [options.rotation=0]
     * @param {number} [options.deltaRotation=0]
     * @param {number} [options.rollInfluence=0.01]
     * @param {number} [options.maxSuspensionForce]
     * @param {boolean} [options.isFrontWheel=true]
     * @param {number} [options.clippedInvContactDotSuspension=1]
     * @param {number} [options.suspensionRelativeVelocity=0]
     * @param {number} [options.suspensionForce=0]
     * @param {number} [options.skidInfo=0]
     * @param {number} [options.suspensionLength=0]
     * @param {number} [options.maxSuspensionTravel=1]
     * @param {boolean} [options.useCustomSlidingRotationalSpeed=false]
     * @param {number} [options.customSlidingRotationalSpeed=-0.1]
     */
    constructor(options?: {
        chassisConnectionPointLocal?: import("../math/Vec3");
        chassisConnectionPointWorld?: import("../math/Vec3");
        directionLocal?: import("../math/Vec3");
        directionWorld?: import("../math/Vec3");
        axleLocal?: import("../math/Vec3");
        axleWorld?: import("../math/Vec3");
        suspensionRestLength?: number;
        suspensionMaxLength?: number;
        radius?: number;
        suspensionStiffness?: number;
        dampingCompression?: number;
        dampingRelaxation?: number;
        frictionSlip?: number;
        steering?: number;
        rotation?: number;
        deltaRotation?: number;
        rollInfluence?: number;
        maxSuspensionForce?: number;
        isFrontWheel?: boolean;
        clippedInvContactDotSuspension?: number;
        suspensionRelativeVelocity?: number;
        suspensionForce?: number;
        skidInfo?: number;
        suspensionLength?: number;
        maxSuspensionTravel?: number;
        useCustomSlidingRotationalSpeed?: boolean;
        customSlidingRotationalSpeed?: number;
    });
    /**
     * Max travel distance of the suspension, in meters.
     * @property {number} maxSuspensionTravel
     */
    maxSuspensionTravel: number;
    /**
     * Speed to apply to the wheel rotation when the wheel is sliding.
     * @property {number} customSlidingRotationalSpeed
     */
    customSlidingRotationalSpeed: number;
    /**
     * If the customSlidingRotationalSpeed should be used.
     * @property {Boolean} useCustomSlidingRotationalSpeed
     */
    useCustomSlidingRotationalSpeed: boolean;
    /**
     * @property {Boolean} sliding
     */
    sliding: boolean;
    /**
     * Connection point, defined locally in the chassis body frame.
     * @property {Vec3} chassisConnectionPointLocal
     */
    chassisConnectionPointLocal: import("../math/Vec3");
    /**
     * @property {Vec3} chassisConnectionPointWorld
     */
    chassisConnectionPointWorld: import("../math/Vec3");
    /**
     * @property {Vec3} directionLocal
     */
    directionLocal: import("../math/Vec3");
    /**
     * @property {Vec3} directionWorld
     */
    directionWorld: import("../math/Vec3");
    /**
     * @property {Vec3} axleLocal
     */
    axleLocal: import("../math/Vec3");
    /**
     * @property {Vec3} axleWorld
     */
    axleWorld: import("../math/Vec3");
    /**
     * @property {number} suspensionRestLength
     */
    suspensionRestLength: number;
    /**
     * @property {number} suspensionMaxLength
     */
    suspensionMaxLength: number;
    /**
     * @property {number} radius
     */
    radius: number;
    /**
     * @property {number} suspensionStiffness
     */
    suspensionStiffness: number;
    /**
     * @property {number} dampingCompression
     */
    dampingCompression: number;
    /**
     * @property {number} dampingRelaxation
     */
    dampingRelaxation: number;
    /**
     * @property {number} frictionSlip
     */
    frictionSlip: number;
    /**
     * @property {number} steering
     */
    steering: number;
    /**
     * Rotation value, in radians.
     * @property {number} rotation
     */
    rotation: number;
    /**
     * @property {number} deltaRotation
     */
    deltaRotation: number;
    /**
     * @property {number} rollInfluence
     */
    rollInfluence: number;
    /**
     * @property {number} maxSuspensionForce
     */
    maxSuspensionForce: number;
    /**
     * @property {number} engineForce
     */
    engineForce: number;
    /**
     * @property {number} brake
     */
    brake: number;
    /**
     * @property {number} isFrontWheel
     */
    isFrontWheel: boolean;
    /**
     * @property {number} clippedInvContactDotSuspension
     */
    clippedInvContactDotSuspension: number;
    /**
     * @property {number} suspensionRelativeVelocity
     */
    suspensionRelativeVelocity: number;
    /**
     * @property {number} suspensionForce
     */
    suspensionForce: number;
    /**
     * @property {number} skidInfo
     */
    skidInfo: number;
    /**
     * @property {number} suspensionLength
     */
    suspensionLength: number;
    /**
     * @property {number} sideImpulse
     */
    sideImpulse: number;
    /**
     * @property {number} forwardImpulse
     */
    forwardImpulse: number;
    /**
     * The result from raycasting
     * @property {RaycastResult} raycastResult
     */
    raycastResult: import("../collision/RaycastResult");
    /**
     * Wheel world transform
     * @property {Transform} worldTransform
     */
    worldTransform: import("../math/Transform");
    /**
     * @property {boolean} isInContact
     */
    isInContact: boolean;
    updateWheel(chassis: any): void;
}
