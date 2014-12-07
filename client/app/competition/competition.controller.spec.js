'use strict';

describe('Controller: CompetitionCtrl', function () {

  // load the controller's module
  beforeEach(module('fussAppApp'));

  var CompetitionCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CompetitionCtrl = $controller('CompetitionCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
