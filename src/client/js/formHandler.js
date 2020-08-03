function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value

    Client.checkForName(formText)

    console.log("::: Form Submitted :::")
    fetch('http://localhost:8081/test')
    .then(res => {
        return res.json()
    })
    .then(function(data) {
        document.getElementById('results').innerHTML = data.message
    })
}

export { handleSubmit }



// после запуска express из сервера получаем два файла: index.html и mockAPI.js
// страница port/test содержит json данные
// когда введенное имя из формы совподает с именем из массива names, мы выводим alert("Welcome, Captain!")
// далее делается fetch запрос по адресу port/test, запрос запрашивает значение ключа message
// результат запроса появляется на странице