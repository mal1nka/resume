function BaseView() {
    this.el = document.body;
}

var proto = BaseView.prototype;

proto.initialize = function(options) {
    if (typeof options === 'object') {
        for(var key in options) {
            this[key] = options[key];
        }
    }
};

proto.render = function() {
    window.appController.getTemplate('home', function(response) {
        if(response) {
            var template = _.template(response);
            this.el.innerHTML = this.model? template(this.model.toJSON()) : template;
        }
    }.bind(this));
};
