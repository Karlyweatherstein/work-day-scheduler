// moment js code

var timeDisplayEl = document.querySelector("#time-display");

setInterval(function () {
  timeDisplayEl.textContent = moment().format("dddd, MMMM Do");
}, 1000);

// ensure the save button works and saves it in the localstorage
$("button").on("click", saveTasks);

var saveButton = $(".saveBtn");

function colorChange() {
  var hour = moment().hours();

  $(".time-block").each(function () {
    var currentHour = parseInt($(this).attr("id"));

    if (currentHour > hour) {
      $(this).addClass("future");
    } else if (currentHour === hour) {
      $(this).addClass("present");
    } else {
      $(this).addClass("past");
    }
  });
}

//Save tasks to local storage
saveButton.on("click", function () {
  var time = $(this).siblings(".hour").text();
  var tasks = $(this).siblings(".tasks").val();

  
  localStorage.setItem(time, tasks);
});


function 

// //have past hours greyed out
// if (moment().isAfter(time9)) {
//   $(time9).addClass('past')
// }

// have the current hour in red

// have future hours in green

colorChange();
