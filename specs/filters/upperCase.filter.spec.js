describe('In order to check the strength of my password as a visitor, I need to see the strong message on screen', function () {

	var passwordControlerTest;
	var $scope;

	beforeEach(function () {
		angular.mock.module('angular-test');

		angular.mock.inject(function ($filter){
			upperCaseFilter = $filter(upperCase) 
		});

	});

	describe('I will test the grade methode', function() {

		it('fdfdsdf', function() {
			// GIVEN
			// THEN
			expect(upperCaseFilter('PARIS')).toEqual('paris');
		});

	});

});