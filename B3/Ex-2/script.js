const bill = document.getElementById('bill');
const guests = document.getElementById('guests');
const service = document.getElementById('service');
const span = document.getElementById('span');
const submit = document.getElementById('submit');
const form = document.getElementById('app');
form.addEventListener('submit', function(e) {
    e.preventDefault();
});
submit.addEventListener('click', function() {
    const amount = bill.value;
    const people = guests.value;
    let quantityValue = service.textContent;
    let quantity = 0;
    if (quantityValue = '30% - Outstanding') {
        quantity == 0.3;
    } else if (quantityValue = '20% - Good') {
        quantity == 0.2;
    } else if (quantityValue = '15% - Its OK') {
        quantity == 0.15
    } else if (quantityValue = '10% - Bad') {
        quantity == 0.1
    } else if (quantityValue = '5% - Terrible') {
        quantity == 0.05
    };
    let result = amount*quantity;
    let finalResult = result/people;
    span.innerHTML = finalResult;
    console.log(quantity);
})