
$(function(){
	
	
	//popup
	
	$('.popup').click(function(e){
		e.preventDefault();
		
		$('.pop').slideDown(500);
		$('.pop1').eq(0).css({"z-index":"999"});
		$('.pop1').eq(0).animate({"opacity":"1"},1000);
		
	});
	
	
	$('.popup1').click(function(e){
		e.preventDefault();
		
		$('.pop').slideDown(500);
		$('.pop1').eq(1).css({"z-index":"999"});
		$('.pop1').eq(1).animate({"opacity":"1"},1000);
		
	});
	
	$('.popup2').click(function(e){
		e.preventDefault();
		
		$('.pop').slideDown(500);
		$('.pop1').eq(2).css({"z-index":"999"});
		$('.pop1').eq(2).animate({"opacity":"1"},1000);
		
	});
	
	$('.exit').click(function(){
		$('.pop').slideUp(500);
		$('.pop1').css({"z-index":"0"});
		$('.pop1').animate({"opacity":"0"},1000);
	
	});
	
	$('.pop').click(function(){
		$('.pop').slideUp(500);
		$('.pop1').css({"z-index":"0"});
		$('.pop1').animate({"opacity":"0"},1000);
	});
});


$(function()
{
$('.styles-scroll').jScrollPane();
});
