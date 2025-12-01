let deadCount = 0;
let lostCount = 0;

function getHole(index) {
    return document.getElementById(`hole${index}`);
}

// Цикл по всем лункам 
for (let i = 1; i <= 9; i++) {
    const hole = getHole(i);
    hole.addEventListener('click', function() {
        // Проверяем, есть ли крот в этой лунке
        if (hole.classList.contains('hole_has-mole')) {
            // Увеличиваем счетчик убитых кротов
            deadCount++;
            // Обновляем отображение счетчика
            document.getElementById('dead').textContent = deadCount;
            // Проверяем условие победы (10 кротов)
            if (deadCount === 10) {
                alert('Вы выиграли!');
                resetGame();
            }
        } else {
            lostCount++;
            document.getElementById('lost').textContent = lostCount;
            // Проверяем условие поражения (5 промахов)
            if (lostCount === 5) {
                alert('Вы проиграли!');
                resetGame();
            }
        }
    });
}

// Функция для сброса статистики и обнуления счетчиков
function resetGame() {
    deadCount = 0;
    lostCount = 0;
    document.getElementById('dead').textContent = deadCount;
    document.getElementById('lost').textContent = lostCount;
}