let calculation = localStorage.getItem('calculation') || '';
displayCalculation();
function updateCalculation(value) {
    if (calculation.startsWith("Error:")) {
        calculation = '';
    }
    
 calculation += value;
  displayCalculation();

  localStorage.setItem('calculation', calculation);
}
function clear(){
    calculation = '';
    displayCalculation();
    localStorage.setItem('calculation', calculation);
}
function equal(){
    calculation = eval(calculation);
        displayCalculation();
        localStorage.setItem('calculation', calculation);
    }
function displayCalculation() {
    
  document.querySelector('.js-cal')
    .innerHTML = calculation;
}
document.getElementById('equalBtn').addEventListener("click",equal)
document.getElementById('clearBtn').addEventListener("click",clear)

