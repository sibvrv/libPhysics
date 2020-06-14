export = Pool;
/**
 * For pooling objects that can be reused.
 * @class Pool
 * @constructor
 */
declare function Pool(): void;
declare class Pool {
    /**
     * The pooled objects
     * @property {Array} objects
     */
    objects: any[];
    /**
     * Constructor of the objects
     * @property {mixed} type
     */
    type: ObjectConstructor;
    release(...args: any[]): Pool;
    get(): any;
    constructObject(): any;
    resize(size: number): Pool;
}
