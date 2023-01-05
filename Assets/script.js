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

    $("#currentDay").text(moment().format("dddd, MMMM DD, YYYY h:m:ss"));

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

saveBtn.on("click", function () {
    var time = $(this).parent().attr("id");
    var schedule = $(this).siblings(".schedule").val();

    localStorage.setItem(time, schedule);
});

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