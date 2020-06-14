export = TupleDictionary;
/**
 * @class TupleDictionary
 * @constructor
 */
declare function TupleDictionary(): void;
declare class TupleDictionary {
    /**
     * The data storage
     * @property data
     * @type {Object}
     */
    data: Object;
    get(i: number, j: number): number;
    set(i: number, j: number, value: number): void;
    reset(): void;
}
