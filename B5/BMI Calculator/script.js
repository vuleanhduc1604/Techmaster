const form = document.querySelector('.form');
const mass = document.querySelector('.mass');
const height = document.querySelector('.height');
const bmi = document.querySelector('.bmi');
const conclusion = document.querySelector('.conclusion');
const calculate = document.querySelector('.calculate');
calculate.addEventListener('click', function(e) {
    e.preventDefault();
    const heightSquared = Number(height.value) ** 2;
    const bmiNum = Math.floor(Number(mass.value) / heightSquared);
    bmi.innerHTML = bmiNum;
    if (bmiNum < 16) {
        conclusion.innerHTML = 'thin af'
    } else if (bmiNum >= 16 && bmiNum < 17) {
        conclusion.innerHTML = 'too thin'
    } else if (bmiNum >= 17 && bmiNum < 18.5) {
        conclusion.innerHTML = 'kinda thin'
    } else if (bmiNum >= 18.5 && bmiNum < 25) {
        conclusion.innerHTML = 'normal'
    } else if (bmiNum >= 25 && bmiNum < 30) {
        conclusion.innerHTML = 'a bit fat'
    } else if (bmiNum >= 30 && bmiNum < 35) {
        conclusion.innerHTML = 'kinda fat'
    } else if (bmiNum >= 35 && bmiNum <= 40) {
        conclusion.innerHTML = 'too fat'
    } else if (bmiNum > 40) {
        conclusion.innerHTML = 'fat af'
    }
});
