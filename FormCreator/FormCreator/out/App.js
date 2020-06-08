var App = /** @class */ (function () {
    function App(container) {
        this.container = container;
    }
    App.prototype.ShowForm = function () {
        var form = new Form();
        form.render(this.container);
    };
    return App;
}());
var container = document.getElementById('container');
var app = new App(container);
app.ShowForm();
//var container = document.getElementById('container');
//# sourceMappingURL=App.js.map