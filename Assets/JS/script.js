//This is the logic for the scheduler

$(document).ready(function() {

    // Event listener for button click
    $(saveBtn).on("click", function(){
     
    //getting values for descriptions
    var desc = $(this).siblings(".description").val(" ");
    var time = $(this).parent().attr("id");
    
    //saving data in local storage
    localStorage.setItem(time, desc);

    });

    //Function to update desrciption status every hour 
      
    function hourUpdater() {
        //Getting the current hours
    var currentHour = moment().hours();

    //Time-block loop
    $(".time-block").each(function() {
        var blockHour = parseInt($(this).attr("id").split("-")[1]);
    
    //If time is in past
        if (blockHour < currentHour ) {
            $(this).addClass("past");
        }
        
        else if (blockHour === currentHour) {
            $(this).removeClass("past");
            $(this).addClass("present"); 
        }

        else if (blockHour > currentHour) {
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");
        }
    });

}





 hourUpdater(); 

        var interval = setInterval(hourUpdater, 15000);

//load saved descriptions from storage

    $("#hour-8 .description").val(localStorage.getItem("hour-8"));
    $("#hour-9 .description").val(localStorage.getItem("hour-9"));
    $("#hour-10 .description").val(localStorage.getItem("hour-10"));
    $("#hour-11 .description").val(localStorage.getItem("hour-11"));
    $("#hour-12 .description").val(localStorage.getItem("hour-12"));
    $("#hour-13 .description").val(localStorage.getItem("hour-13"));
    $("#hour-14 .description").val(localStorage.getItem("hour-14"));
    $("#hour-15 .description").val(localStorage.getItem("hour-15"));
    $("#hour-16 .description").val(localStorage.getItem("hour-16"));
    $("#hour-17 .description").val(localStorage.getItem("hour-17"));

//
$("#currentDay").text(moment().format("dddd, MMMM, Do"));

})
