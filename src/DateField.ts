import { FieldType } from "./FieldType.enum";
import { IField } from "./IField";

export class DateField implements IField {
    name: string;    label: string;
    fieldType: FieldType;
    value: string;
    render(parentElement:HTMLElement) {
        throw new Error("Method not implemented.");
    }

    getValue() {
        
    }
}
