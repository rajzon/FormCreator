import './main.scss';
import { App } from './app';
import { FormCreator } from './FormCreator';
import { DocumentList } from './DocumentList';
import { Router } from './Router';
import { Form } from './Form';


  if (window.location.href.includes('new-document.html')) {

    initNewDocument();

} else if(window.location.href.includes('new-form.html')) {

    initNewForm();

} else if(window.location.href.includes('document-list.html')) {
    initDocumentList();

} else if(window.location.href.includes('form-list.html')) {
    initFormList();

} else if(window.location.href.includes('edit-document.html')) {
    
    initEditDocument();
}

function initNewDocument() {
    const container = document.createElement('div');
    document.body.appendChild(container);
    const app = new App(container);
    app.ShowForm();
}

function initNewForm() {
    const container = document.createElement('div');
    const formCreator = new FormCreator();

    document.body.appendChild(container);
    formCreator.newForm(container);

    const saveBtn = document.createElement('button');
    saveBtn.textContent = 'Save Form';
    saveBtn.addEventListener('click', () => {
        formCreator.saveForm();
    });

    const addFieldBtn = document.createElement('button');
    addFieldBtn.textContent = 'Add Next Field';
    addFieldBtn.addEventListener('click', () => {
        formCreator.addRowToFormCreator(formCreator.form);
    });

    const goToMenuBtn = document.createElement('button');
        goToMenuBtn.textContent = 'Menu Główne'
        goToMenuBtn.addEventListener('click', () => {
            window.location.href = 'index.html';
    });


    container.appendChild(addFieldBtn);
    container.appendChild(saveBtn);
    container.appendChild(document.createElement('br'));
    container.appendChild(document.createElement('br'));
    container.appendChild(goToMenuBtn);
}

function initDocumentList() {
    const container = document.createElement('div');
    document.body.appendChild(container);
    const b = new DocumentList();
        b.render(container);
}

function initFormList() {
    const container = document.createElement('div');
    document.body.appendChild(container);
    const b = new FormCreator();

    b.renderFormList(container);
}


function initEditDocument() {
    const container = document.createElement('div');
    const routerIdParam = Router.getParam('id');
    const documents = new DocumentList();

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
        window.location.href = 'document-list.html';
    });

    const goToMenuBtn = document.createElement('button');
        goToMenuBtn.textContent = 'Menu Główne'
        goToMenuBtn.addEventListener('click', () => {
            window.location.href = 'index.html';
    });

    container.appendChild(editButton);
    container.appendChild(document.createElement('br'));
    container.appendChild(document.createElement('br'));
    container.appendChild(goToMenuBtn);
}