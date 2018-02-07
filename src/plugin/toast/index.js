import './toast.css';

export default class toast {
	$toastItem = null;
	show(message) {
		if (this.$toastItem) {
			return;
		}
		this.$toastItem = $('<div class="toast_wrapper"><div class="toast_txt">' + message + '</div></div>');
		if ($(document.body).find('.toast_wrapper').length === 0) {
			$(document.body).append(this.$toastItem);
		}
		setTimeout(() => {
			this.$toastItem.addClass('show');
		}, 0);
		setTimeout(() => {
			this.$toastItem.addClass('hide');
			this.$toastItem.removeClass('show');
		}, 1300);
		setTimeout(() => {
			this.hide();
		}, 1600);
	}
	hide() {
		this.$toastItem.remove();
		this.$toastItem = null;
	}
}
