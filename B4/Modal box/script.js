let btn = document.querySelector(".btn");
let modal = document.querySelector(".modal");
let span = document.querySelector('.text');
btn.addEventListener('click', function() {
    modal.style.display = 'block';
});
span.addEventListener('click', function() {
    modal.style.display = 'none';
});
window.addEventListener('click', function(e) {
    if (e.target == modal) {
        modal.style.display = 'none';
    }
})