function determineNap(){    
    var elem = document.getElementById("question-button");
    if (elem.innerHTML=="Should I take a nap?") {
        elem.innerHTML = "Reset";
        document.getElementById("result").innerHTML = "Yes";
    }
    else {
        elem.innerHTML = "Should I take a nap?";
        document.getElementById("result").innerHTML = "";
    }
}
