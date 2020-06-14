export = Spring;
/**
 * A spring, connecting two bodies.
 *
 * @class Spring
 * @constructor
 * @param {Body} bodyA
 * @param {Body} bodyB
 * @param {Object} [options]
 * @param {number} [options.restLength]   A number > 0. Default: 1
 * @param {number} [options.stiffness]    A number >= 0. Default: 100
 * @param {number} [options.damping]      A number >= 0. Default: 1
 * @param {Vec3}  [options.worldAnchorA] Where to hook the spring to body A, in world coordinates.
 * @param {Vec3}  [options.worldAnchorB]
 * @param {Vec3}  [options.localAnchorA] Where to hook the spring to body A, in local body coordinates.
 * @param {Vec3}  [options.localAnchorB]
 */
declare function Spring(bodyA: Body, bodyB: Body, options?: {
    restLength?: number;
    stiffness?: number;
    damping?: number;
    worldAnchorA?: import("../math/Vec3");
    worldAnchorB?: import("../math/Vec3");
    localAnchorA?: import("../math/Vec3");
    localAnchorB?: import("../math/Vec3");
}): void;
declare class Spring {
    /**
     * A spring, connecting two bodies.
     *
     * @class Spring
     * @constructor
     * @param {Body} bodyA
     * @param {Body} bodyB
     * @param {Object} [options]
     * @param {number} [options.restLength]   A number > 0. Default: 1
     * @param {number} [options.stiffness]    A number >= 0. Default: 100
     * @param {number} [options.damping]      A number >= 0. Default: 1
     * @param {Vec3}  [options.worldAnchorA] Where to hook the spring to body A, in world coordinates.
     * @param {Vec3}  [options.worldAnchorB]
     * @param {Vec3}  [options.localAnchorA] Where to hook the spring to body A, in local body coordinates.
     * @param {Vec3}  [options.localAnchorB]
     */
    constructor(bodyA: Body, bodyB: Body, options?: {
        restLength?: number;
        stiffness?: number;
        damping?: number;
        worldAnchorA?: import("../math/Vec3");
        worldAnchorB?: import("../math/Vec3");
        localAnchorA?: import("../math/Vec3");
        localAnchorB?: import("../math/Vec3");
    });
    /**
     * Rest length of the spring.
     * @property restLength
     * @type {number}
     */
    restLength: number;
    /**
     * Stiffness of the spring.
     * @property stiffness
     * @type {number}
     */
    stiffness: number;
    /**
     * Damping of the spring.
     * @property damping
     * @type {number}
     */
    damping: number;
    /**
     * First connected body.
     * @property bodyA
     * @type {Body}
     */
    bodyA: Body;
    /**
     * Second connected body.
     * @property bodyB
     * @type {Body}
     */
    bodyB: Body;
    /**
     * Anchor for bodyA in local bodyA coordinates.
     * @property localAnchorA
     * @type {Vec3}
     */
    localAnchorA: Vec3;
    /**
     * Anchor for bodyB in local bodyB coordinates.
     * @property localAnchorB
     * @type {Vec3}
     */
    localAnchorB: Vec3;
    setWorldAnchorA(worldAnchorA: import("../math/Vec3")): void;
    setWorldAnchorB(worldAnchorB: import("../math/Vec3")): void;
    getWorldAnchorA(result: import("../math/Vec3")): void;
    getWorldAnchorB(result: import("../math/Vec3")): void;
    applyForce(): void;
}
declare var Vec3_1: typeof import("../math/Vec3");
