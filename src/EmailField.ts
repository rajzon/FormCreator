import { FieldType } from "./FieldType.enum";
import { FieldLabel } from "./FieldLabel";
import { IField } from "./IField";

export class EmailField implements IField {
    name: string;    label: string;
    fieldType: FieldType;
    value: string;

   
    constructor(name:string , value:string , label:string) {
        this.name = name;
        this.value = value;
        this.fieldType = FieldType.email;
        this.label = label;
        

    }

    
    render(parentElement:HTMLElement):void  {
      
        
        var emailField = document.createElement('input');
         emailField.id = this.label
        //Name Label
        const nameLabel = new FieldLabel(this.name);
            nameLabel.DisplayLabel(parentElement,emailField.id);

        //Creating email Input field
        emailField.type="email";       
        parentElement.appendChild(emailField);
        emailField.value = this.value;
        parentElement.appendChild(document.createElement("br"));
        parentElement.appendChild(document.createElement("br"));


       
    }
    validEmail(email: string) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };

    getValue()  {
        var input = <HTMLInputElement>document.getElementById(this.label);  
        this.value = input.value;
        if(this.validEmail(this.value)) {
        return this.value;
        } else {
            alert('niepoprawna forma Email - spróbuj ponownie!');
            
        }
      
      }
}
