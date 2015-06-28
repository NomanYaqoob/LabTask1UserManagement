/**
 * Created by Ahmed on 6/21/2015.
 */


angular.module("UserApp").
    service("UserData", function () {

        var users = [];

        this.addUser = function (user) {
            users.push(user);
        };

        this.getUsers = function () {
            return users;
        }

        this.addUserWithIndex = function (updatedUser, index) {
            users[index] = updatedUser;
        }
    });