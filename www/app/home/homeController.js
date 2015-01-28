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
            var tests = new Date(startDate).getTime();
            var teste = new Date(startDate).getTime() + 86400000 ;
            startDate= new Date(tests);
            endDate= new Date(teste);
            
            function onSuccess(result) {
                
                var totalSteps = 0;
                var dataString = JSON.stringify(result);
                
                var data = angular.fromJson(dataString);

                angular.forEach(data, function(record) {
                    //alert(record.startDate + ' - ' + record.endDate + ' - ' + record.quantity);
                    totalSteps=((totalSteps)+(record.quantity));
                });                
                
                alert("You walked "+totalSteps+" steps on "+startDate);
            };

            function onError(result) {
                alert("Error: " + JSON.stringify(result));
            };            
            
            var yesterday = new Date();
            yesterday.setDate(yesterday.getDate() - 1);
            var tomorrow = new Date();
            tomorrow.setDate(tomorrow.getDate() + 1);
            
            window.plugins.healthkit.querySampleType(
              {
                //'startDate' : new Date(new Date().getTime()-2*24*60*60*1000), // two days ago
                'startDate' : yesterday,
                'endDate'   : tomorrow, // now
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


