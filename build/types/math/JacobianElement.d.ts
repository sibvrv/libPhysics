export = JacobianElement;
/**
 * An element containing 6 entries, 3 spatial and 3 rotational degrees of freedom.
 * @class JacobianElement
 * @constructor
 */
declare function JacobianElement(): void;
declare class JacobianElement {
    /**
     * @property {Vec3} spatial
     */
    spatial: any;
    /**
     * @property {Vec3} rotational
     */
    rotational: any;
    multiplyElement(element: JacobianElement): number;
    multiplyVectors(spatial: import("./Vec3"), rotational: import("./Vec3")): number;
}
