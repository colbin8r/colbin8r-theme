import $ from 'jquery';

console.log('index.js');

$.fn.extend({
		animateCSS: function (animationName, callback) {
				var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
				this.addClass('animated ' + animationName).one(animationEnd, function() {
						$(this).removeClass('animated ' + animationName);
						if (callback) {
							callback();
						}
				});
				return this;
		}
});

$(() => {
	$('.hamburger').click(function() {
		$(this).toggleClass('is-active');
	});

	function toggleCurtain() {
		const curtain = $('.curtain');

		if (curtain.hasClass('curtain--hidden')) {
			curtain.removeClass('curtain--hidden');
			curtain.addClass('curtain--visible');

			curtain.animateCSS('fadeIn');

		} else if (curtain.hasClass('curtain--visible')){
			curtain.removeClass('curtain--visible');

			curtain.animateCSS('fadeOut', () => {
				curtain.addClass('curtain--hidden');
			});
		}
	}

	const toggle = $('.header__menu-toggle')
	const menu = $('.menu');

	toggle.click(() => {
		if (menu.hasClass('menu--open')) {
			console.log('.menu--open, closing menu');
			menu.removeClass('menu--open');
			menu.animateCSS('fadeOut', () => {
				menu.addClass('menu--closed');
			});
			toggleCurtain();

		} else if (menu.hasClass('menu--closed')) {
			console.log('.menu--closed, opening menu');
			menu.removeClass('menu--closed');
			menu.addClass('menu--open');
			menu.animateCSS('fadeInRight');
			toggleCurtain();
		}
	});

});
