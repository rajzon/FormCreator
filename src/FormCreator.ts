import { IField } from './IField';
import { LocStorage } from './LocStorage';
import { Form } from './Form';
import { Router } from './Router';
export class FormCreator {
    form: Form = new Form();

    newForm(parentElement: HTMLElement, fields?: Array<IField>) {
        if(fields != null ) {
            // do poprawy ?
            this.form.fields = fields;
            this.form.render(parentElement,false);
        } else {
            this.form.render(parentElement,false);
        }
    }


    saveForm() {
        const locStorage = new LocStorage();
        const idFromURL = Router.getParam('id');
        this.form.getValue();
        console.log(this.form.fields);
        locStorage.editDocument(idFromURL,this.form.fields);
    }
}
