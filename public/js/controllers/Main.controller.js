import NewCustomer from "../datacontracts/Customer.datacontract";

class MainCtrl {
    constructor($scope, UserService) {
        this.title = "New Angular";
        this.users = UserService;

        this.userlist = [{
            name: "Lucky",
            age: 5
        }, {
            name: "Kutty",
            age: 1
        }];

        this.newUser = new NewCustomer();

        $scope.$watch(() => this.title, (newvalue, oldValue) => {
            console.log("SCOPE WATCH CALLED");
        });

        this.users.getCustomers().then((res) => {
            this.customers = res.data;
        });
        this.IsEditable = false;
    }

    getCustomers() {
        return this.users.getCustomers().then((res) => {
            this.customers = res.data;
        });
    }
    addUser(user) {
        return this.users.addCustomer(user).then((res) => {
            console.log("Successfully created");
        });
    }
    getCustomerById(customer) {
        return this.users.getCustomerById(customer.id).then((res) => {
            this.IsEditable = true;
            this.newUser = res.data;
        });
    }
    reset() {
        this.IsEditable = false;
        this.newUser = new NewCustomer();
    }
    removeUser(customer) {
        return this.users.removeUser(customer.id).then(() => {
            console.log("SUCCESS");
        });
    }
    updateUser(customer) {
        console.log(customer);
        return this.users.updateUser(customer, customer.id).then(() => {
            console.log("SUCCESS");
        });
    }
}
export default MainCtrl;