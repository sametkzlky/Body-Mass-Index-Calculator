const inputWeight = document.getElementById('inputWeight');
const inputHeight = document.getElementById('inputHeight');
const calculateButton = document.querySelector('.btn');
const resultContainer = document.getElementById('resultContainer');
const BodyMassIndex = document.getElementById('BMI');
const result = document.getElementById('result');

function calculateBMI() {
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
    
    BodyMassIndex.textContent = bmi.toFixed(2);
}

calculateButton.addEventListener('click', calculateBMI);

[inputWeight, inputHeight].forEach(input => {
    input.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            calculateBMI();
        }
    });
});
