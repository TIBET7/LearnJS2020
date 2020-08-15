//console.log(document.head);
//console.log(document.documentElement);
//console.log(document.body.childNodes);
//console.log(document.body.lastChild);
//console.log(document.body.firstChild);
/* console.log(document.body.children);
console.log(document.body.firstElementChild);
console.log(document.body.lastElementChild); */
//console.log(document.querySelector('#current').parentNode.parentNode);
//console.log(document.querySelector('[data-current]').previousElementSibling);

for (const node of document.body.childNodes) {
    if (node.nodeName === '#text') {
        continue;
    }
    if (node.nodeName === '#comment') {
        continue;
    }


    console.log(node);
}