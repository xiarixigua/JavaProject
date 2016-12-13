/**
 * Created by Administrator on 2016/12/9.
 */
var ftitAppModule = angular.module('ftitApp', ['infinite-scroll']);

ftitAppModule.controller('NewsController',
    function ($scope, News) {
        $scope.demo = new News();
    });

// 创建后台数据交互工厂
ftitAppModule.factory('News', function ($http) {
    var News = function () {
        this.items = [];
        this.busy = false;
        this.after = '';
        this.page = 0;
    };

    News.prototype.nextPage = function () {
        if (this.busy) return;
        this.busy = true;

        var url = "http://localhost:8080/getUserInfo?callback=JSON_CALLBACK";
        $http.jsonp(url).success(function (data) {
            var items = data;
            for (var i = 0; i < items.length; i++) {
                this.items.push(items[i]);
            }
            this.after = "t3_" + this.items[this.items.length - 1].id;
            this.busy = false;
            this.page += 1;
        }.bind(this));
    };

    return News;
});