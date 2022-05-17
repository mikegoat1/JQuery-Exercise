// Create a variable that connects to the hero class in the header. Or that connects to the dateTime class
const dateTime = $(".dateTime");
const modalSubmit = $("#submit"); 



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



function handleFormSubmit(event) {
    event.preventDefault();

    const projectName = $("#project-name").val();
    const projectType = $("#project-type").val();
    const hourlyWage = $("#hourly-wage").val();
    const datePicker = $("#date-picker").val(); 

    console.log($("project-name")); 
    console.log(projectName); 
    console.log(projectType); 
    console.log(hourlyWage); 
    console.log(datePicker); 

    


}
console.log(modalSubmit)
modalSubmit.on("click", handleFormSubmit); 