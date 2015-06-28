/**
 * Created by Ahmed on 6/21/2015.
 */


angular.module("UserApp").
    controller("HomeController", function (userFactory) {

        this.arrayList = userFactory;
        this.show = false;
        this.listStatus = "Show";
        this.newUser = function () {
            console.log(this.user);
            //UserData.addUser(this.user);
            /*this.arrayList.$add({
                from:this.user.name+":"+this.user.age,
                content: this.user
            });*/
            this.arrayList.$add(this.user);
            this.user = "";
            this.arrayList = "";
        };
        //this.allUsers = UserData.getUsers();

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
