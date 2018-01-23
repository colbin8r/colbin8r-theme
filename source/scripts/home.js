import $ from 'jquery';

console.log('home.js');

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
		let curtain = $('.curtain');

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

	$('.menu').each((i, menu) => {
		menu = $(menu);
		let toggle = $(menu).find('.menu__toggle');
		let content = $(menu).find('.menu__content');
		toggle.click(() => {
			if (menu.hasClass('menu--open')) {
				menu.removeClass('menu--open');
				content.animateCSS('fadeOut', () => {
					menu.addClass('menu--closed');
				});
				toggleCurtain();

			} else if (menu.hasClass('menu--closed')) {
				menu.removeClass('menu--closed');
				menu.addClass('menu--open');
				content.animateCSS('fadeInRight');
				toggleCurtain();
			}
		});
	});
});
