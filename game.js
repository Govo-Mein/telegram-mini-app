let score = 0;

function changeCat() {
    const cat = document.getElementById('cat');
    const food = document.getElementById('food');
    const scoreDisplay = document.getElementById('score');
    const originalSrc = 'https://github.com/Govo-Mein/picture/blob/main/image__2_-removebg-preview.png?raw=true';
    const newSrc = 'https://github.com/Govo-Mein/picture/blob/main/image__3_-removebg-preview%20(1).png?raw=true';

    cat.src = newSrc;

    setTimeout(() => {
        cat.src = originalSrc;
    }, 2000); // 2000 мс = 2 секунди

    // Зробити рибку видимою і встановити її початкову позицію
    food.style.display = 'block';
    food.style.top = '170px'; // Початкове положення нижче котика
    food.style.left = 'calc(50% - 18px)'; // Зсунемо рибку на 5 пікселів вправо

    // Дати їй плавне падіння
    setTimeout(() => {
        food.style.top = '315px'; // Задаємо кінцеву позицію
    }, 100); // Трохи часу для підготовки стилів

    // Приховати рибку після досягнення кінцевого положення
    setTimeout(() => {
        food.style.display = 'none';
        score++;
        scoreDisplay.textContent = `Кількість натискань: ${score}`;
    }, 2000); // 2 секунди для плавного падіння + 100 мс затримки
}
