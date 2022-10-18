


// disable input2
document.getElementById('toLength').disabled = true; 

function selectionA(event){
    var selectElement = event.target;
    var valueA = selectElement.value;

    if(valueA === '0'){
        document.getElementById("itemsA").style = "color: gray;";
    }else if(valueA !== '0'){
        document.getElementById("itemsA").style = "color: black;";
    }
    

    console.log(valueA);
}

function selectionB(event){
    var selectElement = event.target;
    var valueB = selectElement.value;

    if(valueB === '0'){
        document.getElementById("toLengthtext").style = "transform: none;";
        document.getElementById("toLength").value = "";
        document.getElementById("itemsB").style = "color: gray;";
    }else if(valueB !== '0'){
        document.getElementById("itemsB").style = "color: black;";
        document.getElementById("toLength").value = "result";
        document.getElementById("toLengthtext").style = "transform: scale(0.8) translateY(-30px); background-color: rgb(247, 247, 247);";
    }
    

    console.log(valueB);
}