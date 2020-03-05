'use strict';

/**
 * Compare images
 * @class ImageDiff
 */
const ImageDiff = function(width, height) {
    this.width = width;
    this.height = height;

    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    this.context = canvas.getContext('2d', {
        antialias: false,
        preserveDrawingBuffer: true
    });
};

const p = ImageDiff.prototype;

/**
 * Compare two base64 images
 * @method compare
 * @param {string} src1
 * @param {string} src2
 * @return {Boolean}
 */
p.compare = async function(src1, src2, tolerance) {
    const a = await this.getImageData(src1);
    const b = await this.getImageData(src2);
    let len = a.length;
    let diff = a.filter((val, i) => {
        return Math.abs(val - b[i]) / 255 > tolerance;
    });
    if (diff.length / len > tolerance) {
        return false;
    }
    return true;
};

/**
 * Get an array of pixels
 * @method getImageData
 * @param {string} src
 * @return {Uint8ClampedArray}
 */
p.getImageData = async function(src) {
    const image = new Image();
    // wait for the image to actually load, so we don't have a big blank image
    const prom = new Promise(resolve => image.onload = resolve);
    image.src = src;
    await prom;
    this.context.clearRect(0, 0, this.width, this.height);
    this.context.drawImage(image, 0, 0, this.width, this.height);
    const imageData = this.context.getImageData(0, 0, this.width, this.height);
    return imageData.data;
};

module.exports = ImageDiff;