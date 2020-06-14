import {Body} from '../objects/Body';
import {Vec3} from '../math/Vec3';
import {Quaternion} from '../math/Quaternion';
import {Shape} from '../shapes/Shape';
import {Plane} from '../shapes/Plane';
import {World} from '../world/World';
import {AABB} from './AABB';

/**
 * Check if the bounding spheres of two bodies are intersecting.
 * @method doBoundingSphereBroadphase
 * @param {Body} bodyA
 * @param {Body} bodyB
 * @param {Array} pairs1 bodyA is appended to this array if intersection
 * @param {Array} pairs2 bodyB is appended to this array if intersection
 */
// Temp objects
const Broadphase_collisionPairs_r = new Vec3();

const Broadphase_collisionPairs_normal = new Vec3();
const Broadphase_collisionPairs_quat = new Quaternion();
const Broadphase_collisionPairs_relpos = new Vec3();

/**
 * Removes duplicate pairs from the pair arrays.
 * @method makePairsUnique
 * @param {Array} pairs1
 * @param {Array} pairs2
 */
const Broadphase_makePairsUnique_temp = {keys: []};

const Broadphase_makePairsUnique_p1: any[] = [];
const Broadphase_makePairsUnique_p2: any[] = [];

/**
 * Check if the bounding spheres of two bodies overlap.
 * @method boundingSphereCheck
 * @param {Body} bodyA
 * @param {Body} bodyB
 * @return {boolean}
 */
const bsc_dist = new Vec3();

/**
 * Base class for broadphase implementations
 * @class Broadphase
 * @constructor
 * @author schteppe
 */
export class Broadphase {
  /**
   * The world to search for collisions in.
   * @property world
   * @type {World}
   */
  world: World = null;

  /**
   * If set to true, the broadphase uses bounding boxes for intersection test, else it uses bounding spheres.
   * @property useBoundingBoxes
   * @type {Boolean}
   */
  useBoundingBoxes = false;

  /**
   * Set to true if the objects in the world moved.
   * @property {Boolean} dirty
   */
  dirty = true;

  static boundingSphereCheck({position, shape}: Body, {position, shape}: Body) {
    const dist = bsc_dist;
    position.vsub(position, dist);
    return (shape.boundingSphereRadius + shape.boundingSphereRadius) ** 2 > dist.norm2();
  }

  /**
   * Get the collision pairs from the world
   * @method collisionPairs
   * @param {World} world The world to search in
   * @param {Array} p1 Empty array to be filled with body objects
   * @param {Array} p2 Empty array to be filled with body objects
   */
  collisionPairs(world: World, p1: any, p2: any) {
    throw new Error('collisionPairs not implemented for this BroadPhase class!');
  }

  /**
   * Check if a body pair needs to be intersection tested at all.
   * @method needBroadphaseCollision
   * @param {Body} bodyA
   * @param {Body} bodyB
   * @return {bool}
   */
  needBroadphaseCollision(
    {collisionFilterGroup, collisionFilterMask, type, sleepState}: Body,
    {collisionFilterMask, collisionFilterGroup, type, sleepState}: Body,
  ) {

    // Check collision filter masks
    if ((collisionFilterGroup & collisionFilterMask) === 0 || (collisionFilterGroup & collisionFilterMask) === 0) {
      return false;
    }

    // Check types
    if (
      ((type & Body.STATIC) !== 0 || sleepState === Body.SLEEPING) &&
      ((type & Body.STATIC) !== 0 || sleepState === Body.SLEEPING)
    ) {
      // Both bodies are static or sleeping. Skip.
      return false;
    }

    return true;
  }

  /**
   * Check if the bounding volumes of two bodies intersect.
   * @method intersectionTest
   * @param {Body} bodyA
   * @param {Body} bodyB
   * @param {array} pairs1
   * @param {array} pairs2
   */
  intersectionTest(bodyA: Body, bodyB: Body, pairs1: any, pairs2: any) {
    if (this.useBoundingBoxes) {
      this.doBoundingBoxBroadphase(bodyA, bodyB, pairs1, pairs2);
    } else {
      this.doBoundingSphereBroadphase(bodyA, bodyB, pairs1, pairs2);
    }
  }

  doBoundingSphereBroadphase(bodyA: Body, bodyB: Body, pairs1: any, pairs2: any) {
    const r = Broadphase_collisionPairs_r;
    bodyB.position.vsub(bodyA.position, r);
    const boundingRadiusSum2 = (bodyA.boundingRadius + bodyB.boundingRadius) ** 2;
    const norm2 = r.norm2();
    if (norm2 < boundingRadiusSum2) {
      pairs1.push(bodyA);
      pairs2.push(bodyB);
    }
  }

  /**
   * Check if the bounding boxes of two bodies are intersecting.
   * @method doBoundingBoxBroadphase
   * @param {Body} bodyA
   * @param {Body} bodyB
   * @param {Array} pairs1
   * @param {Array} pairs2
   */
  doBoundingBoxBroadphase(bodyA: Body, bodyB: Body, pairs1: any, pairs2: any) {
    if (bodyA.aabbNeedsUpdate) {
      bodyA.computeAABB();
    }
    if (bodyB.aabbNeedsUpdate) {
      bodyB.computeAABB();
    }

    // Check AABB / AABB
    if (bodyA.aabb.overlaps(bodyB.aabb)) {
      pairs1.push(bodyA);
      pairs2.push(bodyB);
    }
  }

  makePairsUnique(pairs1: any, pairs2: any) {
    const t = Broadphase_makePairsUnique_temp;
    const p1 = Broadphase_makePairsUnique_p1;
    const p2 = Broadphase_makePairsUnique_p2;
    const N = pairs1.length;

    for (let i = 0; i !== N; i++) {
      p1[i] = pairs1[i];
      p2[i] = pairs2[i];
    }

    pairs1.length = 0;
    pairs2.length = 0;

    for (let i = 0; i !== N; i++) {
      const id1 = p1[i].id;
      const id2 = p2[i].id;
      const key = id1 < id2 ? `${id1},${id2}` : `${id2},${id1}`;
      t[key] = i;
      t.keys.push(key);
    }

    for (let i = 0; i !== t.keys.length; i++) {
      const key = t.keys.pop();
      const pairIndex = t[key];
      pairs1.push(p1[pairIndex]);
      pairs2.push(p2[pairIndex]);
      delete t[key];
    }
  }

  /**
   * To be implemented by subcasses
   * @method setWorld
   * @param {World} world
   */
  setWorld(world: World) {
  }

  /**
   * Returns all the bodies within the AABB.
   * @method aabbQuery
   * @param  {World} world
   * @param  {AABB} aabb
   * @param  {array} result An array to store resulting bodies in.
   * @return {array}
   */
  aabbQuery(world: World, aabb: AABB, result: any) {
    console.warn('.aabbQuery is not implemented in this Broadphase subclass.');
    return [];
  }
}
