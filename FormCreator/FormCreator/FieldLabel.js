var FieldLabel = /** @class */ (function () {
    function FieldLabel(label) {
        this.label = label;
    }
    FieldLabel.prototype.DisplayLabel = function (parentElement) {
        var labelField = document.createElement('label');
        labelField.textContent = this.label;
        parentElement.appendChild(labelField);
        parentElement.appendChild(document.createElement("br"));
        parentElement.appendChild(document.createElement("br"));
        console.log(this.label);
    };
    return FieldLabel;
}());
