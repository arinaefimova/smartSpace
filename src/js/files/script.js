
import { isMobile } from "./functions.js";
import { flsModules } from "./modules.js";

const iconMenu = document.querySelector('.icon-menu');
if (iconMenu) {
    const menuBody = document.querySelector('.menu__body');
    iconMenu.addEventListener("click", function (e) {
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    });
}


//tabs

const tabNavItems = document.querySelectorAll('.tabs-deals__button');
const tabItems = document.querySelectorAll('.item-tabs');
document.addEventListener("click", function (e) {
    const targetElement = e.target;
    let currentIndex=null;
    let newActiveIndex=null;
    if(targetElement.closest('.tabs-deals__button')){
        tabNavItems.forEach((tabNavItem, index) => {
            if(tabNavItem.classList.contains('active')){
                currentIndex = index;
               tabNavItem.classList.remove('active')
            }
            if(tabNavItem === targetElement){
                newActiveIndex = index;
            }
        });
        targetElement.classList.add('active')
        tabItems[currentIndex].classList.remove('active')
        tabItems[newActiveIndex].classList.add('active')
    }
});