/**
 * Created by Ahmed on 6/21/2015.
 */


angular.module("UserApp").
    value("indexOfArr",0).
    controller("HomeController", function (UserData,$location) {
        this.show = false;
        this.listStatus = "Show";
        this.newUser = function () {
            console.log(this.user);
            UserData.addUser(this.user);
            this.user = "";
        };
        this.allUsers = UserData.getUsers();



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

        this.editUser = function (index,view,indexOfArr) {
            console.log(index);
            indexOfArr = index;
            console.log(indexOfArr);
            $location.path(view);
        }

    });
