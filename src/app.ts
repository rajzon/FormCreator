import { FieldLabel } from './FieldLabel';
import { Form } from "./Form";
import { IField } from "./IField";
import { InputField } from "./InputField";
import { EmailField } from "./EmailField";
import { SelectField } from "./SelectField";
import { CheckboxField } from "./CheckboxField";
import { TextAreaField } from "./TextAreaField";

export class App {
    container: HTMLElement;
    constructor(container: HTMLElement) {
        // const b = new Form()
        this.container = container;
        console.log(this.container.tagName);
    }

    ShowForm() {
        const fields = this.initFormFields();
        var form = new Form(fields);
        form.render(this.container,true);
        console.log(form.fields);
    }

    initFormFields() : Array<IField> {
        let fields = new Array<IField>();
        const options = this.initOptions();
        const checkboxOptions = this.initCheckboxOptions();

        fields.push(new InputField("Imię" , "Wprowadź imię","name"),
                    new InputField("Nazwisko" , "Wprowadź nazwisko" , "surName"),
                    new EmailField("E-mail" , "Wprowadź mail", "email"),
                    new SelectField("Wybrany kierunek studiów" , "Wprowadź kierunek","study",options),
                    new CheckboxField("Czy preferujesz e-learning" , "Domyślny tekst","elearning", checkboxOptions),
                    new TextAreaField("Uwagi" , "Domyślny tekst", "comment"),
        );

        return fields;
    }

    initOptions(optionsNum?: number, value?: string ) : Array<string> {
        let result = new Array<string>();

        if(optionsNum == null && value == null) {
            // const opt1 = document.createElement('option');
            // opt1.text = "Informatyka i Ekonometria";
            // const opt2 = document.createElement('option');
            // opt2.text = "Zarządzanie i Bankowość";
            // const opt3 = document.createElement('option');
            // opt3.text = "Medycyna";
            const opt1 = "Informatyka i Ekonometria";
            const opt2 = "Zarządzanie i Bankowość";
            const opt3 = "Medycyna";

            result.push(opt1);
            result.push(opt2);
            result.push(opt3);
        } else {
            console.log('placeholder for initOptions');
        }
        
        return result;
    }

    initCheckboxOptions(optionsNum?: number, value?: string, fieldLabel?: FieldLabel) : Array<string> {
        let result = new Array<string>();
        if (optionsNum == null && value == null) {
            // const opt1 = document.createElement('input');
            // opt1.type = 'checkbox';
            // opt1.value = 'Yes';
            // const opt2 = document.createElement('input');
            // opt2.type = 'checkbox';
            // opt2.value = 'No';
            const opt1 = 'Yes';
            const opt2 = 'No';

            result.push(opt1);
            result.push(opt2);
        } else {
            console.log('placeholder for initCheckboxOptions');
        }
        console.log(result);
        return result;
    }
}


export const AAA = 10;