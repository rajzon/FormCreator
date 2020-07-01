export interface IFormCreatorField {
    name: string;
    label: string;
    value: string;
    fieldType: string;

    options?: Array<string>;
    checkboxOptions?: Array<string>;
}
