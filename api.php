
<?php
// $name = $_GET['name'] ?? 'Гость';
// echo $name; // Выведет значение $_GET['name'] или 'Гость', если переменная не установлена

// Ваш API-ключ и IP-адрес пользователя
$api_key = '447101F4AC0051415D4AE0F3AA23778D';
$user_ip =  $_SERVER['HTTP_X_REAL_IP'];

var_dump ($user_ip);

// URL-адрес API
$url = "https://api.ip2location.io/?key={$api_key}&ip={$user_ip}";

// echo $url;

// Получение ответа от API
$response = file_get_contents($url);

// echo $response;

// Парсинг JSON-ответа
$data = json_decode($response, true);

print_r ($data);


$country_code = $data['country_code'];
echo $country_code;

if ($country_code === 'RU') {
    echo "Привет, житель России";
} else {
    echo "Привет, житель Узбекистана";
}


// Получение города из данных
$city = isset($data['city_name']) ? $data['city_name'] : 'Unknown';

// Возвращаем ответ в формате JSON
$response = ['city_name' => $city];
echo json_encode($response);


// Использование города для динамической настройки содержимого страницы
echo "Привет, житель города {$city}!";
?>
