"use strict"; //только в начале,помогает ликвидировать ошибки в коде


// console.log(document.head);
// console.log(document.documentElement);
// console.log(document.body.childNodes);
// console.log(document.body.firstChild);
// console.log(document.body.firstElementChild);
// console.log(document.querySelector('#current').parentNode.parentNode);// обращение к блоку выше
// // ParentElement
// console.log(document.querySelector('[data-current="3"]').nextElementSibling); // комбинировать кавычки
//nextElementSibling следующий элемент


for(let node of document.body.childNodes){
    if(node.nodeName == '#text'){
       continue;
    }

    console.log(node);
}

