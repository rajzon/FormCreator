import { IField } from "./IField";
import { IDataStorage } from "./IDataStorage";

export class LocStorage implements IDataStorage {
    private id: string;
    private ids: string[] = [];
    
    
    saveDocuments(formValues: Array<IField>): string {
        console.log('test');
        this.id=Date.now().toString();
        localStorage.setItem(this.id.toString(), JSON.stringify(formValues) );
        this.ids.push(this.id);
        console.log(localStorage.getItem(this.id));
        return this.id;
    }   
    
    loadDocument() {
        throw new Error("Method not implemented.");
    }

    getDocuments(): string[] {
        let idsToReturn = [];
        return this.ids;
    }
}
