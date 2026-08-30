// Инициализация VK Bridge
function initVK() {
    try {
        if (window.VKWebAppBridge) {
            window.VKWebAppBridge.send('VKWebAppInit');
            console.log('VK Bridge initialized');
        } else {
            console.log('VK Bridge not available, running in browser mode');
        }
    } catch(e) {
        console.log('VK Bridge error:', e);
    }
}

// Получение данных пользователя
async function getUserInfo() {
    try {
        if (window.VKWebAppBridge) {
            const user = await window.VKWebAppBridge.send('VKWebAppGetUserInfo');
            if (user && user.first_name) {
                document.getElementById('userGreeting').textContent = 
                    `Привет, ${user.first_name}! Собери свой идеальный компьютер`;
            }
        }
    } catch(e) {
        console.log('Cannot get user info:', e);
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
            configSummary.push(selectedOption.text);
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

    document.getElementById('totalPrice').textContent = 
        totalPrice.toLocaleString('ru-RU') + ' ₽';
    
    const summaryDiv = document.getElementById('configSummary');
    summaryDiv.innerHTML = configSummary.map(item => 
        `<div>✓ ${item}</div>`
    ).join('');

    resultDiv.classList.remove('hidden');
    
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
            await window.VKWebAppBridge.send('VKWebAppShare', {
                link: message
            });
        } else {
            prompt('Скопируйте вашу конфигурацию:', message);
        }
    } catch(e) {
        console.log('Share error:', e);
        prompt('Скопируйте вашу конфигурацию:', message);
    }
}

// Привязываем обработчики событий
document.addEventListener('DOMContentLoaded', function() {
    initVK();
    getUserInfo();
    
    const calcBtn = document.getElementById('calculateBtn');
    if (calcBtn) {
        calcBtn.addEventListener('click', calculatePrice);
    }
    
    const shareBtn = document.getElementById('shareBtn');
    if (shareBtn) {
        shareBtn.addEventListener('click', shareConfig);
    }
    
    console.log('Конфигуратор ПК загружен!');
});
