'use strict';

angular.module('newCalendarApp')
  .controller('CalendarCtrl', function($scope, $http) {
    $scope.template = 'calendar',
    $scope.myDate = '',
    $scope.todos = [],
    $scope.addToDo = function(todo) {
      $http({
        url: '/todos/post',
        method: 'POST',
        data: {'todo': $scope.todo, 'date': $scope.myDate}
      }).
      success(function(data) {
        console.log('success', data);
      }).
      error(function() {
        console.log('error');
      });
      $scope.todo = ''; //makes the date and todo box return back to empty after adding
      $scope.myDate = '';
    };
  });