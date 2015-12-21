var slideshowProperties = {
	autoPlay : true,
	currentPanel : 1,
	totalPanels : 0,
	timePassed : 0,
	timeToChange : 60,
	duration : 750,
	inTransition : false,
	panel_content: Array 
};

$(document).ready(function(){
	gatherSlides();
	generateNavBtns();
	setFirstSlide();

	var Timer = setInterval(slideAdvance, 100);


	$('.cta_nav div').on('click', function(){
		if (slideshowProperties.inTransition == false){
			slideshowProperties.inTransition = true;
			changeSlide($(this).index());
			$('.cta_nav div').removeClass('selected');
			$(this).addClass('selected');
		}
	});
});

function gatherSlides(){
	$('.cta img').each(function(index){
		slideshowProperties.totalPanels = index + 1;
		var panel_image = $(this).attr('data-image');
		slideshowProperties.panel_content[index] = panel_image;
	});
}

function generateNavBtns() {
	for(i=0; i<slideshowProperties.totalPanels; i++){
		$('.cta_nav').append('<div></div>');
		if ( i == 0 ) {
			$('.cta_nav div').addClass('selected');
		}
	}
}

function setFirstSlide() {
	$('.cta img').addClass('no_show');
	$('.cta').append('<img class="slide_1" src="'+slideshowProperties.panel_content[0]+'" >')
}

function changeSlide(slideNum) {
	slideshowProperties.currentPanel = slideNum + 1;
	$('.cta').append('<img class="slide_2" style="opacity:0;" src="'+slideshowProperties.panel_content[slideNum]+'">');
	$('.slide_2').animate({opacity:1},slideshowProperties.duration,function(){
		$('.slide_1').remove();
		$(this).addClass('slide_1').removeClass('slide_2');
		slideshowProperties.inTransition = false;
	});
}

function slideAdvance(){
	if( slideshowProperties.timePassed == slideshowProperties.timeToChange ) {
		slideshowProperties.timePassed = 0;

		if( slideshowProperties.autoPlay == true ){
			if( slideshowProperties.currentPanel == slideshowProperties.totalPanels ){
				$('.cta_nav div:nth-child(1)').trigger('click');
			} else {
				$('.cta_nav div:nth-child('+(slideshowProperties.currentPanel+1)+')').trigger('click');
			}
		}
	} else {
		slideshowProperties.timePassed += 1;
	}
}



//debugger
// var debugTimer = setInterval(setDebugger,50);
// function setDebugger() {
// 	$('.var1').html('screenSize = '+slideshowProperties.screenSize);
// 	$('.var2').html('width = '+slideshowProperties.width);
// 	$('.var3').html('mobileSize = '+slideshowProperties.mobileSize);
// 	$('.var4').html('autoPlay = '+slideshowProperties.autoPlay);
// 	$('.var5').html('currentPanel = '+slideshowProperties.currentPanel);
// 	$('.var6').html('totalPanels = '+slideshowProperties.totalPanels);
// 	$('.var7').html('timePassed = '+slideshowProperties.timePassed);
// 	$('.var8').html('timeToChange = '+slideshowProperties.timeToChange);
// 	$('.var9').html('inTransition = '+slideshowProperties.inTransition);
// }