const userInput = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const resultsDiv = document.getElementById("results-div")

// Check number is valid

const isValidPhoneNumber = () => {
  if (userInput.value === "") {
    return true;
  }
  else {
    return false;
  }
}

// If number is valid, run the regex checker

const displayCheckResult = (input) => {
  if (isValidPhoneNumber(input)) {
    alert("Please provide a phone number");
    return;
  }
  const phoneRegex = /^(1?)? ?(\(\d{3}\)|\d{3})+([\s.-])?(\d{3})([\s.-])?(\d{4})$/;
  const resultsText = document.createElement("p");
  resultsText.className = 'results-text';
  resultsText.appendChild(document.createTextNode(`${phoneRegex.test(input) ? "Valid" : "Invalid"} US number: ${input}`));
  resultsDiv.appendChild(resultsText);
  userInput.value = "";
};

// Clear output

const clearOutput = () => {
  resultsDiv.textContent = ""
  userInput.value = "";
}

// Button Listeners

userInput.addEventListener("keydown", e => {
  if (e.key === "Enter") {
    displayCheckResult(userInput.value);
  }
})
checkBtn.addEventListener("click", ()=> {
  displayCheckResult(userInput.value);
});
clearBtn.addEventListener("click", clearOutput);