$(document).ready(function() {
	// bắt sự kiện click cho next
	$('.btn-next').click(function(event) {
		let slide_sau = $('.active').next();
		console.log(slide_sau.length);
		if(slide_sau.length != 0){
			$('.active').addClass('bien-mat-ben-trai').one('webkitAnimationEnd', function(event){
			$('.bien-mat-ben-trai').removeClass('bien-mat-ben-trai').removeClass('active');
		});
		slide_sau.addClass('active').addClass('di-vao-ben-phai').one('webkitAnimationEnd', function(event){
			$('.di-vao-ben-phai').removeClass('di-vao-ben-phai');
		});
		} else {
			$('.active').addClass('bien-mat-ben-trai').one('webkitAnimationEnd', function(event){
			$('.bien-mat-ben-trai').removeClass('bien-mat-ben-trai').removeClass('active');
		});
		$('.slide:first-child').addClass('active').addClass('di-vao-ben-phai').one('webkitAnimationEnd', function(event){
			$('.di-vao-ben-phai').removeClass('di-vao-ben-phai');
		});
		}
	});
	// bắt sự kiện click cho previus
	$('.btn-prev').click(function(event){
		let slide_truoc = $('.active').prev();
		console.log(slide_truoc.length);
		if (slide_truoc.length != 0) {
			$('.active').addClass('bien-mat-ben-phai').one('webkitAnimationEnd', function(event) {
			$('.bien-mat-ben-phai').removeClass('bien-mat-ben-phai').removeClass('active');
		});
		slide_truoc.addClass('active').addClass('di-vao-ben-trai').one('webkitAnimationEnd', function(event) {
			$('.di-vao-ben-trai').removeClass('di-vao-ben-trai');
		});
		} else {
			$('.active').addClass('bien-mat-ben-phai').one('webkitAnimationEnd', function(event) {
				$('.bien-mat-ben-phai').removeClass('bien-mat-ben-phai').removeClass('active');
			});
			$('.slide:last-child').addClass('active').addClass('di-vao-ben-trai').one('webkitAnimationEnd', function(event) {
				$('.di-vao-ben-trai').removeClass('di-vao-ben-trai');
			});
		}
	});
	setInterval(function(){
		$('.btn-next').click();
	}, 2000);
});