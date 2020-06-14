export = SplitSolver;
/**
 * Splits the equations into islands and solves them independently. Can improve performance.
 * @class SplitSolver
 * @constructor
 * @extends Solver
 * @param {Solver} subsolver
 */
declare function SplitSolver(subsolver: import("./Solver")): void;
declare class SplitSolver {
    /**
     * Splits the equations into islands and solves them independently. Can improve performance.
     * @class SplitSolver
     * @constructor
     * @extends Solver
     * @param {Solver} subsolver
     */
    constructor(subsolver: import("./Solver"));
    iterations: number;
    tolerance: number;
    subsolver: import("./Solver");
    nodes: any[];
    nodePool: any[];
    createNode(): {
        body: any;
        children: any[];
        eqs: any[];
        visited: boolean;
    };
    solve(dt: number, world: any): number;
}
