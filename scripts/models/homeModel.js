function HomeModel(data) {
    BaseModel.call(this);
    this.initialize(data);
}

var proto = HomeModel.prototype = new BaseModel();

proto.initialize = function(data) {
    BaseModel.prototype.initialize.call(this, data);
};
