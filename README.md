# PIXI Animate
This is a fork of the original [pixi-animate](https://github.com/pixijs/pixi-animate) repository. It has been upgraded to function on Pixi.js 5.1.3, and has the follow *additional* capabilities:

- Filters/effects (with full argument support)

This fork is being developed according to the requirements of [Act Omega](https://mspfa.com/?s=16414&p=1), a Homestuck fancomic, which takes use of animations constructed in Adobe Animate CC.

---

A plugin for Pixi.js which provides a runtime for content export using PixiAnimate Extension.

[![Build Status](https://travis-ci.org/pixijs/pixi-animate.svg?branch=master)](https://travis-ci.org/pixijs/pixi-animate) [![Dependency Status](https://david-dm.org/pixijs/pixi-animate.svg)](https://david-dm.org/pixijs/pixi-animate) [![npm version](https://badge.fury.io/js/pixi-animate.svg)](https://badge.fury.io/js/pixi-animate)

## Running Content

### Installing Library

To run content exported with PixiAnimate, you must load the JavaScript library within your project. You can install using [Bower](http://bower.io) or [NPM](http://www.npmjs.org):

#### NPM
```
npm install pixi-animate
```

### Dependencies

* [Pixi.js v5](http://pixijs.com) is required

## Documentation

https://pixijs.io/pixi-animate/

## Typescript
You can use require to get the namespace for PixiAnimate:
```typescript
// Note: Must also include the pixi.js typings globally!
import animate = require('pixi-animate');

let myMC:animate.MovieClip = new animate.MovieClip();
```

Or use a triple slash reference for using the PIXI.animate namespace:
```typescript
// Note: Must also include the pixi.js typings globally!
/// <reference path="node_modules/pixi-animate/ambient.d.ts" />
require('pixi-animate');

let myMC:PIXI.animate.MovieClip = new PIXI.animate.MovieClip();
```

Or simply import pixi-animate (after importing pixi.js):
```typescript
// Note: Must also include the pixi.js typings globally!
import('pixi-animate');
```

## License

Copyright (c) 2016 [Jibo, Inc.](http://github.com/jiborobot)

Released under the MIT License.
