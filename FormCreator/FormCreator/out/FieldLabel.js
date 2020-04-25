var FieldLabel = /** @class */ (function () {
    function FieldLabel(name) {
        this.name = name;
    }
    FieldLabel.prototype.DisplayLabel = function (parentElement, label) {
        var labelField = document.createElement('label');
        labelField.textContent = this.name;
        labelField.htmlFor = label;
        parentElement.appendChild(labelField);
        parentElement.appendChild(document.createElement("br"));
        parentElement.appendChild(document.createElement("br"));
        console.log(this.name);
    };
    return FieldLabel;
}());
//# sourceMappingURL=FieldLabel.js.map