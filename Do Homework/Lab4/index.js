const box1 = document.getElementById('box1');
const box2 = document.getElementById('box2');
const box3 = document.getElementById('box3');

console.log(box1);

const firstTextNote = document.querySelector('.Text-note');
console.log(firstTextNote);

const allTextNotes = document.querySelectorAll('.Text-note');

console.log(allTextNotes);

const btn1 = document.querySelector('.btn-1');

btn1.addEventListener("click", () => {
    alert('Button 1 clicked!');
});

const newTexxt = document.getElementById('Text-note');
newTexxt.innerText = "This is the updated text content!";

const newText = document.querySelector('.Text-note');
newText.innerHTML = "<strong>This text is now bold!</strong>";
newText.style.color = "blue";
newText.style.fontSize = "20px";

newText.classList.add('highlighted');
newText.classList.remove('highlighted');