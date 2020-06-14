export = EventTarget;
/**
 * Base class for objects that dispatches events.
 * @class EventTarget
 * @constructor
 */
declare function EventTarget(): void;
declare class EventTarget {
    addEventListener(type: any, listener: any): EventTarget;
    _listeners: {};
    hasEventListener(type: any, listener: any): boolean;
    hasAnyEventListener(type: any): boolean;
    removeEventListener(type: any, listener: any): EventTarget;
    dispatchEvent(event: any): EventTarget;
}
