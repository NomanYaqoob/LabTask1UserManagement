/**
 * Created by Ahmed on 6/21/2015.
 */

angular.module("UserApp").
    controller("EditController", function (UserData,indexOfArr) {


        this.users = UserData.getUsers();

        console.log(typeof indexOfArr);
        console.log(users);
        this.user.name = users[indexOfArr].name;
        this.user.age = users[indexOfArr].age;
        this.user.email = users[indexOfArr].email;

    });
