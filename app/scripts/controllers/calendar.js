'use strict';

angular.module('newCalendarApp')
  .controller('CalendarCtrl', function($scope, $http) {
    $scope.template = 'calendar';
    $scope.myDate = '';
    $scope.todos;
    $scope.addToDo = function(todo) {
      $http({
        url: '/todos/post',
        method: 'POST',
        data: {'todo': $scope.todo, 'date': $scope.myDate}
      }).
      success(function(data) {
        console.log('post success', data);
        $scope.todos = data;
        console.log('scope.todos', $scope.todos[$scope.todos.length-1]);
      }).
      error(function() {
        console.log('error');
      });
      $scope.todo = '';
      $scope.myDate = '';
    };

    $http({
      url: '/todos/get',
      method: 'GET',
    }).
    success(function(data) {
      console.log('get success', data);
      $scope.todos = data;
    }).
    error(function() {
      console.log('ERROR');
    });
  });