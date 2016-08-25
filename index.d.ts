// Type definitions for PixiAnimate v0.8.0
declare module PIXI {

    export class DisplayObject {
        setRenderable(renderable:boolean):PIXI.DisplayObject;
        re(renderable:boolean):PIXI.DisplayObject;
        t(
            x:number,
            y:number,
            scaleX:number,
            scaleY:number,
            rotation:number,
            skewX:number,
            skewY:number,
            pivotX:number,
            pivotY:number):PIXI.DisplayObject;
        setMask(mask:PIXI.Sprite|PIXI.Graphics):PIXI.DisplayObject;
        ma(mask:PIXI.Sprite|PIXI.Graphics):PIXI.DisplayObject;
        setAlpha(alpha:number):PIXI.DisplayObject;
        a(alpha:number):PIXI.DisplayObject;
        setTint(color:string|number):PIXI.DisplayObject;
        i(color:string|number):PIXI.DisplayObject;
        setColorTransform(
            r:number,
            rA:number,
            g:number,
            gA:number,
            b:number,
            bA:number): PIXI.DisplayObject;
        c(
            r:number,
            rA:number,
            g:number,
            gA:number,
            b:number,
            bA:number): PIXI.DisplayObject;
        static extend(child:Function):Function;
        static e(child:Function):Function;
    }

    export class Container extends DisplayObject {
        ac(child:PIXI.DisplayObject):PIXI.DisplayObject;
        static extend(child:Function):Function;
        static e(child:Function):Function;
    }

    export class Sprite extends Container {
        ac(child:PIXI.DisplayObject):PIXI.DisplayObject;
        static extend(child:Function):Function;
        static e(child:Function):Function;
    }

    export class Text extends Container {
        setStyle(style:Object):PIXI.Text;
        ss(style:Object):PIXI.Text;
        setAlign(align:string|number):PIXI.Text;
        g(align:string|number):PIXI.Text;
        setShadow(color:number, angle:number, distance:number):PIXI.Text;
        sh(color:number, angle:number, distance:number):PIXI.Text;
    }

    export class Graphics extends Container {
        drawCommands(commands:Array<number|string>):PIXI.Graphics;
        d(commands:Array<number|string>):PIXI.Graphics;
        c():PIXI.Graphics;
        h():PIXI.Graphics;
        m(x:number, y:number):PIXI.Graphics;
        l(x:number, y:number):PIXI.Graphics;
        q(
            cpx:number, 
            cpy:number, 
            x:number, 
            y:number):PIXI.Graphics;
        b(
            cp1x:number,
            cp1y:number, 
            cp2x:number, 
            cp2y:number, 
            x:number, 
            y:number):PIXI.Graphics;
        f(color:number, alpha?:number):PIXI.Graphics;
        s(
            color:number,
            thickness?:number,
            alpha?:number):PIXI.Graphics;
        dr(
            x:number,
            y:number,
            width:number,
            height:number):PIXI.Graphics;
        rr(
            x:number,
            y:number,
            width:number,
            height:number,
            radius:number):PIXI.Graphics;
        dc(
            x:number,
            y:number,
            radius:number):PIXI.Graphics;
        ar(
            x:number,
            y:number,
            radius:number,
            startAngle:number,
            endAngle:number):PIXI.Graphics;
        de(
            x:number,
            y:number,
            width:number,
            height:number):PIXI.Graphics;
    }

    export module animate {

        export module utils {
            export function hexToUint(hex:string|number):number;
            export function fillFrames(timeline:boolean[], startFrame:number, duration:number);
            export function deserializeKeyframes(keyframes:string):{[frame:string]:any};
            export function deserializeShapes(str:string):Array<string|number>;
            export function parseValue(prop:string, buffer:string): any;
            export function upload(renderer:PIXI.WebGLRenderer, displayObject:PIXI.DisplayObject, done:Function): void;
            export function addMovieClips(item:PIXI.DisplayObject): boolean;
        }
        
        export function load(
            StageRef:any,
            parent:PIXI.Container|Function, 
            complete?:Function|string, 
            assetBaseDir?:string
        );

        export type LabelMap = {[id:string]:number};
        export interface FrameLabel {
            label:string;
            position:number;
        }

        export class MovieClip extends PIXI.DisplayObject {
            public mode:number;
            public startPosition:number;
            public loop:boolean;
            public selfAdvance:boolean;
            public paused:boolean;
            public actionsEnabled:boolean;
            public autoReset:boolean;
            public labels:FrameLabel[];
            public labelsMap:LabelMap;
            public elapsedTime:number;
            public framerate:number;
            public totalFrames:number;
            public currentFrame:number;

            constructor(
                options:number|Object,
                duration?:number,
                loop?:boolean,
                framerate?:number,
                labels?:LabelMap
            );
            addKeyframes(
                instance:PIXI.DisplayObject,
                keyframes:Object):void;
            addTimedMask(
                instance:PIXI.DisplayObject,
                keyframes:Object):MovieClip;
            am(
                instance:PIXI.DisplayObject,
                keyframes:Object):MovieClip;
            addTween(
                instance:PIXI.DisplayObject,
                properties:Object,
                startFrame:number,
                duration?:number,
                ease?:Function):MovieClip;
            tw(
                instance:PIXI.DisplayObject,
                properties:Object,
                startFrame:number,
                duration?:number,
                ease?:Function): MovieClip;
            addTimedChild(
                instance:PIXI.DisplayObject,
                startFrame:number,
                duration?:number, 
                keyframes?:Object):MovieClip;
            at(
                instance:PIXI.DisplayObject,
                startFrame:number,
                duration?:number,
                keyframes?:Object):MovieClip;
            addAction(
                callback:Function,
                startFrame:number):MovieClip;
            aa(callback:Function, startFrame:number):MovieClip;
            play(): void;
            stop(): void;
            gotoAndPlay(positionOrLabel:string|number):void;
            gotoAndStop(positionOrLabel:string|number):void;
            advance(time:number):void;
            destroy():void;
            static extend(child:Function):Function;
            static e(child:Function):Function;
        }
        export class Tween {
            public target:PIXI.DisplayObject;
            public startProps:Object;
            public endProps:Object;
            public startFrame:number;
            public duration:number;
            public endFrame:number;
            public ease:Function;
            constructor(
                target:PIXI.DisplayObject,
                startProps:Object,
                endProps:Object,
                startFrame:number,
                duration:number,
                ease?:Function);
            setPosition(currentFrame:number): void;
            setToEnd(): void;
        }
        export class Timeline extends Array {
            public target:PIXI.DisplayObject;
            constructor(target:PIXI.DisplayObject);
            addTween(
                instance:PIXI.DisplayObject,
                properties:Object,
                startFrame:number,
                duration:number,
                ease?:Function):void;
            getPropFromShorthand(
                instance:PIXI.DisplayObject,
                prop:string):boolean|number|PIXI.Sprite|PIXI.Graphics;
        }
        export class ShapesCache {
            add(id:string, draw:Array<string|number>):void;
            fromCache(id:string):void;
            removeAll():void;
            remove(id:string):void;
        }

        export class Animator {
            static STOP_LABEL:string;
            static LOOP_LABEL:string;
            static play(instance:MovieClip, label:string, callback?:Function):AnimatorTimeline;
            static to(instance:MovieClip, end:string|number, callback?:Function):AnimatorTimeline;
            static fromTo(instance:MovieClip, start:string|number, end:string|number, loop?:boolean, callback?:Function):AnimatorTimeline;
            static stop(instance:MovieClip): void;
            static stopAll(): void;
        }

        export class AnimatorTimeline {
            progress:number;
            instance:MovieClip;
            start:number;
            end:number;
            loop:boolean;
            callback:Function;
            stop(): void;
            static create(instance:MovieClip, start:number, end:number, loop:boolean, callback?:Function): AnimatorTimeline;
        }
    }
}

declare module 'pixi-animate' {
    export = PIXI.animate;
}