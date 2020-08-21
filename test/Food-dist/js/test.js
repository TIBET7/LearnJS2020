const modalOpenBtn = document.querySelectorAll('[data-modal]');
const modal = document.querySelector('.modal')

modalOpenBtn.forEach((btn) => {
    btn.addEventListener('click', (event) => {
        event.preventDefault();
        modal.style.display = 'block';
    })
})















