import { IField } from "./IField";
import { InputField } from "./InputField";
import { EmailField } from "./EmailField";
import { SelectField } from "./SelectField";
import { CheckboxField } from "./CheckboxField";
import { TextAreaField } from "./TextAreaField";
import { LocStorage } from "./LocStorage";

export class Form {
    fields: Array<IField>;
    public nameField: InputField;
    surNameField: InputField;
    emailField: EmailField;
    studyField: SelectField;
    elearningAnswearField: CheckboxField;
    commentField: TextAreaField;
    locStorage: LocStorage = new LocStorage();

    constructor() {  
        this.fields = new Array<IField>();

        this.fields.push(this.nameField = new InputField("Imię" , "Wprowadź imię","name"),
                         this.surNameField = new InputField("Nazwisko" , "Wprowadź nazwisko" , "surName"),
                        this.emailField =  new EmailField("E-mail" , "Wprowadź mail", "email"),
                        this.studyField = new SelectField("Wybrany kierunek studiów" , "Wprowadź kierunek","study"),
                         this.elearningAnswearField  = new CheckboxField("Czy preferujesz e-learning" , "Domyślny tekst","elearning"),
                         this.commentField = new TextAreaField("Uwagi" , "Domyślny tekst", "comment"),
                         

        );
    }

    getValue() {
        console.log(this.fields);      
        this.nameField.getValue();
        this.surNameField.getValue();
        this.emailField.getValue();
        this.commentField.getValue();
        this.elearningAnswearField.getValue();
        this.studyField.getValue();
        //console.log(val);    
        console.log(this.nameField.value);
            alert(`Imię: ${this.nameField.value} , Nazwisko:${this.surNameField.value} , Email:${this.emailField.value} , 
                        Kierunek Studiów:${this.studyField.value} , ElearningANS:${this.elearningAnswearField.value} , Comment:${this.commentField.value} `);
        
            
    }

    handleEvent(evt: any) {
        switch(evt.type) {
        case "click":
          this.getValue();
          console.log(this.locStorage);
          this.save();
          
          break;
        default:
            return;
          
        }
      }

    render(parentElement:HTMLElement) {
         
        var formContainer = document.createElement('form');

        parentElement.appendChild(formContainer);

        this.fields.forEach(element => {
            element.render(formContainer);
        });
            console.log(this.nameField.value);
        
        const submitButton = document.createElement('input');
        submitButton.type='button';
        submitButton.value="Wyślij";
        submitButton.addEventListener("click",this);

        const closeButton = document.createElement('input');
        closeButton.type='button';
        closeButton.value='Wstecz';
        closeButton.addEventListener('click',() => {
            //do poprawy
            window.location.href = '/Index.html'
        });

        
        formContainer.appendChild(submitButton);
        formContainer.appendChild(closeButton);

    }  
    
    save() {
        console.log('test from save method');
        this.locStorage.saveDocuments(this.fields);
        window.location.href = 'Index.html'
    }
}