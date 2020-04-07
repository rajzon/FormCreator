class FieldLabel {
     label: string;

     constructor(label: string) {
         this.label = label;
         
        
     }

     DisplayLabel(parentElement:HTMLElement) {
         var labelField = document.createElement('label');
            labelField.textContent=this.label;
         parentElement.appendChild(labelField);
         parentElement.appendChild(document.createElement("br"));
         parentElement.appendChild(document.createElement("br"));
          console.log(this.label);
         
     }
    
}

