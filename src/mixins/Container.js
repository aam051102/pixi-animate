/**
 * Mixins for the PIXI.Container class.
 * @class Container
 * @memberof PIXI
 */
const p = PIXI.Container.prototype;

/**
 * Boolean value defining whether or not element is a wrapper.
 * If an element is a wrapper, there will be made an attempt to apply filters to the first child, with a fallback to itself.
 * @property {Object} isWrapper
 */
if(!p.hasOwnProperty("isWrapper")) {
    Object.defineProperty(p, "isWrapper", {
        value: false,
        writable: true,
    });
}

/**
 * Shortcut for `addChild`.
 * @method PIXI.Container#ac
 * @param {*} [child*] N-number of children
 * @return {PIXI.DisplayObject} Instance of first child added
 */
p.ac = p.addChild;

/**
 * Extend a container
 * @method PIXI.Container.extend
 * @static
 * @param {PIXI.Container} child The child function
 * @return {PIXI.Container} THe child
 */
/**
 * Extend a container (shortcut for `extend`)
 * @method PIXI.Container.e
 * @static
 * @param {PIXI.Container} child The child function
 * @return {PIXI.Container} THe child
 */
PIXI.Container.extend = PIXI.Container.e = function(child) {
    child.prototype = Object.create(p);
    child.prototype.__parent = p;
    child.prototype.constructor = child;
    return child;
};