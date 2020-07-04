import './main.scss';
import { App } from './app';

const container = document.createElement('div');
document.body.appendChild(container);
const app = new App(container);
app.ShowForm();
