/******************** Said section *********************************/
$(function(){
	$('.nav__icon').on('click', function() {
		$(this).toggleClass('active');
		$('nav ul').slideToggle();
	});
});

window.addEventListener('resize', ()=>{
	if(window.innerWidth>768)
		$('#menuUl').css("display", "flex");
	else
		$('#menuUl').css("display", "none");
});

$(document).ready(()=> {
	
	$('#menuUl > li').click(function(e) {
	  // e.preventDefault();
	  if(window.innerWidth<768)
	  	$('#menuUl').css("display", "none");
		  
	  $('#menuUl > li').removeClass('currentPage');
	  $(this).addClass('currentPage');
	});
  });

/******************** End of Said section *********************************/
