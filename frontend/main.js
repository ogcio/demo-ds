import './style.scss'

import { initAll } from '@ogcio/ogcio-ds'

initAll();

// Testing server here.
async function fetchData() {
  const response = await fetch('http://localhost:3000');
  const data = await response.json();
  document.getElementById('message').innerText = data.hello;
}

fetchData();

document.querySelector('#app').innerHTML = `
  <h3 style="padding: 50px">
    Hello World
  </h3>
`