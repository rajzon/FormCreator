import { IField } from "./IField";
import { IDataStorage } from "./IDataStorage";

export class LocStorage implements IDataStorage {
    private id: string;

  
    saveDocuments(formValues: Array<IField>): string {
        console.log('test');
        this.id=Date.now().toString();
        console.log(formValues);
        localStorage.setItem(this.id.toString(), JSON.stringify(formValues));
        this.appendDocId(this.id);
        console.log(localStorage.getItem(this.id));
        
        return this.id;
    }

    appendDocId(id: string) {
        let docsIdsFromLocStorage = <Array<string>>(JSON.parse(localStorage.getItem('docsIds')));   
        console.log(docsIdsFromLocStorage);
        if(docsIdsFromLocStorage == null) {
            docsIdsFromLocStorage = new Array<string>();
        }

        docsIdsFromLocStorage.push(id);
        console.log(docsIdsFromLocStorage);
        localStorage.setItem('docsIds', JSON.stringify(docsIdsFromLocStorage));
    }

    saveForm(formFields: Array<IField>): string {
        let idNum = 1;
        let formId = 'form-' + idNum;
        while (localStorage.getItem(formId) != null) {
            idNum++;
            formId = 'form-' + idNum;
        }

        localStorage.setItem(formId, JSON.stringify(formFields));
        this.appendFormId(formId);
        return formId;
    }

    appendFormId(id: string): void {
        let formIdsFromLocStorage = <Array<string>>(JSON.parse(localStorage.getItem('formsIds')));   
        console.log(formIdsFromLocStorage);
        if(formIdsFromLocStorage == null) {
            formIdsFromLocStorage = new Array<string>();
        }

        formIdsFromLocStorage.push(id);
        console.log(formIdsFromLocStorage);
        localStorage.setItem('formsIds', JSON.stringify(formIdsFromLocStorage));
        
    }

    loadForm(id: string): Array<IField> {
        const formToReturn = <Array<IField>>(JSON.parse(localStorage.getItem(id)));

        return formToReturn;
    }

    getForms(): string[] {
        let formIdsToReturn = JSON.parse(localStorage.getItem('formsIds'));

        return formIdsToReturn;
    }
     
    editDocument(id: string, formValues: Array<IField>) {
        const valuesToEdit = JSON.stringify(formValues);
        localStorage.setItem(id,valuesToEdit);
    }
    
    loadDocument(id: string): string {
       const documentToReturn = localStorage.getItem(id);
       if(documentToReturn == null) {
           console.log('Document doesnt exits');
           return;
       } else {

           return documentToReturn;
       }
    }

    getDocuments(): string[] {
        let docsIdsToReturn = <Array<string>>JSON.parse(localStorage.getItem('docsIds'));
        return docsIdsToReturn;
    }

    removeDocument(id: string) {
        if (localStorage.getItem(id).length > 0){
         let docIds = <Array<string>>JSON.parse(localStorage.getItem('docsIds'));
         const docIdIndex = docIds.indexOf(id);
         console.log(docIdIndex);

         if (docIdIndex !== -1) {
           docIds.splice(docIdIndex, 1);

            if(docIds.length > 0) {
            localStorage.setItem('docsIds',JSON.stringify(docIds));
            } else {
                localStorage.removeItem('docsIds');
            }
        }


         localStorage.removeItem(id);       
         if(localStorage.getItem(id) == null) {
         console.log(`selected document:${id} - deleted successfully`);
         } else {
             console.log(`something went wrong during deleting document:${id}`);
         }
        }
        
    }

    removeForm(id: string) {
        if (localStorage.getItem(id).length > 0){
            let formIds = <Array<string>>JSON.parse(localStorage.getItem('formsIds'));
            const formIdIndex = formIds.indexOf(id);
            console.log(formIdIndex);
   
            if (formIdIndex !== -1) {
                formIds.splice(formIdIndex, 1);
   
               if(formIds.length > 0) {
                    localStorage.setItem('formsIds',JSON.stringify(formIds));
               } else {
                   localStorage.removeItem('formsIds');
               }
           }
   
   
            localStorage.removeItem(id);       
            if(localStorage.getItem(id) == null) {
            console.log(`selected form template:${id} - deleted successfully`);
            } else {
                console.log(`something went wrong during deleting  form template:${id}`);
            }
           }
    }
}
