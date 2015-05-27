/**
 * Created by Maksym on 5/23/2015.
 */
    "use strict";

    angular.module('tableApp')
    .directive('tableDirective', function() {

    return {
        restrict: 'E',
        templateUrl: 'views/table.html',
        replace: false,
        scope: {},
        link: function (scope) {

            scope.rowTableObj = {};
            scope.rowObject = {};
            scope.currentObj = {};
            scope.data = [];
            scope.headers = ["id", "name", "country", "product", "founder", "stock", "change data"];
            scope.realData = [
                {id:1, name: "apple", country: "USA", product: "iPad", founder:"Jhon", stock:100},
                {id:2, name: "facebook", country: "USA", product: "social Web Site", founder:"Max", stock:200},
                {id:3, name: "microsoft", country: "USA", product: "PC", founder:"Kiril", stock:300},
                {id:4, name: "softServe", country: "Ukraine", product: "software", founder:"Andrew", stock:40},
                {id:5, name: "luxSoft", country: "Ukraine", product: "software", founder:"Anton", stock:30},
                {id:6, name: "siemens", country: "Germany", product: "mobiles", founder:"Jason", stock:110},
                {id:7, name: "globalLogic", country: "Ukraine", product: "software", founder:"Wesney", stock:40}
            ];

            scope.saveData = function(){
                scope.rowObject = scope.currentObj;
                scope.data.push(scope.rowObject);
                scope.currentObj = {};
            };

            scope.addTable = function(){
                scope.showTable = true;
            };

            scope.deleteData = function(index){
                scope.data.splice(index, 1);
            };

            scope.changeData = function(){
                scope.currentObj = scope.rowObject;
                scope.data.pop(scope.rowObject);
            }
        }
    }
    })