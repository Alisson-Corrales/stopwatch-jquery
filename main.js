`use strict`;


$(function(){

    $('.watch').slideDown(800);


    let timer;
    let isRunning = false;
    let ms = 0;
    let s = 0;
    let m = 0;


    let $buttonLap = $('#lapCount');
    let $buttonStart = $('#startWatch');


    //gets the stopwatch going
    function startWatch(){
        timer = setInterval(function(){
            ms++
            $('#ms').html(ms);
            if(ms == 100){
                s++
                ms = 0
                $('#s').html(s);
                if(s == 60){
                    m++
                    s = 0;
                    $('#m').html(m);
                }
            }

        }, 10);
    }


    //turns the watch on or off
    function onOff(){
        if(isRunning){
            isRunning = false;
            clearInterval(timer);
        }else{
            isRunning = true;
            startWatch();
        }
    }


    let lapCount;
    let m3 = $('#m3');
    let s2 = $('#s2')
    let ms1 = $('#ms1');

    //prints out time when you click the lap button
    function lapWatch(){
        let lapCount = setInterval(function(){
            $('#lap').css('display', `initial`);

            //the janky part. the idea was for it to take the m, s, and ms and just copy
            if(isRunning == true){
                m3 = m;
                $('#m3').html()
                s2 = s;
                ms1 = ms;
            }
        })
    };


    $buttonStart.on('click', onOff)
    $buttonLap.on('click', lapWatch)



})