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
let slideIndex = 0;
showSlides();

function showSlides() {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }
    if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }
    slides.forEach(slide => {
        slide.style.display = 'none';
    });
    dots.forEach(dot => {
        dot.classList.remove('active');
    });
    slides[slideIndex].style.display = 'flex';
    dots[slideIndex].classList.add('active');
}

function plusSlides(n) {
    slideIndex += n;
    showSlides();
}

function currentSlide(n) {
    slideIndex = n;
    showSlides();
}

document.querySelector('.prev').addEventListener('click', () => {
    plusSlides(-1);
});

document.querySelector('.next').addEventListener('click', () => {
    plusSlides(1);
});

const dots = document.querySelectorAll('.dot');
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentSlide(index);
    });
});
intervalId = setInterval(() => {
    plusSlides(1);
}, 3000); // Интервал в миллисекундах (здесь 3000 мс = 3 секунды)