import './style.scss'
import { initAll } from '@ogcio/ogcio-ds'
import logoHelper from './src/logo';

const utils = {
  insertHTMLByClass: (html, className) => {
    var div = document.querySelector('.' + className);
    if (div) {
      div.innerHTML = html;
    } else {
      console.error('Div element with class ' + className + ' not found.');
    }
  }
}

function initApp() {
  // Header
  utils.insertHTMLByClass(logoHelper.getGovHeaderLogo(), 'govie-header__logotype')
}

initAll();
initApp();
