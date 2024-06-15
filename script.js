const inputWeight = document.getElementById('inputWeight');
const inputHeight = document.getElementById('inputHeight');
const calculateBtn = document.querySelector('.btn');
const resultContainer = document.getElementById('resultContainer');
const bmiResult = document.getElementById('BMI');
const result = document.getElementById('result');

calculateBtn.addEventListener('click', function() {
    result.textContent = '';
    const weight = parseFloat(inputWeight.value); 
    const height = parseFloat(inputHeight.value) / 100; 
    const bmi = weight / (height * height);
    resultContainer.style.display = "block";
    if (bmi < 18.5) {
        result.textContent += 'Zayıf';
    } else if (bmi >= 18.5 && bmi < 25) {
        result.textContent += 'Normal Kilolu';
    } else if (bmi >= 25 && bmi < 30) {
        result.textContent += 'Fazla Kilolu';
    } else if(bmi > 30) {
        result.textContent += 'Obezite';
    }  
    bmiResult.textContent = bmi.toFixed(2);
});
