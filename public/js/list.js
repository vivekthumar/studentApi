angular.module('imageGallery').controller('listController', function($scope, $http,) {
	angular.element(".progress-indicator").show();
	$('#example').dataTable().fnDestroy();
	
    $.ajax({
	    'url': "/student",
	    'method': "GET",
	    'contentType': 'application/json'
	}).done( function(data) {
	    $('#example').dataTable( {
	    	"bDestroy": true,
	        "aaData": data.data,
	        "columns": [
	            { "data": "name" },
	            { "data": "age" },
	            { "data": "gender" }
	        ]
	    })
	}).error(function(err){
		alert(err.responseJSON.msg)
	})
});

