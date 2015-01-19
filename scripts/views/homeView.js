function HomeView(options) {
    BaseView.call(this);
    this.el = document.getElementById('container') || this.el;
    this.initialize(options);
}

var proto = HomeView.prototype = new BaseView();

proto.initialize = function(options) {
    BaseView.prototype.initialize.call(this, options);
    this.formatData();
    this.render();
};

proto.formatData = function() {
    var jobTitleStr = this.model.get('specialty'),
        aboutStrArr = this.model.get('about'),
        wrappedStr1 = aboutStrArr.replace('Experience in IT industry:', '<span>Experience in IT industry:</span>'),
        aboutResultStr = wrappedStr1.replace('English:', '<span>English:</span>'),
        objectiveStr = this.model.get('objective').replace('able to', 'able to <br>').replace('and', '<br>and');

    this.model.set({
       "specialty": jobTitleStr.split(' ').join('<br>'),
       "about": aboutResultStr,
       "objective": objectiveStr.replace('in ', 'in<br>').replace(' of', '<br>of')
    });
};
