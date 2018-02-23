import 'babel-polyfill';
import './assets/reset.css';
import '../static/jquery.toast.css';
import '../static/jquery.toast';
import util from './util/util';
import './css/index.scss';
// import autosize from '../static/autosize';

$(() => {
	if (util.isWeixin) {
		console.log('wx');
	}
	console.log(util.formatDate(new Date(), 'yy-MM-dd hh:mm:ss'));
	$('.border1').click(() => {
		// console.log(util.checkPhone());
		$.toast().reset('all');
		$.toast('this is toast');
	});
	$('.transform').click(() => {
		$('.transform').css('transform', 'rotateY(180deg)');
	});
	document.body.addEventListener('touchstart', () => {});
	// autosize(document.querySelectorAll('textarea'));
});