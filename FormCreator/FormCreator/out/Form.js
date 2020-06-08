var Form = /** @class */ (function () {
    //TODO:Naprawic implementacje pobieranie wartosci z poszczególnych pól
    //    Zrefaktoryzować kod
    function Form() {
        this.fields = new Array();
        this.fields.push(this.nameField = new InputField("Imię", "Wprowadź imię", "name"), this.surNameField = new InputField("Nazwisko", "Wprowadź nazwisko", "surName"), this.emailField = new EmailField("E-mail", "Wprowadź mail", "email"), this.studyField = new SelectField("Wybrany kierunek studiów", "Wprowadź kierunek", "study"), this.elearningAnswearField = new CheckboxField("Czy preferujesz e-learning", "Domyślny tekst", "elearning"), this.commentField = new TextAreaField("Uwagi", "Domyślny tekst", "comment"));
    }
    Form.prototype.getValue = function () {
        //this.nameField = new InputField("Imię" , "Wprowadź imię");
        this.nameField.getValue();
        this.surNameField.getValue();
        this.emailField.getValue();
        this.commentField.getValue();
        this.elearningAnswearField.getValue();
        this.studyField.getValue();
        //console.log(val);    
        console.log(this.nameField.value);
        alert("Imi\u0119: " + this.nameField.value + " , Nazwisko:" + this.surNameField.value + " , Email:" + this.emailField.value + " , \n                        Kierunek Studi\u00F3w:" + this.studyField.value + " , ElearningANS:" + this.elearningAnswearField.value + " , Comment:" + this.commentField.value + " ");
    };
    Form.prototype.handleEvent = function (evt) {
        switch (evt.type) {
            case "click":
                this.getValue();
                break;
            default:
                return;
        }
    };
    Form.prototype.render = function (parentElement) {
        var formContainer = document.createElement('form');
        parentElement.appendChild(formContainer);
        this.fields.forEach(function (element) {
            element.render(formContainer);
        });
        console.log(this.nameField.value);
        var submitButton = document.createElement('input');
        submitButton.type = 'submit';
        submitButton.value = "Wyślij";
        submitButton.addEventListener("click", this);
        formContainer.appendChild(submitButton);
    };
    return Form;
}());
//# sourceMappingURL=Form.js.map