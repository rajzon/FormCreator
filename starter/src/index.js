
function CountingDifferentThings() {
    //MIN
    var number1 = document.getElementById("number1").value;
    var number2 = document.getElementById("number2").value;
    var number3 = document.getElementById("number3").value;
    var number4 = document.getElementById("number4").value;
    

    var numbersArray = [Number(number1),Number(number2),Number(number3),Number(number4)];
    
    var numbersArrayMaxValue = numbersArray.reduce(function(a, b) {
        return Math.max(a, b);
    });

    var numbersArrayMinValue = numbersArray.reduce(function(a, b) {
        return Math.min(a, b);
    });

    var sum = Number(number1)+Number(number2)+Number(number3)+Number(number4);
    var average =(Number(number1)+Number(number2)+Number(number3)+Number(number4))/4;
    
    if(sum !='NaN') {
    document.getElementById("sum").innerHTML=sum;
    document.getElementById("average").innerHTML=average;
    document.getElementById("min").innerHTML=numbersArrayMinValue;
    document.getElementById("max").innerHTML=numbersArrayMaxValue;
    }
    else {
        document.getElementById("sum").innerHTML='<img src="loading"> &nbsp;&nbsp;&nbsp;&nbsp;Hello';
    }

 //NEXT
    var inputsAmount = document.getElementById("inputsAmount").value;
    var container = document.getElementById('container');

    var convertedInputsAmount = Number(inputsAmount);

    while (container.hasChildNodes()) {
        container.removeChild(container.lastChild);
    }

    for(i = 0;i<convertedInputsAmount;i++) {       
        
        var input = document.createElement('input');

        input.type="text";       
        container.appendChild(input);

        container.appendChild(document.createElement("br"));
        container.appendChild(document.createElement("br"));
    };
};