import { FieldType } from "./FieldType.enum";
import { FieldLabel } from "./FieldLabel";
import { IField } from "./IField";

export class CheckboxField implements IField {
    name: string;    label: string;
    fieldType: FieldType;
    value: string;

    constructor(name:string ,value:string,label:string) {
        this.name = name;    
        this.fieldType = FieldType.checkboxField;
        this.value = value;
        this.label = label;
    }

    render(parentElement:HTMLElement) {

        //Declaring 2 Checkbox options
        //First Option
        var checkboxField = document.createElement('input');
        checkboxField.className = this.label;
        checkboxField.type='checkbox';
        checkboxField.value='Yes';
        var checkboxFieldLabel = document.createElement('label');
        checkboxFieldLabel.textContent='Tak'

        //Second Option
        var checkboxFieldSecond = document.createElement('input'); 
        checkboxFieldSecond.className = this.label;      
        checkboxFieldSecond.type='checkbox';
        checkboxFieldSecond.value='No';
        var checkboxFieldLabelSecond = document.createElement('label');
        checkboxFieldLabelSecond.textContent='Nie'

        //Checking if the user already pass the value that exits in chceckboxes
        //if it is , set that value as selected option
        console.log(this.value);
        if (checkboxField.value === this.value) {
            checkboxField.checked = true;
        } else if (checkboxFieldSecond.value === this.value) {
            checkboxFieldSecond.checked = true;
        }

        //Name Label
        const nameLabel = new FieldLabel(this.name);
            nameLabel.DisplayLabel(parentElement,checkboxField.id);

        

        //Creating CheckBoxes
            
        //Yes
         parentElement.appendChild(checkboxFieldLabel);
         parentElement.appendChild(checkboxField); 
         
         parentElement.appendChild(document.createElement("br"));


         //No
         parentElement.appendChild(checkboxFieldLabelSecond);
         parentElement.appendChild(checkboxFieldSecond); 

       
  
        
        parentElement.appendChild(document.createElement("br"));
        parentElement.appendChild(document.createElement("br"));

    }

    getValue()  {
        this.value ="";
        var input = <HTMLCollectionOf<HTMLInputElement>>document.getElementsByClassName(this.label);
        for (let index = 0; index < input.length; index++) {

            if(input[index].checked) {
            this.value += input[index].value;
                return this.value;
            }            
        }
        

      
      }
}
