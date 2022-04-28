// Create a variable that connects to the hero class in the header. Or that connects to the dateTime class
let dateTime = $(".dateTime");


// Set up a setinterval() fuction so you can update the text in the hero. 
// Every second update the format of moment with a new version of info





function setTime() {
    let clock = setInterval(function () {
        dateTime.text(moment().format("MMMM Do YYYY , h:mm:ss a"))
    }, 0);
};
setTime();
