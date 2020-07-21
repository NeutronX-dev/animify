# Animify
Animate your console with Strings!

# Get Started
Section | Quick Descripton
------------ | -------------
[Install](#install) | How to Install.
[Import](#import) | How to import into a Project
[Create Object](#create-object) | How to create an animation Object.
[Add Frames](#add-frames) | How to add Frames.
[Animate](#animate) | How to animate the Frames.
[onStart Callback](#onstart-callback) | Add a callback when animation Starts.
[onFinish Callback](#onstart-callback) | Add a callback when animation Ends.

# Install
To install `Animify` in your project you need to input the following in your **console**.
```
npm install animify
```
or
```
npm i animify
```

# Import
To import `Animify` in your project you need to add the following code to your **project**
```js
const animify = require('animify');
```

# Create Object
To start using `Animify` you need to create an animation Object. Which is declared like :
```js
const myAnimationObject = new animify();
```
There is a configuration you can add, even tho It is **OPTIONAL**. and you can add like :
```js
const myAnimationObject = new animify({
    fps: 30 // default: 30
});
```

# Add Frames
To add frames into your animation object you need to use the `addFrame` method. which can take a `string` **or** an `array` with multiple strings.
## Single String
```js
myAnimationObject.addFrame('[ ----- ]');
```
## Array
```js
myAnimationObject.addFrame([
    '[ ----- ]',
    '[ --|-- ]',
    '[ --/-- ]'
]);
```

# Animate
To bring the life to your console you need to use the `animate` method. and takes the frame to start from (usually 0).
## Normal
```js
myAnimationObject.animate(0);
```
# Async
```js
myAnimationObject.animate(0).then((res) => {
    console.log(`Printed ${res.frames.printed} with ${res.timeout} ms. delay between Images.`);
});
```

# onStart Callback
To add a callback when the animation is started you need to use the `onStart` method. Which takes a function.
```js
myAnimationObject.onStart(() => {
    // Code Here
});
```

# onFinish Callback
To add a callback when the animation is started you need to use the `onFinish` method. Which takes a function.
```js
myAnimationObject.onFinish(() => {
    // Code Here
});
```

Licensed under the MIT [License](LICENSE)