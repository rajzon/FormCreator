import { FieldType } from "./FieldType.enum";

export interface IField {
    name: string;
    label: string;
    fieldType: FieldType;
    value: string;

    render(parentElement:HTMLElement): any;
    getValue() : any;
}
