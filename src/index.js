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
	console.log(util.formatDate(new Date(), 'yy-MM-dd hh:mm:ss'));
	$('.border1').click(() => {
		// console.log(util.checkPhone());
		// $.toast().reset('all');
		// $.toast('this is toast');
		$('.text').css('display', 'block');
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
	// $('body').append(`<img src="${img}" />`);
});