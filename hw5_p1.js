function clearForm() {
    document.getElementById("fimlForm").reset();
    document.getElementById("outPutBox").innerHTML = "";
    document.querySelectorAll('.error').forEach(error => error.innerHTML = "");
}

document.getElementById("fimlForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const fullName = document.getElementById("fullName").value;
    const ageGroup = document.querySelector('input[name="ageGroup"]:checked');
    const browsers = document.querySelectorAll('input[name="browsers"]:checked');
    const moviePreference = document.getElementById("moviePreference").value;
    
    if (fullName === "") {
        document.getElementById("fuNameErr").innerHTML = "Please enter your full name.";
    } else {
        document.getElementById("fuNameErr").innerHTML = "";
    }
    
    if (!ageGroup) {
        document.getElementById("ageGroErr").innerHTML = "Please select an age group.";
    } else {
        document.getElementById("ageGroErr").innerHTML = "";
    }
    
    if (browsers.length === 0) {
        document.getElementById("browErr").innerHTML = "Please select at least one browser.";
    } else {
        document.getElementById("browErr").innerHTML = "";
    }
    
    if (moviePreference === "") {
        document.getElementById("moPreErr").innerHTML = "Please select a movie preference.";
    } else {
        document.getElementById("moPreErr").innerHTML = "";
    }
    
    if (fullName !== "" && ageGroup && browsers.length > 0 && moviePreference !== "") {
        document.getElementById("outPutBox").innerHTML = "Thanks, your data was submitted!";
    } else {
        document.getElementById("outPutBox").innerHTML = "Error: Please fill out all the fields.";
    }
});
