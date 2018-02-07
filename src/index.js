import 'babel-polyfill';
import './css/common.css';
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
			// text: '加载中...aa',
			loader: false,
			hideAfter: 1500,
			position: 'mid-center',
			textAlign: 'center',
			allowToastClose: false
		});
	});
});
