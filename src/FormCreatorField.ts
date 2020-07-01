import { IFormCreatorField } from './IFormCreatorField';
export class FormCreatorField implements IFormCreatorField {
    name: string;
    label: string;    
    value: string;
    fieldType: string;


    options?: Array<string>;
    checkboxOptions?: Array<string>;

    constructor(name: string, label: string, value: string, fieldType: string, options?: Array<string>, checkboxOptions?: Array<string>) {
        this.name = name;
        this.label = label;
        this.value = value;
        this.fieldType = fieldType;

        if (options) {
            this.options = options;
        }

        if (checkboxOptions) {
            this.checkboxOptions = checkboxOptions;
        }
    }

}
