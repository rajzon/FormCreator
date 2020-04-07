class EmailField implements Field  {
    name: string;    label: string;
    fieldType: FieldType;
    value: string;

   
    constructor(name:string , value:string) {
        this.name = name;
        this.value = value;
        this.fieldType = FieldType.email;
        

    }
    
    render(parentElement:HTMLElement):void  {
      
        
        var emailField = document.createElement('input');
        
        //Name Label
        const nameLabel = new FieldLabel(this.name);
            nameLabel.DisplayLabel(container);

        //Creating email Input field
        emailField.type="email";       
        parentElement.appendChild(emailField);
        emailField.value = this.value;
        parentElement.appendChild(document.createElement("br"));
        parentElement.appendChild(document.createElement("br"));

        
        
       //return "TO jest EmailField";
    }


}

//var container = document.getElementById('container');
//const emailField = new EmailField("Email" , "Wprowadź mail");


//var input = document.createElement('input');

     //   input.type="text";       
    //    container.appendChild(input);

     //   container.appendChild(document.createElement("br"));
     //   container.appendChild(document.createElement("br"));
//emailField.render(container);