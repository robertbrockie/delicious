UI.registerHelper('pluralize', function(n, thing) {
	if (n === 1) {
		return '1 ' + thing;
	}

	return n + ' ' + thing + 's';
});