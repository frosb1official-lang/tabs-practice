const modalButton = document.querySelectorAll('.more')
const modal = document.querySelector('.modal')
const overlay = modal.querySelector('.overlay')
const closeButton = modal.querySelector('.modal__close')


modalButton.forEach((btn) => {
    btn.addEventListener('click', () => {
        modal.classList.toggle('hidden')
    })
    overlay.addEventListener('click', () => {
    modal.classList.add('hidden')
    })

    closeButton.addEventListener('click', () => {
        modal.classList.add('hidden')
    })
})