$(document).ready(function() { 
     $('#jq_slide_left').effect('slide',{ direction: "left" }, 1000);
     $('#jq_bounce').effect('bounce', {times:5}, 1000);

     var jt = $('.jumbotron .container h1');
    $('button').hover(
	    function(){
	        $(this).css("border-color","#6EBA28");
	        jt.hide(1500).show(1500);	       
    		jt.queue(function() {
      			 $('.jumbotron').css("background-color", "red");
    		});
	    },
	    function(){
	        $(this).css("border-color","lightgrey");
	    }
  	);
});