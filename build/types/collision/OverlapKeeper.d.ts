export = OverlapKeeper;
/**
 * @class OverlapKeeper
 * @constructor
 */
declare function OverlapKeeper(): void;
declare class OverlapKeeper {
    current: any;
    previous: any;
    getKey(i: any, j: any): number;
    set(i: number, j: number): void;
    tick(): void;
    getDiff(additions: any[], removals: any[]): void;
}
