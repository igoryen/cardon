$( document ).ready( function() {
	$('body').attr('style', "font-family:Arial,sans-serif;");
	$('table').attr( 'style', 'width:100%;');
	// $('td').attr('style', 'border: 1px solid #d9d9d9;');






	var bg_accept = 'background-color: #00b050;';
	var bg_blue = 'background-color:#44546a;';
	var bg_light_blue = "background-color: #d5dce4;";
	var bg_regect = 'background-color: #ff0000;';
	var bg_vital = 'background-color: #ff0000;';
	var bkg_nas_logo = "background-image: url(images/NAS-MobileApp-Header.jpg);background-repeat: no-repeat; background-size: cover; background-position: center top;  height: 208px;";
	var bold = 'font-weight:bold;'
	var button_dimens = "padding: 12px 80px;";
	var capitalize = 'text-transform:capitalize;';
	var centered = 'text-align:center;';
	var fg_blue = 'color:#44546a;';
	var fg_white = 'color:#fff;';
	var font1_5em = 'font-size: 24px;';
	var ital = 'font-style:italic;';
	var margin1 = 'margin: 16px;';
	var pad1 = 'padding: 16px;';
	var pad3 = 'padding: 5px;';
	var pad9 = 'padding: 14px;';
	var pad_bot = 'padding-bottom: 13px;';
	var pad_top = 'padding-top: 13px;';
	var align_right = "text-align: right;";
	var align_left = "text-align: left;";
	var wide_half = 'width: 50%;';

	var uppercase = 'text-transform: uppercase;';
	var uppercase = 'text-transform:uppercase;';
	var vital = 'color:#ff0000;';

	var pad_head = "padding: 5px 16px;";



    // position: relative;

	var colspan2 = [ "a", "a2a", "b", 'c', "d", 'e', 'f', "g", "i", 'k', "l", "m", "n", "o", "p"];
	$.each( colspan2, function( index, value){
		$('#'+value ).children().first().attr('colspan', '2');
	});


	$('#a').find('td').first().attr('style', bkg_nas_logo + pad1);
	// $('#hero_pt1').attr("style", );
	$('#a1a').find('img').attr('style', 'width: 40em;');
	$('#a2a').find('td').attr('style', centered);
	$('#a3a').find('td').attr('style', centered + pad3);

	$('#b').attr( 'style', vital + ital + bold);
	$('#b').find('td').find('span').attr( 'style', uppercase)

	$("#c").find('td').attr('style', centered + font1_5em + fg_blue + pad_top);
	$('#c').find('td').find('span').attr('style', bold + capitalize + centered );

	$("#d").find('td').attr('style', centered + ital+ pad_bot );


	$("#e").find('td').attr('style', centered + pad_bot );
	$('#e').find('td').find('span').attr('style', bold + capitalize + centered);

	

	$("#f").find('td').attr('style', centered + pad_bot );
	$('#f').find('td').find('span').attr('style', bold + capitalize + centered);

	$('#g').children().first().attr('style',  bg_blue + fg_white + uppercase + bold + pad_head);

	// $('#h1').find('td').attr('style', capitalize);
	// $('#h1').find('td').find('span').attr('style', bold + capitalize);

	$('#h1a').find('td').attr('style', pad3 + capitalize);
	$('#h1b').find('td').attr('style', pad3 + capitalize);
	$('#h1c').find('td').attr('style', pad3 + capitalize);

	$('#h1a').find('td').find('span').attr('style', bold + pad3 + capitalize);
	$('#h1b').find('td').find('span').attr('style', bold + pad3 + capitalize);
	$('#h1c').find('td').find('span').attr('style', bold + pad3 + capitalize);

	$('#h2a').find('td').attr('style', pad3 + capitalize);
	$('#h2b').find('td').attr('style', pad3 + capitalize);
	$('#h2c').find('td').attr('style', pad3 + capitalize);

	$('#h2a').find('td').find('span').attr('style', bold + pad3 + capitalize);
	$('#h2b').find('td').find('span').attr('style', bold + pad3 + capitalize);
	$('#h2c').find('td').find('span').attr('style', bold + pad3 + capitalize);



	$('#i').children().first().attr('style',  bg_blue + fg_white + uppercase + bold + pad_head);

	$('#j1a').find('td').attr('style', pad3 + capitalize);
	$('#j1b').find('td').attr('style', pad3 + capitalize);
	$('#j1c').find('td').attr('style', pad3 + capitalize);

	$('#j1a').find('td').find('span').attr('style', bold + pad3 + capitalize);
	$('#j1b').find('td').find('span').attr('style', bold + pad3 + capitalize);
	$('#j1c').find('td').find('span').attr('style', bold + pad3 + capitalize);

	$('#j2a').find('td').attr('style', pad3 + capitalize);
	$('#j2b').find('td').attr('style', pad3 + capitalize);
	$('#j2c').find('td').attr('style', pad3 + capitalize);

	$('#j2a').find('td').find('span').attr('style', bold + pad3 + capitalize);
	$('#j2b').find('td').find('span').attr('style', bold + pad3 + capitalize);
	$('#j2c').find('td').find('span').attr('style', bold + pad3 + capitalize);

	$('#k').children().first().attr('style',  bg_blue + fg_white + uppercase + bold + pad_head);

	$('#l').find('td').attr('style', pad9);

	
	$('#m').attr('style', bg_light_blue);
	$('#m').find('td').attr('style', pad9);

	$('#n').find('td').attr('style', pad9);

	$('#o').attr('style', bg_light_blue);
	$('#o').find('td').attr('style', pad9);


	$('#p').attr('style', centered + bold);

	$('#q').children().first().attr( 'style', vital + align_right);
	$('#q').children().first().find('button').attr( 'style', bg_accept + fg_white + button_dimens + uppercase + bold + margin1);
	$('#q').children().last().find('button').attr( 'style', bg_regect + fg_white + button_dimens + uppercase + bold + margin1);




	



	// $("#d").find('td').attr('style', centered + ital );
	$("#pt_val, #pt_val_star").attr('style', vital);
	$("#loan_value_star").attr('style', vital)



	console.log(document.getElementsByTagName('html')[0].innerHTML);

});
