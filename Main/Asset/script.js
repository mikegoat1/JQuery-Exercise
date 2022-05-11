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

// Function for widget of datepicker

$("#date-picker").datepicker(); 

// next thing you need to do is make sure you can grab the value out of these inputs

const projectName = $("#project-name").val();

function handleFormSubmit(event) {
    event.preventDefault();
    

}