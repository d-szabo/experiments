	//global variables
	var col_selected=0;
	var row_selected=0;

	(function (){
		//when hovered over the cell, class 'hovered' is toggling
		$('td').hover(function() {
	    	$(this).addClass('hovered');
	  	}, function() {
	    	$(this).removeClass('hovered');
	  	});

		//when clicked on the cell, class 'clicked' is toggling
	  	$('td').click(function(){
			$(this).toggleClass('clicked');
			col_selected = $(this).parent().children().index($(this));
  			row_selected = $(this).parent().parent().children().index($(this).parent());
  			console.log('Row: ' + row_selected + ', Column: ' + col_selected);
		});

	  	//iterates through the cells and fills each with a random character
		$('td').each(function(){
			$(this).html(choose_a_letter());
		});

	})();

	//function that chooses a random character
	function choose_a_letter(){
	    var random_letter = "";
	    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        random_letter = possible.charAt(Math.floor(Math.random() * possible.length));
	    return random_letter;
	}