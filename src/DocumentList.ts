import { InputField } from './InputField';
import { SelectField } from './SelectField';
import { TextAreaField } from './TextAreaField';
import { EmailField } from './EmailField';
import { CheckboxField } from './CheckboxField';
import { FieldType } from './FieldType.enum';
import { LocStorage } from "./LocStorage";
import { IField } from "./IField";

export class DocumentList {
    model: any = {};
    locStorage: LocStorage = new LocStorage();

    constructor() {
        this.getDocumentList();
        
    }

    getDocumentList() {
        const idsFromLocStorage = this.locStorage.getDocuments();
        console.log(idsFromLocStorage);
        this.model.id = new Array<string>();
        if (idsFromLocStorage != null) {
            
        
            idsFromLocStorage.forEach(element => {
            this.model.id.push(element);
            this.model.documents = localStorage.getItem(element);
                console.log(this.model.documents);
            });
        } else {
            console.log('documents not found');
        }
        
    }

    getDocument(id: string): Array<IField> {
        const docFromLocStorage = this.locStorage.loadDocument(id);
        let docToEdit:Array<IField> = JSON.parse(docFromLocStorage);
        docToEdit = this.parseDocToEditAsField(docToEdit);
        console.log(docToEdit);
        return docToEdit;
    }

   private parseDocToEditAsField(docToEdit: Array<IField>): Array<IField> {
       let docToReturn = new Array<IField>();
        docToEdit.forEach(element => {
            switch (element.fieldType) {
                case FieldType.checkboxField:
                    var checkboxField = element as CheckboxField;
                    element = new CheckboxField(element.name,element.value,element.label, checkboxField.checkboxOptions);
                    docToReturn.push(element);
                    break;
                case FieldType.email:
                    element = new EmailField(element.name,element.value, element.label);
                    docToReturn.push(element);
                    break;
                case FieldType.multiLineField:
                    element = new TextAreaField(element.name,element.value, element.label);
                    docToReturn.push(element);
                    break;
                case FieldType.selectField:
                    var selectField =  element as SelectField;
                    element = new SelectField(element.name,element.value, element.label,selectField.options);
                    docToReturn.push(element);
                    break;
                case FieldType.textField:
                    element = new InputField(element.name,element.value, element.label);
                    docToReturn.push(element);
                    break;
                default:
                    console.log(`Element ${element} , wasn't be able to convert to FieldType: ${element.fieldType} 
                                becouse that type do not match what convert function is able to do.`)
                    break;
            }
        });
        return docToReturn;
    }

    removeDocument(id: string) {
        this.locStorage.removeDocument(id);
    }

    render(parentElement:HTMLElement) {
        console.log(this.model.id);

        const goToMenuBtn = document.createElement('button');
        goToMenuBtn.textContent = 'Menu Główne'
        goToMenuBtn.addEventListener('click', () => {
            window.location.href = 'index.html';
        });
        
        this.model.id.forEach((element: any) => {
            let documentsInfo = document.createElement('a');
            documentsInfo.innerHTML = element;
            documentsInfo.href = `edit-document.html?id=${element}`;
            
            let deleteDocButton = document.createElement('button');
            deleteDocButton.textContent = 'Usuń Dokument';

            deleteDocButton.addEventListener('click',() => {
                this.removeDocument(element);
                window.location.reload();
            });

            parentElement.appendChild(documentsInfo);
            parentElement.appendChild(deleteDocButton);
            parentElement.appendChild(document.createElement('br'));
            parentElement.appendChild(document.createElement('br'));

            
        });
    
        parentElement.appendChild(document.createElement('br'));
        parentElement.appendChild(goToMenuBtn);
       
    }
}
