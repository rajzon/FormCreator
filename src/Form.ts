import { FieldType } from './FieldType.enum';
import { IField } from "./IField";
import { InputField } from "./InputField";
import { EmailField } from "./EmailField";
import { SelectField } from "./SelectField";
import { CheckboxField } from "./CheckboxField";
import { TextAreaField } from "./TextAreaField";
import { LocStorage } from "./LocStorage";
import { Router } from './Router';

export class Form {
    fields: Array<IField>;
    id: string;
    // public nameField: InputField;
    // surNameField: InputField;
    // emailField: EmailField;
    // studyField: SelectField;
    // elearningAnswearField: CheckboxField;
    // commentField: TextAreaField;
    locStorage: LocStorage = new LocStorage();
    formId: string;

    constructor(fields: Array<IField>) {  
        this.fields = new Array<IField>();

        // this.fields.push(this.nameField = new InputField("Imię" , "Wprowadź imię","name"),
        //                  this.surNameField = new InputField("Nazwisko" , "Wprowadź nazwisko" , "surName"),
        //                  this.emailField =  new EmailField("E-mail" , "Wprowadź mail", "email"),
        //                  this.studyField = new SelectField("Wybrany kierunek studiów" , "Wprowadź kierunek","study"),
        //                  this.elearningAnswearField  = new CheckboxField("Czy preferujesz e-learning" , "Domyślny tekst","elearning"),
        //                  this.commentField = new TextAreaField("Uwagi" , "Domyślny tekst", "comment"),
                         

        // );
        this.fields = fields;
        console.log(this.fields);
    }

    getValue() {
        console.log(this.fields);
        let test = Array<string>();
        this.fields.forEach(element => {
            this.fields.find(m => m.fieldType === element.fieldType && m.label === element.label).value = element.getValue();
            test.push(this.fields.find(m => m.fieldType === element.fieldType && m.label === element.label).value);
        });

        // this.fields.find(n => n.fieldType === FieldType.textField && n.label === 'name').value = this.nameField.getValue();
        // this.fields.find(n => n.fieldType === FieldType.textField && n.label === 'surName').value = this.surNameField.getValue();
        // this.fields.find(n => n.fieldType === FieldType.email).value = this.emailField.getValue();
        // this.fields.find(n => n.fieldType === FieldType.multiLineField).value = this.commentField.getValue();
        // this.fields.find(n => n.fieldType === FieldType.checkboxField).value = this.elearningAnswearField.getValue();
        // this.fields.find(n => n.fieldType === FieldType.selectField).value = this.studyField.getValue();
        //console.log(val);    
        //console.log(this.nameField.value);
            alert(`${test}`);
        
            
    }

    handleEvent(evt: any) {
        switch(evt.type) {
        case "click":
          this.getValue();
          console.log(this.fields);
          console.log(this.locStorage);
          this.save(true);
          
          break;
        default:
            return;
          
        }
      }

    render(parentElement:HTMLElement, creationMode: boolean) {
         
        var formContainer = document.createElement('form');

        parentElement.appendChild(formContainer);

        console.log(this.fields);
        this.fields.forEach( (element: IField) => {
            element.render(formContainer);
        });
            //console.log(this.nameField.value);
            
        if (creationMode == true) 
        {
            const submitButton = document.createElement('input');
            submitButton.type='button';
            submitButton.value="Wyślij";
            submitButton.addEventListener("click",this);

            const closeButton = document.createElement('input');
            closeButton.type='button';
            closeButton.value='Wstecz';
            closeButton.addEventListener('click',() => {
                //do poprawy
                //window.location.href = 'Index.html'
            });

            
            formContainer.appendChild(submitButton);
            formContainer.appendChild(closeButton);
        }

    }  
    
    save(creationMode: boolean): void {
        console.log('test from save method');
        if (creationMode === true) {
        console.log(this.fields);
        this.locStorage.saveDocuments(this.fields);
        } else {
            console.log('edit Mode')
            console.log(this.fields);
            const idFromURL = Router.getParam('id');
            this.getValue();
            this.locStorage.editDocument(idFromURL,this.fields);
        }
       // window.location.href = 'Index.html'
    }
}
