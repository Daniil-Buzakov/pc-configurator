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
        // === Бюджетные (офис, простые сборки) ===
        {
            id: 'MB4',
            name: 'ASRock H610M-HDV',
            price: 6490,
            socket: 'LGA1700',
            formFactor: 'Micro-ATX',
            memoryType: 'DDR4'
        },
        {
            id: 'MB5',
            name: 'MSI A520M-A PRO',
            price: 5490,
            socket: 'AM4',
            formFactor: 'Micro-ATX',
            memoryType: 'DDR4'
        },
        
        // === Средний сегмент ===
        {
            id: 'MB6',
            name: 'ASUS TUF GAMING B660M-PLUS',
            price: 13990,
            socket: 'LGA1700',
            formFactor: 'Micro-ATX',
            memoryType: 'DDR4'
        },
        {
            id: 'MB7',
            name: 'MSI MAG B550 TOMAHAWK',
            price: 14990,
            socket: 'AM4',
            formFactor: 'ATX',
            memoryType: 'DDR4'
        },
        {
            id: 'MB8',
            name: 'Gigabyte B760M DS3H',
            price: 10990,
            socket: 'LGA1700',
            formFactor: 'Micro-ATX',
            memoryType: 'DDR4'
        },
        
        // === Высокий сегмент ===
        {
            id: 'MB9',
            name: 'ASUS ROG STRIX B650E-F GAMING',
            price: 24990,
            socket: 'AM5',
            formFactor: 'ATX',
            memoryType: 'DDR5'
        },
        {
            id: 'MB10',
            name: 'MSI MPG Z790 EDGE WIFI',
            price: 27990,
            socket: 'LGA1700',
            formFactor: 'ATX',
            memoryType: 'DDR5'
        },
        {
            id: 'MB11',
            name: 'Gigabyte X670 AORUS ELITE AX',
            price: 26990,
            socket: 'AM5',
            formFactor: 'ATX',
            memoryType: 'DDR5'
        }
        // Добавляйте новые материнские платы здесь
    ],
    
    rams: [
        // === Бюджетные ===
        {
            id: 'RAM4',
            name: 'Crucial 8GB DDR4',
            price: 2490,
            type: 'DDR4',
            speed: 3200
        },
        {
            id: 'RAM5',
            name: 'Patriot Viper Steel 16GB',
            price: 5490,
            type: 'DDR4',
            speed: 3600
        },
        
        // === Средний сегмент ===
        {
            id: 'RAM6',
            name: 'ADATA XPG Spectrix D50 16GB',
            price: 6490,
            type: 'DDR4',
            speed: 3600
        },
        {
            id: 'RAM7',
            name: 'Corsair Vengeance RGB Pro 32GB',
            price: 11990,
            type: 'DDR4',
            speed: 3600
        },
        
        // === Высокий сегмент / DDR5 ===
        {
            id: 'RAM8',
            name: 'Kingston Fury Beast 32GB DDR5',
            price: 14990,
            type: 'DDR5',
            speed: 5600
        },
        {
            id: 'RAM9',
            name: 'G.Skill Trident Z5 RGB 32GB',
            price: 18990,
            type: 'DDR5',
            speed: 6000
        },
        {
            id: 'RAM10',
            name: 'Corsair Dominator Platinum 64GB',
            price: 34990,
            type: 'DDR5',
            speed: 6200
        }
        // Добавляйте новую память здесь
    ],
    
    gpus: [
        // === Начальный уровень (офис, мультимедиа, старые игры) ===
        {
            id: 'GPU17',
            name: 'GeForce GT 1030',
            price: 6990,
            length: 150,
            tdp: 30
        },
        {
            id: 'GPU18',
            name: 'AMD RX 6400',
            price: 12990,
            length: 170,
            tdp: 53
        },
        {
            id: 'GPU4',
            name: 'GeForce GTX 1060',
            price: 12990,
            length: 250,
            tdp: 120
        },
        
        // === Бюджетный игровой сегмент ===
        {
            id: 'GPU6',
            name: 'GeForce GTX 1650',
            price: 15990,
            length: 190,
            tdp: 75
        },
        {
            id: 'GPU19',
            name: 'GeForce GTX 1660 SUPER',
            price: 19990,
            length: 230,
            tdp: 125
        },
        {
            id: 'GPU20',
            name: 'AMD RX 6500 XT',
            price: 17990,
            length: 200,
            tdp: 107
        },
        {
            id: 'GPU21',
            name: 'Intel Arc A380',
            price: 13990,
            length: 190,
            tdp: 75
        },
        
        // === Средний сегмент ===
        {
            id: 'GPU5',
            name: 'GeForce RTX 2060',
            price: 24500,
            length: 228,
            tdp: 175
        },
        {
            id: 'GPU7',
            name: 'AMD RX 6600',
            price: 24990,
            length: 240,
            tdp: 132
        },
        {
            id: 'GPU22',
            name: 'GeForce RTX 3050',
            price: 26990,
            length: 242,
            tdp: 130
        },
        {
            id: 'GPU23',
            name: 'AMD RX 6600 XT',
            price: 29990,
            length: 240,
            tdp: 160
        },
        {
            id: 'GPU24',
            name: 'Intel Arc A750',
            price: 27990,
            length: 280,
            tdp: 225
        },
        
        // === Выше среднего ===
        {
            id: 'GPU1',
            name: 'RTX 3060',
            price: 32990,
            length: 242,
            tdp: 170
        },
        {
            id: 'GPU8',
            name: 'GeForce RTX 4060',
            price: 32990,
            length: 244,
            tdp: 115
        },
        {
            id: 'GPU3',
            name: 'AMD RX 6700 XT',
            price: 34990,
            length: 267,
            tdp: 230
        },
        {
            id: 'GPU25',
            name: 'GeForce RTX 3060 Ti',
            price: 37990,
            length: 242,
            tdp: 200
        },
        {
            id: 'GPU26',
            name: 'AMD RX 6750 XT',
            price: 39990,
            length: 267,
            tdp: 250
        },
        {
            id: 'GPU27',
            name: 'Intel Arc A770 16GB',
            price: 34990,
            length: 280,
            tdp: 225
        },
        
        // === Производительный сегмент ===
        {
            id: 'GPU9',
            name: 'GeForce RTX 4060 Ti',
            price: 44990,
            length: 250,
            tdp: 160
        },
        {
            id: 'GPU28',
            name: 'GeForce RTX 3070',
            price: 47990,
            length: 242,
            tdp: 220
        },
        {
            id: 'GPU29',
            name: 'AMD RX 6800',
            price: 46990,
            length: 267,
            tdp: 250
        },
        {
            id: 'GPU10',
            name: 'AMD RX 7700 XT',
            price: 47990,
            length: 280,
            tdp: 245
        },
        
        // === Высокий сегмент ===
        {
            id: 'GPU30',
            name: 'GeForce RTX 3070 Ti',
            price: 54990,
            length: 267,
            tdp: 290
        },
        {
            id: 'GPU13',
            name: 'AMD RX 7800 XT',
            price: 54990,
            length: 267,
            tdp: 263
        },
        {
            id: 'GPU31',
            name: 'GeForce RTX 4070 SUPER',
            price: 62990,
            length: 244,
            tdp: 220
        },
        {
            id: 'GPU11',
            name: 'GeForce RTX 4070',
            price: 59990,
            length: 244,
            tdp: 200
        },
        {
            id: 'GPU32',
            name: 'AMD RX 6900 XT',
            price: 64990,
            length: 267,
            tdp: 300
        },
        
        // === Топовый сегмент ===
        {
            id: 'GPU2',
            name: 'RTX 3080',
            price: 69990,
            length: 285,
            tdp: 320
        },
        {
            id: 'GPU33',
            name: 'GeForce RTX 4070 Ti SUPER',
            price: 79990,
            length: 305,
            tdp: 285
        },
        {
            id: 'GPU12',
            name: 'GeForce RTX 4070 Ti',
            price: 79990,
            length: 305,
            tdp: 285
        },
        {
            id: 'GPU34',
            name: 'AMD RX 7900 GRE',
            price: 69990,
            length: 280,
            tdp: 260
        },
        {
            id: 'GPU35',
            name: 'GeForce RTX 3080 Ti',
            price: 89990,
            length: 285,
            tdp: 350
        },
        {
            id: 'GPU36',
            name: 'AMD RX 7900 XT',
            price: 84990,
            length: 287,
            tdp: 315
        },
        
        // === Энтузиастский сегмент ===
        {
            id: 'GPU37',
            name: 'GeForce RTX 4080 SUPER',
            price: 99990,
            length: 310,
            tdp: 320
        },
        {
            id: 'GPU14',
            name: 'GeForce RTX 4080',
            price: 109990,
            length: 310,
            tdp: 320
        },
        {
            id: 'GPU15',
            name: 'AMD RX 7900 XTX',
            price: 99990,
            length: 287,
            tdp: 355
        },
        {
            id: 'GPU38',
            name: 'GeForce RTX 3090',
            price: 119990,
            length: 313,
            tdp: 350
        },
        
        // === Абсолютный топ ===
        {
            id: 'GPU39',
            name: 'GeForce RTX 3090 Ti',
            price: 149990,
            length: 313,
            tdp: 450
        },
        {
            id: 'GPU16',
            name: 'GeForce RTX 4090',
            price: 189990,
            length: 304,
            tdp: 450
        }
        // Добавляйте новые видеокарты здесь
    ],
    
    psus: [
        // === Бюджетные ===
        {
            id: 'PSU4',
            name: 'DeepCool PF450',
            price: 3490,
            wattage: 450
        },
        {
            id: 'PSU5',
            name: 'be quiet! System Power 10 550W',
            price: 5490,
            wattage: 550
        },
        
        // === Средний сегмент ===
        {
            id: 'PSU6',
            name: 'Corsair CX650F RGB',
            price: 6990,
            wattage: 650
        },
        {
            id: 'PSU7',
            name: 'Cooler Master MWE Gold 750 V2',
            price: 8990,
            wattage: 750
        },
        
        // === Высокий сегмент ===
        {
            id: 'PSU8',
            name: 'Corsair RM850x SHIFT',
            price: 14990,
            wattage: 850
        },
        {
            id: 'PSU9',
            name: 'Seasonic Prime TX-1000',
            price: 24990,
            wattage: 1000
        },
        {
            id: 'PSU10',
            name: 'be quiet! Dark Power 13 1000W',
            price: 27990,
            wattage: 1000
        }
        // Добавляйте новые блоки питания здесь
    ],
    
    cases: [
        // === Бюджетные ===
        {
            id: 'CASE4',
            name: 'DeepCool MATREXX 40',
            price: 2990,
            maxGpuLength: 320,
            formFactors: ['Micro-ATX', 'Mini-ITX']
        },
        {
            id: 'CASE5',
            name: 'Zalman S2',
            price: 3490,
            maxGpuLength: 330,
            formFactors: ['ATX', 'Micro-ATX', 'Mini-ITX']
        },
        
        // === Средний сегмент ===
        {
            id: 'CASE6',
            name: 'Lian Li Lancool 216',
            price: 7990,
            maxGpuLength: 392,
            formFactors: ['ATX', 'Micro-ATX', 'Mini-ITX']
        },
        {
            id: 'CASE7',
            name: 'Corsair 4000D Airflow',
            price: 8990,
            maxGpuLength: 360,
            formFactors: ['ATX', 'Micro-ATX', 'Mini-ITX']
        },
        {
            id: 'CASE8',
            name: 'Phanteks Eclipse P400A',
            price: 7490,
            maxGpuLength: 420,
            formFactors: ['ATX', 'Micro-ATX', 'Mini-ITX']
        },
        
        // === Высокий сегмент ===
        {
            id: 'CASE9',
            name: 'NZXT H7 Flow',
            price: 10990,
            maxGpuLength: 400,
            formFactors: ['ATX', 'Micro-ATX', 'Mini-ITX']
        },
        {
            id: 'CASE10',
            name: 'Lian Li O11 Dynamic EVO',
            price: 13990,
            maxGpuLength: 426,
            formFactors: ['ATX', 'Micro-ATX', 'Mini-ITX']
        },
        {
            id: 'CASE11',
            name: 'Fractal Design Torrent',
            price: 16990,
            maxGpuLength: 423,
            formFactors: ['ATX', 'Micro-ATX', 'Mini-ITX']
        }
        // Добавляйте новые корпуса здесь
    ]
};

// Функция для форматирования цены
function formatPrice(price) {
    return price.toLocaleString('ru-RU') + ' ₽';
}
