import { IField } from './IField';
import { FormCreator } from './FormCreator';
import { DocumentList } from './DocumentList';
import { Router } from './Router';


const container = document.createElement('div');
const routerIdParam = Router.getParam('id');
const documents = new DocumentList();

console.log(routerIdParam);
const documentToEdit = documents.getDocument(routerIdParam);
console.log(documentToEdit);

document.body.appendChild(container);


const form = new FormCreator();
form.newForm(container,documentToEdit);

const editButton = document.createElement('button');
editButton.textContent = 'Edit Document';
editButton.addEventListener('click', () => {
   form.saveForm();
   console.log('form saved');
   window.location.href = 'document-list.html';
});

container.appendChild(editButton);





