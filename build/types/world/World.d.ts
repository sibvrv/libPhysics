export = World;
/**
 * The physics world
 * @class World
 * @constructor
 * @extends EventTarget
 * @param {object} [options]
 * @param {Vec3} [options.gravity]
 * @param {boolean} [options.allowSleep]
 * @param {Broadphase} [options.broadphase]
 * @param {Solver} [options.solver]
 * @param {boolean} [options.quatNormalizeFast]
 * @param {number} [options.quatNormalizeSkip]
 */
declare function World(options?: {
    gravity?: import("../math/Vec3");
    allowSleep?: boolean;
    broadphase?: any;
    solver?: any;
    quatNormalizeFast?: boolean;
    quatNormalizeSkip?: number;
}): void;
declare class World {
    /**
     * The physics world
     * @class World
     * @constructor
     * @extends EventTarget
     * @param {object} [options]
     * @param {Vec3} [options.gravity]
     * @param {boolean} [options.allowSleep]
     * @param {Broadphase} [options.broadphase]
     * @param {Solver} [options.solver]
     * @param {boolean} [options.quatNormalizeFast]
     * @param {number} [options.quatNormalizeSkip]
     */
    constructor(options?: {
        gravity?: import("../math/Vec3");
        allowSleep?: boolean;
        broadphase?: any;
        solver?: any;
        quatNormalizeFast?: boolean;
        quatNormalizeSkip?: number;
    });
    /**
     * Currently / last used timestep. Is set to -1 if not available. This value is updated before each internal step, which means that it is "fresh" inside event callbacks.
     * @property {Number} dt
     */
    dt: number;
    /**
     * Makes bodies go to sleep when they've been inactive
     * @property allowSleep
     * @type {Boolean}
     * @default false
     */
    allowSleep: Boolean;
    /**
     * All the current contacts (instances of ContactEquation) in the world.
     * @property contacts
     * @type {Array}
     */
    contacts: Array;
    frictionEquations: any[];
    /**
     * How often to normalize quaternions. Set to 0 for every step, 1 for every second etc.. A larger value increases performance. If bodies tend to explode, set to a smaller value (zero to be sure nothing can go wrong).
     * @property quatNormalizeSkip
     * @type {Number}
     * @default 0
     */
    quatNormalizeSkip: Number;
    /**
     * Set to true to use fast quaternion normalization. It is often enough accurate to use. If bodies tend to explode, set to false.
     * @property quatNormalizeFast
     * @type {Boolean}
     * @see Quaternion.normalizeFast
     * @see Quaternion.normalize
     * @default false
     */
    quatNormalizeFast: Boolean;
    /**
     * The wall-clock time since simulation start
     * @property time
     * @type {Number}
     */
    time: Number;
    /**
     * Number of timesteps taken since start
     * @property stepnumber
     * @type {Number}
     */
    stepnumber: Number;
    default_dt: number;
    nextId: number;
    /**
     * @property gravity
     * @type {Vec3}
     */
    gravity: Vec3;
    /**
     * The broadphase algorithm to use. Default is NaiveBroadphase
     * @property broadphase
     * @type {Broadphase}
     */
    broadphase: Broadphase;
    /**
     * @property bodies
     * @type {Array}
     */
    bodies: Array;
    /**
     * The solver algorithm to use. Default is GSSolver
     * @property solver
     * @type {Solver}
     */
    solver: Solver;
    /**
     * @property constraints
     * @type {Array}
     */
    constraints: Array;
    /**
     * @property narrowphase
     * @type {Narrowphase}
     */
    narrowphase: Narrowphase;
    /**
     * @property {ArrayCollisionMatrix} collisionMatrix
     * @type {ArrayCollisionMatrix}
     */
    collisionMatrix: ArrayCollisionMatrix;
    /**
     * CollisionMatrix from the previous step.
     * @property {ArrayCollisionMatrix} collisionMatrixPrevious
     * @type {ArrayCollisionMatrix}
     */
    collisionMatrixPrevious: ArrayCollisionMatrix;
    bodyOverlapKeeper: import("../collision/OverlapKeeper");
    shapeOverlapKeeper: import("../collision/OverlapKeeper");
    /**
     * All added materials
     * @property materials
     * @type {Array}
     */
    materials: Array;
    /**
     * @property contactmaterials
     * @type {Array}
     */
    contactmaterials: Array;
    /**
     * Used to look up a ContactMaterial given two instances of Material.
     * @property {TupleDictionary} contactMaterialTable
     */
    contactMaterialTable: import("../utils/TupleDictionary");
    defaultMaterial: import("../material/Material");
    /**
     * This contact material is used if no suitable contactmaterial is found for a contact.
     * @property defaultContactMaterial
     * @type {ContactMaterial}
     */
    defaultContactMaterial: ContactMaterial;
    /**
     * @property doProfiling
     * @type {Boolean}
     */
    doProfiling: Boolean;
    /**
     * @property profile
     * @type {Object}
     */
    profile: Object;
    /**
     * Time accumulator for interpolation. See http://gafferongames.com/game-physics/fix-your-timestep/
     * @property {Number} accumulator
     */
    accumulator: number;
    /**
     * @property subsystems
     * @type {Array}
     */
    subsystems: Array;
    /**
     * Dispatched after a body has been added to the world.
     * @event addBody
     * @param {Body} body The body that has been added to the world.
     */
    addBodyEvent: {
        type: string;
        body: any;
    };
    /**
     * Dispatched after a body has been removed from the world.
     * @event removeBody
     * @param {Body} body The body that has been removed from the world.
     */
    removeBodyEvent: {
        type: string;
        body: any;
    };
    idToBodyMap: {};
    getContactMaterial(m1: import("../material/Material"), m2: import("../material/Material")): import("../material/ContactMaterial");
    numObjects(): number;
    collisionMatrixTick(): void;
    /**
     * Add a rigid body to the simulation.
     * @method add
     * @param {Body} body
     * @todo If the simulation has not yet started, why recrete and copy arrays for each body? Accumulate in dynamic arrays in this case.
     * @todo Adding an array of bodies should be possible. This would save some loops too
     * @deprecated Use .addBody instead
     */
    add: (body: Body) => void;
    addBody(body: Body): void;
    addConstraint(c: any): void;
    removeConstraint(c: any): void;
    rayTest(from: import("../math/Vec3"), to: import("../math/Vec3"), result: import("../collision/RaycastResult")): void;
    raycastAll(from: import("../math/Vec3"), to: import("../math/Vec3"), options: {
        collisionFilterMask?: number;
        collisionFilterGroup?: number;
        skipBackfaces?: boolean;
        checkCollisionResponse?: boolean;
    }, callback: Function): boolean;
    raycastAny(from: import("../math/Vec3"), to: import("../math/Vec3"), options: {
        collisionFilterMask?: number;
        collisionFilterGroup?: number;
        skipBackfaces?: boolean;
        checkCollisionResponse?: boolean;
    }, result: import("../collision/RaycastResult")): boolean;
    raycastClosest(from: import("../math/Vec3"), to: import("../math/Vec3"), options: {
        collisionFilterMask?: number;
        collisionFilterGroup?: number;
        skipBackfaces?: boolean;
        checkCollisionResponse?: boolean;
    }, result: import("../collision/RaycastResult")): boolean;
    remove(body: Body): void;
    /**
     * Remove a rigid body from the simulation.
     * @method removeBody
     * @param {Body} body
     */
    removeBody: any;
    getBodyById(id: any): any;
    getShapeById(id: any): any;
    addMaterial(m: import("../material/Material")): void;
    addContactMaterial(cmat: import("../material/ContactMaterial")): void;
    step(dt: number, timeSinceLastCalled?: number, maxSubSteps?: number): void;
    internalStep(dt: any): void;
    emitContactEvents: () => void;
    clearForces(): void;
}
declare var Vec3_1: typeof import("../math/Vec3");
declare var Narrowphase: typeof import("./Narrowphase");
declare var ArrayCollisionMatrix: typeof import("../collision/ArrayCollisionMatrix");
declare var ContactMaterial: typeof import("../material/ContactMaterial");
