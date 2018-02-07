import 'babel-polyfill';
import './assets/reset.css';
import '../static/jquery.toast.css';
import '../static/jquery.toast';
import util from './util/util';
import './css/index.scss';

$(() => {
	if (util.isWeixin) {
		console.log('wx');
	}
	console.log(util.formatDate(new Date(), 'yy-MM-dd hh:mm:ss'));
	// console.log(util.checkPhone())
	$('body').click(() => {
		$.toast().reset('all');
		$.toast({
			text: 'this is toast',
			// text: '加载中...aaa',
			loader: false,
			hideAfter: 1300,
			position: 'mid-center',
			textAlign: 'center',
			allowToastClose: false
		});
	});
});
