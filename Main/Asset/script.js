// Create a variable that connects to the hero class in the header. Or that connects to the dateTime class
const dateTime = $(".dateTime");
const modalSubmit = $("#submit"); 
const modalForm1 = $("#modalForm"); 



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

function creatingTable (name, type, wage, date) {


}

function handleTotalWage (){}

function handleDueDate (){}

// next thing you need to do is make sure you can grab the value out of these inputs
function handleFormSubmit(event) {
    event.preventDefault();

    const projectName = $("#project-name").val();
    const projectType = $("#project-type").val();
    const hourlyWage = $("#hourly-wage").val();
    const datePicker = $("#date-picker").val(); 
    // resetting input after recorded. 
    $("select option[value='']").attr("selected", true); 
    $("#modalForm input[type='text']").val('');
    //  create and add elements dynamically to the table. 
    //  Run function to calculate input. 
    //  When creating make sure to set to local storage
        // may be able to if we cycle through a set amount of indexs to be in the table row


    console.log(projectName); 
    console.log(projectType); 
    console.log(hourlyWage); 
    console.log(datePicker); 

}
console.log(modalSubmit)
modalSubmit.on("click", handleFormSubmit); 