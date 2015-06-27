/**
 * Created by Ahmed on 6/21/2015.
 */

angular.module("UserApp").
    controller("EditController", function (UserData) {

        this.user = {};

        this.user.name = "ahmed";
        this.users = UserData.getUsers();
        //console.log("routeParams: "+ $routeParams);
        //this.id = $routeParams.id;
       /* console.log(users);
        this.user.name = users[id].name;
        this.user.age = users[id].age;
        this.user.email = users[id].email;
*/
        this.show = function () {
            this.allUsers = UserData.getUsers();
            console.log("abc");
            console.log(allUsers);
        };


    });
