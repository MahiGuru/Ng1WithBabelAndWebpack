import MainCtrl from "./public/js/controllers/Main.controller";
import UserService from "./public/js/services/User.service";
import ListDirective from "./public/js/directives/list.directive";


const angularModule = angular.module("myApp", []);
angularModule.service("UserService", UserService);

angularModule.directive("listDirective", () => new ListDirective);
angularModule.controller("MainCtrl", MainCtrl);