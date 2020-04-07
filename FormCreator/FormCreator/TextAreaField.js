var TextAreaField = /** @class */ (function () {
    function TextAreaField(name, value) {
        this.name = name;
        this.fieldType = FieldType.multiLineField;
        this.value = value;
    }
    TextAreaField.prototype.render = function (parentElement) {
        var textareaField = document.createElement('textarea');
        //Name Label
        var nameLabel = new FieldLabel(this.name);
        nameLabel.DisplayLabel(container);
        //Creating Select field
        parentElement.appendChild(textareaField);
        parentElement.appendChild(document.createElement("br"));
        parentElement.appendChild(document.createElement("br"));
    };
    return TextAreaField;
}());
