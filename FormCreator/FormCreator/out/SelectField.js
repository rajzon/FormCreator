var SelectField = /** @class */ (function () {
    function SelectField(name, value, label) {
        this.name = name;
        this.fieldType = FieldType.selectField;
        this.value = value;
        this.label = label;
    }
    SelectField.prototype.render = function (parentElement) {
        var selectField = document.createElement('select');
        selectField.id = this.label;
        //Name Label
        var nameLabel = new FieldLabel(this.name);
        nameLabel.DisplayLabel(parentElement, selectField.id);
        //Creating Select field
        parentElement.appendChild(selectField);
        //Dodawanie Opcji wyboru kirunku studiów
        var option = document.createElement("option");
        option.text = "Informatyka i Ekonometria";
        var option2 = document.createElement("option");
        option2.text = "Zarządzanie i Bankowość";
        var option3 = document.createElement("option");
        option3.text = "Medycyna";
        selectField.add(option);
        selectField.add(option2);
        selectField.add(option3);
        parentElement.appendChild(document.createElement("br"));
        parentElement.appendChild(document.createElement("br"));
    };
    SelectField.prototype.getValue = function () {
        //this.value ="";
        //var input = <HTMLCollectionOf<HTMLOptionElement>>document.getElementsByClassName(this.label);
        var input = document.getElementById(this.label);
        var options = input.selectedOptions;
        for (var index = 0; index < options.length; index++) {
            if (options[index].selected) {
                this.value = options[index].value;
                return;
            }
        }
        console.log(this.value);
    };
    return SelectField;
}());
//# sourceMappingURL=SelectField.js.map