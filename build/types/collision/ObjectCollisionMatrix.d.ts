export = ObjectCollisionMatrix;
/**
 * Records what objects are colliding with each other
 * @class ObjectCollisionMatrix
 * @constructor
 */
declare function ObjectCollisionMatrix(): void;
declare class ObjectCollisionMatrix {
    /**
     * The matrix storage
     * @property matrix
     * @type {Object}
     */
    matrix: Object;
    get(i: number, j: number): number;
    set(i: number, j: number, value: number): void;
    reset(): void;
    setNumObjects(n: number): void;
}
