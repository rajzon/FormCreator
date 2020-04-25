var EmailField = /** @class */ (function () {
    function EmailField(name, value, label) {
        this.name = name;
        this.value = value;
        this.fieldType = FieldType.email;
        this.label = label;
    }
    EmailField.prototype.render = function (parentElement) {
        var emailField = document.createElement('input');
        emailField.id = this.label;
        //Name Label
        var nameLabel = new FieldLabel(this.name);
        nameLabel.DisplayLabel(parentElement, emailField.id);
        //Creating email Input field
        emailField.type = "email";
        parentElement.appendChild(emailField);
        emailField.value = this.value;
        parentElement.appendChild(document.createElement("br"));
        parentElement.appendChild(document.createElement("br"));
    };
    EmailField.prototype.getValue = function () {
        var input = document.getElementById(this.label);
        this.value = input.value;
    };
    return EmailField;
}());
//# sourceMappingURL=EmailField.js.map