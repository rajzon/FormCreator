import { FieldType } from "./FieldType.enum";

export interface IField {
    name: string;
    label: string;
    fieldType: FieldType;
    value: string;
    options?: Array<string>;
    checkboxOptions?: Array<string>;

    render(parentElement:HTMLElement): any;
    getValue() : any;
}
