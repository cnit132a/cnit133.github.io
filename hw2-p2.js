function getResult() {
    let sum = 0, average = 0, product = 0, smallest, largest, result;

    num1 = parseFloat(document.getElementById("num1").value);
    num2 = parseFloat(document.getElementById("num2").value);
    num3 = parseFloat(document.getElementById("num3").value);

    if (isNaN(num1) || isNaN(num2) || isNaN(num3) || num1 == "" || num2 == "" || num3 == "") {
        result = "Please enter the numbers";
        document.getElementById("result").value = result;
    } 
    
    else {
        sum = num1 + num2 + num3;
        average = parseFloat(sum / 3).toFixed(2);
        product = num1 * num2 * num3;
        smallest = Math.min(num1, num2, num3);
        largest = Math.max(num1, num2, num3);

        result = "Three numbers are entered: " + num1 + ", " + num2 + ", " + num3 + "\nThe sum of 3 numbers: " + sum + "\nThe Average of 3 numbers: " + average + "\nThe Product of 3 numbers: " + product  + "\nThe smallest number: " + smallest   + "\nThe largest number: " + largest;

        document.getElementById("result").value = result;
    }
}




