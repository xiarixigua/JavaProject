var myApp = angular.module('myApp', ['infinite-scroll']);

myApp.controller('DemoController', function($scope, Reddit) {
    $scope.reddit = new Reddit();
});

// Reddit constructor function to encapsulate HTTP and pagination logic
myApp.factory('Reddit', function($http) {
    var Reddit = function() {
        this.items = [];
        this.busy = false;
        this.pageSize = 30;
        this.pageNum = 1;
    };

    Reddit.prototype.nextPage = function() {
        debugger;
        if (this.busy) return;
        this.busy = true;

        var url = "http://127.0.0.1:8080/getUserInfo?pageNum="+this.pageNum+"&pageSize="+this.pageSize+"&callback=JSON_CALLBACK";
        $http.jsonp(url).success(function(data) {
            var items = data;
            for (var i = 0; i < items.length; i++) {
                this.items.push(items[i]);
            }
            this.pageNum += 1;
            this.busy = false;
        }.bind(this));
    };

    return Reddit;
});