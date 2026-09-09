// components.js - База данных комплектующих

const componentsData = {
    cpus: [
        // === Бюджетный сегмент (офис, учеба, простые задачи) ===
        {
            id: 'CPU5',
            name: 'Intel Celeron G5905',
            price: 4990,
            socket: 'LGA1200',
            tdp: 58,
            memoryType: 'DDR4',
            integratedGraphics: true
        },
        {
            id: 'CPU6',
            name: 'AMD Athlon 3000G',
            price: 5990,
            socket: 'AM4',
            tdp: 35,
            memoryType: 'DDR4',
            integratedGraphics: true
        },
        {
            id: 'CPU7',
            name: 'Intel Core i3-12100F',
            price: 8990,
            socket: 'LGA1700',
            tdp: 58,
            memoryType: 'DDR4',
            integratedGraphics: false
        },
        {
            id: 'CPU8',
            name: 'AMD Ryzen 5 5500',
            price: 10990,
            socket: 'AM4',
            tdp: 65,
            memoryType: 'DDR4',
            integratedGraphics: false
        },

        // === Средний сегмент (игры, работа) ===
        {
            id: 'CPU9',
            name: 'Intel Core i5-13400F',
            price: 20990,
            socket: 'LGA1700',
            tdp: 65,
            memoryType: 'DDR4',
            integratedGraphics: false
        },
        {
            id: 'CPU10',
            name: 'AMD Ryzen 7 5700X',
            price: 18990,
            socket: 'AM4',
            tdp: 65,
            memoryType: 'DDR4',
            integratedGraphics: false
        },
        {
            id: 'CPU11',
            name: 'Intel Core i5-13600K',
            price: 29990,
            socket: 'LGA1700',
            tdp: 125,
            memoryType: 'DDR4',
            integratedGraphics: true
        },
        {
            id: 'CPU12',
            name: 'AMD Ryzen 7 7700X',
            price: 31990,
            socket: 'AM5',
            tdp: 105,
            memoryType: 'DDR5',
            integratedGraphics: true
        },

        // === Высокий сегмент (тяжелые игры, монтаж, стриминг) ===
        {
            id: 'CPU13',
            name: 'Intel Core i7-13700K',
            price: 39990,
            socket: 'LGA1700',
            tdp: 125,
            memoryType: 'DDR4',
            integratedGraphics: true
        },
        {
            id: 'CPU14',
            name: 'AMD Ryzen 9 7900X',
            price: 44990,
            socket: 'AM5',
            tdp: 170,
            memoryType: 'DDR5',
            integratedGraphics: true
        },
        {
            id: 'CPU15',
            name: 'Intel Core i9-13900K',
            price: 55990,
            socket: 'LGA1700',
            tdp: 125,
            memoryType: 'DDR4',
            integratedGraphics: true
        },
        {
            id: 'CPU16',
            name: 'AMD Ryzen 9 7950X',
            price: 57990,
            socket: 'AM5',
            tdp: 170,
            memoryType: 'DDR5',
            integratedGraphics: true
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
