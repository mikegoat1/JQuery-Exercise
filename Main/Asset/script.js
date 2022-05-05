// Create a variable that connects to the hero class in the header. Or that connects to the dateTime class
let dateTime = $(".dateTime");


// Set up setInterval function to update text in hero. 
    // keep the update instantly
function setTime() {
    let clock = setInterval(function () {
        dateTime.text(moment().format("MMMM Do YYYY , h:mm:ss a"))
    }, 0);
};
setTime();


