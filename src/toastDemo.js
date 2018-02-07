$.toast().reset('all'); // 弹出toast之前先调用这个方法（清空之前的toast）
$.toast({
	text: 'this is toast',
	heading: '',
	showHideTransition: 'fade',
	allowToastClose: false, // 关闭按钮
	hideAfter: 3000, // 设置toast消失的时间
	loader: false, // 是否显示加载条
	loaderBg: '#9EC600', // 设置加载条颜色
	stack: 5,
	position: 'bottom-left', // toast位置(相对于屏幕)
	bgColor: false, // toast背景颜色
	textColor: false, // toast文本颜色
	textAlign: 'center', // 文本对齐方式
	icon: 'success', // 设置图标
	beforeShow: () => {},
	afterShown: () => {},
	beforeHide: () => {},
	afterHidden: () => {},
	onClick: () => {}
});
