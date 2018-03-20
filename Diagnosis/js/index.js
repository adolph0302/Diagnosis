//菜单组
$('.menu_bot_one ul li:first-child').addClass('Selected');
$('.menu_bot_two>div:first-child').css('display', 'block');
$('.menu_bot_two>div ul li:first-child').addClass('Selected_two');
$('.left_menu>div .menu_bot_one>ul>li').on('click', function() {
	//左边菜单的选中状态
	var index = $(this).index();
	$(this).siblings().removeClass('Selected');
	$(this).addClass('Selected');
	//右边整个内容区域的显示
	$(this).parent().parent().parent().children('.menu_bot_two').children('div').css('display', 'none').eq(index).css('display', 'block');
})
//右边整个内容区域的菜单选中状态
$('.menu_bot_two>div>ul>li').on('click', function() {
	$(this).siblings().removeClass('Selected_two');
	$(this).addClass('Selected_two');
	$(this).text();
	$('.body_right').text($(this).text());
})
//点击相对应的标题出来
$('.body_left>div').on('click', function() {
	var index = $(this).index();
	$('.left_menu>div').eq(index).css({
		'transform': 'translateX(320px)',
		'transition': 'all 1s'
	});
	$('.body_left').css({
		'transform': 'translateX(-65px)',
		'transition': 'all 1s'
	});
})
//点击退回
$('.turn').click(function() {
	$('.left_menu>div').css({
		'transform': 'translateX(-320px)',
		'transition': 'all 2s'
	});
	$('.body_left').css({
		'transform': 'translateX(0px)',
		'transition': 'all 1s'
	});
})
//导航部分
$('#nav ul li:first-child span').css('width', '100px')
$('#nav ul li:first-child a').css('color', '#ef7906')
$('#nav ul li').on('click', function() {
	var index = $(this).index();
	$(this).siblings().children('span').css('width', '0px');
	$(this).children('span').css('width', '100px');
	$('#nav ul li a').css('color', 'white')
	$(this).children('a').css('color', '#ef7906');
})
