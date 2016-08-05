var play=0;
function record()
{
	$('.record').css('background-color','#86D949');
	$('.pic').css('color','white');
}
function playchange()
{
	play=(play+1)%2;
	if(play==0){
	$('#play').attr('src','../img/new_voice_03.jpg')
	$('#playtext').html("暂停");	
	}
	else
	{
	$('#play').attr('src','../img/new_voice_02.jpg')
	$('#playtext').html("播放");
	}	
}
