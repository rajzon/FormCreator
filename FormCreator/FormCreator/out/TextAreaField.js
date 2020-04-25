var TextAreaField = /** @class */ (function () {
    function TextAreaField(name, value, label) {
        this.name = name;
        this.fieldType = FieldType.multiLineField;
        this.value = value;
        this.label = label;
    }
    TextAreaField.prototype.render = function (parentElement) {
        var textareaField = document.createElement('textarea');
        textareaField.id = this.label;
        //Name Label
        var nameLabel = new FieldLabel(this.name);
        nameLabel.DisplayLabel(parentElement, textareaField.id);
        //Creating Select field
        parentElement.appendChild(textareaField);
        parentElement.appendChild(document.createElement("br"));
        parentElement.appendChild(document.createElement("br"));
    };
    TextAreaField.prototype.getValue = function () {
        var input = document.getElementById(this.label);
        this.value = input.value;
    };
    return TextAreaField;
}());
//# sourceMappingURL=TextAreaField.js.map