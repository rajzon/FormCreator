var CheckboxField = /** @class */ (function () {
    function CheckboxField(name, value) {
        this.name = name;
        this.fieldType = FieldType.checkboxField;
        this.value = value;
    }
    CheckboxField.prototype.render = function (parentElement) {
        //Declaring 2 Checkbox options
        var checkboxField = document.createElement('input');
        checkboxField.type = 'checkbox';
        checkboxField.value = 'Yes';
        var checkboxFieldLabel = document.createElement('label');
        checkboxFieldLabel.textContent = 'Tak';
        var checkboxFieldSecond = document.createElement('input');
        checkboxFieldSecond.type = 'checkbox';
        checkboxFieldSecond.value = 'No';
        var checkboxFieldLabelSecond = document.createElement('label');
        checkboxFieldLabelSecond.textContent = 'Nie';
        //Name Label
        var nameLabel = new FieldLabel(this.name);
        nameLabel.DisplayLabel(container);
        //Creating CheckBoxes
        //Yes
        parentElement.appendChild(checkboxFieldLabel);
        parentElement.appendChild(checkboxField);
        parentElement.appendChild(document.createElement("br"));
        //No
        parentElement.appendChild(checkboxFieldLabelSecond);
        parentElement.appendChild(checkboxFieldSecond);
        parentElement.appendChild(document.createElement("br"));
        parentElement.appendChild(document.createElement("br"));
    };
    return CheckboxField;
}());
