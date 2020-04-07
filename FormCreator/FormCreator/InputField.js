var InputField = /** @class */ (function () {
    function InputField(name, value) {
        this.name = name;
        this.fieldType = FieldType.textField;
        this.value = value;
    }
    InputField.prototype.render = function (parentElement) {
        var inputField = document.createElement('input');
        //Name Label
        var nameLabel = new FieldLabel(this.name);
        nameLabel.DisplayLabel(container);
        //Creating email Input field
        inputField.type = "text";
        parentElement.appendChild(inputField);
        this.value = inputField.value;
        parentElement.appendChild(document.createElement("br"));
        parentElement.appendChild(document.createElement("br"));
    };
    return InputField;
}());
//var container = document.getElementById('container');
//const inputField = new InputField("Imię" , "Wprowadź imię");
//inputField.render(container);
