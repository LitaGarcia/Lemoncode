import './styles.css';
import {hello} from "./hello.js";

const name = 'Manuela';

const greeting = hello();

document.write(`${greeting} ${name}`)