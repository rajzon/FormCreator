var EmailField = /** @class */ (function () {
    function EmailField(name, value) {
        this.name = name;
        this.value = value;
        this.fieldType = FieldType.email;
    }
    EmailField.prototype.render = function (parentElement) {
        var emailField = document.createElement('input');
        //Name Label
        var nameLabel = new FieldLabel(this.name);
        nameLabel.DisplayLabel(container);
        //Creating email Input field
        emailField.type = "email";
        parentElement.appendChild(emailField);
        emailField.value = this.value;
        parentElement.appendChild(document.createElement("br"));
        parentElement.appendChild(document.createElement("br"));
        //return "TO jest EmailField";
    };
    return EmailField;
}());
//var container = document.getElementById('container');
//const emailField = new EmailField("Email" , "Wprowadź mail");
//var input = document.createElement('input');
//   input.type="text";       
//    container.appendChild(input);
//   container.appendChild(document.createElement("br"));
//   container.appendChild(document.createElement("br"));
//emailField.render(container);
