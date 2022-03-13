const images = [
    'images/action.png',
    'images/airpod.png',
    'images/camera.png',
    'images/gear.png',
    'images/mic.png',
    'images.setup.png',
    'images/tripod.png'
];

// images.forEach(image => {
//     setInterval(() => {
//         document.getElementById('slideImage').src = image;
//         // console.log(image);
//     }, 2000)
// });
// const displayImage = () => {
//         images.forEach(image => {
//             console.log(image);
//         })
//     }
// setInterval(displayImage, 2000);


// const delay = 2000;

// images.forEach(
//     (image, i) => {
//         setTimeout(() => document.getElementById('slideImage').src = image, delay * i);
//     }
// );
let counter = 0;
setInterval(() => {
    if (counter < images.length) {
        document.getElementById('slideImage').src = images[counter]
        counter++;
    } else {
        counter = 0;
    }

}, 2000)