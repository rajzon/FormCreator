class EmailField implements Field {
    name: string;    label: string;
    fieldType: FieldType;
    value: string;
    render(): string {
        throw new Error("Method not implemented.");
    }


}