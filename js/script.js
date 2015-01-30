$(document).ready(function() { 

     //jumbtron animation
     var jt = $('.jumbotron .container h1');
        //jt.hide(1500).show(1500);      
        jt.effect('slide',{ direction: "left" }, 1100)  
        jt.queue(function() {
             $('.jumbotron').css("background-color", "black");  
              jt.css("color", "#6EBA28");       
        });
    //jumbotron animation index.html
      $('.jumbotron').css("background-color", "black");  
      $('js_jumboText').css("color", "#6EBA28");   



    //suchformular -> button animation hover
    $('button').hover(
	    function(){
	        $(this).css("border-color","#6EBA28");	     
	    },
	    function(){
	        $(this).css("border-color","#D6D6C2");     
	    }
  	);



    //start slide animation
    $('#jq_slide_left').effect('slide',{ direction: "left" }, 1000);
    //bounce animation
    $('#jq_bounce').effect('bounce', {times:5}, 1000);

    //links
    $('p #link').css("color","#6EBA28");
    $('p #link').css("font-size","18px");

    $('.container .row .col-md-6 .thumbnail img').css("height","100px");
    $('.container .row .col-md-6').css("margin-bottom","50px");

    //Menu bar
    $('#js_li').css("background-color","#6EBA28");


});