let buttonElement = document.getElementById("convertBtn");

function convertBtn() {
    let hoursInputValue = document.getElementById("hoursInput").value;
    let minuteInputValue = document.getElementById("minutesInput").value;
    let resultElement = document.getElementById("timeInSeconds");
    resultElement.style.padding = "15px";
    resultElement.style.borderColor = "#ffffff";
    resultElement.style.borderWidth = "3px";
    resultElement.style.borderStyle = "solid";
    resultElement.style.borderRadius = "5px";
    resultElement.style.textAlign = "Center";
    resultElement.style.fontSize = "35px";
    resultElement.style.margin = "10px";
    let errorElement = document.getElementById("errorMsg");
    if ((hoursInputValue !== "") && (minuteInputValue !== "")) {
        let result = (hoursInputValue * 3600) + (minuteInputValue * 60);
        resultElement.textContent = result;
        errorElement.textContent = "";
    } else if ((hoursInputValue === "") && (minuteInputValue !== "")) {
        resultElement.textContent = "";
        errorElement.textContent = "Please enter a valid number of hours";
    } else if ((hoursInputValue !== "") && (minuteInputValue === "")) {
        resultElement.textContent = "";
        errorElement.textContent = "Please enter a valid number of minutes";
    } else if ((hoursInputValue === "") && (minuteInputValue === "")) {
        resultElement.textContent = "";
        errorElement.textContent = "Please enter a valid number of minutes and hours";
    }
}
buttonElement.addEventListener("click", convertBtn);