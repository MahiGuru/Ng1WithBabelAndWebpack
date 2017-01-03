export default class UserService {
    constructor($http) {
        this.$http = $http;
    }
    addCustomer(user) {
        return this.$http({ method: "POST", url: 'http://localhost:2000/api/Customers', data: user })
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