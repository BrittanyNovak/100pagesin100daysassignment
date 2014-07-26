$(document).ready(function(){

	function ladyBug() {

		setInterval(function(){
			this.h = $(window).height() - 70;
			this.w = $(window).width() - 40;
			this.randomH = Math.floor(Math.random() * this.h);
			this.randomW = Math.floor(Math.random() * this.w);
			$('#ladybug').animate({
				top: this.randomH,
				left: this.randomW
			}) 
		}, 100);	

			$('#snitch').click(function(){
				$('body').html("<div id='reward'><img src='reward.jpg' height='400'  '/><br>You have what it takes to be a seeker!</div>")
			})
	}
	new ladyBug();

});