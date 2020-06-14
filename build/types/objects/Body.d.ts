export = Body;
/**
 * Base class for all body types.
 * @class Body
 * @constructor
 * @extends EventTarget
 * @param {object} [options]
 * @param {Vec3} [options.position]
 * @param {Vec3} [options.velocity]
 * @param {Vec3} [options.angularVelocity]
 * @param {Quaternion} [options.quaternion]
 * @param {number} [options.mass]
 * @param {Material} [options.material]
 * @param {number} [options.type]
 * @param {number} [options.linearDamping=0.01]
 * @param {number} [options.angularDamping=0.01]
 * @param {boolean} [options.allowSleep=true]
 * @param {number} [options.sleepSpeedLimit=0.1]
 * @param {number} [options.sleepTimeLimit=1]
 * @param {number} [options.collisionFilterGroup=1]
 * @param {number} [options.collisionFilterMask=-1]
 * @param {boolean} [options.fixedRotation=false]
 * @param {Vec3} [options.linearFactor]
 * @param {Vec3} [options.angularFactor]
 * @param {Shape} [options.shape]
 * @example
 *     var body = new Body({
 *         mass: 1
 *     });
 *     var shape = new Sphere(1);
 *     body.addShape(shape);
 *     world.addBody(body);
 */
declare function Body(options?: {
    position?: import("../math/Vec3");
    velocity?: import("../math/Vec3");
    angularVelocity?: import("../math/Vec3");
    quaternion?: import("../math/Quaternion");
    mass?: number;
    material?: import("../material/Material");
    type?: number;
    linearDamping?: number;
    angularDamping?: number;
    allowSleep?: boolean;
    sleepSpeedLimit?: number;
    sleepTimeLimit?: number;
    collisionFilterGroup?: number;
    collisionFilterMask?: number;
    fixedRotation?: boolean;
    linearFactor?: import("../math/Vec3");
    angularFactor?: import("../math/Vec3");
    shape?: import("../shapes/Shape");
}): void;
declare class Body {
    /**
     * Base class for all body types.
     * @class Body
     * @constructor
     * @extends EventTarget
     * @param {object} [options]
     * @param {Vec3} [options.position]
     * @param {Vec3} [options.velocity]
     * @param {Vec3} [options.angularVelocity]
     * @param {Quaternion} [options.quaternion]
     * @param {number} [options.mass]
     * @param {Material} [options.material]
     * @param {number} [options.type]
     * @param {number} [options.linearDamping=0.01]
     * @param {number} [options.angularDamping=0.01]
     * @param {boolean} [options.allowSleep=true]
     * @param {number} [options.sleepSpeedLimit=0.1]
     * @param {number} [options.sleepTimeLimit=1]
     * @param {number} [options.collisionFilterGroup=1]
     * @param {number} [options.collisionFilterMask=-1]
     * @param {boolean} [options.fixedRotation=false]
     * @param {Vec3} [options.linearFactor]
     * @param {Vec3} [options.angularFactor]
     * @param {Shape} [options.shape]
     * @example
     *     var body = new Body({
     *         mass: 1
     *     });
     *     var shape = new Sphere(1);
     *     body.addShape(shape);
     *     world.addBody(body);
     */
    constructor(options?: {
        position?: import("../math/Vec3");
        velocity?: import("../math/Vec3");
        angularVelocity?: import("../math/Vec3");
        quaternion?: import("../math/Quaternion");
        mass?: number;
        material?: import("../material/Material");
        type?: number;
        linearDamping?: number;
        angularDamping?: number;
        allowSleep?: boolean;
        sleepSpeedLimit?: number;
        sleepTimeLimit?: number;
        collisionFilterGroup?: number;
        collisionFilterMask?: number;
        fixedRotation?: boolean;
        linearFactor?: import("../math/Vec3");
        angularFactor?: import("../math/Vec3");
        shape?: import("../shapes/Shape");
    });
    id: number;
    /**
     * Reference to the world the body is living in
     * @property world
     * @type {World}
     */
    world: World;
    /**
     * Callback function that is used BEFORE stepping the system. Use it to apply forces, for example. Inside the function, "this" will refer to this Body object.
     * @property preStep
     * @type {Function}
     * @deprecated Use World events instead
     */
    preStep: Function;
    /**
     * Callback function that is used AFTER stepping the system. Inside the function, "this" will refer to this Body object.
     * @property postStep
     * @type {Function}
     * @deprecated Use World events instead
     */
    postStep: Function;
    vlambda: any;
    /**
     * @property {Number} collisionFilterGroup
     */
    collisionFilterGroup: number;
    /**
     * @property {Number} collisionFilterMask
     */
    collisionFilterMask: number;
    /**
     * Whether to produce contact forces when in contact with other bodies. Note that contacts will be generated, but they will be disabled.
     * @property {Number} collisionResponse
     */
    collisionResponse: boolean;
    /**
     * World space position of the body.
     * @property position
     * @type {Vec3}
     */
    position: Vec3;
    /**
     * @property {Vec3} previousPosition
     */
    previousPosition: any;
    /**
     * Interpolated position of the body.
     * @property {Vec3} interpolatedPosition
     */
    interpolatedPosition: any;
    /**
     * Initial position of the body
     * @property initPosition
     * @type {Vec3}
     */
    initPosition: Vec3;
    /**
     * World space velocity of the body.
     * @property velocity
     * @type {Vec3}
     */
    velocity: Vec3;
    /**
     * @property initVelocity
     * @type {Vec3}
     */
    initVelocity: Vec3;
    /**
     * Linear force on the body in world space.
     * @property force
     * @type {Vec3}
     */
    force: Vec3;
    /**
     * @property mass
     * @type {Number}
     * @default 0
     */
    mass: Number;
    /**
     * @property invMass
     * @type {Number}
     */
    invMass: Number;
    /**
     * @property material
     * @type {Material}
     */
    material: Material;
    /**
     * @property linearDamping
     * @type {Number}
     */
    linearDamping: Number;
    /**
     * One of: Body.DYNAMIC, Body.STATIC and Body.KINEMATIC.
     * @property type
     * @type {Number}
     */
    type: Number;
    /**
     * If true, the body will automatically fall to sleep.
     * @property allowSleep
     * @type {Boolean}
     * @default true
     */
    allowSleep: Boolean;
    /**
     * Current sleep state.
     * @property sleepState
     * @type {Number}
     */
    sleepState: Number;
    /**
     * If the speed (the norm of the velocity) is smaller than this value, the body is considered sleepy.
     * @property sleepSpeedLimit
     * @type {Number}
     * @default 0.1
     */
    sleepSpeedLimit: Number;
    /**
     * If the body has been sleepy for this sleepTimeLimit seconds, it is considered sleeping.
     * @property sleepTimeLimit
     * @type {Number}
     * @default 1
     */
    sleepTimeLimit: Number;
    timeLastSleepy: number;
    _wakeUpAfterNarrowphase: boolean;
    /**
     * World space rotational force on the body, around center of mass.
     * @property {Vec3} torque
     */
    torque: any;
    /**
     * World space orientation of the body.
     * @property quaternion
     * @type {Quaternion}
     */
    quaternion: Quaternion;
    /**
     * @property initQuaternion
     * @type {Quaternion}
     */
    initQuaternion: Quaternion;
    /**
     * @property {Quaternion} previousQuaternion
     */
    previousQuaternion: any;
    /**
     * Interpolated orientation of the body.
     * @property {Quaternion} interpolatedQuaternion
     */
    interpolatedQuaternion: any;
    /**
     * Angular velocity of the body, in world space. Think of the angular velocity as a vector, which the body rotates around. The length of this vector determines how fast (in radians per second) the body rotates.
     * @property angularVelocity
     * @type {Vec3}
     */
    angularVelocity: Vec3;
    /**
     * @property initAngularVelocity
     * @type {Vec3}
     */
    initAngularVelocity: Vec3;
    /**
     * @property shapes
     * @type {array}
     */
    shapes: array;
    /**
     * Position of each Shape in the body, given in local Body space.
     * @property shapeOffsets
     * @type {array}
     */
    shapeOffsets: array;
    /**
     * Orientation of each Shape, given in local Body space.
     * @property shapeOrientations
     * @type {array}
     */
    shapeOrientations: array;
    /**
     * @property inertia
     * @type {Vec3}
     */
    inertia: Vec3;
    /**
     * @property {Vec3} invInertia
     */
    invInertia: any;
    /**
     * @property {Mat3} invInertiaWorld
     */
    invInertiaWorld: any;
    invMassSolve: number;
    /**
     * @property {Vec3} invInertiaSolve
     */
    invInertiaSolve: any;
    /**
     * @property {Mat3} invInertiaWorldSolve
     */
    invInertiaWorldSolve: any;
    /**
     * Set to true if you don't want the body to rotate. Make sure to run .updateMassProperties() after changing this.
     * @property {Boolean} fixedRotation
     * @default false
     */
    fixedRotation: boolean;
    /**
     * @property {Number} angularDamping
     */
    angularDamping: number;
    /**
     * Use this property to limit the motion along any world axis. (1,1,1) will allow motion along all axes while (0,0,0) allows none.
     * @property {Vec3} linearFactor
     */
    linearFactor: import("../math/Vec3");
    /**
     * Use this property to limit the rotational motion along any world axis. (1,1,1) will allow rotation along all axes while (0,0,0) allows none.
     * @property {Vec3} angularFactor
     */
    angularFactor: import("../math/Vec3");
    /**
     * World space bounding box of the body and its shapes.
     * @property aabb
     * @type {AABB}
     */
    aabb: AABB;
    /**
     * Indicates if the AABB needs to be updated before use.
     * @property aabbNeedsUpdate
     * @type {Boolean}
     */
    aabbNeedsUpdate: Boolean;
    /**
     * Total bounding radius of the Body including its shapes, relative to body.position.
     * @property boundingRadius
     * @type {Number}
     */
    boundingRadius: Number;
    wlambda: any;
    constructor: typeof Body;
    wakeUp(): void;
    sleep(): void;
    sleepTick(time: number): void;
    updateSolveMassProperties(): void;
    pointToLocalFrame(worldPoint: import("../math/Vec3"), result: import("../math/Vec3")): import("../math/Vec3");
    vectorToLocalFrame(worldVector: any, result: import("../math/Vec3")): import("../math/Vec3");
    pointToWorldFrame(localPoint: import("../math/Vec3"), result: import("../math/Vec3")): import("../math/Vec3");
    vectorToWorldFrame(localVector: import("../math/Vec3"), result: import("../math/Vec3")): import("../math/Vec3");
    addShape(shape: import("../shapes/Shape"), _offset?: import("../math/Vec3"), _orientation?: import("../math/Quaternion")): Body;
    updateBoundingRadius(): void;
    computeAABB(): void;
    updateInertiaWorld(force: any): void;
    applyForce(force: any, relativePoint: any): void;
    applyLocalForce(localForce: any, localPoint: any): void;
    applyImpulse(impulse: any, relativePoint: any): void;
    applyLocalImpulse(localImpulse: any, localPoint: any): void;
    updateMassProperties(): void;
    getVelocityAtWorldPoint(worldPoint: import("../math/Vec3"), result: import("../math/Vec3")): import("../math/Vec3");
    integrate(dt: number, quatNormalize: boolean, quatNormalizeFast: boolean): void;
}
declare namespace Body {
    export const COLLIDE_EVENT_NAME: string;
    export const DYNAMIC: Number;
    export const STATIC: Number;
    export const KINEMATIC: Number;
    export const AWAKE: number;
    export const SLEEPY: number;
    export const SLEEPING: number;
    export const idCounter: number;
    export const wakeupEvent: {
        type: string;
    };
    export const sleepyEvent: {
        type: string;
    };
    export const sleepEvent: {
        type: string;
    };
}
declare var Vec3_1: typeof import("../math/Vec3");
declare var Material_1: typeof import("../material/Material");
declare var Quaternion_1: typeof import("../math/Quaternion");
declare var AABB: typeof import("../collision/AABB");
