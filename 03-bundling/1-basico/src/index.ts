import './styles/styles.scss';

const logo = require('./assets/logo_1.png');

function init() {
  const appElement = document.createElement('div');
  appElement.innerHTML = `<h1 class="titulo">Hola Mundo</h1><img src="${logo}" alt="Logo">`;
  document.body.appendChild(appElement);
}

init();