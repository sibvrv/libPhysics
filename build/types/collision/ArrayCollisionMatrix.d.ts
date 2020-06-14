export = ArrayCollisionMatrix;
/**
 * Collision "matrix". It's actually a triangular-shaped array of whether two bodies are touching this step, for reference next step
 * @class ArrayCollisionMatrix
 * @constructor
 */
declare function ArrayCollisionMatrix(): void;
declare class ArrayCollisionMatrix {
    /**
     * The matrix storage
     * @property matrix
     * @type {Array}
     */
    matrix: Array;
    get(i: number, j: number): number;
    set(i: number, j: number, value: number): void;
    reset(): void;
    setNumObjects(n: number): void;
}
