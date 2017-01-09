/**
 * Created by Administrator on 2016/12/14.
 */
var newsContentApp = angular.module('newsContentApp',[]);

newsContentApp.config(['$locationProvider', function($locationProvider) {
    $locationProvider.html5Mode(true);
}]);

newsContentApp.controller('NewsCtrl', ['$scope', '$location', '$http', function($scope, $location, $http){
    if($location.search().id){
        var id = $location.search().id;
        var url = "http://127.0.0.1:8080/getNewsContent?id="+id+"&callback=JSON_CALLBACK";
        $http.jsonp(url).success(function(data) {
            var newscontent = data.message;
            $('#newsContent').html(newscontent);//此处暂时用jQuery方式加入html内容
        });
    }
}]);

newsContentApp.controller('CommentCtrl', ['$scope','$location','$http',function($scope,$location,$http){
    debugger;
    if($location.search().id){
        $scope.items = [];
        var id = $location.search().id;
        var url = "http://127.0.0.1:8080/getNewsComment?id="+id+"&callback=JSON_CALLBACK";
        $http.jsonp(url).success(function(data) {
            var items = data;
            for(var i=0;i<items.length;i++){
                $scope.items.push(items[i]);
            }
        });
    };
    $scope.clickLike = function(like_count){
        var like_url = "http://127.0.0.1:8080/updateNewsLikeCount?like_count="+like_count+"&callback=JSON_CALLBACK";
        $http.jsonp(like_url).success(function(data) {
            var items = data;
            alert(items);
        });
    };
}]);