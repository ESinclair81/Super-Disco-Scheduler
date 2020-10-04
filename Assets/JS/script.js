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

    
    })