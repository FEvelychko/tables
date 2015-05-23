/**
 * Created by Maksym on 5/23/2015.
 */
    "use strict";

var tableApp = angular.module('tableApp',[]);
tableApp.controller('tableController', ['$scope', function($scope) {

    $scope.headers = ["id", "name", "stock", "country"];
    $scope.data = [
        {id:1, name: "apple", stock:125, country: "USA"},
        {id:2, name: "facebook", stock: 78, country: "USA"},
        {id:3, name: "microsoft", stock: 559, country: "USA"},
        {id:4, name: "softServe", stock: 100, country: "Ukraine"},
        {id:5, name: "luxSoft", stock: 90, country: "Ukraine"},
        {id:6, name: "siemens", stock: 59, country: "Germany"},
        {id:7, name: "globalLogic", stock: 30, country: "Ukraine"},
        {id:8, name: "twitter", stock: 50, country: "USA"}
    ];

}]);