// DOM variables 

//global variables
var currentDate;
var currentTime;

//function that displays current day 
function displayDate (){
    currentDate = moment().format('dddd, MMMM Do')
    console.log(currentDate);
    $('#currentDay').html(currentDate);
}

//display information on timeblocks for schedule
function renderTasks () {
    
}

//

displayDate();