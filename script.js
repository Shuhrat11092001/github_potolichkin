fetch('api.php')
.then(response => response.json()) // Преобразование ответа в JSON
.then(data => {
    var region = data.region_name || 'Unknown'; // Получение города или использование значения 'Unknown', если город не был получен
    console.log("Received city name:", region);
    var parsedResponse = JSON.parse(response); // Преобразование JSON-строки в объект JavaScript

   // Преобразование юникод-последовательностей в русские символы
    var regionName = decodeURIComponent(JSON.stringify(parsedResponse.region_name).replace(/\\u([\d\w]{4})/gi, function (match, grp) {
    return String.fromCharCode(parseInt(grp, 16));
}));

console.log(regionName); // Выведет "Бухара"
})
.catch(error => {
    console.error('Error:', error);
});
