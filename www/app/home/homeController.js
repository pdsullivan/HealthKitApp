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

        $scope.$on('$ionicView.beforeEnter', function(){
            //
        });



    };
})();


