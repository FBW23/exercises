Element.prototype.index = function() {
	var returnedIndex = 0;
	var siblings = this.parentNode.childNodes;
	var count = siblings.length;
	var index = 0;
	while (index < count) {
		if (siblings[index].nodeType === Node.ELEMENT_NODE) {
			// Node is an element
			if (this == siblings[index]) {
				break;
			}
			returnedIndex++;
		}
		index++;
	}
	return returnedIndex;
};
(function($) {
	var songs = [
		{'id': '01', 'title': 'Thank you for the music', 'artist': 'ABBA', 'rating': 3},
		{'id': '02', 'title': 'California Girls', 'artist': 'Beach Boys', 'rating': 2},
		{'id': '03', 'title': 'How Deep Is Your Love', 'artist': 'Bee Gees', 'rating': 1},
		{'id': '04', 'title': 'Sweet Sixteen', 'artist': 'Chuck Berry', 'rating': 0},
		{'id': '05', 'title': 'Roll Over Beethoven', 'artist': 'Electric Light Orchestra', 'rating': 0},
		{'id': '06', 'title': 'Booze and Blues', 'artist': 'Ma Rainey', 'rating': 0},
		{'id': '07', 'title': 'Beds Are Burning', 'artist': 'Diesel and Dust', 'rating': 0}
	];
	var $songs = $.getElementById('songs');
	var songsTemplate = $.getElementById('songs-template').innerText;
	var songTemplate = $.getElementById('song-template').innerText;
	var cssTemplate = $.getElementById('css-template').innerText;
	var style = $.createElement('style');
	var maximaleRate = parseInt($songs.dataset.maximaleRate) || 5;
	var compareSongs = function(s1, s2) {
		return s1.rating < s2.rating;
	};
	var findSong = function(id) {
		for (var i = 0; i < songs.length; i++) {
			if (songs[i].id == id) {
				return songs[i];
			}
		}
		return false;
	};
	var rateSong = function(data) {
		if (data.songId && (data.delta || data.rate > -1)) {
			var song = findSong(data.songId);
			if (song) {
				song.rating = data.rate > -1 ? data.rate : Math.min(Math.max(song.rating + parseInt(data.delta), 0), maximaleRate);
				songs.sort(compareSongs).forEach(function(song, index) {
					var li = document.getElementById('song-' + song.id);
					li.className = 'index-' + index;
					li.innerHTML = Handlebars.compile(songTemplate)(song);
				});
			}
		}
	};
	Handlebars.registerPartial('song', songTemplate);
	Handlebars.registerHelper('math', function(lvalue, operator, rvalue, options) {
		lvalue = parseFloat(lvalue);
		rvalue = parseFloat(rvalue);

		return {
			'+': lvalue + rvalue,
			'-': lvalue - rvalue,
			'*': lvalue * rvalue,
			'/': lvalue / rvalue,
			'%': lvalue % rvalue
		}[operator];
	});
	Handlebars.registerHelper('rate', function(value) {
		var active = parseInt(value);
		var inactive = maximaleRate - active;
		var html = '';
		while (inactive--) {
			html += '<span></span>';
		}
		while (active--) {
			html += '<span class="active"></span>';
		}
		return html;
	});
	style.innerHTML = Handlebars.compile(cssTemplate)(songs);
	$.head.appendChild(style);
	$songs.innerHTML = Handlebars.compile(songsTemplate)(songs.sort(compareSongs));
	$.addEventListener('click', function(event) {
		var target = event.target;
		if (target.matches('button')) {
			rateSong(target.dataset);
		} else if (target.matches('.rating>span')) {
			var active = target.parentElement.querySelectorAll('.active').length;
			var rate = maximaleRate - target.index();
			var id = target.closest('li').id.slice(5);
			if (active == rate) {
				rate = 0;
			}
			rateSong({
				songId: id,
				rate: rate
			});
		}
	});
})(document);