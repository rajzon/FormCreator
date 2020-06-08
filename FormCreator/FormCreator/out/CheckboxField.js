var CheckboxField = /** @class */ (function () {
    function CheckboxField(name, value, label) {
        this.name = name;
        this.fieldType = FieldType.checkboxField;
        this.value = value;
        this.label = label;
    }
    CheckboxField.prototype.render = function (parentElement) {
        //Declaring 2 Checkbox options
        //First Option
        var checkboxField = document.createElement('input');
        checkboxField.className = this.label;
        checkboxField.type = 'checkbox';
        checkboxField.value = 'Yes';
        var checkboxFieldLabel = document.createElement('label');
        checkboxFieldLabel.textContent = 'Tak';
        //Second Option
        var checkboxFieldSecond = document.createElement('input');
        checkboxFieldSecond.className = this.label;
        checkboxFieldSecond.type = 'checkbox';
        checkboxFieldSecond.value = 'No';
        var checkboxFieldLabelSecond = document.createElement('label');
        checkboxFieldLabelSecond.textContent = 'Nie';
        //Name Label
        var nameLabel = new FieldLabel(this.name);
        nameLabel.DisplayLabel(parentElement, checkboxField.id);
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
    CheckboxField.prototype.getValue = function () {
        this.value = "";
        var input = document.getElementsByClassName(this.label);
        for (var index = 0; index < input.length; index++) {
            if (input[index].checked) {
                this.value += input[index].value + ' ';
            }
        }
        //this.value = input.value;
    };
    return CheckboxField;
}());
//# sourceMappingURL=CheckboxField.js.map