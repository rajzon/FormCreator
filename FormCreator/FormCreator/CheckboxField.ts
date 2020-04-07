class CheckboxField  implements Field {
    name: string;    label: string;
    fieldType: FieldType;
    value: string;

    constructor(name:string ,value:string) {
        this.name = name;    
        this.fieldType = FieldType.checkboxField;
        this.value = value;
    }

    render(parentElement:HTMLElement) {

        //Declaring 2 Checkbox options
        var checkboxField = document.createElement('input');
        
        checkboxField.type='checkbox';
        checkboxField.value='Yes';
        var checkboxFieldLabel = document.createElement('label');
        checkboxFieldLabel.textContent='Tak'

        var checkboxFieldSecond = document.createElement('input');
       
        checkboxFieldSecond.type='checkbox';
        checkboxFieldSecond.value='No';
        var checkboxFieldLabelSecond = document.createElement('label');
        checkboxFieldLabelSecond.textContent='Nie'

        //Name Label
        const nameLabel = new FieldLabel(this.name);
            nameLabel.DisplayLabel(container);

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


}