import { IField } from './IField';
import { FieldType } from "./FieldType.enum";
import { FieldLabel } from "./FieldLabel";

export class TextAreaField implements IField {
    name: string;    label: string;
    fieldType: FieldType;
    value: string;

    constructor(name:string ,value:string , label:string) {
        this.name = name;    
        this.fieldType = FieldType.multiLineField;
        this.value = value;
        this.label = label;
    }
    render(parentElement:HTMLElement) {
        var textareaField = document.createElement('textarea');
        textareaField.id = this.label;
        
        //Name Label
        const nameLabel = new FieldLabel(this.name);
            nameLabel.DisplayLabel(parentElement,textareaField.id);

        //Creating Select field
              
         parentElement.appendChild(textareaField);  

        
  
        
        parentElement.appendChild(document.createElement("br"));
        parentElement.appendChild(document.createElement("br"));
    }

    getValue()  {
        var input = <HTMLTextAreaElement>document.getElementById(this.label);          
        this.value = input.value;
        return this.value;
        

      
      }
}
