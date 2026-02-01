const forms = document.querySelectorAll('form')

forms.forEach((form) => { // делаем перебор всех форм на странице
    form.addEventListener('submit', (event) => {
    event.preventDefault()

    const formData = new FormData(form)
    const body = {}

    formData.append('form', form.classList.value)

    formData.forEach((value, field) => {
        body[field] = value

    })
// Отправка формы на сервер
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    // проверка на наличие ошибок ответа сервера
        .then(response => {
            if (response.ok) {
                return response.json()
            } else {
                throw new Error(response.status)
            }
        })
        // вывод в консоль сообщения в случае ошибки/успеха
        .then(data => {
            alert('Данные отправлены успешно!')
        })
        .catch(error => {
            alert('Произошла ошибка! ' + error.message)
        })
        .finally(() => {
            form.reset();
        })
})
})