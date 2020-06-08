class DateField implements Field {
    name: string;    label: string;
    fieldType: FieldType;
    value: string;
    render(parentElement:HTMLElement) {
        throw new Error("Method not implemented.");
    }


}