'use strict';

describe('Controller: TeamplayersCtrl', function () {

  // load the controller's module
  beforeEach(module('fussAppApp'));

  var TeamplayersCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TeamplayersCtrl = $controller('TeamplayersCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
