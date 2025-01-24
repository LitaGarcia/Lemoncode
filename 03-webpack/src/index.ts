import './styles.scss';
import logo from './assets/logo.png';

const app = document.getElementById('app');

if (app) {
    app.innerHTML = `
        <div class="hello-world hello-world--centered">
            <h1 class="hello-world__title">Hello World!</h1>
            <img class="hello-world__image" src="${logo}" alt="Logo">
        </div>
    `;
}