/**
 * Created by noman on 27-Jun-15.
 */

angular.module("UserApp").
    controller("CheckController", function (UserData,$routeParams) {
        //this.allUsers = [];
        this.userAlter = {};
        this.userAlter.name = "Ahmed";
        this.allUsers = UserData.getUsers();
        console.log(allUsers);


        this.show = function () {
            this.allUsers = UserData.getUsers();
            console.log("abc");
            console.log(allUsers);
        };
        //this.userAlter.name = allUsers[id].name;


    });