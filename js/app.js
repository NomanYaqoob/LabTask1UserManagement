/**
 * Created by Ahmed on 6/21/2015.
 */



angular.module("UserApp",["ngNewRouter","ngMaterial",'ngMdIcons']).

    controller("AppCtrl", function ($router) {

        $router.config([
            {path:"/",redirectTo:"/home"},
            {path:"/home",component:"home"},
            {path:"/edit",component:"edit"}
        ])


    });