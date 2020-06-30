import { IField } from "./IField";
import { IDataStorage } from "./IDataStorage";

export class LocStorage implements IDataStorage {
    private id: string;
    private ids: string[] = [];
    
    
    saveDocuments(formValues: Array<IField>): string {
        console.log('test');
        this.id=Date.now().toString();
        console.log(formValues);
        localStorage.setItem(this.id.toString(), JSON.stringify(formValues));
        this.ids.push(this.id);
        console.log(localStorage.getItem(this.id));
        return this.id;
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
        let idsToReturn = Object.keys(localStorage);
        return idsToReturn;
    }

    removeDocument(id: string) {
        if (localStorage.getItem(id).length > 0){
         localStorage.removeItem(id);
         if(localStorage.getItem(id) == null) {
         console.log(`selected document:${id} - deleted successfully`);
         } else {
             console.log(`something went wrong during deleting document:${id}`);
         }
        }
        
    }
}
