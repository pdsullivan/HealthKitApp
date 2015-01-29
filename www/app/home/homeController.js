/**
 * Created by patricksullivan on 1/24/15.
 * Modifed by loganmoore on 1/28/15.
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
                                  $timeout,
                                  $q
    ) {


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

        }
        
        
        //returns total of type specified
        var getSampleTypeTotal = function(startDate,endDate,type,unit)
        {
            var deferred = $q.defer();
            
            //still geared towards steps at this point, need to abstract this
            function onSuccess(result) {
                var totalSteps = 0;
                angular.forEach(result, function(record) {
                    totalSteps=((totalSteps)+(record.quantity));
                });                
                alert(totalSteps);
                //return totalSteps;
                deferred.resolve(totalSteps);
            };

            function onError(result) {
                alert("Error: " + JSON.stringify(result));
                deferred.reject("Error: " + JSON.stringify(result));
            };            
            
            window.plugins.healthkit.querySampleType(
              {
                'startDate' : startDate,
                'endDate'   : endDate, // now
                'sampleType': type,
                'unit'      : unit // make sure this is compatible with the sampleType
              },
              onSuccess,
              onError
            );                        
            
            return deferred.promise;
        }
        
        
        //get the total steps for a specified date range
        $scope.getSteps = function(startDate, endDate)
        {
            
            //clean this up
            var ds = new Date(startDate).setHours(0);
            var de = new Date(new Date(endDate).setHours(23));
                de = new Date(new Date(de).setMinutes(59));
                de = new Date(new Date(de).setSeconds(59));
            
            startDate= new Date(ds);
            endDate= new Date(de);
            
            var totalSteps = getSampleTypeTotal(startDate,endDate,'HKQuantityTypeIdentifierStepCount','count');
            totalSteps.then(function(bob){
                alert(bob);
            });
        }
        

        $scope.$on('$ionicView.beforeEnter', function(){
            //
        });



    };
})();


