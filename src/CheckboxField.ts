import { FieldType } from "./FieldType.enum";
import { FieldLabel } from "./FieldLabel";
import { IField } from "./IField";

export class CheckboxField implements IField {
    name: string;    label: string;
    fieldType: FieldType;
    value: string;
    checkboxOptions: Array<string>;

    constructor(name:string ,value:string,label:string, options: Array<string>) {
        this.checkboxOptions = new Array<string>();
        this.checkboxOptions = options

        this.name = name;    
        this.fieldType = FieldType.checkboxField;
        this.value = value;
        this.label = label;
    }

    render(parentElement:HTMLElement) {

        //Name Label
        const nameLabel = new FieldLabel(this.name);
            nameLabel.DisplayLabel(parentElement);
        console.log(this.checkboxOptions);


        this.checkboxOptions.forEach(element => {
            const opt = document.createElement('input');
            opt.type = 'checkbox';
            opt.className = this.label;
            opt.value = element;
            var checkboxFieldLabel = document.createElement('label');
            checkboxFieldLabel.textContent = element;

            console.log(this.checkboxOptions);

            //Checking if the user already pass the value that exits in chceckboxes
            //if it is , set that value as selected option
            const valuesAsArray = this.value.split(',');
            valuesAsArray.forEach(element => {
                if(opt.value === element) {
                    opt.checked = true;
                }
            });
            

            parentElement.appendChild(checkboxFieldLabel);
            parentElement.appendChild(opt);

            parentElement.appendChild(document.createElement("br"));

            
        });
      
        parentElement.appendChild(document.createElement("br"));
    }

    getValue()  {
        this.value ="";
        var input = <HTMLCollectionOf<HTMLInputElement>>document.getElementsByClassName(this.label);
        console.log(input.length);
        for (let index = 0; index < input.length; index++) {

            if(input[index].checked) {
            this.value += input[index].value + ',';
            
            }
            
            
        }

        return this.value;
      }
}
