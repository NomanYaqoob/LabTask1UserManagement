/**
 * Created by Ahmed on 6/21/2015.
 */

angular.module("UserApp").
    controller("EditController", function ($routeParams,userFactory) {

        this.show = false;
        this.listStatus = "Show";
        this.user = {};
        this.users = userFactory;
        console.log(this.users);
        var id = $routeParams.id;
        var updatedUser = this.users.$getRecord(this.users[id].$id);
        this.user = updatedUser;

        this.update = function () {
            this.users.$save(this.user);
            this.user = {};
        };

        this.status = function () {
            if(this.show == false){
                this.show = true;
                this.listStatus = "Hide";
            }
            else {
                this.show = false;
                this.listStatus = "Show";
            }

        };

    });
