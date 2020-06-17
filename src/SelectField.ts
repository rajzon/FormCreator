import { IField } from "./IField";
import { FieldType } from "./FieldType.enum";
import { FieldLabel } from "./FieldLabel";

export class SelectField implements IField {
    name: string;    label: string;
    fieldType: FieldType;
    value: string;

    constructor(name:string ,value:string , label:string) {
        this.name = name;    
        this.fieldType = FieldType.selectField;
        this.value = value;
        this.label = label;
    }
    render(parentElement:HTMLElement) {
        var selectField = document.createElement('select');
        selectField.id = this.label;

        //Name Label
        const nameLabel = new FieldLabel(this.name);
            nameLabel.DisplayLabel(parentElement , selectField.id);

        //Creating Select field
              
         parentElement.appendChild(selectField);  

         //Dodawanie Opcji wyboru kirunku studiów
        var option = document.createElement("option");
        option.text = "Informatyka i Ekonometria";
        var option2 = document.createElement("option");
        option2.text = "Zarządzanie i Bankowość";
        var option3 = document.createElement("option");
        option3.text = "Medycyna";
         selectField.add(option);
         selectField.add(option2);  
         selectField.add(option3);
         
         //Checking if the user already pass the value that exits as an option in select object 
         //if it is , set that value as selected option
         for (let i = 0; i < selectField.options.length; i++) {
             if(selectField.options[i].value === this.value) {
                 selectField.options[i].selected = true;
                 console.log('option selected');
             }            
         }

        
        parentElement.appendChild(document.createElement("br"));
        parentElement.appendChild(document.createElement("br"));
    }

    getValue()  {
        var input = <HTMLSelectElement>document.getElementById(this.label)
        var options = input.selectedOptions;
        
        for (let index = 0; index < options.length; index++) {
           if(options[index].selected) {
            this.value = options[index].value;           
            return this.value;
           }
               
                  
        }
        
        return 'Non Value has been passed to field';
       
    }
}
