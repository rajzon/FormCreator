import './main.scss';
import { App } from './app';

const projectName = 'Form Creator';
document.body.innerHTML = projectName;
const container = document.createElement('div');
document.body.appendChild(container);
const app = new App(container);
app.ShowForm();
