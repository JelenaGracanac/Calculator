const calculator = document.querySelector('input[data-calculator]');
const result = document.querySelector('div[data-result]');
calculator.addEventListener("keyup", function (e){

    calculator.value = calculator.value.replace(/[^0-9\\+*-\\(\\)\.]+/g, '');
    try{
        result.innerText = eval(calculator.value) != undefined ? eval(calculator.value) : "";
    }catch(error){
        result.innerText = result.innerText
    }

})