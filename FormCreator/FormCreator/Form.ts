 class Form {
    fields: Array<Field>;
    public nameField: InputField;
    surNameField: InputField;
    emailField: EmailField;
    studyField: SelectField;
    elearningAnswearField: CheckboxField;
    commentField: TextAreaField;
   //TODO:Naprawic implementacje pobieranie wartosci z poszczególnych pól
    //    Zrefaktoryzować kod
    constructor() {
        this.nameField = new InputField("Imię" , "Wprowadź imię");
        console.log(this.nameField.value);
        this.surNameField = new InputField("Nazwisko" , "Wprowadź nazwisko");
        this.emailField = new EmailField("E-mail" , "Wprowadź mail");
        this.studyField = new SelectField("Wybrany kierunek studiów" , "Wprowadź kierunek");
        this.elearningAnswearField = new CheckboxField("Czy preferujesz e-learning" , "Domyślny tekst");
        this.commentField = new TextAreaField("Uwagi" , "Domyślny tekst");
    }

    getValue() {
        //this.nameField = new InputField("Imię" , "Wprowadź imię");
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
         
        this.nameField.render(container);

        
        this.surNameField.render(container);

       
        this.emailField.render(container);

        
        this.studyField.render(container);

        
        this.elearningAnswearField.render(container);

        
        this.commentField.render(container);

        const submitButton = document.createElement('input');
        submitButton.type='submit';
        submitButton.value="Wyślij";
        submitButton.addEventListener("click",this);

        
        parentElement.appendChild(submitButton);

    }   

    
}

var container = document.getElementById('container');
const form = new Form();
form.render(container);
//form.getValue();

