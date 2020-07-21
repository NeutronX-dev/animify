/*
    Animify by yaxeldragon
    ----------------
    Methods:
        - constructor(JSON);
        - addFrame(string);  |  addFrame([array]);
        - animate(int);
        - onStart(callback);
        - onFinish(callback);
    ----------------
*/


const animation = class animify {
    constructor(config) {
        config = config || null;
        this.config = {
            fps: 30,
            frames: []
        };
        this.callbacks = {
            start: null,
            done: null
        };
        if (config) {
            if (config['fps']) {
                if (isNaN(config['fps'])) {
                    throw new Error('FPS is not a number. \n       {\n           fps: int\n       }\n');
                } else {
                    this.config['fps'] = parseInt(config['fps'])
                }
            }
        }
        this.timeout = Math.floor(1000 / this.config.fps);
    }
    addFrame(frame_s) {
        if (typeof (frame_s) == 'object') {
            frame_s.forEach(frame => {
                if (typeof (frame) == 'string') {
                    this.config.frames.push(frame);
                } else {
                    throw new Error('\'.addFrame(array);\' - Detected \'' + typeof (frame) + '\' In array. Should recieve a String.')
                }
            });
        } else if (typeof (frame_s) == 'string') {
            this.config.frames.push(frame_s);
        } else {
            throw new Error('\'.addFrame(string)\', \'.addFrame(array)\' - Parameter should be an array or String. Recieved ' + `'${typeof(frame_s)}'\n`);
        }
    }
    animate(from_frame) {
        return new Promise((resolve, reject) => {
            if (typeof (from_frame) == 'number') {
                let currentFrame = from_frame;
                if (this.callbacks['start'] && typeof (this.callbacks['start']) == 'function') {
                    this.callbacks['start']();
                }
                let intervl = setInterval(() => {
                    if (this.config.frames[currentFrame]) {
                        console.clear();
                        console.log(this.config.frames[currentFrame]);
                        currentFrame++;
                    } else {
                        clearInterval(intervl);
                        if (this.callbacks['done'] && typeof (this.callbacks['done']) == 'function') {
                            this.callbacks['done']();
                        }
                        console.clear();
                        resolve({
                            timeout: `${this.timeout}`,
                            frames: {
                                printed: currentFrame,
                                total: this.config.frames.length
                            }
                        });
                    }
                }, this.timeout);
            } else {
                throw new Error('\'.anime(from_frame);\' - \'from_frame\' is not a Number');
            }
        });
    }
    onStart(callback) {
        if (typeof (callback) == 'function') {
            this.callbacks['start'] = callback;
        } else {
            throw new Error('\'onStart(callback)\' - callcack is not a function')
        }
    }
    onFinish(callback) {
        if (typeof (callback) == 'function') {
            this.callbacks['done'] = callback;
        } else {
            throw new Error('\'onFinish(callback)\' - callcack is not a function')
        }
    }
}
module.exports = animation;