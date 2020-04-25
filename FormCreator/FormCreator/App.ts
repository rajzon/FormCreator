

class App {
    container: HTMLElement;

    constructor(container: HTMLElement) {
        this.container = container;
    }

    ShowForm() {
        
        var form = new Form();
        form.render(this.container);
    }
    
}
const container = document.getElementById('container');
var app = new App(container);
app.ShowForm();






//var container = document.getElementById('container');


