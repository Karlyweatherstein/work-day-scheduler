// have the current date written in the hero under the title
var currentDate = moment();


moment(document.getElementById("currentday")).format(LLLL);
console.log(m.format(""))


span = document.getElementById("currentDay");



// ensure the save button works and saves it in the localstorage



//have past hours greyed out

function timeOfDay(){

    var d = new Date();
    var n = d.getHours();


    if (n > 19) {
        buttonClass = "past"
    // If time is 7PM or later apply night theme to 'body'
    $('button').addClass('past');
    } else if (n > 16 && n < 19) {
    // If time is between 4PM – 7PM sunset theme to 'body'
    $('button').addClass('present');
    } else {
    // Else use 'day' theme
    $('button').addClass('future');
    }
}
window.onload = applyclass;


// have the current hour in red




// have future hours in green




