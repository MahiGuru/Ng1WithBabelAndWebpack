describe("Customer Service", () => {
    var userService;
    beforeEach(angular.mock.module("myApp"));
    beforeEach(inject((_UserService_) => {
        userService = _UserService_
    }));
    it("Should check User service", () => {
        expect(userService).toBeDefined();
    });

    describe("Test cases for Methods", () => {
        it("Add Customer Method", () => {
            expect(userService.addCustomer).toBeDefined();
        });
    });


});