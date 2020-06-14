export = ContactMaterial;
/**
 * Defines what happens when two materials meet.
 * @class ContactMaterial
 * @constructor
 * @param {Material} m1
 * @param {Material} m2
 * @param {object} [options]
 * @param {Number} [options.friction=0.3]
 * @param {Number} [options.restitution=0.3]
 * @param {number} [options.contactEquationStiffness=1e7]
 * @param {number} [options.contactEquationRelaxation=3]
 * @param {number} [options.frictionEquationStiffness=1e7]
 * @param {Number} [options.frictionEquationRelaxation=3]
 */
declare function ContactMaterial(m1: any, m2: any, options?: {
    friction?: number;
    restitution?: number;
    contactEquationStiffness?: number;
    contactEquationRelaxation?: number;
    frictionEquationStiffness?: number;
    frictionEquationRelaxation?: number;
}): void;
declare class ContactMaterial {
    /**
     * Defines what happens when two materials meet.
     * @class ContactMaterial
     * @constructor
     * @param {Material} m1
     * @param {Material} m2
     * @param {object} [options]
     * @param {Number} [options.friction=0.3]
     * @param {Number} [options.restitution=0.3]
     * @param {number} [options.contactEquationStiffness=1e7]
     * @param {number} [options.contactEquationRelaxation=3]
     * @param {number} [options.frictionEquationStiffness=1e7]
     * @param {Number} [options.frictionEquationRelaxation=3]
     */
    constructor(m1: any, m2: any, options?: {
        friction?: number;
        restitution?: number;
        contactEquationStiffness?: number;
        contactEquationRelaxation?: number;
        frictionEquationStiffness?: number;
        frictionEquationRelaxation?: number;
    });
    /**
     * Identifier of this material
     * @property {Number} id
     */
    id: number;
    /**
     * Participating materials
     * @property {Array} materials
     * @todo  Should be .materialA and .materialB instead
     */
    materials: any[];
    /**
     * Friction coefficient
     * @property {Number} friction
     */
    friction: number;
    /**
     * Restitution coefficient
     * @property {Number} restitution
     */
    restitution: number;
    /**
     * Stiffness of the produced contact equations
     * @property {Number} contactEquationStiffness
     */
    contactEquationStiffness: number;
    /**
     * Relaxation time of the produced contact equations
     * @property {Number} contactEquationRelaxation
     */
    contactEquationRelaxation: number;
    /**
     * Stiffness of the produced friction equations
     * @property {Number} frictionEquationStiffness
     */
    frictionEquationStiffness: number;
    /**
     * Relaxation time of the produced friction equations
     * @property {Number} frictionEquationRelaxation
     */
    frictionEquationRelaxation: number;
}
declare namespace ContactMaterial {
    export const idCounter: number;
}
