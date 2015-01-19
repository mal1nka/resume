function AppController() {
    this.configURL = './scripts/config.html';
    this.initialize();
}

var proto = AppController.prototype;

proto.initialize = function() {
    this.getConfig(function(response) {
        if(response) {
            this.appConfig = JSON.parse(response);
            this.getData();
        }
    }.bind(this));
};

proto.getConfig = function(callback) {
    this.sendRequest(this.configURL, null, 'GET', callback);
};

proto.getData = function() {
    var url = this.appConfig.data;
    this.sendRequest(url, null, 'GET', function(response) {
        if(response) {
            var model = new HomeModel(JSON.parse(response));
            new HomeView({model: model});
        }
    });
};

/**
 *
 * @param name - type string
 * @param callback - function
 */
proto.getTemplate = function(name, callback) {
    var url = this.appConfig.templates[name];
    this.sendRequest(url, null, 'GET', callback);
};

proto.sendRequest = function(url, data, method, callback) {
    var xhr = (function() {
        var xmlhttp;
          try {
            xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
          } catch (e) {
            try {
              xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
            } catch (E) {
              xmlhttp = false;
            }
          }
          if (!xmlhttp && typeof XMLHttpRequest!='undefined') {
            xmlhttp = new XMLHttpRequest();
          }
          return xmlhttp;
    })();

    xhr.open(method, url, true);
    xhr.onreadystatechange = function() {
      if (this.readyState == 4) {
         if(this.status == 200) {
             callback(xhr.responseText);
         } else {
            callback(false);
         }
      }
    };
    xhr.send(data);
};