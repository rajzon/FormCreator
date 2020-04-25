 class Form {
    fields: Array<Field>;
    public nameField: InputField;
    surNameField: InputField;
    emailField: EmailField;
    studyField: SelectField;
    elearningAnswearField: CheckboxField;
    commentField: TextAreaField;

    constructor() {
       
        this.fields = new Array<Field>();

        this.fields.push(this.nameField = new InputField("Imię" , "Wprowadź imię","name"),
                         this.surNameField = new InputField("Nazwisko" , "Wprowadź nazwisko" , "surName"),
                        this.emailField =  new EmailField("E-mail" , "Wprowadź mail", "email"),
                        this.studyField = new SelectField("Wybrany kierunek studiów" , "Wprowadź kierunek","study"),
                         this.elearningAnswearField  = new CheckboxField("Czy preferujesz e-learning" , "Domyślny tekst","elearning"),
                         this.commentField = new TextAreaField("Uwagi" , "Domyślny tekst", "comment"),
                         

        );
    }

    getValue() {      
        this.nameField.getValue();
        this.surNameField.getValue();
        this.emailField.getValue();
        this.commentField.getValue();
        this.elearningAnswearField.getValue();
        this.studyField.getValue();
        //console.log(val);    
        console.log(this.nameField.value);
            alert(`Imię: ${this.nameField.value} , Nazwisko:${this.surNameField.value} , Email:${this.emailField.value} , 
                        Kierunek Studiów:${this.studyField.value} , ElearningANS:${this.elearningAnswearField.value} , Comment:${this.commentField.value} `);
        
            
    }

    handleEvent(evt) {
        switch(evt.type) {
        case "click":
          this.getValue();
          break;
        default:
            return;
          
        }
      }

    render(parentElement:HTMLElement) {
         
        var formContainer = document.createElement('form');

        parentElement.appendChild(formContainer);

        this.fields.forEach(element => {
            element.render(formContainer);
        });
            console.log(this.nameField.value);
        
        const submitButton = document.createElement('input');
        submitButton.type='submit';
        submitButton.value="Wyślij";
        submitButton.addEventListener("click",this);

        
        formContainer.appendChild(submitButton);

    }   

    
}



