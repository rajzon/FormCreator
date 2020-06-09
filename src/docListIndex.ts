import { DocumentList } from './DocumentList';

const container = document.createElement('div');
document.body.appendChild(container);
const b = new DocumentList();
        b.render(container);
