let score = 0;
let openMouth = false; // для відстеження відкритого рота
let fishCount = 0; // для підрахунку рибок

function changeCat() {
    const cat = document.getElementById('cat');
    const originalSrc = 'https://github.com/Govo-Mein/picture/blob/main/image__2_-removebg-preview.png?raw=true';
    const newSrc = 'https://github.com/Govo-Mein/picture/blob/main/image__3_-removebg-preview%20(1).png?raw=true';

    if (!openMouth) {
        cat.src = newSrc;
        openMouth = true;
    }

    dropFood();
}

function dropFood() {
    const food = document.createElement('img');
    const scoreDisplay = document.getElementById('score');
    const cat = document.getElementById('cat');
    fishCount++; // Збільшуємо кількість рибок

    // Створюємо нову рибку
    food.src = 'https://github.com/Govo-Mein/picture/blob/main/fish-removebg-preview.png?raw=true';
    food.className = 'food';
    food.style.top = '170px'; // Початкове положення нижче котика
    food.style.left = 'calc(50% - 18px)'; // Зсунемо рибку на 3 пікселі вліво
    document.body.appendChild(food);

    // Дати їй плавне падіння
    setTimeout(() => {
        food.style.top = '315px'; // Задаємо кінцеву позицію
    }, 100); // Трохи часу для підготовки стилів

    // Приховати рибку після досягнення кінцевого положення
    setTimeout(() => {
        food.style.display = 'none';
        document.body.removeChild(food);
        score++;
        scoreDisplay.textContent = `Кількість натискань: ${score}`;

        fishCount--; // Зменшуємо кількість рибок
        // Перевірка, чи всі рибки зникли
        if (fishCount === 0) {
            cat.src = 'https://github.com/Govo-Mein/picture/blob/main/image__2_-removebg-preview.png?raw=true';
            openMouth = false;
        }
    }, 1600); // 1.6 секунди для плавного падіння + 100 мс затримки
}
