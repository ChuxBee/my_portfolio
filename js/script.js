// Hide Burger Menu on each nav-item click on mobile screen
function HideburgerMenu() {
	const icons = document.querySelector('.navbar-collapse');
	icons.classList.remove('show');
}

document.addEventListener('DOMContentLoaded', function() {
	var scrollLinks = document.querySelectorAll('.nav-link');

	scrollLinks.forEach(function(scrollLink) {
		scrollLink.addEventListener('click', function(e) {
			e.preventDefault(); // This prevents the default behavior i.e reloading of anchor tag
			var targetId = this.getAttribute('href');
			var targetSection = document.querySelector(targetId);

			// Scroll smoothly to the target section
			if (targetSection) {
				targetSection.scrollIntoView({
					behavior: 'smooth'
				});
			}
		});
	});
});