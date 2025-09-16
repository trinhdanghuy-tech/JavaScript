/** DOM Events 
* 1. Attribute events
* 2.Assign event using the elements node 
*/
var h1Elements = document.querySelectorAll('h1');
for(var i = 0; i < h1Elements.length; i++){
    h1Elements[i].onclick = function(e) {
        console.log(e.target)
    }
}
//____________________________________________//
/** Example Events */
var inputValue;
var inputElement = document.querySelector('input[type="text"]') 
//-onchange dung de lay value thay doi khi thay doi trong text
inputElement.onchange = function(e) {
    console.log(e.target.value)
}
//--------------Oninput-------------------------
// inputElement.oninput = function(e) {
//     inputValue = e.target.value;    
// }
//-----------------Onchange---------------------
// var inputEle = document.querySelector('input[type="checkbox"]');
// inputEle.onchange =function(e) {
//     console.log(e.target.checked)
// }
// var selectElement = document.querySelector('select')
// selectElement.onchange = function(e) {
//     console.log(e.target.value)
// }
//---------Onkeydown-------------------------
inputElement.onkeydown = function(e) {
    console.log(e.target.value)
}
//----------Onkeyup-------------------
// inputElement.onkeyup = function(e) {
//     console.log(e.which)
//            
//     }
    
// }
//-------------Onkeypress------------------
document.onkeypress = function(e) {
    console.log(e.which)
    switch(e.which) {
        case 27:
            console.log('Exit')
            break;
        case 13:
            console.log('Send')
    }
}
//------------------------------------------------------------//
//      DOM Events

//1. preventDefault
//2. StopPropagation
//----------------preventDefault-----------------------------//
var aElements = document.links;
for(var i = 0; i < aElements.length; ++i) {
    aElements[i].onclick = function(e) {
        if(!e.target.href.startsWith('https://fullstack.edu.vn')){
            e.preventDefault();
        }
    }
}
var ulElement = document.querySelector('ul');
ulElement.onmousedown = function(e) {
    e.preventDefault();
}
ulElement.onclick = function(e) {
    console.log(e.target)
}
//_______________StopPropagation________________//
//Dung de dung cac nổi bọt
document.querySelector('div').onclick = function(e) {
    console.log('DIV')
}
document.querySelector('button').onclick = function(e) {
    e.stopPropagation();
    console.log('Click Me!!')
}

