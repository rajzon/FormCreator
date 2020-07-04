import { IField } from "./IField";
import { LocStorage } from "./LocStorage";
import { Router } from './Router';

export class Form {
    fields: Array<IField>;
    id: string;

    locStorage: LocStorage = new LocStorage();

    constructor(fields: Array<IField>, id?: string) {  
        this.fields = new Array<IField>();

        if(id != null) {
            this.id = id;
            console.log(this.id);
        }


        this.fields = fields;
        console.log(this.fields);
    }

    getValue() {
        console.log(this.fields);
        let test = Array<string>();
        this.fields.forEach(element => {
            this.fields.find(m => m.fieldType === element.fieldType && m.label === element.label).value = element.getValue();
            test.push(this.fields.find(m => m.fieldType === element.fieldType && m.label === element.label).value);
        });

            alert(`${test}`);
        
            
    }

    handleEvent(evt: any) {
        switch(evt.type) {
        case "click":
          this.getValue();
          console.log(this.fields);
          console.log(this.locStorage);
          this.save(true);
          
          break;
        default:
            return;
          
        }
      }

    render(parentElement:HTMLElement, creationMode: boolean) {
         
        var formContainer = document.createElement('form');

        if (this.id != null) {
            const formName = document.createElement('h2');
            formName.textContent = `ID:${this.id}`;
            parentElement.appendChild(formName);
        }
 
        parentElement.appendChild(formContainer);

        console.log(this.fields);
        this.fields.forEach( (element: IField) => {
            element.render(formContainer);
        });
            //console.log(this.nameField.value);
            
        if (creationMode == true) 
        {
            const submitButton = document.createElement('input');
            submitButton.type='button';
            submitButton.value="Wyślij";
            submitButton.addEventListener("click",this);

            const closeButton = document.createElement('input');
            closeButton.type='button';
            closeButton.value='Wstecz';
            closeButton.addEventListener('click',() => {
                //do poprawy
                //window.location.href = 'Index.html'
            });

            
            formContainer.appendChild(submitButton);
            formContainer.appendChild(closeButton);
        }

    }  
    
    save(creationMode: boolean): void {
        console.log('test from save method');
        if (creationMode === true) {
        console.log(this.fields);
        this.locStorage.saveDocuments(this.fields);
        } else {
            console.log('edit Mode')
            console.log(this.fields);
            const idFromURL = Router.getParam('id');
            this.getValue();
            this.locStorage.editDocument(idFromURL,this.fields);
        }
       // window.location.href = 'Index.html'
    }
}
