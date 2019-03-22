$(document).ready(function() {
	// bắt sự kiện click cho next
	$('.btn-next').click(function(event) {
		let nextslide = $('.active').next();
		console.log(nextslide.length);
		if(nextslide.length != 0){
			$('.active').addClass('remove_slide_left').one('webkitAnimationEnd', function(event){
			$('.remove_slide_left').removeClass('remove_slide_left').removeClass('active');
		});
		nextslide.addClass('active').addClass('slide_right').one('webkitAnimationEnd', function(event){
			$('.slide_right').removeClass('slide_right');
		});
		} else {
			$('.active').addClass('remove_slide_left').one('webkitAnimationEnd', function(event){
			$('.remove_slide_left').removeClass('remove_slide_left').removeClass('active');
		});
			$('.slide:first-child').addClass('active').addClass('slide_right').one('webkitAnimationEnd', function(event){
			$('.slide_right').removeClass('slide_right');
		});
		}
	});
	// bắt sự kiện click cho previus
	$('.btn-prev').click(function(event){
		let slideprev = $('.active').prev();
		console.log(slideprev.length);
		if (slideprev.length != 0) {
			$('.active').addClass('remove_slide_right').one('webkitAnimationEnd', function(event) {
			$('.remove_slide_right').removeClass('remove_slide_right').removeClass('active');
		});
		slideprev.addClass('active').addClass('slide_left').one('webkitAnimationEnd', function(event) {
			$('.slide_left').removeClass('slide_left');
		});
		} else {
			$('.active').addClass('remove_slide_right').one('webkitAnimationEnd', function(event) {
			$('.remove_slide_right').removeClass('remove_slide_right').removeClass('active');
		});
			$('.slide:last-child').addClass('active').addClass('slide_left').one('webkitAnimationEnd', function(event) {
			$('.slide_left').removeClass('slide_left');
		});
		}
	});
	setInterval(function(){
		$('.btn-next').click();
	}, 3000);
});