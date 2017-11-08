// listen for when the user clicks on the hamburger icon
$('.hamburger').on('click', function () {
	
	//if the menu is open slide it up
	if ($('.navbar-nav').hasClass('open')){
		$('.navbar-nav').removeClass('open');
	} else {
		//otherwise slide the menu down
		$('.navbar-nav').addClass('open');
	}
	

});


/* Resume Page: 
	- Function for the Scroll Up toggle 
*/

function topFunction() {
     $(this).click(function(){ 
        $('html,body').animate({ scrollTop: 0 }, 'slow');
        return false; 
    });
}
