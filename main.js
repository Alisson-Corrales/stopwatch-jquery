`use strict`;


$(function(){

    //$('.watch').slideDown(800);

    let timer;
    let isRunning = false;
    let ms = 0;
    let s = 0;
    let m = 0;

    //makes the lap thing
    let $buttonLap = $('#lapCount');
    //starts (or restarts if the watch is already off) the stopwatch
    let $buttonStart = $('#startWatch');


    //gets the stopwatch going
    function startWatch(){
        timer = setInterval(function(){
            ms++
            $('#ms').html(ms);

            //for seconds
            if(ms == 100){
                s++
                $('#s').html(s);
                if(s < 100){
                    $('#s').html('0' + s)
                }
                //for minutes
                if(s == 60){
                    m++
                    $('#m').html(m);
                    if(m < 10){
                        $('#m').html('0' + m)
                    }
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
        lapCount = setInterval(function(){
            $('#lap').css('display', `initial`);

            //it works. but it doesn't stop
            $('#m3').html(m) //minutes
            $('#s2').html(s) //seconds
            $('#ms1').html(ms) //milliseconds
            
            //wasn't sure how to make it to where it resets with the lap button
            if(isRunning == false){
                $('#lap').css('display', `none`);

                m = 00;
                s = 00;
                ms = 00;
            }
    });
    }


    $buttonStart.on('click', onOff)
    $buttonLap.on('click', lapWatch)



})