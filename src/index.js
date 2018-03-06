import 'babel-polyfill';
import './assets/reset.css';
import '../static/jquery.toast.css';
import '../static/jquery.toast';
import util from './util/util';
import './css/index.scss';
// import autosize from '../static/autosize';
// const img = require('./img/bg1.jpg');

$(() => {
	if (util.isWeixin) {
		console.log('wx');
	}
	//返回角度
	function GetSlideAngle(dx, dy) {
		return (Math.atan2(dy, dx) * 180) / Math.PI;
	}

	//根据起点和终点返回方向 1：向上，2：向下，3：向左，4：向右,0：未滑动
	function GetSlideDirection(startX, startY, endX, endY) {
		let dy = startY - endY;
		let dx = endX - startX;
		let result = 0;

		//如果滑动距离太短
		if (Math.abs(dx) < 2 && Math.abs(dy) < 2) {
			return result;
		}
		let angle = GetSlideAngle(dx, dy);
		if (angle >= -45 && angle < 45) {
			result = 4;
		}
		else if (angle >= 45 && angle < 135) {
			result = 1;
		}
		else if (angle >= -135 && angle < -45) {
			result = 2;
		}
		else if ((angle >= 135 && angle <= 180) || (angle >= -180 && angle < -135)) {
			result = 3;
		}
		return result;
	}
	//滑动处理
	let startX;
	let startY;
	document.addEventListener('touchstart', (ev) => {
		startX = ev.touches[0].pageX;
		startY = ev.touches[0].pageY;
	}, false);
	document.addEventListener('touchend', (ev) => {
		let endX;
		let endY;
		endX = ev.changedTouches[0].pageX;
		endY = ev.changedTouches[0].pageY;
		let direction = GetSlideDirection(startX, startY, endX, endY);
		switch (direction) {
			case 0:
				// alert('没滑动');
				break;
			case 1:
				// alert('向上');
				break;
			case 2:
				// alert('向下');
				break;
			case 3:
				// alert('向左');
				break;
			case 4:
				// alert('向右');
				break;
			default:
				// alert('nomove');
		}
	}, false);
	console.log(util.formatDate(new Date(), 'yy-MM-dd hh:mm:ss'));
	$('body').click(() => {
		// console.log(util.checkPhone());
		// $.toast().reset('all');
		// $.toast('this is toast');
		// $('.text').css('display', 'block');
		// window.location.hash = '#test';
		// document.querySelector('#test').scrollIntoView(true);
		// console.log($('#test').offset().top);
		// $('.content').animate({ scrollTop: $('#test').offset().top }, 400);
		$('.bottom').animate({
			bottom: 0
		});
	});
	$('.transform').click(() => {
		$('.transform').css('transform', 'rotateY(180deg)');
	});
	document.body.addEventListener('touchstart', () => {});
	// autosize(document.querySelectorAll('textarea'));
	let top;
	// document.querySelector('.scroll').onscroll = () => {
	// 	console.log(document.querySelector('.scroll').scrollTop);
	// 	top = document.querySelector('.scroll').scrollTop;
	// };
	$('.scroll').click(() => {
		document.querySelector('.scroll').scrollTop = top;
		$('.scroll').css({
			position: 'fixed'
		});
		$('.maskscroll').css({
			overflowY: 'scroll'
		});
		$('.showmask').removeClass('hidden');
	});
	$('.showmask .item').click(() => {
		$('.showmask').addClass('hidden');
		console.log(document.querySelector('.scroll').scrollTop);
	});
	$('#input').on('compositionend', () => {
		let len = $('#input').val().length;
		if (len > 5) {
			$.toast().reset('all');
			$.toast('不能超过5个字');
		}
	});
	// window.onresize = () => {
	// 	setInterval(() => {
	// 		alert(window.innerHeight);
	// 	}, 500);
	// };
	// $('body').append(`<img src="${img}" />`);
	let [a, b] = [10, '20'];
	[a, b] = [b, a];
	console.log(a, 'a');
	console.log(b, 'b');
	console.log(typeof b);
});