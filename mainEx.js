`use strict`;

$(function () {
    //settings for slide
    let width = 720;
    let animationSpeed = 2000; //a secone
    let pause = animationSpeed + 500; //1500
    let currentSlide = 1; //keeps track of slides

    //cache DOM elements
    let $slideContainer = $(`.slides`);
    let $slides = $(`.slide`);
    //dollar sign lets others know its a jQuery elements

    //create a variable to store our interval
    let interval;

    //create a function that'll start the slider
    function startSlider() {
        interval = setInterval(function () {
            $slideContainer.animate({ 'margin-left': `-=${width}` },
                animationSpeed,
                function () {
                    currentSlide++;
                    if (currentSlide == $slides.length) {
                        currentSlide = 1;
                        $slideContainer.css('margin-left', 0)
                    }
                }
            )
        }, pause)
    }

    //create a function that'll stop the slider
    function pauseSlider() {
        clearInterval(interval) //is saved on interval
    }

    startSlider();
    $slideContainer
        .on('mouseenter', pauseSlider)
        .on('mouseleave', startSlider);



    let imageCycle;
    let isRunning = true; //if its running, true. if not, false


    function startImageCycle() {
        imageCycle = setInterval(function () {
            //~~~~~~~~~~~~~~~~~~~~ JS ~~~~~~~~~~~~~~~~~~~~~~//

            //let image = document.createElement("img");
            //image.setAttribute('src', 'https://images.pexels.com/photos/2803405/pexels-photo-2803405.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&//w=1260');
            //image.setAttribute('style', 'height:200px');
            //image.addEventListener('click', onOff);
            //imageContainer.appendChild(image)

            //~~~~~~~~~~~~~~~~~~ JQUERY ~~~~~~~~~~~~~~~~~~~~//

            let image = 'https://images.pexels.com/photos/2803405/pexels-photo-2803405.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&//w=1260';
            $('#imageContainer').append(`<img src=${image} width='200px'>`);
            $(`img`).last().on('click', onOff);

        }, 1000);
    }

    function stopImageCycle() {
        clearInterval(imageCycle)
    }

    function onOff() {
        if (isRunning) {
            isRunning = false;
            stopImageCycle();
        } else {
            isRunning = true;
            startImageCycle();
        }
    }

    startImageCycle();



    //background color changer
    let backgroundInterval;

    function randyColor() {
        return Math.floor(Math.random() * 256);
    }
    let red = randyColor();
    let green = randyColor();
    let blue = randyColor();
    $('body').css('background', `rgb(${red}, ${green}, ${blue})`)

    function chameleon() {
        backgroundInterval = setInterval(function () {

             red = randyColor();
             green = randyColor();
             blue = randyColor();
            $('body').css('background', `rgb(${red}, ${green}, ${blue})`)

        }, 3000)
    }


    chameleon();
}
)




//$(function(){
//    let speed = 2000; //speed of how they're added
//    let pause = 2500; //pause between when they're added
//    let howManyBarns = 1; //counts the pictures of barns
//
//    let $image = $('.loop'); //grabs that image in html
//
//    let interval;
//
//    //should add a image next to the image
//    function addPhoto(){
//        interval = setInterval(function(){
//            howManyBarns++;
//            
//            //part that adds the images (does not)
//            for(let i=0; i < 81; i++){
//                Object.assign($image);
//            }
//            
//            speed
//
//        }, pause)
//    }
//
//    //stops adding photos
//    function stopPhoto(){
//        clearInterval(interval);
//    }
//
//
//    addPhoto();
//    $image
//        .on('onclick', stopPhoto)
//        .on('onclick', addPhoto);
//})