/**
 * Created by Ahmed on 6/21/2015.
 */

angular.module("UserApp").
    controller("EditController", function (UserData,$routeParams) {

        this.show = false;
        this.listStatus = "Show";
        this.user = {};
        this.users = UserData.getUsers();
        //console.log("routeParams: "+ $routeParams);
        var id = $routeParams.id;

        this.user.name = this.users[id].name;
        this.user.age = this.users[id].age;
        this.user.email = this.users[id].email;

        this.update = function () {
            UserData.addUserWithIndex(this.user,id);
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
