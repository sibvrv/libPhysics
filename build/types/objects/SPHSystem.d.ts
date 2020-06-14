export = SPHSystem;
/**
 * Smoothed-particle hydrodynamics system
 * @class SPHSystem
 * @constructor
 */
declare function SPHSystem(): void;
declare class SPHSystem {
    particles: any[];
    /**
     * Density of the system (kg/m3).
     * @property {number} density
     */
    density: number;
    /**
     * Distance below which two particles are considered to be neighbors.
     * It should be adjusted so there are about 15-20 neighbor particles within this radius.
     * @property {number} smoothingRadius
     */
    smoothingRadius: number;
    speedOfSound: number;
    /**
     * Viscosity of the system.
     * @property {number} viscosity
     */
    viscosity: number;
    eps: number;
    pressures: any[];
    densities: any[];
    neighbors: any[];
    add(particle: Body): void;
    remove(particle: Body): void;
    getNeighbors(particle: any, neighbors: any): void;
    update(): void;
    w(r: any): number;
    gradw(rVec: any, resultVec: any): void;
    nablaw(r: any): number;
}
