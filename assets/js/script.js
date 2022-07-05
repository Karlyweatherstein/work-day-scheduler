// moment js code to set the date at the top
var timeDisplayEl = document.querySelector("#time-display");

//interval set so that it updates every few minutes
setInterval(function () {
  timeDisplayEl.textContent = moment().format("dddd, MMMM Do");
}, 1000);

var saveButton = $(".saveBtn");

// Changes the color of the text block
function colorChange() {
  var hour = moment().hours("k");

  $(".tasks").each(function () {
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

//Save tasks to (Set)local storage
saveButton.on("click", function () {
  var time = $(this).siblings(".hour").text();
  var tasks = $(this).siblings(".tasks").val();

  localStorage.setItem(time, tasks);
});

//Get local Storage
function saveTasks() {
  $(".hour").each(function () {
    var currentHour = $(this).text();
    var currentTask = localStorage.getItem(currentHour);

    if (currentTask !== null) {
      $(this).siblings(".tasks").val(currentTask);
    }
  });
}

colorChange();
saveTasks();
