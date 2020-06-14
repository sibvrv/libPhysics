export = Material;
/**
 * Defines a physics material.
 * @class Material
 * @constructor
 * @param {object} [options]
 * @author schteppe
 */
declare function Material(options?: any): void;
declare class Material {
    /**
     * Defines a physics material.
     * @class Material
     * @constructor
     * @param {object} [options]
     * @author schteppe
     */
    constructor(options?: any);
    /**
     * @property name
     * @type {String}
     */
    name: String;
    /**
     * material id.
     * @property id
     * @type {number}
     */
    id: number;
    /**
     * Friction for this material. If non-negative, it will be used instead of the friction given by ContactMaterials. If there's no matching ContactMaterial, the value from .defaultContactMaterial in the World will be used.
     * @property {number} friction
     */
    friction: any;
    /**
     * Restitution for this material. If non-negative, it will be used instead of the restitution given by ContactMaterials. If there's no matching ContactMaterial, the value from .defaultContactMaterial in the World will be used.
     * @property {number} restitution
     */
    restitution: any;
}
declare namespace Material {
    export const idCounter: number;
}
