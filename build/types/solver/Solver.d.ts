export = Solver;
/**
 * Constraint equation solver base class.
 * @class Solver
 * @constructor
 * @author schteppe / https://github.com/schteppe
 */
declare function Solver(): void;
declare class Solver {
    /**
     * All equations to be solved
     * @property {Array} equations
     */
    equations: any[];
    solve(dt: number, world: any): number;
    addEquation(eq: any): void;
    removeEquation(eq: any): void;
    removeAllEquations(): void;
}
