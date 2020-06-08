export interface IDataStorage {
    saveDocuments(fieldValues: any): string;
    loadDocument(id: string): any;
    getDocuments(): string[];
}
