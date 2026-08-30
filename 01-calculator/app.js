const display = document.querySelector('input');
const buttons = document.querySelectorAll('.buttons button');

let exp = "";
const OPERATORS = ["+","*","-","/","%"];

buttons.forEach(button => {
    button.addEventListener('click',() => {
        const value = button.dataset.value;
        if(!value)return;

        if(value === "AC") {
            exp = "";
            display.value = "";
            return;
        }

        if(value === "DEL") {
            exp = exp.slice(0,-1);
            display.value = exp;
            return;
        }

        if(value === "=") {
            if(exp === "" || OPERATORS.includes(exp.slice(-1)))
            {
                display.value = "Error";
                exp = "";
                return;
            }
            try{
                exp = eval(exp).toString();
                display.value = exp;
            }
            catch {
                display.value = "Error";
                exp = "";
            }
            return;
        }
        if(OPERATORS.includes(value) && exp === ""){
            return;
        }


        if(OPERATORS.includes(value) && OPERATORS.includes(exp.slice(-1))){
            return;
        }

        exp += value;
        display.value = exp;
    });
});