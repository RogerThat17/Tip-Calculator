function calculateTip() {
    var billAmount = document.getElementById("billamt").value;
    var serviceCharge = document.getElementById("ServiceQual").value;
    var numberOfPeople = document.getElementById("peopleamt").value;

    //validate input
    if (billAmount == "" || serviceCharge == 0 ) {
        alert("Please enter the Bill Amount and Service charge");
        return;
    }

    //Check to see if this input is empty or less than or equal to 1
    if (numberOfPeople == "" || numberOfPeople <= 1) {
        numberOfPeople = 1;
        document.getElementById("each").style.display = "none";
    }
    else {
        document.getElementById("each").style.display = "block";
    }

    //Calculate Tips
    var total = (billAmount * serviceCharge) / numberOfPeople;

    total = Math.round(total * 100) / 100;

    total = total.toFixed(2);

    document.getElementById("totalTip").style.display = "block"

    document.getElementById("tip").innerHTML = total;

    //document.getElementById("totalTip").style.display = "none";

    //document.getElementById("each").style.display = "none";
}

//Call function On click
document.getElementById("calculate").onclick = function() {
    calculateTip();
}
