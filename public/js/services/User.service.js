export default class UserService {
    constructor($http) {
        this.$http = $http;
    }
    getCustomers() {
        // Example service function
        return this.$http({ method: 'GET', url: 'http://localhost:2000/api/Customers' });
    }
    getCustomerById(id) {
        return this.$http({ method: 'GET', url: 'http://localhost:2000/api/Customers/' + id });
    }
    removeUser(id) {
        return this.$http({ method: "DELETE", url: 'http://localhost:2000/api/Customers/' + id })
    }
    updateUser(user, id) {
        return this.$http({ method: "PUT", url: 'http://localhost:2000/api/Customers/' + id, data: user });
    }
}
UserService.$inject = ['$http'];