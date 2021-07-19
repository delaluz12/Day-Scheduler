$(document).ready(function () {

    //display current day
    var currentDate;
    currentDate = moment().format('dddd, MMMM Do')
    console.log(currentDate);
    $('#currentDay').text(currentDate);

    //on click function to grab text and save to local storage
    $('.saveBtn').click(function () {
        //grab input from textarea surrounding the button
        var userInput = $(this).siblings('.form-control').val();
        console.log(userInput);
        var timeBlock = $(this).parent().attr('id');
        console.log (timeBlock);

        //save to local storage
        localStorage.setItem(timeBlock, userInput);
    });

    function colorCoder(){
        //check current hour
        var currentHour = parseInt(moment().format('H'));
        // console.log(jQuery.type(currentHour));

        //compare current hour with all values in the timeblocks
        
        //loop through each value of timeblock to comare and make necessary css changes
        $('.row').each(function(){
            var rowValue = parseInt($(this).attr('value'));
            console.log (rowValue);

            //check if block is in past therefore currentHour will be greater
             if(currentHour > rowValue){
                 $(this).children('.form-control').addClass('past');
             } else if (currentHour === rowValue){
                $(this).children('.form-control').removeClass('past');
                $(this).children('.form-control').addClass('present');
             } else {//if not in past or present therefore must be in future
                $(this).children('.form-control').removeClass('past');
                $(this).children('.form-control').removeClass('present'); 
                $(this).children('.form-control').addClass('future');
            }
        })
    
    }

    //calls color coding function to startInterval to excute code every 5 mintues
    colorCoder();

    //colorCoder function will run every 5 minutes = equal to 2 parameters?
    var colorCodingInterval = setInterval(colorCoder, 300000);

    //render from local storage
    $('#hour-9 :nth-child(2)').text(localStorage.getItem('hour-9','userInput'));
    $('#hour-10 :nth-child(2)').text(localStorage.getItem('hour-10','userInput'));
    $('#hour-11 :nth-child(2)').text(localStorage.getItem('hour-11','userInput'));
    $('#hour-12 :nth-child(2)').text(localStorage.getItem('hour-12','userInput'));
    $('#hour-13 :nth-child(2)').text(localStorage.getItem('hour-13','userInput'));
    $('#hour-14 :nth-child(2)').text(localStorage.getItem('hour-14','userInput'));
    $('#hour-15 :nth-child(2)').text(localStorage.getItem('hour-15','userInput'));
    $('#hour-16 :nth-child(2)').text(localStorage.getItem('hour-16','userInput'));
    $('#hour-17 :nth-child(2)').text(localStorage.getItem('hour-17','userInput'));

});
