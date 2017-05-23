function renderResults(data) {
	var restaurants = data.results;
	var resultDiv = '<div class="row">';
	for(var i = 0; i < restaurants.length; i ++)
	{
		var resultDiv = resultDiv + `<div class="col-md-12 restaurant" id=${restaurants[i].id}>
							<img src="${restaurants[i].icon}" alt="" />
							<h1>${restaurants[i].name}</h1>
							<address>${restaurants[i].formatted_address}</address>
							<p>${restaurants[i].rating}</p>
						</div>`;
	}
	resultDiv += '</div>';
	$('#home').append(resultDiv);
}

$(document).ready(function() {
	var token = $('#token').text();
    $.cookie("x-access-token", token, { expires : 1, path: '/' });
    $('#token').remove();

    $('form').on('submit', function(e) {
    	e.preventDefault();
    	var city = $('#search').val();
	 	$.ajax({
    		url: '/home',
    		method: 'POST',
    		data: {city: city},
    		success: function(response)
    		{
    			//alert(JSON.stringify(response));
    			renderResults(JSON.parse(response));
    		},
    		error: function(response) {
    			alert(JSON.stringify(response));
    		}
    	});
    });
});

