import MainCtrl from "./public/js/controllers/Main.controller";
import UserService from "./public/js/services/User.service";


const angularModule = angular.module("myApp", []);
angularModule.service("UserService", UserService);

angularModule.controller("MainCtrl", MainCtrl);