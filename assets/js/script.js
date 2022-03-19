// moment js code

var timeDisplayEl = document.querySelector("#time-display");

setInterval(function() {
  timeDisplayEl.textContent = moment().format("dddd, MMMM Do");
}, 1000)


// ensure the save button works and saves it in the localstorage
$("button").on("click", saveTasks);


// var saveToDo = document.querySelector("#saveButton")
// var button = document.querySelector("#save9")
// var save9 = document.querySelector("#tasks")
// var storedInput = localStorage.getItem("textInput")




//Save tasks to local storage

var tasksArr = JSON.parse(localStorage.getItem("taskname")) || []

function saveTasks() {
  console.log("message")
  var textArea = $(this).siblings("textarea").val()
  console.log(textArea)
  //[{ hour: "save9", task: textarea}, { hour: "save11", task: textarea} ]
  var button = $(this).attr("id")
  console.log(button)
  var taskObject = {
    hour: button, 
    task: textArea
  }
  tasksArr.push(taskObject)
  localStorage.setItem("taskname", JSON.stringify(tasksArr));
};

var saveToLocal = () => {
    localStorage.setItem("textInput", save9.textContent.value)
}

button.addEventListener("click", saveToLocal)




window.localStorage.setItem('toDo', JSON.stringify(tasks));

window.localStorage.getItem('tasks');



//have past hours greyed out





// have the current hour in red




// have future hours in green




