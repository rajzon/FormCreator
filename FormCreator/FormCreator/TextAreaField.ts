class TextAreaField implements Field {
    name: string;    label: string;
    fieldType: FieldType;
    value: string;

    constructor(name:string ,value:string) {
        this.name = name;    
        this.fieldType = FieldType.multiLineField;
        this.value = value;
    }
    render(parentElement:HTMLElement) {
        var textareaField = document.createElement('textarea');
        
        
        //Name Label
        const nameLabel = new FieldLabel(this.name);
            nameLabel.DisplayLabel(container);

        //Creating Select field
              
         parentElement.appendChild(textareaField);  

        
  
        
        parentElement.appendChild(document.createElement("br"));
        parentElement.appendChild(document.createElement("br"));
    }


}