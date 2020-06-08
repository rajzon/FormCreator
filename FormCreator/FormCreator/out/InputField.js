var InputField = /** @class */ (function () {
    function InputField(name, value, label) {
        this.name = name;
        this.fieldType = FieldType.textField;
        this.value = value;
        this.label = label;
    }
    InputField.prototype.render = function (parentElement) {
        console.log(this.value);
        var inputField = document.createElement('input');
        inputField.id = this.label;
        //Name Label
        var nameLabel = new FieldLabel(this.name);
        nameLabel.DisplayLabel(parentElement, inputField.id);
        //Creating email Input field
        inputField.type = "text";
        inputField.value = this.value;
        parentElement.appendChild(inputField);
        parentElement.appendChild(document.createElement("br"));
        parentElement.appendChild(document.createElement("br"));
    };
    InputField.prototype.getValue = function () {
        var input = document.getElementById(this.label);
        this.value = input.value;
        console.log(input.value);
    };
    return InputField;
}());
//# sourceMappingURL=InputField.js.map