export = Heightfield;
/**
 * Heightfield shape class. Height data is given as an array. These data points are spread out evenly with a given distance.
 * @class Heightfield
 * @extends Shape
 * @constructor
 * @param {Array} data An array of Y values that will be used to construct the terrain.
 * @param {object} options
 * @param {Number} [options.minValue] Minimum value of the data points in the data array. Will be computed automatically if not given.
 * @param {Number} [options.maxValue] Maximum value.
 * @param {Number} [options.elementSize=0.1] World spacing between the data points in X direction.
 * @todo Should be possible to use along all axes, not just y
 * @todo should be possible to scale along all axes
 *
 * @example
 *     // Generate some height data (y-values).
 *     var data = [];
 *     for(var i = 0; i < 1000; i++){
 *         var y = 0.5 * Math.cos(0.2 * i);
 *         data.push(y);
 *     }
 *
 *     // Create the heightfield shape
 *     var heightfieldShape = new Heightfield(data, {
 *         elementSize: 1 // Distance between the data points in X and Y directions
 *     });
 *     var heightfieldBody = new Body();
 *     heightfieldBody.addShape(heightfieldShape);
 *     world.addBody(heightfieldBody);
 */
declare function Heightfield(data: any[], options: {
    minValue?: number;
    maxValue?: number;
    elementSize?: number;
}): void;
declare class Heightfield {
    /**
     * Heightfield shape class. Height data is given as an array. These data points are spread out evenly with a given distance.
     * @class Heightfield
     * @extends Shape
     * @constructor
     * @param {Array} data An array of Y values that will be used to construct the terrain.
     * @param {object} options
     * @param {Number} [options.minValue] Minimum value of the data points in the data array. Will be computed automatically if not given.
     * @param {Number} [options.maxValue] Maximum value.
     * @param {Number} [options.elementSize=0.1] World spacing between the data points in X direction.
     * @todo Should be possible to use along all axes, not just y
     * @todo should be possible to scale along all axes
     *
     * @example
     *     // Generate some height data (y-values).
     *     var data = [];
     *     for(var i = 0; i < 1000; i++){
     *         var y = 0.5 * Math.cos(0.2 * i);
     *         data.push(y);
     *     }
     *
     *     // Create the heightfield shape
     *     var heightfieldShape = new Heightfield(data, {
     *         elementSize: 1 // Distance between the data points in X and Y directions
     *     });
     *     var heightfieldBody = new Body();
     *     heightfieldBody.addShape(heightfieldShape);
     *     world.addBody(heightfieldBody);
     */
    constructor(data: any[], options: {
        minValue?: number;
        maxValue?: number;
        elementSize?: number;
    });
    /**
     * An array of numbers, or height values, that are spread out along the x axis.
     * @property {array} data
     */
    data: any[];
    /**
     * Max value of the data
     * @property {number} maxValue
     */
    maxValue: number;
    /**
     * Max value of the data
     * @property {number} minValue
     */
    minValue: number;
    /**
     * The width of each element
     * @property {number} elementSize
     * @todo elementSizeX and Y
     */
    elementSize: number;
    cacheEnabled: boolean;
    pillarConvex: any;
    pillarOffset: any;
    _cachedPillars: {};
    update(): void;
    updateMinValue(): void;
    updateMaxValue(): void;
    setHeightValueAtIndex(xi: any, yi: any, value: number): void;
    getRectMinMax(iMinX: any, iMinY: any, iMaxX: any, iMaxY: any, result?: any[]): any[];
    getIndexOfPosition(x: number, y: number, result: any[], clamp: boolean): boolean;
    getTriangleAt(x: any, y: any, edgeClamp: any, a: any, b: any, c: any): boolean;
    getNormalAt(x: any, y: any, edgeClamp: any, result: any): void;
    getAabbAtIndex(xi: number, yi: number, result: any): void;
    getHeightAt(x: number, y: number, edgeClamp: boolean): number;
    getCacheConvexTrianglePillarKey(xi: any, yi: any, getUpperTriangle: any): string;
    getCachedConvexTrianglePillar(xi: any, yi: any, getUpperTriangle: any): any;
    setCachedConvexTrianglePillar(xi: any, yi: any, getUpperTriangle: any, convex: any, offset: any): void;
    clearCachedConvexTrianglePillar(xi: any, yi: any, getUpperTriangle: any): void;
    getTriangle(xi: number, yi: number, upper: boolean, a: import("../math/Vec3"), b: import("../math/Vec3"), c: import("../math/Vec3")): void;
    getConvexTrianglePillar(xi: any, yi: any, getUpperTriangle: boolean): void;
    calculateLocalInertia(mass: any, target: any): any;
    volume(): number;
    calculateWorldAABB(pos: any, quat: any, min: any, max: any): void;
    updateBoundingSphereRadius(): void;
    boundingSphereRadius: number;
    setHeightsFromImage(image: new (width?: number, height?: number) => HTMLImageElement, scale: import("../math/Vec3")): void;
}
