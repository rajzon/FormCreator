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

    getValue()  {
        var input = <HTMLInputElement>document.getElementById(this.label);          
        this.value = input.value;
        return this.value;
      
      }
}
