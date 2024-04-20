/* Календарь */


import { flsModules } from "../modules.js";


import datepicker from 'js-datepicker';

if (document.querySelector('[data-datepicker]')) {
    const picker = datepicker('[data-datepicker]', {
        customDays: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"],
        customMonths: ["Янв", "Фев", "Март", "Апр", "Май", "Июнь", "Июль", "Авг", "Сент", "Окт", "Нояб", "Дек"],
        overlayButton: 'Применять',
        overlayPlaceholder: 'Рік (4 цифры)',
        startDay: 1,
        formatter: (input, date, instance) => {
            const value = date.toLocaleDateString()
            input.value = value
        },
        onSelect: function (input, instance, date) {

        }
    });
    flsModules.datepicker = picker;
}
