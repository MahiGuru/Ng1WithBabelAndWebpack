export default class listDirective {
    constructor() {
        this.restrict = "EA";
        this.scope = {
            data: "=",
            isEditable: "=",
            addUser: "&",
            updateUser: "&"
        };
        this.templateUrl = "./public/html/AddUser.html";

        //this.controller = ListDirectiveController;
        //this.controllerAs = 'ctrl';
        //this.bindToController = true;
    }
    compile() {

    }
    link() {

    }
}
class ListDirectiveController {
    constructor() {
        this.name = "Mahipal";
    }

}