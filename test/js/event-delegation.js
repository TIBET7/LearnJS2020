const btns = document.querySelectorAll('button');
const wrapper = document.querySelector('.btn-block');


btns.forEach((btn) => {
    btn.style.cssText = 'width: 150px; height: 70px; background-color: green;'
});
document.querySelector('#first').style.cssText = 'width: 1200px; height: 200px; background-color: gray; display: flex; align-items: center;'


//console.log(btns[0].classList.length)
//console.log(btns[0].classList.item(1))
//btns[1].classList.add('red');
//btns[0].classList.remove('blue');
//btns[0].classList.toggle('blue');


/* if (btns[1].classList.contains('red')) {
    console.log('red');
} */

btns[0].addEventListener('click', () => {
    /* if (!btns[1].classList.contains('red')) {
        btns[1].classList.add('red');
    } else {
        btns[1].classList.remove('red');
    } */
    btns[1].classList.toggle('red');
});

wrapper.addEventListener('click', (event) => {
    if (event.target && event.target.tagName === 'BUTTON') {
        console.log('Hello');
    }  
    /* if (event.target && event.target.classList.contains('some')) {
        console.log('Hello');
    } */

    /* if (event.target && event.target.matches('button.red')) {
        console.log('Hello');
    }  */
})

const btn = document.createElement('button');
btn.classList.add('red');
wrapper.append(btn);
btn.style.cssText = 'width: 150px; height: 70px; background-color: red;'

