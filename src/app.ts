import { Form } from "./Form";

export class App {
    container: HTMLElement;
    constructor(container: HTMLElement) {
        // const b = new Form()
        this.container = container;
        console.log(this.container.tagName);
    }

    ShowForm() {
        
        var form = new Form();
        form.render(this.container,true);
        console.log(form.fields);
    }
}


export const AAA = 10;