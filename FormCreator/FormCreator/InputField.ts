class InputField implements Field {
    public name: string;    label: string;
    fieldType: FieldType;
    value: string;

    constructor(name:string ,value:string) {
        this.name = name;    
        this.fieldType = FieldType.textField;
        this.value = value;
    }

    render(parentElement:HTMLElement) {
         
        var inputField = document.createElement('input');
        
        //Name Label
        const nameLabel = new FieldLabel(this.name);
            nameLabel.DisplayLabel(container);

        //Creating email Input field
        inputField.type="text";       
        parentElement.appendChild(inputField);
         this.value = inputField.value;
        parentElement.appendChild(document.createElement("br"));
        parentElement.appendChild(document.createElement("br"));
    }


    

}
//var container = document.getElementById('container');
//const inputField = new InputField("Imię" , "Wprowadź imię");



//inputField.render(container);