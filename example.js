const animify = require('./index');
const animation = new animify({
    fps: 12
});
let myVariable;

animation.addFrame([
    '[ | ] Getting Data',
    '[ | ] Getting Data',
    '[ | ] Getting Data',
    '[ | ] Getting Data',
    '[ | ] Getting Data',
    '[ | ] Getting Data',
    '[ / ] Getting Data',
    '[ / ] Getting Data',
    '[ / ] Getting Data',
    '[ / ] Getting Data',
    '[ / ] Getting Data',
    '[ / ] Getting Data',
    '[ - ] Getting Data',
    '[ - ] Getting Data',
    '[ - ] Getting Data',
    '[ - ] Getting Data',
    '[ - ] Getting Data',
    '[ - ] Getting Data',
    '[ \\ ] Getting Data',
    '[ \\ ] Getting Data',
    '[ \\ ] Getting Data',
    '[ \\ ] Getting Data',
    '[ \\ ] Getting Data',
    '[ \\ ] Getting Data',
    '[ | ] Getting Data',
    '[ | ] Getting Data',
    '[ | ] Getting Data',
    '[ | ] Getting Data',
    '[ | ] Getting Data',
    '[ | ] Getting Data',
    '[ / ] Getting Data',
    '[ / ] Getting Data',
    '[ / ] Getting Data',
    '[ / ] Getting Data',
    '[ / ] Getting Data',
    '[ / ] Getting Data',
    '[ - ] Getting Data',
    '[ - ] Getting Data',
    '[ - ] Getting Data',
    '[ - ] Getting Data',
    '[ - ] Getting Data',
    '[ - ] Getting Data',
    '[ \\ ] Getting Data',
    '[ \\ ] Getting Data',
    '[ \\ ] Getting Data',
    '[ \\ ] Getting Data',
    '[ \\ ] Getting Data',
    '[ \\ ] Getting Data',
    '[ | ] Getting Data',
    '[ | ] Getting Data',
    '[ | ] Getting Data',
    '[ | ] Getting Data',
    '[ | ] Getting Data',
    '[ | ] Getting Data',
    '[ / ] Getting Data',
    '[ / ] Getting Data',
    '[ / ] Getting Data',
    '[ / ] Getting Data',
    '[ / ] Getting Data',
    '[ / ] Getting Data',
    '[ - ] Getting Data',
    '[ - ] Getting Data',
    '[ - ] Getting Data',
    '[ - ] Getting Data',
    '[ - ] Getting Data',
    '[ - ] Getting Data',
    '[ \\ ] Getting Data',
    '[ \\ ] Getting Data',
    '[ \\ ] Getting Data',
    '[ \\ ] Getting Data',
    '[ \\ ] Getting Data',
    '[ \\ ] Getting Data',
]);
animation.onStart(() => {
    myVariable = 'Started'
});
animation.onFinish(() => {
    myVariable = 'Finished'
})
animation.animate(0).then((res) => {
    console.log(`Printed ${res.frames.printed} with ${res.timeout} ms. delay between Images.`);
    console.log(`myVariable: ${myVariable}`);
});