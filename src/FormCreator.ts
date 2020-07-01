import { FormCreatorField } from './FormCreatorField';
import { EmailField } from './EmailField';
import { TextAreaField } from './TextAreaField';
import { SelectField } from './SelectField';
import { InputField } from './InputField';
import { CheckboxField } from './CheckboxField';
import { FieldType } from './FieldType.enum';
import { IField } from './IField';
import { LocStorage } from './LocStorage';
import { Form } from './Form';
import { Router } from './Router';
import { IFormCreatorField } from './IFormCreatorField';
export class FormCreator {
    form: HTMLFormElement;
    fieldName: HTMLInputElement;
    fieldLabel: HTMLInputElement;
    fieldDefaultValue: HTMLInputElement;
    fieldType: HTMLSelectElement;
    fields: Array<IField>;
    formCreatorFields: Array<IFormCreatorField>;
    selectFieldId: number;


    constructor() {
        this.fields = new Array<IField>(); 
        this.formCreatorFields = new Array<IFormCreatorField>();


        this.selectFieldId = 1; 
    }

    newForm(parentElement: HTMLElement, fields?: Array<IField>) {

        this.form = document.createElement('form');
        parentElement.appendChild(this.form);
        this.addRowToFormCreator(this.form);

    }

    addRowToFormCreator(parentElement: HTMLFormElement) {

       

        this.fieldName = document.createElement('input');
        this.fieldName.placeholder = 'Nazwa pola...';
        this.fieldName.id = 'fieldName';
        this.fieldName.className = 'test';

        this.fieldLabel = document.createElement('input');
        this.fieldLabel.placeholder = 'Nazwa etykiety...';
        this.fieldLabel.id = 'fieldLabel';
        this.fieldLabel.className = 'test';

        this.fieldDefaultValue = document.createElement('input');
        this.fieldDefaultValue.placeholder = 'Domyślna wartość...';
        this.fieldDefaultValue.id = 'fieldDefaultValue';
        this.fieldDefaultValue.className = 'test';

        this.fieldType = this.initFieldTypeSelection(parentElement);
        this.fieldType.id = 'fieldType';
        this.fieldType.className = 'test';



        
        parentElement.appendChild(document.createElement('br'));
        parentElement.appendChild(this.fieldName);
        parentElement.appendChild(this.fieldLabel);
        parentElement.appendChild(this.fieldDefaultValue);
        parentElement.appendChild(this.fieldType);

    }

    getValues() {
        // let fieldNameCollectionResult = new Array<string>();
        // let fieldLabelCollectionResult = new Array<string>();
        // let fieldDefaultValueCollectionResult = new Array<string>();
        // let fieldTypeCollectionResult = new Array<string>();

        // const fieldName = <HTMLInputElement>document.getElementById('fieldName');
        // const fieldLabel = <HTMLInputElement>document.getElementById('fieldLabel');
        // const fieldDefaultValue = <HTMLInputElement>document.getElementById('fieldDefaultValue');
        // const fieldType = <HTMLSelectElement>document.getElementById('fieldType');

       

        

        
        const test = document.getElementsByClassName('test');
        const fieldNameCollection = document.querySelectorAll('#fieldName');
        const fieldLabelCollection = document.querySelectorAll('#fieldLabel');
        const fieldDefaultValueCollection = document.querySelectorAll('#fieldDefaultValue');
        const fieldTypeCollection = document.querySelectorAll('#fieldType');

        console.log(test);
        console.log(fieldNameCollection);

        if (fieldNameCollection.length === fieldLabelCollection.length && fieldNameCollection.length === fieldDefaultValueCollection.length && fieldNameCollection.length === fieldTypeCollection.length) {
        
            for (let index = 0; index < fieldNameCollection.length; index++) {
                const fieldName =  <HTMLInputElement>fieldNameCollection[index];
                const fieldLabel = <HTMLInputElement>fieldLabelCollection[index];
                const fieldDefaultValue = <HTMLInputElement>fieldDefaultValueCollection[index];
                const fieldType = <HTMLSelectElement>fieldTypeCollection[index];

                
                this.formCreatorFields.push(new FormCreatorField(fieldName.value, fieldLabel.value, fieldDefaultValue.value,fieldType.value))
            
            }
        }
        
        console.log(this.formCreatorFields);



        // for (let index = 0; index < fieldNameCollection.length; index++) {
        //     const element = <HTMLInputElement>fieldNameCollection[index];
        //     fieldNameCollectionResult.push(element.value);
        //     console.log(element.value);
        // }

        // for (let index = 0; index < fieldLabelCollection.length; index++) {
        //     const element = <HTMLInputElement>fieldLabelCollection[index];
        //     fieldLabelCollectionResult.push(element.value);
        //     console.log(element.value);
        // }

        // for (let index = 0; index < fieldDefaultValueCollection.length; index++) {
        //     const element = <HTMLInputElement>fieldDefaultValueCollection[index];
        //     fieldDefaultValueCollectionResult.push(element.value);
        //     console.log(element.value);
        // }

        // for (let index = 0; index < fieldTypeCollection.length; index++) {
        //     const element = <HTMLSelectElement>fieldTypeCollection[index];
        //     fieldTypeCollectionResult.push(element.value);
        //     console.log(element.value);
        // }




       this.formCreatorFields.forEach(element => {
            switch (element.fieldType) {
                case 'input':  //input
                    const inputField = new InputField(element.name,element.value,element.label);
                    this.fields.push(inputField);
                    break;
                case 'textarea':  //textarea
                    const textareaField = new TextAreaField(element.name,element.value,element.label);
                    this.fields.push(textareaField);
                    break;
                case 'email':  //email
                    const emailField = new EmailField(element.name,element.value,element.label);
                    this.fields.push(emailField);
                    break;
                case 'select':  //select
                    //const selectField = new SelectField(element.name,element.value,element.label,options);
                    //this.fields.push(selectField);
                    break;
                case 'checkbox':  //checkbox
                    //const checkboxField = new CheckboxField(element.name,element.value,element.label,options);
                    //this.fields.push(checkboxField);
                    break;
                default:
                    console.log('selected fieldType do not match any possible fieldType');
                    break;
            }
       });
        
    }

    initFieldTypeSelection(parentElement: HTMLFormElement):HTMLSelectElement {
        const result = document.createElement('select');
        result.addEventListener('change', (event) => {
            //event.stopImmediatePropagation();
            if ((<HTMLSelectElement>event.target).value === 'select') {
                const addOptionBtn = document.createElement('button');
                let container = document.createElement('div');
                container.className = `selectOptionField-${this.selectFieldId}`;

                addOptionBtn.textContent = 'add Option';
                addOptionBtn.addEventListener('click', (e) => {
                    e.preventDefault();
                    
                    
                    console.log(container.className);
                    
                    //e.stopImmediatePropagation();
                    parentElement.appendChild(container);
                    container.appendChild(this.addOptionForSelectField(container));
                    
                    
                });
                this.selectFieldId++; 
                parentElement.appendChild(addOptionBtn);
            }
        });

        const checkboxOption = document.createElement('option');
        checkboxOption.text = 'input';
        const inputOption = document.createElement('option');
        inputOption.text = 'textarea';
        const textareaOption = document.createElement('option');
        textareaOption.text = 'email';
        const selectOption = document.createElement('option');
        selectOption.text = 'select';
        const emailOption = document.createElement('option');
        emailOption.text = 'checkbox';

        result.add(checkboxOption);
        result.add(inputOption);
        result.add(textareaOption);
        result.add(selectOption);
        result.add(emailOption);

        return result;
    }
    
    addOptionForSelectField(parentElement: HTMLDivElement):HTMLDivElement {
        console.log('addOptionForSelectField function');
        // const container = document.createElement('div');
        //to się przyda w momencie jak bd wyciągał wartosci z opcji aby je przekazać jako element tablicu IField
        // container.className = `selectOptionField-${this.selectFieldId}`;
        // console.log(container.className);

        const container = document.createElement('div');
        
        const option = document.createElement('input');
        option.placeholder = 'Wprowadź opcję...';
        option.id = 'selectOptionField';

        parentElement.appendChild(container);


        container.appendChild(option);

        return container
        
    }


    saveForm() {
        this.getValues();
        console.log(this.fields);
    }
}
