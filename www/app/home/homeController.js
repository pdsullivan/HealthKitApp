/**
 * Created by patricksullivan on 1/24/15.
 */


(function () {
    'use strict';

    angular.module('app').controller('homeController', [
        '$scope',
        '$ionicModal',
        '$state',
        homeController]);

    function homeController($scope,
                                  $ionicModal,
                                  $state) {

        $scope.$on('$ionicView.beforeEnter', function(){
            //
        });


    };
})();


