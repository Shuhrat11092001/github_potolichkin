fetch('http://localhost/projec/api.php') // По умолчанию методом fetch отправляется GET-запрос
.then(response => response.json()) // Преобразование ответа в JSON
.then(data => {
    // Обработка полученных данных
    var cityName = data.city_name;
    console.log("Received city name:", cityName);
})
.catch(error => {
    // Обработка ошибок
    console.error('Error:', error);
});