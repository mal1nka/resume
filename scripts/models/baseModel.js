function BaseModel() {
    this.attributes = {};
}

var proto = BaseModel.prototype;

proto.initialize = function(data) {
    if(data) this.set(data);
};

/**
 * set property in model with value
 *
 * @param key - type string || object
 * @param val
 */

proto.set = function(key, val) {
    if (typeof key === 'object') {
       for(var index in key) {
           this.attributes[index] = key[index];
       }
    } else {
        this.attributes[key] = val;
    }
};

/**
 * get property's value
 *
 * @param key
 * @returns {*}
 */
proto.get = function(key) {
    return this.attributes[key];
};

proto.toJSON = function() {
    return this.attributes;
};
