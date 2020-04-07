var SelectField = /** @class */ (function () {
    function SelectField(name, value) {
        this.name = name;
        this.fieldType = FieldType.selectField;
        this.value = value;
    }
    SelectField.prototype.render = function (parentElement) {
        var selectField = document.createElement('select');
        //Name Label
        var nameLabel = new FieldLabel(this.name);
        nameLabel.DisplayLabel(container);
        //Creating Select field
        parentElement.appendChild(selectField);
        //Dodawanie Opcji wyboru kirunku studiów
        var option = document.createElement("option");
        option.text = "Informatyka i Ekonometria";
        var option2 = document.createElement("option");
        option2.text = "Zarządzanie i Bankowość";
        var option3 = document.createElement("option");
        option3.text = "Medycyna";
        var infSelected = selectField.add(option);
        var managmentSelected = selectField.add(option2);
        var medicineSelected = selectField.add(option3);
        parentElement.appendChild(document.createElement("br"));
        parentElement.appendChild(document.createElement("br"));
    };
    return SelectField;
}());
