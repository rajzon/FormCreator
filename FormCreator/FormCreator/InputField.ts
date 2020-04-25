class InputField implements Field {
    public name: string;    label: string;
    fieldType: FieldType;
    value: string;

    constructor(name:string ,value:string, label:string) {
        this.name = name;    
        this.fieldType = FieldType.textField;
        this.value = value;
        this.label = label;
    }

    render(parentElement:HTMLElement) {
         
        console.log(this.value);

        var inputField = document.createElement('input');       
        inputField.id = this.label;  
               
        //Name Label
        const nameLabel = new FieldLabel(this.name);
            nameLabel.DisplayLabel(parentElement , inputField.id);

        //Creating email Input field
        inputField.type="text";
        inputField.value = this.value;         
        parentElement.appendChild(inputField);
        
        parentElement.appendChild(document.createElement("br"));
        parentElement.appendChild(document.createElement("br"));
    }

     getValue()  {
        var input = <HTMLInputElement>document.getElementById(this.label);          
        this.value = input.value;
        console.log(input.value);

      
      }


    

}
