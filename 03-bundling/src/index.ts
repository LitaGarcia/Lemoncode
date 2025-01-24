import './styles.scss';
import logo from './assets/logo.png';

const app = document.getElementById('app');

const message = process.env.NODE_ENV === 'development'
    ? 'Hello, I am dev mode'
    : 'Hello, I am production mode';

if (app) {
    app.innerHTML = `
        <div class="hello-world hello-world--centered">
            <h1 class="hello-world__title">${message}</h1>
            <img class="hello-world__image" src="${logo}" alt="Logo">
        </div>
    `;
}