export = Plane;
/**
 * A plane, facing in the Z direction. The plane has its surface at z=0 and everything below z=0 is assumed to be solid plane. To make the plane face in some other direction than z, you must put it inside a Body and rotate that body. See the demos.
 * @class Plane
 * @constructor
 * @extends Shape
 * @author schteppe
 */
declare function Plane(): void;
declare class Plane {
    worldNormal: any;
    worldNormalNeedsUpdate: boolean;
    boundingSphereRadius: number;
    constructor: typeof Plane;
    computeWorldNormal(quat: any): void;
    calculateLocalInertia(mass: any, target: any): any;
    volume(): number;
    calculateWorldAABB(pos: any, quat: any, min: any, max: any): void;
    updateBoundingSphereRadius(): void;
}
