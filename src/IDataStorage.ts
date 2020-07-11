import { IField } from "./IField";

export interface IDataStorage {
    saveDocuments(fieldValues: any): string;
    loadDocument(id: string): any;
    getDocuments(): string[];

    appendDocId(id: string): void;
    saveForm(formFields: Array<IField>): string
    appendFormId(id: string): void
    loadForm(id: string): Array<IField>;
    getForms(): string[];
    editDocument(id: string, formValues: Array<IField>): void;
    removeDocument(id: string): void; 

}
