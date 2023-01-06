// created variables for each time slot

var hr9 = $("#9");
var hr10 = $("#10");
var hr11 = $("#11");
var hr12 = $("#12");
var hr1 = $("#13");
var hr2 = $("#14");
var hr3 = $("#15");
var hr4 = $("#16");
var hr5 = $("#17");
var time = moment();


function beginPlanner() {
// this give us the current day month year and time
    $("#currentDay").text(moment().format("dddd, MMMM DD, YYYY h:m:ss"));
// this portion is getting the local storage item
    $(".time-block").each(function () {
        var id = $(this).attr("id");
        var schedule = localStorage.getItem(id);

        if (schedule !== null) {
            $(this).children(".schedule").val(schedule);
        }
    });
}

beginPlanner();
var saveBtn = $(".saveBtn");
// once the save button is clicked it will save it to local storage with whatever is inside the container
saveBtn.on("click", function () {
    var time = $(this).parent().attr("id");
    var schedule = $(this).siblings(".schedule").val();

    localStorage.setItem(time, schedule);
});
// with this function, once the time slot has passed will change the color of the time block to gray
// when the time slot is in the future it will make the time block green
// current time block will be displayed as the current/present time
function timeBlock() {
    hour = time.hours();
    $(".time-block").each(function () {
        var thisHour = parseInt($(this).attr("id"));

        if (thisHour > hour) {
            $(this).addClass("future")
        }
        else if (thisHour === hour) {
            $(this).addClass("present");
        }
        else {
            $(this).addClass("past");
        }
    })
}

timeBlock();