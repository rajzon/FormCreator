var Form = /** @class */ (function () {
    //TODO: zrobic tak zeby getValue dzialalo, zaimplmentowac addEventListener, ponieważ po  form.render(container); wywoływanyt jest destruktor przez co po wcisnieciu butoona pojawai sie problem z odwolanie sie do zmiennej undefined
    function Form() {
        this.nameField = new InputField("Imię", "Wprowadź imię");
        console.log(this.nameField.value);
        this.surNameField = new InputField("Nazwisko", "Wprowadź nazwisko");
        this.emailField = new EmailField("E-mail", "Wprowadź mail");
        this.studyField = new SelectField("Wybrany kierunek studiów", "Wprowadź kierunek");
        this.elearningAnswearField = new CheckboxField("Czy preferujesz e-learning", "Domyślny tekst");
        this.commentField = new TextAreaField("Uwagi", "Domyślny tekst");
    }
    Form.prototype.getValue = function () {
        //this.nameField = new InputField("Imię" , "Wprowadź imię");
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
        this.nameField.render(container);
        this.surNameField.render(container);
        this.emailField.render(container);
        this.studyField.render(container);
        this.elearningAnswearField.render(container);
        this.commentField.render(container);
        var submitButton = document.createElement('input');
        submitButton.type = 'submit';
        submitButton.value = "Wyślij";
        submitButton.addEventListener("click", this);
        parentElement.appendChild(submitButton);
    };
    return Form;
}());
var container = document.getElementById('container');
var form = new Form();
form.render(container);
//form.getValue();
