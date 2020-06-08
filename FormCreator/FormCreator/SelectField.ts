class SelectField implements Field  {
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
        
        parentElement.appendChild(document.createElement("br"));
        parentElement.appendChild(document.createElement("br"));
    }

    getValue()  {
        //this.value ="";
        //var input = <HTMLCollectionOf<HTMLOptionElement>>document.getElementsByClassName(this.label);
        var input = <HTMLSelectElement>document.getElementById(this.label)
        var options = input.selectedOptions;
        
        for (let index = 0; index < options.length; index++) {
           if(options[index].selected) {
            this.value = options[index].value;           
            return;
           }
               
                  
        }
        
 
       
    }


}