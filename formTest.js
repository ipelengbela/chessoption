var limitedText = document.getElementsByClassName("form-has-character-limit");
var charactersLeft = document.getElementsByClassName("character-count");
var inputBoxes = [
    (limitedText[0].getElementsByClassName("form-input"))[0], 
    (limitedText[1].getElementsByClassName("form-input"))[0], 
    (limitedText[2].getElementsByClassName("form-input"))[0]
];
var openPopup = document.getElementById("openPopup");
var hidePopup = document.getElementById("hidePopup");
var popup = document.getElementById("popupBackground");
var saveTask = document.getElementById("save");
collectiveUpdate();

function collectiveReset() {
    resetCount(charactersLeft[0], inputBoxes[0], 50);
    resetCount(charactersLeft[1], inputBoxes[1], 30);
    resetCount(charactersLeft[2], inputBoxes[2], 80);
}

function collectiveUpdate() {
    inputBoxes[0].addEventListener("input", function() {
        updateCount(charactersLeft[0], inputBoxes[0], 50);
    });
    inputBoxes[1].addEventListener("input", function() {
        updateCount(charactersLeft[1], inputBoxes[1], 30);
    });
    inputBoxes[2].addEventListener("input", function() {
        updateCount(charactersLeft[2], inputBoxes[2], 80);
    });
}

function copyFields() {
    if (document.getElementById("input-description").value == "") {
        document.getElementById("line-description").innerHTML = "Empty";
    }
    else {
        document.getElementById("line-description").innerHTML = document.getElementById("input-description").value;
    }
    if (document.getElementById("input-name").value == "") {
        document.getElementById("line-name").innerHTML = "Empty";
    }
    else {
        document.getElementById("line-name").innerHTML = document.getElementById("input-name").value;
    }
    if (document.getElementById("input-tag").value == "") {
        document.getElementById("line-tag").innerHTML = "Empty";
    }
    else {
        document.getElementById("line-tag").innerHTML = document.getElementById("input-tag").value;
    }
    inputTagColour();
    statusDropdown();
}

function emptyFields() {
    document.getElementById("input-description").value = "";
    document.getElementById("input-name").value = "";
    document.getElementById("input-tag").value = "";
    document.getElementById("input-tag-colour").selectedIndex = 0;
    document.getElementById("status-dropdown").selectedIndex = 0;
}

function inputTagColour() {
    var textInputTagColour;
    var valueOfITCOptions = document.getElementById("input-tag-colour").options.selectedIndex;
    var lineColorTag;

    // if (valueOfITCOptions == 0) {
    //     textInputTagColour = "--Choose Colour--";
    //     console.log(textInputTagColour);
    //     lineColorTaglineColorTag = document.getElementById("line-color-tag").innerHTML = textInputTagColour;
    // }
    // else if (valueOfITCOptions == 1) {
    //     textInputTagColour = "Blue";
    //     console.log(textInputTagColour);
    //     lineColorTag = document.getElementById("line-color-tag").innerHTML = textInputTagColour;
    // }
    // else if (valueOfITCOptions == 2) {
    //     textInputTagColour = "Green";
    //     console.log(textInputTagColour);
    //     lineColorTag = document.getElementById("line-color-tag").innerHTML = textInputTagColour;
    // }
    // else if (valueOfITCOptions == 3) {
    //     textInputTagColour = "Light Green";
    //     console.log(textInputTagColour);
    //     lineColorTag = document.getElementById("line-color-tag").innerHTML = textInputTagColour;
    // }
    // else if (valueOfITCOptions == 4) {
    //     textInputTagColour = "Orange";
    //     console.log(textInputTagColour);
    //     lineColorTag = document.getElementById("line-color-tag").innerHTML = textInputTagColour;
    // }
    // else if (valueOfITCOptions == 5) {
    //     textInputTagColour = "Light Orange";
    //     console.log(textInputTagColour);
    //     lineColorTag = document.getElementById("line-color-tag").innerHTML = textInputTagColour;
    // }

    switch(valueOfITCOptions) {
        case 0:
            textInputTagColour = "--Choose Colour--";
            lineColorTag = document.getElementById("line-color-tag").style = "color: black";
            break;
        case 1:
            textInputTagColour = "Blue";
            lineColorTag = document.getElementById("line-color-tag").style = "color: blue";
            break;
        case 2:
            textInputTagColour = "Green";
            lineColorTag = document.getElementById("line-color-tag").style = "color: green";
            break;
        case 3:
            textInputTagColour = "Light Green";
            lineColorTag = document.getElementById("line-color-tag").style = "color: lightgreen";
            break;
        case 4:
            textInputTagColour = "Orange";
            lineColorTag = document.getElementById("line-color-tag").style = "color: orange";
            break;
        case 5:
            textInputTagColour = "Light Orange";
            lineColorTag = document.getElementById("line-color-tag").style = "color: lightsalmon";
            break;
    }
    console.log(textInputTagColour);
    lineColorTag = document.getElementById("line-color-tag").innerHTML = textInputTagColour;
}

function resetCount(output, read, max) {
    var tracker;
    tracker = parseInt(read.value.length) + (max-parseInt(read.value.length));
    console.log(tracker);
    output.textContent = tracker;
}

function statusDropdown() {
    var textStatusDropdown; 
    var valueOfSDOptions = document.getElementById("status-dropdown").options.selectedIndex;
    var dropdownStatus;
    
    // if (valueOfSDOptions == 0) {
    //     textStatusDropdown = "To-Do";
    //     console.log(textStatusDropdown);
    //     dropdownStatus = document.getElementById("line-status").innerHTML = textStatusDropdown;
    // }
    // else if (valueOfSDOptions == 1) {
    //     textStatusDropdown = "In Progress";
    //     console.log(textStatusDropdown);
    //     dropdownStatus = document.getElementById("line-status").innerHTML = textStatusDropdown;
    // }
    // else if (valueOfSDOptions == 2) {
    //     textStatusDropdown = "Done";
    //     console.log(textStatusDropdown);
    //     dropdownStatus = document.getElementById("line-status").innerHTML = textStatusDropdown;
    // }
    
    switch(valueOfSDOptions) {
        case 0:
            textStatusDropdown = "To-Do";
            break;
        case 1:
            textStatusDropdown = "In Progress";
            break;
        case 2:
            textStatusDropdown = "Done";
            break;
    }
    console.log(textStatusDropdown);
    dropdownStatus = document.getElementById("line-status").innerHTML = textStatusDropdown;
}

function updateCount(output, read, max){
    output.textContent = max-parseInt(read.value.length);
}

hidePopup.onclick = function() {
    collectiveUpdate();
    popup.style.display = "none";
    collectiveReset();
    emptyFields();
}

openPopup.onclick = function(){
    popup.style.display = "block";
}

saveTask.onclick = function() {
    collectiveUpdate();
    copyFields();
    collectiveReset();
    emptyFields();
    popup.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == popup ){
        collectiveUpdate();
        collectiveReset();
        emptyFields();
        popup.style.display = "none";
    }
}
