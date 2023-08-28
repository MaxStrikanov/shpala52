/*import checkingСertificate  from '../components/xlsx.js';*/
import toggleMenu from './components/menu.js';
import { renderPrice } from './components/renderPrice.js';
import scroll from './components/scroll.js';
import { sendForm } from './components/sendForm.js';
import slider from './components/slider.js'


/*document.addEventListener('load' , checkingСertificate())*/
toggleMenu();
slider();
renderPrice()
scroll()
sendForm()

AOS.init();


