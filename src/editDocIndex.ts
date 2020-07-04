import { LocStorage } from './LocStorage';
import { IField } from './IField';
import { FormCreator } from './FormCreator';
import { DocumentList } from './DocumentList';
import { Router } from './Router';
import { Form } from './Form';


const container = document.createElement('div');
const routerIdParam = Router.getParam('id');
const documents = new DocumentList();
const locStorage = new LocStorage();

console.log(routerIdParam);
const documentToEdit = documents.getDocument(routerIdParam);
console.log(documentToEdit);

document.body.appendChild(container);


const form = new Form(documentToEdit);
form.render(container,false);


const editButton = document.createElement('button');
editButton.textContent = 'Edit Document';
editButton.addEventListener('click', () => {
   form.save(false);
   console.log('form saved');
   //window.location.href = 'document-list.html';
});

container.appendChild(editButton);






