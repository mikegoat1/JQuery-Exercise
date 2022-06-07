// Create a variable that connects to the hero class in the header. Or that connects to the dateTime class
const dateTime = $(".dateTime");
const modalSubmit = $("#submit"); 
const modalForm1 = $("#modalForm"); 
const dataEntry = $("#table"); 



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

let tableRow = $("<tr>"); 
dataEntry.append(tableRow); 

let nameData = $("<td>"); 
nameData.text(name);
tableRow.append(nameData); 

let typeData = $("<td>"); 
typeData.text(type); 
tableRow.append(typeData);

let wageData = $("<td>"); 
wageData.text(wage); 
tableRow.append(wageData); 

let dueDateData = $("<td>"); 
dueDateData.text(date); 
tableRow.append(dueDateData); 

// I need to use moment to compare the due date and current date.
let daysUntilData = $("<td>"); 


}

function handleTotalWage (){}

function handleDaysUntil (date){

}

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
    console.log("Curren day:", moment("12-25-1995", "MM-D-YYYY").format("MM-DD-YYYY"))
    // Experiment to get the diff function to give the correct number of days. 
    let dayDifference =  moment(datePicker , "MM-D-YYYY").diff(moment(), "days"); 
    dayDifference = 1 + dayDifference; 
    console.log("Day difference:", dayDifference); 

    console.log("Difference:" , moment(datePicker , "MM-D-YYYY").diff(moment(), "days"))


}
console.log("Example:", moment("12-25-1995", "MM-DD-YYYY").format("MMM Do, YYYY"))
modalSubmit.on("click", handleFormSubmit); 