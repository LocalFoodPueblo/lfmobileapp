angular.module('googlemaps.init', ['uiGmapgoogle-maps'])

.config(['uiGmapGoogleMapApiProvider', function(uiGmapGoogleMapApiProvider) {
    uiGmapGoogleMapApiProvider.configure({
        key: 'AIzaSyDq6Oddzu3bkdZ6NpaCPp9i84rdWOICfqM',
        libraries: 'weather,geometry,visualization'
    });
}])

.directive('creatorMapComponent', ['uiGmapGoogleMapApi', '$timeout',

    /*
        Do not remove this directive, it is what powers the Creator Drag & Drop Component.
    */

    function(uiGmapGoogleMapApi, $timeout) {

        return {
            restrict: 'E',
            scope: true,
            link: function($scope, $element, $attr, _c, transclude) {
            
                $scope.map = {};
                
                if ($attr.marker=="true"){
                    $scope.map.marker = {
                        id: 0
                    }
                }
                
                $attr.$observe('location', function(val){
                    
                    uiGmapGoogleMapApi.then(function(maps){

                        function setupMap(lat, lng){
                            
                            $scope.map.zoom = parseInt($attr.zoom);
                            $timeout(function(){
                                $scope.map.center = {
                                    latitude: lat,
                                    longitude: lng
                                };  
                            });
                            $scope.map.options = JSON.parse($attr.options);
                            
                            if ($attr.marker=="true"){
                                $scope.map.marker.coords = {
                                    latitude: lat,
                                    longitude: lng
                                }
                            }
                        }

                        if (val.indexOf('"latitude"') > -1){
                            val = JSON.parse(val);
                            setupMap(val.latitude, val.longitude);
                        }else{
                            var geocoder = new maps.Geocoder();
                            geocoder.geocode({'address' : val}, function(results, status){
                                
                                $scope.$apply(function(){
                                    setupMap(results[0].geometry.location.lat(), results[0].geometry.location.lng());
                                });
            
                            });
                        }
                    });
                            
                });
            
            }
      
        };
}]);