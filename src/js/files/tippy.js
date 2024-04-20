
import { isMobile, FLS } from "./functions.js";
import { flsModules } from "./modules.js";

import tippy from 'tippy.js';

// Соединение стилей с src/scss/libs
import "../../scss/libs/tippy.scss";
// Подключение стилей с node_modules
//import 'tippy.js/dist/tippy.css';

// Запускаем и добавляем в объект модулей
flsModules.tippy = tippy('[data-tippy-content]', {

});