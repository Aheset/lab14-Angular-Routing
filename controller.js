var app =angular.module("myApp");

app.controller('dogController', function(){
	
});

app.controller('dogController', function($scope){
	$scope.message = "I am a dog!"
});

app.controller('lemurController', function($scope){
	$scope.message = "I am a lemur!"
});

app.controller('lionController', function($scope){
	$scope.message = "I am a lion!"
});


app.controller('catController', function($scope){
	$scope.message = "I am a cat!"
});

app.controller('mainController', function($scope){
	$scope.message = "This is the main page!"
});

app.controller('whaleController', function($scope){
	$scope.message = "This is error page!"
});