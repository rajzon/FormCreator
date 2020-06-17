import { FieldType } from "./FieldType.enum";
import { IField } from "./IField";

export class DateField implements IField {
    name: string;    label: string;
    fieldType: FieldType;
    value: string;

    constructor(name: string, value: string, label: string) {
        this.name = name;
        this.value = value;
        this.label = label;

        this.fieldType = FieldType.date;
    }

    render(parentElement:HTMLElement) {
        throw new Error("Method not implemented.");
    }

    getValue() {
        
    }
}
