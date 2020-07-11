import { FormCreatorField } from './FormCreatorField';
import { EmailField } from './EmailField';
import { TextAreaField } from './TextAreaField';
import { SelectField } from './SelectField';
import { InputField } from './InputField';
import { CheckboxField } from './CheckboxField';
import { IField } from './IField';
import { LocStorage } from './LocStorage';
import { IFormCreatorField } from './IFormCreatorField';

export class FormCreator {
    form: HTMLFormElement;
    fieldName: HTMLInputElement;
    fieldLabel: HTMLInputElement;
    fieldDefaultValue: HTMLInputElement;
    fieldType: HTMLSelectElement;
    fields: Array<IField>;
    formCreatorFields: Array<IFormCreatorField>;
    locStorage: LocStorage = new LocStorage();  

    fieldId: number;



    constructor() {
        this.fields = new Array<IField>(); 
        this.formCreatorFields = new Array<IFormCreatorField>();



        this.fieldId = 1;
    }

    newForm(parentElement: HTMLElement) {

        this.form = document.createElement('form');
        parentElement.appendChild(this.form);
        this.addRowToFormCreator(this.form);

    }

    addRowToFormCreator(parentElement: HTMLFormElement) {

       const rowContainer = document.createElement('div');
       rowContainer.id = `fieldId-${this.fieldId}`;

        this.fieldName = document.createElement('input');
        this.fieldName.placeholder = 'Nazwa pola...';
        this.fieldName.id = 'fieldName';


        this.fieldLabel = document.createElement('input');
        this.fieldLabel.placeholder = 'Nazwa etykiety...';
        this.fieldLabel.id = 'fieldLabel';

        this.fieldDefaultValue = document.createElement('input');
        this.fieldDefaultValue.placeholder = 'Domyślna wartość...';
        this.fieldDefaultValue.id = 'fieldDefaultValue';

        this.fieldType = this.initFieldTypeSelection(rowContainer);
        this.fieldType.id = 'fieldType';
        this.fieldType.className = 'fieldType';



        parentElement.appendChild(rowContainer);

        rowContainer.appendChild(document.createElement('br'));
        rowContainer.appendChild(this.fieldName);
        rowContainer.appendChild(this.fieldLabel);
        rowContainer.appendChild(this.fieldDefaultValue);
        rowContainer.appendChild(this.fieldType);

        this.fieldId++;
    }

    getValues(): void {
      
        const fieldNameCollection = document.querySelectorAll('#fieldName');
        const fieldLabelCollection = document.querySelectorAll('#fieldLabel');
        const fieldDefaultValueCollection = document.querySelectorAll('#fieldDefaultValue');
        const fieldTypeCollection = document.querySelectorAll('.fieldType');

        
        console.log(fieldNameCollection);
        console.log(fieldTypeCollection);

        if (fieldNameCollection.length === fieldLabelCollection.length && fieldNameCollection.length === fieldDefaultValueCollection.length && fieldNameCollection.length === fieldTypeCollection.length) {

        
            for (let index = 0; index < fieldNameCollection.length; index++) {
                const fieldName =  <HTMLInputElement>fieldNameCollection[index];
                const fieldLabel = <HTMLInputElement>fieldLabelCollection[index];
                const fieldDefaultValue = <HTMLInputElement>fieldDefaultValueCollection[index];
                const fieldType = <HTMLSelectElement>fieldTypeCollection[index];


                const currentFieldRow = fieldNameCollection[index].parentElement;
                console.log(fieldType.value);
                if(fieldType.value === 'select') {
                    const selectOptions = currentFieldRow.querySelector('#selectOptionsContainer');
                    let optionsForCurrentSelect = Array<string>();

                    //setting defualt value
                    optionsForCurrentSelect.push(fieldDefaultValue.value);
                    console.log(fieldDefaultValue.value);

                    selectOptions.childNodes.forEach(el => {
                        optionsForCurrentSelect.push((<HTMLInputElement>el.firstChild).value)
                    });
                    ; 

                    this.formCreatorFields.push(new FormCreatorField(fieldName.value, fieldLabel.value, fieldDefaultValue.value,fieldType.value,optionsForCurrentSelect))
                } 
                else if (fieldType.value === 'checkbox') { 
                    const checkboxOptions = currentFieldRow.querySelector('#checkboxOptionsContainer');
                    let optionsForCurrentCheckbox = Array<string>();

                    //setting defualt value
                    optionsForCurrentCheckbox.push(fieldDefaultValue.value);

                    checkboxOptions.childNodes.forEach(el => {
                        optionsForCurrentCheckbox.push((<HTMLInputElement>el.firstChild).value)
                    });
                    

                    this.formCreatorFields.push(new FormCreatorField(fieldName.value, fieldLabel.value, fieldDefaultValue.value, fieldType.value, null, optionsForCurrentCheckbox))
                } else {
                    this.formCreatorFields.push(new FormCreatorField(fieldName.value, fieldLabel.value, fieldDefaultValue.value,fieldType.value));
                }


        
            }
        }
        
        console.log(this.formCreatorFields);

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
                    const selectField = new SelectField(element.name,element.value,element.label,element.options);
                    this.fields.push(selectField);
                    break;
                case 'checkbox':  //checkbox
                    const checkboxField = new CheckboxField(element.name,element.value,element.label,element.checkboxOptions);
                    this.fields.push(checkboxField);
                    break;
                default:
                    console.log('selected fieldType do not match any possible fieldType');
                    break;
            }
       });
        
    }

    

    initFieldTypeSelection(parentElement: HTMLDivElement):HTMLSelectElement {
        const result = document.createElement('select');
        let previousSelectedFieldType = 'input';
       
        result.addEventListener('change', (event) => {
        

            if (previousSelectedFieldType ===  'select' ) {
                       
                if ( (<HTMLSelectElement>event.target).value != 'select') {
                    const addSelectOptionBtn = parentElement.getElementsByTagName('button')[0];
                    addSelectOptionBtn.remove();
                    
                    const selectOptions = parentElement.querySelector('#selectOptionsContainer');
                    if(selectOptions != null) {
                        selectOptions.remove();
                    }

                }
            } else if (previousSelectedFieldType ===  'checkbox' ) {

                if ( (<HTMLSelectElement>event.target).value != 'checkbox') {
                    const addCheckboxOptionBtn = parentElement.getElementsByTagName('button')[0];
                    addCheckboxOptionBtn.remove();

                    const checkboxOptions = parentElement.querySelector('#checkboxOptionsContainer');
                    if(checkboxOptions != null) {
                        checkboxOptions.remove();
                    }

                }
            }

            previousSelectedFieldType = result.value;

            if ((<HTMLSelectElement>event.target).value === 'select') {
                const containerForSelectOptions = document.createElement('div');
                containerForSelectOptions.id = 'selectOptionsContainer';


                const addSelectOptionBtn = document.createElement('button');
                addSelectOptionBtn.textContent = 'Dodaj Opcję';
                addSelectOptionBtn.addEventListener('click', (evt) => {
                    evt.preventDefault();

                    parentElement.appendChild(containerForSelectOptions);
                    containerForSelectOptions.appendChild(this.addOptionForCheckboxField(containerForSelectOptions));
                });

                parentElement.appendChild(addSelectOptionBtn);
            }


            if ((<HTMLSelectElement>event.target).value === 'checkbox') {
                const containerForCheckboxOptions = document.createElement('div');
                containerForCheckboxOptions.id = 'checkboxOptionsContainer';


                const addCheckboxOptionBtn = document.createElement('button');
                addCheckboxOptionBtn.textContent = 'Dodaj Opcję';
                addCheckboxOptionBtn.addEventListener('click', (evt) => {
                    evt.preventDefault();

                    parentElement.appendChild(containerForCheckboxOptions);
                    containerForCheckboxOptions.appendChild(this.addOptionForCheckboxField(containerForCheckboxOptions));
                });

                parentElement.appendChild(addCheckboxOptionBtn);
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
        console.log('addOptionForOptionField function');
        const container = document.createElement('div');
        
        const option = document.createElement('input');
        option.placeholder = 'Wprowadź opcję...';
        option.id = 'selectOptionField';

        const removeOptionBtn = document.createElement('button');
        removeOptionBtn.textContent = 'Usuń opcję';
        removeOptionBtn.addEventListener('click', (e) => {
            e.preventDefault();
            container.remove();
            if (parentElement.childNodes.length === 0) {
                parentElement.remove();
            }
        });

        parentElement.appendChild(container);


        container.appendChild(option);
        container.appendChild(removeOptionBtn);

        return container
        
    }

    addOptionForCheckboxField(parentElement: HTMLDivElement):HTMLDivElement {
        console.log('addOptionForCheckboxField function');
        const container = document.createElement('div');
        
        const option = document.createElement('input');
        option.placeholder = 'Wprowadź opcję...';
        option.id = 'checkboxOptionField';

        const removeOptionBtn = document.createElement('button');
        removeOptionBtn.textContent = 'Usuń opcję';
        removeOptionBtn.addEventListener('click', (e) => {
            e.preventDefault();
            container.remove();
            if (parentElement.childNodes.length === 0) {
                parentElement.remove();
            }
        });

        parentElement.appendChild(container);


        container.appendChild(option);
        container.appendChild(removeOptionBtn);

        return container
        
    }

    renderFormList(parentElement: HTMLElement): void {
       let result = this.locStorage.getForms();

       if (result != null) {
        result.forEach(element => {
                const formLink = document.createElement('a');
                formLink.innerHTML = element;
                formLink.href = `new-document.html?formId=${element}`;
                const formIdContainer = document.createElement('div');

                let deleteFormButton = document.createElement('button');
                deleteFormButton.textContent = 'Usuń Formularz';

                deleteFormButton.addEventListener('click',() => {
                    this.locStorage.removeForm(element);
                    window.location.reload();
                });       

                parentElement.appendChild(formIdContainer);
                formIdContainer.appendChild(formLink);
                formIdContainer.appendChild(deleteFormButton);
                parentElement.appendChild(document.createElement('br'));
         
            });
       }   

        const goToMainMenuBtn = document.createElement('button');
            goToMainMenuBtn.textContent = 'Menu główne';
            goToMainMenuBtn.addEventListener('click', () => {
                window.location.href = 'index.html';
        });

        console.log('test');
        parentElement.appendChild(goToMainMenuBtn);

    }

    
    


    saveForm(fields?: Array<IField>) {
        this.getValues();
        console.log(this.fields);
        this.locStorage.saveForm(this.fields);
    }
}
