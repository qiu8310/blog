$(function(){
	"use strict";
	// header 中的添加的收藏夹及设置为主页操作
	var header = $('header').get(0), home = 'http://fcbst.cn?hmsr=home';
	$('.operate', header).delegate('a', 'click', function(){
		if (this.className === 'homepage') {
			if (this.setHomePage) {
				this.style.behavior='url(#default#homepage)'; 
				this.setHomePage(home);
			} else {
				alert('您的浏览器不支持此操作');
			}
		} else if (this.className === 'favorite') {
			window.external && window.external.addFavorite && window.external.addFavorite(home,'丰城百事通');
			window.sidebar && window.sidebar.addPanel && window.sidebar.addPanel('丰城百事通', home);
		}
		return false;
	});

	// 百度地图
	$('.bdmap').each(function(){
		var $this = $(this), coord = $this.attr('data-coord');
		if (!coord) return ;
		coord = coord.split(',');
		var map = new BMap.Map(this);            // 创建Map实例
		map.centerAndZoom(new BMap.Point(parseFloat(coord[0]), parseFloat(coord[1])), 16);  //初始化时，即可设置中心点和地图缩放级别。
		map.addControl(new BMap.NavigationControl());  //添加默认缩放平移控件
		var marker = new BMap.Marker(new BMap.Point(coord[0], coord[1]));
		map.addOverlay(marker);              // 将标注添加到地图中
		marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
	});

	// 列表页面中的全局搜索
	$('.filter button.global').click(function(){
		$(this).closest('form').find('[name=id],[name=bid],[name=zone]').val('');
	});


	// 搜索字符串为空时，不执行搜索
	$('nav button[type=submit]').click(function(){
		var val, $wd = $(this).closest('form').find('input[name=wd]');
		if ($wd.length === 1) {
			val = $wd.val();
			if (!val || val === '') return false;
		} 
	});


	// footer 总在最低下
	var $footer = $('footer'), top = $(document).height() - $footer.outerHeight() - $footer.offset().top;
	if ( top === top && top > 0 ) {
		$footer.css('marginTop', top + parseFloat($footer.css('marginTop')));
	}
})