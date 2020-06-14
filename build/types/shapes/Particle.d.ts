export = Particle;
/**
 * Particle shape.
 * @class Particle
 * @constructor
 * @author schteppe
 * @extends Shape
 */
declare function Particle(): void;
declare class Particle {
    constructor: typeof Particle;
    calculateLocalInertia(mass: number, target: import("../math/Vec3")): import("../math/Vec3");
    volume(): number;
    updateBoundingSphereRadius(): void;
    boundingSphereRadius: number;
    calculateWorldAABB(pos: any, quat: any, min: any, max: any): void;
}
