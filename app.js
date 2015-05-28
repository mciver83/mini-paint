$(document).ready(function(){

	var color = 'white';
	var colors = 'white red blue green yellow';

	var cont = function(){
			$(this).addClass(color);
		};

	$('.box').mousedown(function(){

		$('.box').on('mouseenter', cont);

	})

	$('.box').mouseup(function(){

		$('.box').off('mouseenter', cont);
	})

	

	$('.box').on('dblclick', function(){
		$(this).removeClass(colors);
	});

	$('#reset').on('click', function(){
		$('.box').removeClass(colors);
	});

	$('#red').on('click', function(){
		color = 'red';
	})

	$('#blue').on('click', function(){
		color = 'blue';
	})

	$('#green').on('click', function(){
		color = 'green';
	})

	$('#yellow').on('click', function(){
		color = 'yellow';
	})

	$('#white').on('click', function(){
		color = 'white';
	})
})