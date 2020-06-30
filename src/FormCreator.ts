import { FieldType } from './FieldType.enum';
import { IField } from './IField';
import { LocStorage } from './LocStorage';
import { Form } from './Form';
import { Router } from './Router';
export class FormCreator {
    form: HTMLFormElement;
    fieldName: HTMLInputElement;
    fieldLabel: HTMLInputElement;
    fieldDefaultValue: HTMLInputElement;
    fieldType: HTMLSelectElement;

    newForm(parentElement: HTMLElement, fields?: Array<IField>) {
        // if(fields != null ) {
        //     // do poprawy ?
        //     //this.form.fields = fields;
        //    // this.form.render(parentElement,false);

        //    this.form = new Form(fields);
        //    this.form.render(parentElement,false);
        // } else {
        //     //this.form.render(parentElement,false);
        // }
        this.form = document.createElement('form');
        parentElement.appendChild(this.form);

        this.fieldName = document.createElement('input');
        this.fieldLabel = document.createElement('input');
        this.fieldDefaultValue = document.createElement('input');
        this.fieldType = this.initFieldTypeSelection();

        


        this.form.appendChild(this.fieldName);
        this.form.appendChild(this.fieldLabel);
        this.form.appendChild(this.fieldDefaultValue);
        this.form.appendChild(this.fieldType);
        

    }

    initFieldTypeSelection():HTMLSelectElement {
        const result = document.createElement('select');

        const checkboxOption = document.createElement('option');
        checkboxOption.text = 'checkbox';
        const inputOption = document.createElement('option');
        inputOption.text = 'input';
        const textareaOption = document.createElement('option');
        textareaOption.text = 'textarea';
        const selectOption = document.createElement('option');
        selectOption.text = 'select';
        const emailOption = document.createElement('option');
        emailOption.text = 'email';

        result.add(checkboxOption);
        result.add(inputOption);
        result.add(textareaOption);
        result.add(selectOption);
        result.add(emailOption);

        return result;
    }
    

    addNextField(parentElement: HTMLElement) {
        this.newForm(parentElement);
    }


    saveForm() {
        const locStorage = new LocStorage();
        const idFromURL = Router.getParam('id');
        this.form.getValue();
        console.log(this.form.fields);
        locStorage.editDocument(idFromURL,this.form.fields);
    }
}
