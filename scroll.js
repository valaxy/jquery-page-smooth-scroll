$(function () {
	var targetScrollTop = document.body.scrollTop

	var addDelta = function (offset) {
		targetScrollTop += offset * .3
		if (targetScrollTop >= document.body.scrollHeight - window.innerHeight) {
			targetScrollTop = document.body.scrollHeight - window.innerHeight
		} else if (targetScrollTop <= 0) {
			targetScrollTop = 0
		}
		return targetScrollTop
	}

	// 整页平滑滚动(有待改进)
	$(document).on('mousewheel', function (e) {
		$(document.body).stop().animate({
			scrollTop: addDelta(-e.originalEvent.wheelDelta) //  - e.originalEvent.wheelDelta * 3
		}, 200)
		return false
	}).on('mousedown', function () {
		$(document.body).stop()
	}).on('mouseup', function () {
		targetScrollTop = document.body.scrollTop
	})
})