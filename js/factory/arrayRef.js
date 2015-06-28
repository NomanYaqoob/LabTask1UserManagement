/**
 * Created by noman on 29-Jun-15.
 */


angular.module("UserApp").
    factory("userFactory",function($firebaseArray,firebaseUrl){
        var ref = new Firebase(firebaseUrl);

        return $firebaseArray(ref);
    });