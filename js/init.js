/*
	Strata by HTML5 UP
	html5up.net | @n33co
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var settings = {
		
		// Parallax background effect?
			parallax: true,

		// Parallax factor (lower = more intense, higher = less intense).
			parallaxFactor: 20

	};

	skel.init({
		reset: 'full',
		containers: '100%',
		breakpoints: {
			global: { href: 'css/style.css', grid: { gutters: ['2.5em', 0] } },
			xlarge: { media: '(max-width: 1800px)', href: 'css/style-xlarge.css' },
			large: { media: '(max-width: 1280px)', href: 'css/style-large.css', grid: { gutters: ['2em', 0] } },
			medium: { media: '(max-width: 980px)', href: 'css/style-medium.css'},
			small: { media: '(max-width: 736px)', href: 'css/style-small.css', grid: { gutters: ['1.5em', 0], zoom: 2 }, viewport: { scalable: false } },
			xsmall: { media: '(max-width: 480px)', href: 'css/style-xsmall.css', grid: { zoom: 3 } }
		}
	});

	$(function() {
		
		var $window = $(window),
			$body = $('body'),
			$header = $('#header');

		// Disable animations/transitions until the page has loaded.
			$body.addClass('is-loading');
			
			$window.on('load', function() {
				$body.removeClass('is-loading');
			});

		// Touch?
			if (skel.vars.isMobile) {
			
				// Turn on touch mode.
					$body.addClass('is-touch');

				// Height fix (mostly for iOS).
					window.setTimeout(function() {
						$window.scrollTop($window.scrollTop() + 1);
					}, 0);
			
			}

		// Forms (IE<10).

			if (skel.vars.IEVersion < 10) {
				
				var $form = $('form');

				if ($form.length > 0) {

					$.fn.n33_formerize=function(){var _fakes=new Array(),_form = $(this);_form.find('input[type=text],textarea').each(function() { var e = $(this); if (e.val() == '' || e.val() == e.attr('placeholder')) { e.addClass('formerize-placeholder'); e.val(e.attr('placeholder')); } }).blur(function() { var e = $(this); if (e.attr('name').match(/_fakeformerizefield$/)) return; if (e.val() == '') { e.addClass('formerize-placeholder'); e.val(e.attr('placeholder')); } }).focus(function() { var e = $(this); if (e.attr('name').match(/_fakeformerizefield$/)) return; if (e.val() == e.attr('placeholder')) { e.removeClass('formerize-placeholder'); e.val(''); } }); _form.find('input[type=password]').each(function() { var e = $(this); var x = $($('<div>').append(e.clone()).remove().html().replace(/type="password"/i, 'type="text"').replace(/type=password/i, 'type=text')); if (e.attr('id') != '') x.attr('id', e.attr('id') + '_fakeformerizefield'); if (e.attr('name') != '') x.attr('name', e.attr('name') + '_fakeformerizefield'); x.addClass('formerize-placeholder').val(x.attr('placeholder')).insertAfter(e); if (e.val() == '') e.hide(); else x.hide(); e.blur(function(event) { event.preventDefault(); var e = $(this); var x = e.parent().find('input[name=' + e.attr('name') + '_fakeformerizefield]'); if (e.val() == '') { e.hide(); x.show(); } }); x.focus(function(event) { event.preventDefault(); var x = $(this); var e = x.parent().find('input[name=' + x.attr('name').replace('_fakeformerizefield', '') + ']'); x.hide(); e.show().focus(); }); x.keypress(function(event) { event.preventDefault(); x.val(''); }); });  _form.submit(function() { $(this).find('input[type=text],input[type=password],textarea').each(function(event) { var e = $(this); if (e.attr('name').match(/_fakeformerizefield$/)) e.attr('name', ''); if (e.val() == e.attr('placeholder')) { e.removeClass('formerize-placeholder'); e.val(''); } }); }).bind("reset", function(event) { event.preventDefault(); $(this).find('select').val($('option:first').val()); $(this).find('input,textarea').each(function() { var e = $(this); var x; e.removeClass('formerize-placeholder'); switch (this.type) { case 'submit': case 'reset': break; case 'password': e.val(e.attr('defaultValue')); x = e.parent().find('input[name=' + e.attr('name') + '_fakeformerizefield]'); if (e.val() == '') { e.hide(); x.show(); } else { e.show(); x.hide(); } break; case 'checkbox': case 'radio': e.attr('checked', e.attr('defaultValue')); break; case 'text': case 'textarea': e.val(e.attr('defaultValue')); if (e.val() == '') { e.addClass('formerize-placeholder'); e.val(e.attr('placeholder')); } break; default: e.val(e.attr('defaultValue')); break; } }); window.setTimeout(function() { for (x in _fakes) _fakes[x].trigger('formerize_sync'); }, 10); }); return _form; };
					$form.n33_formerize();

				}
			
			}
					
		// Header.

			// Parallax background.

				// Disable parallax on IE (smooth scrolling is jerky), and on mobile platforms (= better performance).
					if (skel.vars.browser == 'ie'
					||	skel.vars.isMobile)
						settings.parallax = false;

				if (settings.parallax) {

					skel.change(function() {
						
						if (skel.isActive('medium')) {
							
							$window.off('scroll.strata_parallax');
							$header.css('background-position', 'top left, center center');
						
						}
						else {
							
							$header.css('background-position', 'left 0px');
					
							$window.on('scroll.strata_parallax', function() {
								$header.css('background-position', 'left ' + (-1 * (parseInt($window.scrollTop()) / settings.parallaxFactor)) + 'px');
							});
							
						}
					
					});
					
				}

		// Main Sections: Two.
			
			// Lightbox gallery.
			
			loadPic(9);
			
	});
	
	function destroyClick(){
		$("#two").find(".work-item a").each(function(index){
			var a = $(this);
			a.unbind();
		});
		
	}
	var html="<article class=\"4u 12u$(3) work-item\" id=\"{id}\">";
		html+="<a data-href=\"{url}\" class=\"image fit thumb\"><img src=\"{url}\" alt=\"\" /></a>";
		html+="<h3>{title}</h3>";
		html+="<p>{des}.</p>";
		html+="</article>";
		var arr=[
		{title:"厨卫",des:"厨卫",url:"images/thumbs/psb.jpg"},
		{title:"厨卫",des:"厨卫",url:"images/thumbs/psb1.jpg"},
		{title:"厨卫",des:"厨卫",url:"images/thumbs/psb2.jpg"},
		{title:"厨卫",des:"厨卫",url:"images/thumbs/psb3.jpg"},
		{title:"厨卫",des:"厨卫",url:"images/thumbs/psb4.jpg"},
		{title:"厨卫",des:"厨卫",url:"images/thumbs/psb5.jpg"},
		{title:"厨卫",des:"厨卫",url:"images/thumbs/psb6.jpg"},
		{title:"厨卫",des:"厨卫",url:"images/thumbs/psb7.jpg"},
		{title:"厨卫",des:"厨卫",url:"images/thumbs/psb8.jpg"},
		{title:"厨卫",des:"厨卫",url:"images/thumbs/psb9.jpg"},
		{title:"厨卫",des:"厨卫",url:"images/thumbs/psb10.jpg"},
		{title:"厨卫",des:"厨卫",url:"images/thumbs/psb11.jpg"},
		{title:"厨卫",des:"厨卫",url:"images/thumbs/psb12.jpg"},
		{title:"厨卫",des:"厨卫",url:"images/thumbs/psb13.jpg"},
		{title:"厨卫",des:"厨卫",url:"images/thumbs/psb14.jpg"},
		{title:"厨卫",des:"厨卫",url:"images/thumbs/psb15.jpg"},
		{title:"厨卫",des:"厨卫",url:"images/thumbs/psb16.jpg"},
		{title:"厨卫",des:"厨卫",url:"images/thumbs/psb17.jpg"},
		{title:"厨卫",des:"厨卫",url:"images/thumbs/psb18.jpg"},
		{title:"厨卫",des:"厨卫",url:"images/thumbs/psb19.jpg"},
		{title:"厨卫",des:"厨卫",url:"images/thumbs/psb20.jpg"},
		{title:"厨卫",des:"厨卫",url:"images/thumbs/psb21.jpg"},
		{title:"厨卫",des:"厨卫",url:"images/thumbs/psb22.jpg"},
		{title:"厨卫",des:"厨卫",url:"images/thumbs/psb23.jpg"},
		{title:"厨卫",des:"厨卫",url:"images/thumbs/psb24.jpg"},
		{title:"厨卫",des:"厨卫",url:"images/thumbs/psb25.jpg"},
		{title:"厨卫",des:"厨卫",url:"images/thumbs/psb26.jpg"},
		{title:"厨卫",des:"厨卫",url:"images/thumbs/psb27.jpg"},
		{title:"厨卫",des:"厨卫",url:"images/thumbs/psb28.jpg"},
		{title:"厨卫",des:"厨卫",url:"images/thumbs/psb29.jpg"},
		{title:"厨卫",des:"厨卫",url:"images/thumbs/psb30.jpg"},
		{title:"厨卫",des:"厨卫",url:"images/thumbs/psb31.jpg"},
		{title:"厨卫",des:"厨卫",url:"images/thumbs/psb32.jpg"},
		{title:"厨卫",des:"厨卫",url:"images/thumbs/psb33.jpg"},
		{title:"厨卫",des:"厨卫",url:"images/thumbs/psb34.jpg"},
		{title:"厨卫",des:"厨卫",url:"images/thumbs/psb35.jpg"},
		{title:"厨卫",des:"厨卫",url:"images/thumbs/psb36.jpg"},
		{title:"厨卫",des:"厨卫",url:"images/thumbs/psb37.jpg"},
		{title:"厨卫",des:"厨卫",url:"images/thumbs/psb38.jpg"},
		{title:"厨卫",des:"厨卫",url:"images/thumbs/psb39.jpg"},
		{title:"厨卫",des:"厨卫",url:"images/thumbs/psb40.jpg"},
		{title:"厨卫",des:"厨卫",url:"images/thumbs/psb41.jpg"},
		{title:"厨卫",des:"厨卫",url:"images/thumbs/psb42.jpg"},
		{title:"厨卫",des:"厨卫",url:"images/thumbs/psb43.jpg"},
		{title:"厨卫",des:"厨卫",url:"images/thumbs/psb44.jpg"},
		{title:"厨卫",des:"厨卫",url:"images/thumbs/psb45.jpg"},
		{title:"厨卫",des:"厨卫",url:"images/thumbs/psb46.jpg"},
		{title:"厨卫",des:"厨卫",url:"images/thumbs/psb47.jpg"},
		{title:"厨卫",des:"厨卫",url:"images/thumbs/psb48.jpg"},
		{title:"厨卫",des:"厨卫",url:"images/thumbs/psb49.jpg"},
		{title:"厨卫",des:"厨卫",url:"images/thumbs/psb50.jpg"},
		{title:"厨卫",des:"厨卫",url:"images/thumbs/psb51.jpg"},
		{title:"厨卫",des:"厨卫",url:"images/thumbs/psb52.jpg"}];
		var start=0;
		var length=51;
		
		function loadPic(size){
			
			for(var i=0;i<size;i++){
				var temp = html.replace("{id}",start);
				temp = temp.replace("{url}",arr[start].url);
				temp = temp.replace("{url}",arr[start].url);
				temp = temp.replace("{title}",arr[start].title);
				temp = temp.replace("{des}",arr[start].des);
				$(".row").append(temp);
				start++;
			}
			destroyClick();
			$('#two').poptrox({
				caption: function($a) { return $a.next('h3').text(); },
				overlayColor: '#2c2c2c',
				overlayOpacity: 0.85,
				popupCloserText: '',
				popupLoaderText: '',
				selector: '.work-item a',
				usePopupCaption: true,
				usePopupDefaultStyling: false,
				usePopupEasyClose: false,
				usePopupNav: true,
				windowMargin: (skel.isActive('small') ? 0 : 50)
			});
		}
		$(window).scroll(function() {
			if ($(window).scrollTop() == $(document).height() - $(window).height()) {
				if(start<length){
					loadPic(3);
				}
				
			}
		});
})(jQuery);