import { LocStorage } from './LocStorage';
import { FieldLabel } from './FieldLabel';
import { Form } from "./Form";
import { IField } from "./IField";
import { InputField } from "./InputField";
import { EmailField } from "./EmailField";
import { SelectField } from "./SelectField";
import { CheckboxField } from "./CheckboxField";
import { TextAreaField } from "./TextAreaField";
import { Router } from './Router';
import { FieldType } from './FieldType.enum';

export class App {
    container: HTMLElement;
    locStorage: LocStorage = new LocStorage();
    formIdFromParams: string;

    constructor(container: HTMLElement) {
        // const b = new Form()
        this.container = container;
        console.log(this.container.tagName);
    }

    ShowForm() {
        const fields = this.initFormFields();
        if(this.formIdFromParams != null) {
            var exampleForm = new Form(fields, this.formIdFromParams);
            exampleForm.render(this.container,true);
            console.log(exampleForm.fields);

        } else {   
            var form = new Form(fields);
            form.render(this.container,true);
            console.log(form.fields);
        }
        
    }

    initFormFields() : Array<IField> {
        let fields = new Array<IField>();
        this.formIdFromParams = Router.getParam('formId');

        if(this.formIdFromParams != null) {
            const formFromLocStorage = this.locStorage.loadForm(this.formIdFromParams);
            fields = this.parseFormFromLocStorageAsField(formFromLocStorage);

        } else { 

            const options = this.initOptions();
            const checkboxOptions = this.initCheckboxOptions();

            fields.push(new InputField("Imię" , "Wprowadź imię","name"),
                        new InputField("Nazwisko" , "Wprowadź nazwisko" , "surName"),
                        new EmailField("E-mail" , "Wprowadź mail", "email"),
                        new SelectField("Wybrany kierunek studiów" , "Wprowadź kierunek","study",options),
                        new CheckboxField("Czy preferujesz e-learning" , "Domyślny tekst","elearning", checkboxOptions),
                        new TextAreaField("Uwagi" , "Domyślny tekst", "comment"),
            );
        }

        return fields;
    }

    initOptions() : Array<string> {
        let result = new Array<string>();

        
        const opt1 = "Informatyka i Ekonometria";
        const opt2 = "Zarządzanie i Bankowość";
        const opt3 = "Medycyna";

        result.push(opt1);
        result.push(opt2);
        result.push(opt3);
       
        
        return result;
    }

    initCheckboxOptions() : Array<string> {
        let result = new Array<string>();
        
        const opt1 = 'Yes';
        const opt2 = 'No';

        result.push(opt1);
        result.push(opt2);
        
        console.log(result);
        return result;
    }

    private parseFormFromLocStorageAsField(formFromLocStorage: Array<IField>): Array<IField> {
        let docToReturn = new Array<IField>();
        formFromLocStorage.forEach(element => {
             switch (element.fieldType) {
                 case FieldType.checkboxField:
                     var checkboxField = element as CheckboxField;
                     element = new CheckboxField(element.name,element.value,element.label, checkboxField.checkboxOptions);
                     docToReturn.push(element);
                     break;
                 case FieldType.email:
                     element = new EmailField(element.name,element.value, element.label);
                     docToReturn.push(element);
                     break;
                 case FieldType.multiLineField:
                     element = new TextAreaField(element.name,element.value, element.label);
                     docToReturn.push(element);
                     break;
                 case FieldType.selectField:
                     var selectField =  element as SelectField;
                     element = new SelectField(element.name,element.value, element.label,selectField.options);
                     docToReturn.push(element);
                     break;
                 case FieldType.textField:
                     element = new InputField(element.name,element.value, element.label);
                     docToReturn.push(element);
                     break;          
                 default:
                     console.log(`Element ${element} , wasn't be able to convert to FieldType: ${element.fieldType} 
                                 becouse that type do not match what convert function is able to do.`)
                     break;
             }
         });
         return docToReturn;
     }
}


export const AAA = 10;