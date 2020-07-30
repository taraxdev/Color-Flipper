let container = document.getElementById('container');
let button = document.getElementById('change-btn');
let color = document.querySelector('.color')
//HexCode
function randomColor() {
    let hexCode = '#';
    let hexDigit = '0123456789ABCDEF';
    for(let i = 0; i < 6; i++)
    {
        hexCode += hexDigit[Math.floor(Math.random() *16)];
        // show Hex color code 
        color.textContent = hexCode;
    }
    return hexCode;
        
}
// function copy() {
//     let textarea = document.querySelector('.color');
//     textarea.select();
//     document.execCommand("copy");
//   }

button.onclick = () => {
    // changes background color
    container.style.backgroundColor = randomColor();
};