`use strict`;



$(function(){
    //$('#stopwatch').css('display', 'none')
    //$('#stopwatch').toggle(1000);

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
            if(ms >= 100 ){
                s++
                $('#s').html(s);
                $('#ms').html(0);
                ms = 0;
                    if(m < 10){
                        $('#m').html('0' + m)
                    }
                //for minutes
                if(s >= 60){
                    m++
                    s = 0;
                    $('#m').html(m);
                    //if(m < 10){
                    //    $('#m').html('0' + m)
                    //}
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
            let tempms = ms;
            let tempseconds = s;
            let tempminutes = m;
            $('#lap').css('display', `initial`);

            //displays static number of the stopwatch (does not)
            $('#m3').html(tempminutes) //minutes
            $('#s2').html(tempseconds) //seconds
            $('#ms1').html(tempms) //milliseconds
            
            //restarts stopwatch 100% when its not running
            if(isRunning == false){
                $('#ms').html('00');
                $('#s').html('00');
                $('#m').html('00');
                ms = 0;
                s = 0;
                m = 0;

                clearInterval(lapCount)

                $('#lap').css('display',"none");
            }
    }


    $buttonStart.on('click', onOff)
    $buttonLap.on('click', lapWatch)

})