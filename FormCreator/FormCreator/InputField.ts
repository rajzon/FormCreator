class InputField implements Field {
    name: string;    label: string;
    fieldType: FieldType;
    value: string;

    constructor(name:string ,label: string, fieldType: FieldType , value:string) {
        this.name = name;
        this.label = label;
        this.fieldType = fieldType;
        this.value = value;
    }

    render(): string {
        return this.label + " " + this.value
    }


}