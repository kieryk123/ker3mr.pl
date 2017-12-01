var hamburger = jQuery('#hamburger'),
		menu = jQuery('#hamburger-menu');

hamburger.click(function() {
	menu.slideToggle(300);
	if (dropdownNav.is(':visible')) {
		dropdownNav.slideUp(200);
		dropdownLink.removeClass('arrow');
	}
});

var dropdownLink = jQuery('.dropdown-link'),
		dropdownNav = jQuery('.dropdown-nav');

dropdownLink.click(function() {
	dropdownLink.toggleClass('arrow');
	dropdownNav.slideToggle(200);
});
