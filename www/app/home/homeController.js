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
        homeController]);

    function homeController($scope,
                                  $ionicModal,
                                  $state,
                                  $ionicLoading,
                                  $timeout) {

        $scope.loadData = function(){
            $ionicLoading.show({
                template: 'Importing Data...'
            });
            $timeout(function() {
                $ionicLoading.hide();
            }, 1100);
        };

        $scope.$on('$ionicView.beforeEnter', function(){
            //
        });



    };
})();


