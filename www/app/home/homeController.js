/**
 * Created by patricksullivan on 1/24/15.
 */


(function () {
    'use strict';

    angular.module('app').controller('homeController', [
        '$scope',
        '$ionicModal',
        '$state',
        '$ionicLoading',
        '$timeout',
        //'$cordovaHealthKit',
        homeController]);

    function homeController($scope,
                                  $ionicModal,
                                  $state,
                                  $ionicLoading,
                                  $timeout
                                  //,$cordovaHealthKit
    ) {


        //console.log('about to ask for access');
        //if (window.cordova && window.cordova.plugins.healthkit) {
        //
        //    window.plugins.healthkit.available(
        //        function (isAvailable) {
        //            alert(isAvailable ? "HealthKit available :)" : "No HealthKit on this device :(");
        //
        //        }
        //    );
        //}
        $scope.test = "blahhh";
        $scope.steps = null;

        $scope.loadData = function(){
            $ionicLoading.show({
                template: 'Importing Data...'
            });
            $timeout(function() {
                $ionicLoading.hide();
            }, 1100);
        };

        $scope.loadDOB = function(){
            function onSuccess(result) {
                alert("OK: " + JSON.stringify(result));
            };

            function onError(result) {
                alert("Error: " + JSON.stringify(result));
            };

            // reading date of birth
            window.plugins.healthkit.readDateOfBirth(
                onSuccess, // yyyy-mm-dd ("1977-04-22")
                onError
            );
            //$ionicLoading.show({
            //    template: 'Importing Data...'
            //});
            //
            //$cordovaHealthKit.readDateOfBirth().then(function(dob) {
            //    $scope.dob = dob;
            //    $ionicLoading.hide();
            //}, function(err) {
            //    alert(err);
            //    $ionicLoading.hide();
            //});
        }
        
        //feel free to modify this in any way, just trying to get steps to return the same as healthkit
        $scope.getSteps = function(startDate, endDate)
        {
            //clean this up
            var tests = new Date(startDate).setHours(0);
            var teste = new Date(endDate).setHours(23);
            startDate= new Date(tests);
            endDate= new Date(teste);
            
            function onSuccess(result) {
                var totalSteps = 0;
                angular.forEach(result, function(record) {
                    totalSteps=((totalSteps)+(record.quantity));
                });                
                
                alert("You walked "+totalSteps+" steps on "+startDate);
            };

            function onError(result) {
                alert("Error: " + JSON.stringify(result));
            };            
            
            window.plugins.healthkit.querySampleType(
              {
                //'startDate' : new Date(new Date().getTime()-2*24*60*60*1000), // two days ago
                'startDate' : startDate,
                'endDate'   : endDate, // now
                'sampleType': 'HKQuantityTypeIdentifierStepCount',
                'unit'      : 'count' // make sure this is compatible with the sampleType
              },
              onSuccess,
              onError
            );            
        }

        $scope.$on('$ionicView.beforeEnter', function(){
            //
        });



    };
})();


