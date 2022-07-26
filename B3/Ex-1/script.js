const hexString = '0123456789abcdef'
function randomHex() {
    let hexCode = "#";
    for( i=0; i<6; i++){
        hexCode += hexString[Math.floor(Math.random() * hexString.length)];
    }
    return hexCode;
}
function randomDir() {
    let angle = Math.floor(Math.random() * 360);
    console.log(angle);
    return angle;
}
const btn = document.getElementById('btn');
const body = document.getElementById('body');
const span = document.getElementById('span')
function gradientGen() {
    let color1 = randomHex();
    let color2 = randomHex();
    let angle1 = randomDir();
    body.style.backgroundImage = `linear-gradient(${angle1}deg, ${color1}, ${color2})`;
    span.innerHTML = `${angle1} deg, ${color1}, ${color2}`
}
btn.addEventListener('click', function() {
    gradientGen();
})