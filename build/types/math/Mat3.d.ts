export = Mat3;
/**
 * A 3x3 matrix.
 * @class Mat3
 * @constructor
 * @param array elements Array of nine elements. Optional.
 * @author schteppe / http://github.com/schteppe
 */
declare function Mat3(elements: any): void;
declare class Mat3 {
    /**
     * A 3x3 matrix.
     * @class Mat3
     * @constructor
     * @param array elements Array of nine elements. Optional.
     * @author schteppe / http://github.com/schteppe
     */
    constructor(elements: any);
    elements: any;
    identity(): void;
    setZero(): void;
    setTrace(vec3: import("./Vec3")): void;
    getTrace(target: any): import("./Vec3");
    vmult(v: import("./Vec3"), target: import("./Vec3")): import("./Vec3");
    smult(s: number): void;
    mmult(m: Mat3, target: any): Mat3;
    scale(v: import("./Vec3"), target: any): Mat3;
    solve(b: import("./Vec3"), target: import("./Vec3")): import("./Vec3");
    e(row: number, column: number, value: number): number;
    copy(source: Mat3): Mat3;
    toString(): string;
    reverse(target: Mat3): Mat3;
    setRotationFromQuaternion(q: any): Mat3;
    transpose(target: Mat3): Mat3;
}
