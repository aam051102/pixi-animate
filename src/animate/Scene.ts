import {load, StageRef} from './load';
import {sound} from './sound';
import {MovieClip} from './MovieClip';

/**
 * Extends the PIXI.Application class to provide easy loading.
 * ```
 * const scene = new PIXI.animate.Scene();
 * scene.load(lib.StageName);
 * ```
 * @class Scene
 * @memberof PIXI.animate
 * @param {Number} [width=800] Stage width
 * @param {Number} [height=600] Stage height
 * @param {Object} [renderOptions] See PIXI.Application for more info.
 * @param {Boolean} [noWebGL=false] Disable WebGL
 */
export class Scene extends PIXI.Application {
    /**
     * Reference to the global sound object
     * @readOnly
     */
    public readonly sound = sound;
    
    /**
     * The stage object created.
     */
    public instance:MovieClip = null;

    /**
     * Load a stage scene and add it to the stage.
     * @method PIXI.animate.Scene#load
     * @param StageRef Reference to the stage class.
     * @param complete Callback when finished loading.
     * @param basePath Optional base directory to prepend to assets.
     * @return instance of PIXI resource loader
     */
    public load(StageRef:StageRef, complete?:(instance?:MovieClip)=>void, basePath?:string) {
        return load(StageRef, this.stage, (instance) => {
            this.instance = instance as MovieClip;
            if (complete) {
                complete(this.instance);
            }
        }, basePath);
    }

    /**
     * Destroy and don't use after calling.
     * @param removeView Automatically remove canvas from DOM.
     * @param stageOptions Options parameter. A boolean will act as if all options
     *  have been set to that value
     */
    destroy(removeView?: boolean, stageOptions?: PIXI.StageOptions | boolean): void {
        if (this.instance) {
            this.instance.destroy(true);
            this.instance = null;
        }
        super.destroy(removeView, stageOptions);
    }
}