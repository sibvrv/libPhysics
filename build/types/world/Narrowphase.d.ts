export = Narrowphase;
/**
 * Helper class for the World. Generates ContactEquations.
 * @class Narrowphase
 * @constructor
 * @todo Sphere-ConvexPolyhedron contacts
 * @todo Contact reduction
 * @todo  should move methods to prototype
 */
declare function Narrowphase(world: any): void;
declare class Narrowphase {
    /**
     * Helper class for the World. Generates ContactEquations.
     * @class Narrowphase
     * @constructor
     * @todo Sphere-ConvexPolyhedron contacts
     * @todo Contact reduction
     * @todo  should move methods to prototype
     */
    constructor(world: any);
    /**
     * Internal storage of pooled contact points.
     * @property {Array} contactPointPool
     */
    contactPointPool: any[];
    frictionEquationPool: any[];
    result: any[];
    frictionResult: any[];
    /**
     * Pooled vectors.
     * @property {Vec3Pool} v3pool
     */
    v3pool: import("../utils/Vec3Pool");
    world: any;
    currentContactMaterial: any;
    /**
     * @property {Boolean} enableFrictionReduction
     */
    enableFrictionReduction: boolean;
    createContactEquation(bi: Body, bj: Body, si: import("../shapes/Shape"), sj: import("../shapes/Shape"), overrideShapeA: import("../shapes/Shape"), overrideShapeB: import("../shapes/Shape")): import("../equations/ContactEquation");
    createFrictionEquationsFromContact(contactEquation: any, outArray: any): boolean;
    createFrictionFromAverage(numContacts: any): void;
    getContacts(p1: any[], p2: any[], world: any, result: any[], oldcontacts: any[], frictionResult: any, frictionPool: any): void;
    boxBox(si: any, sj: any, xi: any, xj: any, qi: any, qj: any, bi: any, bj: any, rsi: any, rsj: any, justTest: any): any;
    boxConvex(si: any, sj: any, xi: any, xj: any, qi: any, qj: any, bi: any, bj: any, rsi: any, rsj: any, justTest: any): any;
    boxParticle(si: any, sj: any, xi: any, xj: any, qi: any, qj: any, bi: any, bj: any, rsi: any, rsj: any, justTest: any): boolean;
    sphereSphere(si: import("../shapes/Shape"), sj: import("../shapes/Shape"), xi: import("../math/Vec3"), xj: import("../math/Vec3"), qi: import("../math/Quaternion"), qj: import("../math/Quaternion"), bi: Body, bj: Body, rsi: any, rsj: any, justTest: any): boolean;
    planeTrimesh(planeShape: any, trimeshShape: any, planePos: any, trimeshPos: any, planeQuat: any, trimeshQuat: any, planeBody: any, trimeshBody: any, rsi: any, rsj: any, justTest: any): boolean;
    sphereTrimesh(sphereShape: any, trimeshShape: any, spherePos: any, trimeshPos: any, sphereQuat: any, trimeshQuat: any, sphereBody: any, trimeshBody: any, rsi: any, rsj: any, justTest: any): boolean;
    spherePlane(si: import("../shapes/Shape"), sj: import("../shapes/Shape"), xi: import("../math/Vec3"), xj: import("../math/Vec3"), qi: import("../math/Quaternion"), qj: import("../math/Quaternion"), bi: Body, bj: Body, rsi: any, rsj: any, justTest: any): boolean;
    sphereBox(si: import("../shapes/Shape"), sj: import("../shapes/Shape"), xi: import("../math/Vec3"), xj: import("../math/Vec3"), qi: import("../math/Quaternion"), qj: import("../math/Quaternion"), bi: Body, bj: Body, rsi: any, rsj: any, justTest: any): boolean;
    sphereConvex(si: import("../shapes/Shape"), sj: import("../shapes/Shape"), xi: import("../math/Vec3"), xj: import("../math/Vec3"), qi: import("../math/Quaternion"), qj: import("../math/Quaternion"), bi: Body, bj: Body, rsi: any, rsj: any, justTest: any): boolean;
    planeBox(si: import("../shapes/Shape"), sj: import("../shapes/Shape"), xi: import("../math/Vec3"), xj: import("../math/Vec3"), qi: import("../math/Quaternion"), qj: import("../math/Quaternion"), bi: Body, bj: Body, rsi: any, rsj: any, justTest: any): boolean;
    planeConvex(planeShape: any, convexShape: any, planePosition: any, convexPosition: any, planeQuat: any, convexQuat: any, planeBody: any, convexBody: any, si: import("../shapes/Shape"), sj: import("../shapes/Shape"), justTest: any): boolean;
    convexConvex(si: import("../shapes/Shape"), sj: import("../shapes/Shape"), xi: import("../math/Vec3"), xj: import("../math/Vec3"), qi: import("../math/Quaternion"), qj: import("../math/Quaternion"), bi: Body, bj: Body, rsi: any, rsj: any, justTest: any, faceListA: any, faceListB: any): boolean;
    planeParticle(sj: import("../shapes/Shape"), si: import("../shapes/Shape"), xj: import("../math/Vec3"), xi: import("../math/Vec3"), qj: import("../math/Quaternion"), qi: import("../math/Quaternion"), bj: Body, bi: Body, rsi: any, rsj: any, justTest: any): boolean;
    sphereParticle(sj: import("../shapes/Shape"), si: import("../shapes/Shape"), xj: import("../math/Vec3"), xi: import("../math/Vec3"), qj: import("../math/Quaternion"), qi: import("../math/Quaternion"), bj: Body, bi: Body, rsi: any, rsj: any, justTest: any): boolean;
    convexParticle(sj: import("../shapes/Shape"), si: import("../shapes/Shape"), xj: import("../math/Vec3"), xi: import("../math/Vec3"), qj: import("../math/Quaternion"), qi: import("../math/Quaternion"), bj: Body, bi: Body, rsi: any, rsj: any, justTest: any): boolean;
    boxHeightfield(si: any, sj: any, xi: any, xj: any, qi: any, qj: any, bi: any, bj: any, rsi: any, rsj: any, justTest: any): boolean;
    convexHeightfield(convexShape: any, hfShape: any, convexPos: any, hfPos: any, convexQuat: any, hfQuat: any, convexBody: any, hfBody: any, rsi: any, rsj: any, justTest: any): boolean;
    sphereHeightfield(sphereShape: any, hfShape: any, spherePos: any, hfPos: any, sphereQuat: any, hfQuat: any, sphereBody: any, hfBody: any, rsi: any, rsj: any, justTest: any): boolean;
}
