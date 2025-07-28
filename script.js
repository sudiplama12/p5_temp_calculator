const button = document.querySelector(".btn");

button.addEventListener('click', function () {
    var input = document.getElementById("input_temp").value.trim();
    var select = document.querySelector(".convert_to").value;
    var output = document.getElementById("p");

    if (input === "") {
        alert("Enter the temperature");
        return;
    }

    if (select === "none") {
        alert("Select the unit you want to convert");
        return;
    }

    var celsius = parseFloat(input);
    if (isNaN(celsius)) {
        alert("Please enter a valid number");
        return;
    }

    var result;
    if (select === "Fahrenheit") {
        result = (celsius * 9 / 5) + 32;
        output.innerHTML = "<strong>" + celsius + "°C</strong> = <span style='color:blue'>" + result.toFixed(2) + "°F</span>";
    } else {
       
        result = celsius + 273.15;
        output.innerHTML = "<strong>" + celsius + "°C</strong> = <span style='color:green'>" + result.toFixed(2) + " K</span>";
    }
});
