import { FormCreator } from './FormCreator';

const conatiner = document.createElement('div');
const formCreator = new FormCreator();

document.body.appendChild(conatiner);
formCreator.newForm(conatiner);

const saveBtn = document.createElement('button');
saveBtn.textContent = 'Save Form';
saveBtn.addEventListener('click', () => {
    formCreator.saveForm();
});

const addFieldBtn = document.createElement('button');
addFieldBtn.textContent = 'Add Next Field';
addFieldBtn.addEventListener('click', () => {
    formCreator.addNextField(conatiner);
});


conatiner.appendChild(addFieldBtn);
conatiner.appendChild(saveBtn);
