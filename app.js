// Инициализация VK Bridge
let vkBridge = null;

try {
    vkBridge = vkBridge.send('VKWebAppInit');
    console.log('VK Bridge initialized');
} catch(e) {
    console.log('VK Bridge not available');
}

// Получение данных пользователя (если доступно)
async function getUserInfo() {
    try {
        if (window.VKWebAppBridge) {
            const user = await VKWebAppBridge.send('VKWebAppGetUserInfo');
            if (user && user.first_name) {
                document.getElementById('userGreeting').textContent = 
                    `Привет, ${user.first_name}! Собери свой идеальный компьютер`;
            }
        }
    } catch(e) {
        console.log('Cannot get user info');
    }
}

// Функция расчета стоимости
function calculatePrice() {
    const selects = ['cpu', 'gpu', 'ram', 'storage'];
    let totalPrice = 0;
    let configSummary = [];
    let allSelected = true;

    selects.forEach(selectId => {
        const select = document.getElementById(selectId);
        const selectedOption = select.options[select.selectedIndex];
        
        if (selectedOption.value) {
            const price = parseInt(selectedOption.dataset.price);
            totalPrice += price;
            configSummary.push(`${selectedOption.text}`);
        } else {
            allSelected = false;
        }
    });

    const resultDiv = document.getElementById('result');
    
    if (!allSelected) {
        alert('Пожалуйста, выберите все комплектующие');
        resultDiv.classList.add('hidden');
        return;
    }

    // Показываем результат
    document.getElementById('totalPrice').textContent = 
        totalPrice.toLocaleString('ru-RU') + ' ₽';
    
    // Показываем сводку
    const summaryDiv = document.getElementById('configSummary');
    summaryDiv.innerHTML = configSummary.map(item => 
        `<div>✓ ${item}</div>`
    ).join('');

    resultDiv.classList.remove('hidden');
    
    // Сохраняем данные для шаринга
    window.currentConfig = {
        totalPrice: totalPrice,
        summary: configSummary
    };
}

// Функция отправки в VK
async function shareConfig() {
    if (!window.currentConfig) return;

    const message = `🖥️ Моя сборка ПК:\n\n${window.currentConfig.summary.join('\n')}\n\n💰 Итого: ${window.currentConfig.totalPrice.toLocaleString('ru-RU')} ₽`;

    try {
        if (window.VKWebAppBridge) {
            // Пытаемся использовать VK Bridge для шаринга
            await VKWebAppBridge.send('VKWebAppShare', {
                link: message
            });
        } else {
            // Fallback для обычного браузера
            prompt('Скопируйте вашу конфигурацию:', message);
        }
    } catch(e) {
        console.log('Share error:', e);
        prompt('Скопируйте вашу конфигурацию:', message);
    }
}

// Привязываем обработчики событий
document.addEventListener('DOMContentLoaded', function() {
    // Инициализация
    getUserInfo();
    
    // Кнопка расчета
    document.getElementById('calculateBtn').addEventListener('click', calculatePrice);
    
    // Кнопка "Поделиться"
    document.getElementById('shareBtn').addEventListener('click', shareConfig);
    
    console.log('Конфигуратор ПК загружен!');
});
