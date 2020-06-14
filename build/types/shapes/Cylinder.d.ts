export = Cylinder;
/**
 * @class Cylinder
 * @constructor
 * @extends ConvexPolyhedron
 * @author schteppe / https://github.com/schteppe
 * @param {Number} radiusTop
 * @param {Number} radiusBottom
 * @param {Number} height
 * @param {Number} numSegments The number of segments to build the cylinder out of
 */
declare function Cylinder(radiusTop: number, radiusBottom: number, height: number, numSegments: number): void;
declare class Cylinder {
    /**
     * @class Cylinder
     * @constructor
     * @extends ConvexPolyhedron
     * @author schteppe / https://github.com/schteppe
     * @param {Number} radiusTop
     * @param {Number} radiusBottom
     * @param {Number} height
     * @param {Number} numSegments The number of segments to build the cylinder out of
     */
    constructor(radiusTop: number, radiusBottom: number, height: number, numSegments: number);
}
