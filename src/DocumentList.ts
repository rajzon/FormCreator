import { LocStorage } from "./LocStorage";

export class DocumentList {
    model: any = {};

    constructor(private locStorage: LocStorage) {
        
        
    }

    getDocumentList() {
        const idsFromLocStorage = this.locStorage.getDocuments();
        idsFromLocStorage.forEach(element => {
            this.model.id = element;
           this.model.documents = localStorage.getItem(element);
            console.log(this.model.documents);
        });
        
    }

    render(parentElement:HTMLElement) {
       let documentsInfo = document.createElement('p');
       documentsInfo.innerHTML = this.model.id;

       parentElement.appendChild(documentsInfo);
    }
}
