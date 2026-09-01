// components.js - База данных комплектующих

const componentsData = {
    cpus: [
        {
            id: 'CPU1',
            name: 'Intel Core i5-12400F',
            price: 18990,
            socket: 'LGA1700',
            tdp: 65,
            memoryType: 'DDR4',
            integratedGraphics: false
        },
        {
            id: 'CPU2',
            name: 'Intel Core i7-12700K',
            price: 31990,
            socket: 'LGA1700',
            tdp: 125,
            memoryType: 'DDR4',
            integratedGraphics: true
        },
        {
            id: 'CPU3',
            name: 'AMD Ryzen 5 5600X',
            price: 15990,
            socket: 'AM4',
            tdp: 65,
            memoryType: 'DDR4',
            integratedGraphics: false
        },
        {
            id: 'CPU4',
            name: 'AMD Ryzen 7 5800X3D',
            price: 28990,
            socket: 'AM4',
            tdp: 105,
            memoryType: 'DDR4',
            integratedGraphics: false
        }
        // Добавляйте новые процессоры здесь
    ],
    
    motherboards: [
        {
            id: 'MB1',
            name: 'MSI B660M-A PRO',
            price: 9990,
            socket: 'LGA1700',
            formFactor: 'Micro-ATX',
            memoryType: 'DDR4'
        },
        {
            id: 'MB2',
            name: 'ASUS ROG STRIX Z690-A',
            price: 18990,
            socket: 'LGA1700',
            formFactor: 'ATX',
            memoryType: 'DDR4'
        },
        {
            id: 'MB3',
            name: 'Gigabyte B550 AORUS ELITE',
            price: 11990,
            socket: 'AM4',
            formFactor: 'ATX',
            memoryType: 'DDR4'
        }
        // Добавляйте новые материнские платы здесь
    ],
    
    rams: [
        {
            id: 'RAM1',
            name: 'Corsair Vengeance LPX 16GB',
            price: 6990,
            type: 'DDR4',
            speed: 3200
        },
        {
            id: 'RAM2',
            name: 'Kingston Fury Beast 32GB',
            price: 12990,
            type: 'DDR4',
            speed: 3600
        },
        {
            id: 'RAM3',
            name: 'G.Skill Trident Z 16GB',
            price: 8990,
            type: 'DDR4',
            speed: 4000
        }
        // Добавляйте новую память здесь
    ],
    
    gpus: [
        {
            id: 'GPU1',
            name: 'RTX 3060',
            price: 32990,
            length: 242,
            tdp: 170
        },
        {
            id: 'GPU2',
            name: 'RTX 3080',
            price: 69990,
            length: 285,
            tdp: 320
        },
        {
            id: 'GPU3',
            name: 'AMD RX 6700 XT',
            price: 34990,
            length: 267,
            tdp: 230
        },
        {
            id: 'GPU4',
            name: 'GeForce GTX 1060',
            price: 12990,
            length: 250,
            tdp: 120
        },
        {
            id: 'GPU5',
            name: 'GeForce RTX 2060',
            price: 24500,
            length: 228,
            tdp: 175
        }
        // Добавляйте новые видеокарты здесь
    ],
    
    psus: [
        {
            id: 'PSU1',
            name: 'Corsair RM650x',
            price: 7990,
            wattage: 650
        },
        {
            id: 'PSU2',
            name: 'be quiet! Straight Power 11 750W',
            price: 10990,
            wattage: 750
        },
        {
            id: 'PSU3',
            name: 'Seasonic Focus GX-850',
            price: 13990,
            wattage: 850
        }
        // Добавляйте новые блоки питания здесь
    ],
    
    cases: [
        {
            id: 'CASE1',
            name: 'NZXT H510',
            price: 6990,
            maxGpuLength: 381,
            formFactors: ['ATX', 'Micro-ATX', 'Mini-ITX']
        },
        {
            id: 'CASE2',
            name: 'Fractal Design Meshify C',
            price: 8990,
            maxGpuLength: 315,
            formFactors: ['ATX', 'Micro-ATX', 'Mini-ITX']
        },
        {
            id: 'CASE3',
            name: 'Cooler Master MasterBox Q300L',
            price: 3990,
            maxGpuLength: 360,
            formFactors: ['Micro-ATX', 'Mini-ITX']
        }
        // Добавляйте новые корпуса здесь
    ]
};

// Функция для форматирования цены
function formatPrice(price) {
    return price.toLocaleString('ru-RU') + ' ₽';
}
