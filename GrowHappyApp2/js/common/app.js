var w;
/**
 * @description  跳转公共页面
 * @param {Object} href  链接地址
 * @param {Object} title 标题
 * @param {Object} type 额外参数
 * @param {Object} uid 页面ID
 */
function show(href, title, type, uid, entity) {
		mui.openWindow({
			url: "/common/pmain.html",
			id: uid,
			show: {
				autoShow: true //页面loaded事件发生后自动显示，默认为true
			},
			waiting: {
				autoShow: false
			},
			extras: {
				href: href,
				title: title,
				type: type,
				uid: uid,
				entity: entity
			}
		})
	}
	/**
	 * @description  直接跳转
	 * @param {Object} href  链接地址
	 * @param {Object} title 标题
	 * @param {Object} type 额外参数
	 * @param {Object} uid 页面ID
	 */

function showFact(href, title, type, uid, entity) {
		mui.openWindow({
			url: href,
			id: uid,
			show: {
				autoShow: true //页面loaded事件发生后自动显示，默认为true
			},
			waiting: {
				autoShow: false
			},
			extras: {
				href: href,
				title: title,
				type: type,
				uid: uid,
				entity: entity
			}
		})
	}
	/**
	 *  返回键
	 */

/*function back() {
	if (showMenu) {
		//菜单处于显示状态，返回键应该先关闭菜单,阻止主窗口执行mui.back逻辑；
		closeMenu();
		return false;
	} else {
		//菜单处于隐藏状态，执行返回时，要先close菜单页面，然后继续执行mui.back逻辑关闭主窗口；
		menu.close('none');
		return true;
	}
}
*/



function getCodeName(data, code) {
		if (data != null) {
			for (var a = 0; a < data.length; a++) {
				if (data[a].code == code) {
					return data[a].name;
				}
			}
		} 
	}
	/**
	 * 根据时间生成名称
	 */

function getTimeName() {
	var myDate = new Date();
	return myDate.getFullYear() + "" + (myDate.getMonth() + 1) + "" + myDate.getDate() + "" + myDate.getHours() + "" + myDate.getMinutes() + "" + myDate.getSeconds();
}
