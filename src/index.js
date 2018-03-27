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
	let el = $('.canscroll');
	// console.log(el.scrollTop(), 'top');
	let dis = 30;
	function scrollTo() {
		el.animate({
			scrollTop: dis
		}, 500);
		dis += 30;
	}
	let time = setInterval(scrollTo, 1200);
	if (dis >= 120) {
		dis = 0;
		clearInterval(time);
	}
	// console.log(util.formatDate(new Date(), 'yy-MM-dd hh:mm:ss'));
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
		// $('#input').get(0).disabled = '';
		$('#input').get(0).value = '你好';
	});
	$('.transform').click(() => {
		$('.transform').css('transform', 'rotateY(180deg)');
	});
	document.body.addEventListener('touchstart', () => {});
	// autosize(document.querySelectorAll('textarea'));
	// document.querySelector('.scroll').onscroll = () => {
	// 	console.log(document.querySelector('.scroll').scrollTop);
	// 	top = document.querySelector('.scroll').scrollTop;
	// };
	$('#input').on('compositionend', () => {
		let len = $('#input').val().length;
		if (len > 5) {
			$.toast().reset('all');
			$.toast('不能超过5个字');
		}
	});
	// $('body').append(`<img src="${img}" />`);
});