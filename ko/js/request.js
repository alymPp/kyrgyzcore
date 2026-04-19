// ====================================
// ПОЛНАЯ СИСТЕМА БРОНИРОВАНИЯ
// Копируй это в свой main.js или tour-booking.js
// ====================================

const tourDates = {
    // ============ EXPRESS KYRGYZSTAN (4 DAYS) ============
    'Express Kyrgyzstan (4 days)': [
        // АПРЕЛЬ
        { departure: 'April 15, 2026 - Wed', end: 'April 18, 2026 - Sat', price: '650$ – 800$', spotsLeft: 10 },
        
        // МАЙ
        { departure: 'May 7, 2026 - Thu', end: 'May 10, 2026 - Sun', price: '650$ – 800$', spotsLeft: 7 },
        { departure: 'May 29, 2026 - Fri', end: 'June 1, 2026 - Mon', price: '700$ – 850$', spotsLeft: 8 },
        
        // ИЮНЬ
        { departure: 'June 19, 2026 - Fri', end: 'June 22, 2026 - Mon', price: '700$ – 850$', spotsLeft: 10 }
    ],

    // ============ KYRGYZ CORE (5 DAYS) ============
    'Kyrgyz Core (5 days)': [
        // АПРЕЛЬ
        { departure: 'April 21, 2026 - Tue', end: 'April 25, 2026 - Sat', price: '850$ – 1050$', spotsLeft: 9 },
        
        // МАЙ
        { departure: 'May 13, 2026 - Wed', end: 'May 17, 2026 - Sun', price: '850$ – 1050$', spotsLeft: 8 },
        
        // ИЮНЬ
        { departure: 'June 4, 2026 - Thu', end: 'June 8, 2026 - Mon', price: '900$ – 1100$', spotsLeft: 7 },
        { departure: 'June 25, 2026 - Thu', end: 'June 29, 2026 - Mon', price: '900$ – 1100$', spotsLeft: 9 }
    ],

    // ============ KYRGYZ DISCOVERY (6 DAYS) ============
    'Kyrgyz Discovery (6 days)': [
        // АПРЕЛЬ
        { departure: 'April 28, 2026 - Tue', end: 'May 3, 2026 - Sun', price: '1030$ – 1260$', spotsLeft: 6 },
        
        // МАЙ
        { departure: 'May 20, 2026 - Wed', end: 'May 25, 2026 - Mon', price: '1030$ – 1260$', spotsLeft: 9 },
        
        // ИЮНЬ
        { departure: 'June 11, 2026 - Thu', end: 'June 16, 2026 - Tue', price: '1100$ – 1350$', spotsLeft: 7 }
    ]
};

// ====================================
// ФУНКЦИЯ ОТКРЫТИЯ МОДАЛКИ С ДАТАМИ
// ====================================
function openModalWithDate(tourName, departureDate, endDate, priceRange, spotsLeft) {
    // Устанавливаем название тура
    const modalTitle = document.getElementById('modalTourName');
    if (modalTitle) {
        modalTitle.textContent = tourName;
    }
    
    // Скрытые поля для отправки формы
    const hiddenTourName = document.getElementById('hiddenTourName') || document.querySelector('input[name="tour_name"]');
    if (hiddenTourName) {
        hiddenTourName.value = tourName;
    }
    
    const hiddenDates = document.getElementById('hiddenSelectedDates');
    if (hiddenDates) {
        hiddenDates.value = `${departureDate} → ${endDate}`;
    }
    
    const hiddenPrice = document.getElementById('hiddenPriceRange');
    if (hiddenPrice) {
        hiddenPrice.value = priceRange;
    }
    
    // Заполняем select с датами
    const selectElement = document.getElementById('tourDateSelect');
    if (selectElement) {
        selectElement.innerHTML = '<option value="">-- Select a date --</option>';
        
        // Получаем все доступные даты для этого тура
        const dates = tourDates[tourName] || [];
        
        dates.forEach(date => {
            // Пропускаем распроданные туры
            if (date.spotsLeft === 0) return;
            
            const option = document.createElement('option');
            option.value = `${date.departure} → ${date.end}`;
            
            // Текст опции с количеством мест
            const spotsText = date.spotsLeft <= 5 ? 
                `${date.spotsLeft} spots left` : 
                `${date.spotsLeft} places available`;
            
            option.textContent = `${date.departure} → ${date.end} (${spotsText})`;
            
            // Автоматически выбираем дату, на которую кликнули
            if (date.departure === departureDate && date.end === endDate) {
                option.selected = true;
            }
            
            selectElement.appendChild(option);
        });
    }
    
    // Открываем модалку
    const modal = document.getElementById("bookingModal");
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    
    // Скрываем WhatsApp виджет если есть
    const waWidget = document.getElementById("waWidget");
    if (waWidget) {
        waWidget.style.display = 'none';
    }
}

// ====================================
// СТАРАЯ ФУНКЦИЯ (для обратной совместимости)
// ====================================
function openModal(tourName) {
    openModalWithDate(tourName, '', '', '', 0);
}

// ====================================
// ЗАКРЫТИЕ МОДАЛКИ
// ====================================
function closeModal() {
    const modal = document.getElementById("bookingModal");
    if (modal) {
        modal.classList.remove('active');
    }
    
    document.body.style.overflow = '';
    
    // Показываем WhatsApp виджет обратно
    const waWidget = document.getElementById("waWidget");
    if (waWidget) {
        waWidget.style.display = 'flex';
    }
}

// ====================================
// ЗАКРЫТИЕ ПО КЛИКУ ВНЕ МОДАЛКИ
// ====================================
window.onclick = function(event) {
    const modal = document.getElementById("bookingModal");
    if (event.target === modal) {
        closeModal();
    }
}

// ====================================
// ЗАКРЫТИЕ ПО ESC
// ====================================
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        const modal = document.getElementById("bookingModal");
        if (modal && modal.classList.contains('active')) {
            closeModal();
        }
    }
});

// ====================================
// УСПЕШНАЯ ОТПРАВКА ФОРМЫ
// ====================================
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('#bookingModal form');
    if (form) {
        form.addEventListener('submit', function(e) {
            // Здесь можно добавить дополнительную логику перед отправкой
            console.log('Form submitted');
            
            // Форма отправится автоматически на web3forms
            // После успешной отправки можно показать сообщение
            setTimeout(() => {
                alert('Thank you! We will contact you within 24 hours.');
                closeModal();
                form.reset();
            }, 1000);
        });
    }
});

// Старая функция для обратной совместимости
function openModal(tourName) {
    openModalWithDate(tourName, '', '', '', 0);
}

// Функция закрытия модалки
function closeModal() {
    document.getElementById("bookingModal").classList.remove('active');
    document.body.style.overflow = '';
    
    // Показываем WhatsApp виджет обратно
    const waWidget = document.getElementById("waWidget");
    if (waWidget) {
        waWidget.style.display = 'flex';
    }
}

// Закрытие по клику вне модалки
window.onclick = function(event) {
    const modal = document.getElementById("bookingModal");
    if (event.target === modal) {
        closeModal();
    }
}

// Закрытие по ESC
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        const modal = document.getElementById("bookingModal");
        if (modal.classList.contains('active')) {
            closeModal();
        }
    }
});


