interface Field {
    name: string;
    label: string;
    fieldType: FieldType;
    value: string;

    render(parentElement:HTMLElement);
}