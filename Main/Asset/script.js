// Create a variable that connects to the hero class in the header. Or that connects to the dateTime class
const dateTime = $(".dateTime");
const modalSubmit = $("#submit");
const modalForm1 = $("#modalForm");
const dataEntry = $("#table");
let dataArray = []



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

function creatingTable(name, type, hourly, date, diff, wage) {

    let tableRow = $("<tr>");
    $("#table").append(tableRow);
    // Creating Name
    let tableDataName = $("<td>");
    tableDataName.text(name);
    $(tableRow).append(tableDataName);
    // Creating Type 
    let tableDataType = $("<td>");
    tableDataType.text(type);
    $(tableRow).append(tableDataType);
    // Creating Hourly Wage
    let tableDataHourly = $("<td>");
    tableDataHourly.text("$" + hourly);
    $(tableRow).append(tableDataHourly);
    // Creating Due Date 
    let tableDataPicked = $("<td>");
    tableDataPicked.text(date);
    $(tableRow).append(tableDataPicked);
    // Creating Day Difference 
    let tableDataDiff = $("<td>");
    tableDataDiff.text(diff + " days");
    $(tableRow).append(tableDataDiff);
    // Creating Wage
    let tableDataWage = $("<td>");
    tableDataWage.text("$" + wage);
    $(tableRow).append(tableDataWage);
    // Creating Exit
    let tableDataExit = $("<td>");
    let tableDataBtn = $("<button>");
    tableDataBtn.text("X");
    $(tableDataExit).append(tableDataBtn);
    $(tableRow).append(tableDataExit);


}

function handleTotalWage(day, hourly) {
    let wage = (hourly * 8) * day;
    return wage;
}

function handleDaysUntil(date) {
    let dayDifference = moment(date, "MM-D-YYYY").diff(moment(), "days");
    dayDifference = 1 + dayDifference;
    return dayDifference;
}

// next thing you need to do is make sure you can grab the value out of these inputs
function handleFormSubmit(event) {
    event.preventDefault();

    const projectName = $("#project-name").val();
    const projectType = $("#project-type").val();
    const hourlyWage = $("#hourly-wage").val();
    const datePicker = $("#date-picker").val();
    let dayDifference = handleDaysUntil(datePicker);
    const wage = handleTotalWage(dayDifference, hourlyWage);

    // resetting input after recorded. 
    $("select option[value='']").attr("selected", true);
    $("#modalForm input[type='text']").val('');

    //  create and add elements dynamically to the table. 
    //  Run function to calculate input. 
    //  When creating make sure to set to local storage
    // may be able to if we cycle through a set amount of indexs to be in the table row


    console.log("Project Name", projectName);
    console.log("Project Type", projectType);
    console.log("Hourly Wage", hourlyWage);
    console.log("Date Picked", datePicker);
    console.log("Day difference:", dayDifference);
    console.log("Checking Wage", wage);

    creatingTable(projectName,projectType,hourlyWage,datePicker,dayDifference,wage); 
    
    // Creating the Row
    let tableRow = $("<tr>");
    $("#table").append(tableRow);
    // Creating Name
    let tableDataName = $("<td>");
    tableDataName.text(projectName);
    $(tableRow).append(tableDataName);
    // Creating Type 
    let tableDataType = $("<td>");
    tableDataType.text(projectType);
    $(tableRow).append(tableDataType);
    // Creating Hourly Wage
    let tableDataHourly = $("<td>");
    tableDataHourly.text("$" + hourlyWage);
    $(tableRow).append(tableDataHourly);
    // Creating Due Date 
    let tableDataPicked = $("<td>");
    tableDataPicked.text(datePicker);
    $(tableRow).append(tableDataPicked);
    // Creating Day Difference 
    let tableDataDiff = $("<td>");
    tableDataDiff.text(dayDifference + " days");
    $(tableRow).append(tableDataDiff);
    // Creating Wage
    let tableDataWage = $("<td>");
    tableDataWage.text("$" + wage);
    $(tableRow).append(tableDataWage);
    // Creating Exit
    let tableDataExit = $("<td>");
    let tableDataBtn = $("<button>");
    tableDataBtn.text("X");
    $(tableDataExit).append(tableDataBtn);
    $(tableRow).append(tableDataExit);



    // Grabbing localstoragae and setting to array 
    let retrieveData = JSON.parse(localStorage.getItem("Data"));
    console.log(retrieveData);
    if (retrieveData === null) {
        dataArray = [];
    } else {
        dataArray = retrieveData;
    }

    // updating array with new items. 
    dataArray.push(projectName, projectType, hourlyWage, datePicker, dayDifference, wage, "X");
    localStorage.setItem("Data", JSON.stringify(dataArray));
    console.log(JSON.parse(localStorage.getItem("Data")))

    // dataArray.push(JSON.parse(localStorage.getItem("Data")))



}
modalSubmit.on("click", handleFormSubmit); 