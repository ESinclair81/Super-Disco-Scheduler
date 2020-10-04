//This is the logic for the scheduler

$(document).ready(function() {

    // Event listener for button click
    $(saveBtn).on("click", function(){
     
    //getting values for descriptions
    var desc = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");
    
    //saving data in local storage
    localStorage.setItem(time, desc);
    
    });

    //Function to update desrciption status every hour 
      
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
    
    })