import { FieldType } from './FieldType.enum';
import { IField } from "./IField";
import { LocStorage } from "./LocStorage";
import { Router } from './Router';

export class Form {
    fields: Array<IField>;
    id: string;

    locStorage: LocStorage = new LocStorage();
    mailValid: boolean;
    

    constructor(fields: Array<IField>, id?: string) {  
        this.fields = new Array<IField>();

        if(id != null) {
            this.id = id;
            console.log(this.id);
        }


        this.fields = fields;
        this.mailValid = true;
        console.log(this.fields);
    }

    getValue() {
        console.log(this.fields);
        let test = Array<string>();
        this.fields.forEach(element => {
            this.fields.find(m => m.fieldType === element.fieldType && m.label === element.label).value = element.getValue();
            
            console.log(element.value);
           if (element.fieldType === FieldType.email && element.value == null ) {
               this.mailValid = false;
           } else if (element.fieldType === FieldType.email) {
                this.mailValid = true;
                test.push(this.fields.find(m => m.fieldType === element.fieldType && m.label === element.label).value);
           } else {
                test.push(this.fields.find(m => m.fieldType === element.fieldType && m.label === element.label).value);
           }
            
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
                window.location.href = 'Index.html'
            });

            
            formContainer.appendChild(submitButton);
            formContainer.appendChild(closeButton);
        }

    }  
    
    save(creationMode: boolean): boolean {
        console.log('test from save method');

        if (creationMode === true) {
            console.log(this.fields);
            console.log(this.mailValid);
            if(this.mailValid) {
                this.locStorage.saveDocuments(this.fields);
                window.location.href = 'Index.html'
                return true;
            }

        } else {
            console.log('edit Mode')
            console.log(this.fields);
            const idFromURL = Router.getParam('id');
            this.getValue();


            console.log(this.mailValid);
            if (this.mailValid) {
                this.locStorage.editDocument(idFromURL,this.fields);
                window.location.href = 'Index.html'
                return true;
            }
        }

        return false;
    }
}
