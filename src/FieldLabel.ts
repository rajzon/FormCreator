export class FieldLabel {
    name: string;

    constructor(name: string) {
        this.name = name;
        
       
    }

    DisplayLabel(parentElement:HTMLElement , label?:string) {
        var labelField = document.createElement('label');
           labelField.textContent=this.name;
           //labelField.htmlFor = label;
        parentElement.appendChild(labelField);
        parentElement.appendChild(document.createElement("br"));
        parentElement.appendChild(document.createElement("br"));
         console.log(this.name);
        
    }
}
