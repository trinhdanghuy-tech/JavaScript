/** HTML DOM
 * La quy chuan cua w3c(World Wide Web Consort)
 * co 3 thanh phan
 * 
 * -Element: ID, class, tag, CSS selector, html collection
 * -Attribute
 * -Text
 */
//-----------------------------------------------------------//

//JavaScript
//___________________________________________________________//
//ID
var headingNode = document.getElementById('heading')
console.log(headingNode)
//   Class
var headingNodes = document.getElementsByClassName('select')
console.log(headingNodes)
//tag
var tagname = document.getElementsByTagName('h2')
console.log(tagname)
// CSS selector
var textnode = document.querySelector('.textnode')
console.log(textnode);
var textnodes = document.querySelectorAll('.select')
console.log(textnodes)
//HTML Colection
console.log(document.forms);
console.log(document.anchors)
//---------------------------------------//
// Cach 1
var listItem = document.querySelectorAll('.box-1 li')
console.log(listItem)
//Cach 2
var boxNode = document.querySelector('.box-1')
console.log(boxNode)
console.log(boxNode.querySelectorAll('li'))
console.log(boxNode.querySelector('p'))
//----------------------------------------//
/** Attribute Node va Text Node */
// Attribute Node DOM
var headingElememt = document.querySelector('h1')
//Cach 1
// headingElememt.className = 'Heading'
// console.log(headingElememt)
//Cach 2
headingElememt.setAttribute('style', 'color: red')
headingElememt.setAttribute('class', 'lmao')
console.log(headingElememt)
//Su dung phuong thuc getAttribute
console.log(textnode.getAttribute('class'))
//_______________________________________//
var headinga = document.querySelector('a')
headinga.href ='https://fullstack.edu.vn/learning/javascript-co-ban?id=9705a544-85bb-4dbf-886e-cfc3748784a2'
console.log(headinga)
//Su dung phuong thuc getAttribute
console.log(textnode.getAttribute('class'))
//____________________________________________//
/** InnerText va textContent Property */
console.log(headingElememt.innerText); //Lay ra noi dung cua dong 42
console.log(headingElememt.innerText);
console.log(headingElememt.textContent);
//_________________________________________________//
/** InnerHTML va OuterHTML */
var boxElement = document.querySelector('.box1');
// boxElement.innerHTML = '<h1>Tao la Huy</h1>'
boxElement.outerHTML = '<h1>Tao la Huy</h1>'
console.log(boxElement.innerHTML)


