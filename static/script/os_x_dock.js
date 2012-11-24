var body = document.getElementsByTagName("body")[0],
	img_pre   = 'https://raw.github.com/qiu8310/test/master/static/img/',
	dock_html = [],
	dock_urls,
	dock_elem = document.createElement('div');


dock_urls = {
	'wiki':     	{url:'http://www.zh.wikipedia.org/', 	img:'wiki.png'},
	'ZURB': 	{url:'http://www.zurb.com', 		img:'zurb-icon.png'},
	'LinkedIn': 	{url:'http://www.linkedin.com', 	img:'linkedin-icon.png'},
	'last.fm': 	{url:'http://www.last.fm',		img:'lastfm-icon.png'},
	'Google': 	{url:'http://www.google.com.hk/', 	img:'google-icon.png'},
	'Baidu': 	{url:'http://www.baidu.com/'	},
	'Facebook': 	{url:'http://www.facebook.com', 	img:'facebook.png'},
	'Youtube':  	{url:'http://www.youtube.com/', 	img:'youtube.png'},
	'Google Plus': 	{url:'https://plus.google.com/', 	img:'google_plus.png'},
};

dock_html.push('<div id="my-dockContainer"><div id="my-dockWrapper"><div class="cap left"></div><ul class="osx-dock">');
var key, title, it, img;
for (key in dock_urls) {
	it = dock_urls[key];
	title = it.title || key;
	img = it.img || (key + '.png').toLowerCase();
	if (img.indexOf('http://') !== 0) img = img_pre + img;

	dock_html.push('<li><span>'+title+'</span><a href="'+it.url+'" title="'+title+'" ><img src="'+img+'"/></a>');
}
dock_html.push('</ul></div></div>');
dock_elem.innerHTML = dock_html.join('');
body.appendChild(dock_elem);