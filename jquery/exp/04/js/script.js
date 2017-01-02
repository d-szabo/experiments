	//global variables
	var select_state = 0;
	var col1_index=0;
	var row1_index=0;
	var col2_index=0;
	var row2_index=0;
	var sel1_elem;
	var sel2_elem;

	(function (){
		//when hovered over the cell, class 'hovered' is toggling
		$('td').hover(function() {
			var select_start;
			var select_finish;
	    	$(this).addClass('hovered');
	    	if (select_state == 1){
	    		col2_index = $(this).parent().children().index($(this));
  				row2_index = $(this).parent().parent().children().index($(this).parent());
  				if (row2_index == row1_index){
  					select_start = Math.min(col1_index, col2_index);
  					select_finish = Math.max(col1_index, col2_index);
    				$(':nth-child(n+'+(select_start+1)+'):nth-child(-n+'+(select_finish+1)+')', $(this).parent())
    					.addClass('clicked');

  				}
    			if (col2_index == col1_index){
    				select_start = Math.min(row1_index, row2_index);
  					select_finish = Math.max(row1_index,row2_index);
    					$(':nth-child('+(col1_index+1)+')', $(this).parent().parent().children(':nth-child(n+'+(select_start+1)+'):nth-child(-n+'+(select_finish+1)+')'))
    						.addClass('clicked');
    			}
  				//if (row1_index == row2_index){
  				//	$(':nth-child('+(row1_index+1)+')', $(this).parent().parent()).addClass('clicked');
  			//		console.log ($(this).parent().parent().children().index($(this).parent()));
  			//	}
	    	}
	  	}, function() {
	    	$(this).removeClass('hovered');
	  	});

		//when clicked on the cell, class 'clicked' is toggling
	  	$('td').click(function(){
			$(this).toggleClass('clicked');
			if (select_state == 0){
				sel1_elem = $(this);
				col1_index = sel1_elem.parent().children().index(sel1_elem);
  				row1_index = sel1_elem.parent().parent().children().index(sel1_elem.parent());
  				console.log('Row: ' + row1_index + ', Column: ' + col1_index);
  				select_state = 1;
  			} else if (select_state == 1){
  				sel2_elem = $(this);
  				col2_index = sel2_elem.parent().children().index(sel2_elem);
  				row2_index = sel2_elem.parent().parent().children().index(sel2_elem.parent());
  				console.log('Row2: ' + row2_index + ', Column2: ' + col2_index);
  				select_state = 0;
  			};

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