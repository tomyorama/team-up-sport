'use strict';
angular.module('fussAppApp').controller('TeamplayersCtrl', function($scope, $http, $routeParams) {
    var facebookFields = 'link,name';
    $http({
        method: 'GET',
        url: 'api/teams/' + $routeParams.id
    }).
    success(function(data, status, headers, config) {
        $scope.item = data;
    }).
    error(function(data, status, headers, config) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
        console.log("ERROR GET!!");
    });
    $scope.search = function(text) {
        FB.api('/search?q=' + encodeURIComponent(text) + '&type=user&fields=' + encodeURIComponent(facebookFields), function(response) {
            console.log('Users: ');
            console.log(response);
            var items = [];
            var data = response.data.slice(0, 20);
            if (data.length > 0) {
                for (var i = 0; i < data.length;) {
                    items.push({
                        item1: data[i],
                        item2: data[i + 1],
                        item3: data[i + 2]
                    });
                    i = i + 3;
                };
            }
            $scope.$apply(function() {
                $scope.items = items;
            });
            //document.getElementById('status').innerHTML =
            //    'Thanks for logging in, ' + response.name + '!';
        });
        // FB.login(function(response) {
        //     console.log("login");
        //     console.log(response);
        // }, {
        //     scope: 'public_profile,email,user_friends'
        // });
        // FB.api("/me/friendlists", function(response) {
        //     if (response && !response.error) {
        //         /* handle the result */
        //         console.log('response: ');
        //         console.log(response);
        //         var items = [];
        //         var data = response.data.slice(0, 20);
        //         if (data.length > 0) {
        //             for (var i = 0; i < data.length;) {
        //                 items.push({
        //                     item1: data[i],
        //                     item2: data[i + 1],
        //                     item3: data[i + 2]
        //                 });
        //                 i = i + 3;
        //             };
        //         }
        //         $scope.$apply(function() {
        //             $scope.items = items;
        //             $scope.dataSearch = response.data.slice(1, 10);
        //         });
        //     } else {
        //         console.log("error:");
        //         console.log(response.error);
        //     }
        // });
    }
});