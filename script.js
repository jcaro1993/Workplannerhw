var currentDay = new Date($.now());
$("#currentDay").html(currentDay);
var dayContent = JSON.parse(localStorage.getItem("input"));
moment().format('LL');

if (dayContent === null) {
    dayContent = ["", "", "", "", "", "", "", "", "", "", "", ""];
}
moment().format('LL');

// var now = moment();

// $('time').each(function(i, e) {
//     var currentDay = moment($(e).attr('datetime'));

//     if (now.diff(time, 'days') <= 1) {
//         $(e).html('<span>' + time.from(now) + '</span>');
//     }
// });


for (i = 9; i < 17; i++) {
    $("#" + i.toString()).html(dayContent[i - 9])
    if (i === currentDay.getHours()) {
        $("#" + i.toString()).attr("class", "form-control present");
    }
    if (i < currentDay.getHours()) {
        $("#" + i.toString()).attr("class", "form-control past");
    }
    if (i > currentDay.getHours()) {
        $("#" + i.toString()).attr("class", "form-control future");
    }
}
$(".saveBtn").on("click", function(event) {
    var input = $("#" + event.target.value).val();
    dayContent.splice((event.target.value - 9), 1, input)
    localStorage.setItem("input", JSON.stringify(dayContent))
})