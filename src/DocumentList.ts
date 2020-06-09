import { LocStorage } from "./LocStorage";

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
        idsFromLocStorage.forEach(element => {
            this.model.id.push(element);
           this.model.documents = localStorage.getItem(element);
            console.log(this.model.documents);
        });
        
    }

    render(parentElement:HTMLElement) {
        console.log(this.model.id);
        
        this.model.id.forEach((element: any) => {
            let documentsInfo = document.createElement('p');
            documentsInfo.innerHTML = element;

            parentElement.appendChild(documentsInfo);
        });
       
    }
}
