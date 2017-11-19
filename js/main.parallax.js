$(document).ready(function () {
    var _share = function (id) {

        var param = {
            'width': 640,
            'height': 400

        };

    };


    var _preload = function (data, cb) {
        if (!cb) {
            return;
        };

        var cnt = 0;
        if (data.length > 0) {
            for (var i in data) {
                var img = document.createElement('img');
                img.onload = function () {
                    if (cnt == (data.length - 1)) {
                        cb();
                    };
                    cnt++;
                };
                img.onerror = function () {
                    if (cnt == (data.length - 1)) {
                        cb();
                    };
                    cnt++;
                };
                img.src = data[i];
            };
        } else {
            cb();
        };
    };
    
    
	var img = [
	    'i/flying-objects.png',
	    'i/background.jpg',
	    'i/bg_1.png',
	    'i/bg_2.png',
	    'i/ground1.png',
	    'i/castle.png',
	    'i/man1.png',
	    'i/man2.png',
	    'i/smoke-brown.png',
	    'i/smoke-green.png',
	    'i/smoke-purple.png',
	    'i/smoke-blue.png',
	];
	
	var lang = [
	    /*
	    'i/logo.png',
		'play.png',
		'watch.png',
		*/
	];
	
	for (var i in lang) {
		img.push(CFG.lang + '/' + lang[i]);
	};
	
	for (var i = 1; i <= 16; ++i) {
		img.push('play/' + i + '.png');
	};
	
	for (var i in img) {
		img[i] = 'img/' + img[i];
	};
	
	_preload(img, _init);
});

var _resize = function () {
	$('#scene').parallax({
		'calibrateX': true,
		'calibrateY': true,
		'frictionX': 0.9,
		'frictionY': 0.9
	});
};


var _init = function () {
	var w = $(window);
	
	window.scrollTo(0, 1);
	
	_resize();
	w.unbind('resize').bind('resize', _resize);
/*
	$('body').unbind('touchmove touchend').bind('touchmove touchend', function (e) { e.preventDefault(); });
*/	
	$('#layout').css({ 'display': 'block' });
	$('#dimmer').css({ 'display': 'block' });
	$('#loading').remove();


	$('#play').unbind('mousedown touchstart').bind('mousedown touchstart', _video);
	$('.social .button').unbind('mousedown touchstart').bind('mousedown touchstart', function () { _share($(this).data('id')); });

	_play();

	var layout_height = $('#layout').outerHeight();
	w.unbind('statechange').bind('statechange', function () {
		$('#scene').css('height', layout_height);
	});

};