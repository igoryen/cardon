$( document ).ready( function() {
	$('body').attr('style', "font-family:Arial,sans-serif;");
	$('table').attr( 'style', 'width:100%;');
	// $('td').attr('style', 'border: 1px solid #d9d9d9;');



	var imagepath = "https://go.reachmail.net/client_files/TNGOC/images/"; // reachmail
	// var imagepath = "images/"; // local




	var bg_accept = 'background-color: #00b050; ';
	var bg_blue = 'background-color:#44546a; ';
	var bg_light_blue = "background-color: #d5dce4; ";
	var bg_regect = 'background-color: #ff0000; ';
	var bg_vital = 'background-color: #ff0000; ';
	var bkg_nas_logo = "background-image: url(" + imagepath + "NAS-MobileApp-Header.jpg); background-repeat: no-repeat; background-size: cover; background-position: center top;  height: 208px; ";
	var bkg_nas_logo2 = imagepath + "NAS-MobileApp-Header.jpg";

	var align_center = "text-align: center; ";
	var align_left = "text-align: left; ";
	var align_right = "text-align: right; ";
	var bold = 'font-weight:bold; '
	var button_dimens = "padding: 12px 80px; ";
	var capitalize = 'text-transform:capitalize; ';
	var centered = 'text-align:center; ';
	var fg_blue = 'color:blue; ';
	var fg_white = 'color:#fff; ';
	var font1_5em = 'font-size: 24px; ';
	var hero_height = "height: 174px; ";
	var hero_width = "width: 1080px; ";
	var row_heading_width = "width: " + (1080/4) * 1 + "px";
	var row_field_width = "width: " + (1080/4) * 3 + "px";

	var ital = 'font-style:italic; ';
	var margin1 = 'margin: 16px; ';
	var pad1 = 'padding: 16px; ';
	var pad3 = 'padding: 5px; ';
	var pad9 = 'padding: 14px; ';
	var pad_bot_1 = 'padding-bottom: 16px; ';
	var pad_bot_2 = 'padding-bottom: 32px; ';
	var pad_top_1 = 'padding-top: 16px; ';
	var pad_top_2 = 'padding-top: 32px; ';

	var wide_13em = "width: 208px; ";
	var wide_40em = "width: 640px; ";
	var wide_half = 'width: 50%; ';
	var word_wrap = "word-break:break-all; ";

	var uppercase = 'text-transform: uppercase; ';
	var uppercase = 'text-transform:uppercase; ';
	var vital = 'color:#ff0000; ';

	var pad_head = "padding: 5px 16px; ";
	var border_red = "border:1px solid red; "




    // position: relative;

	var colspan2 = [ "a", "a2a", "b", 'c', "d", 'e', 'f', "g", "i", 'k', "l", "m", "n", "o", "p"];
	$.each( colspan2, function( index, value){
		$('#'+value ).children().first().attr('colspan', '2');
	});



	$("#main_table").attr("style", hero_width).attr("width", 600).attr("border", 0).attr("valign", "top").attr("align", "center").attr("cellpadding", 0).attr("cellspacing", 0);
	// $("#hero_pt1").attr('style', bkg_nas_logo + pad1);
	// $('#hero_pt1').attr("style", );
	// $("#hero_pt1b").attr("src", imagepath + "NAS-MobileApp-Header.jpg" );
	// $("#hero_pt1b").attr("src", imagepath + "NAS-MobileApp-Header.jpg" );

	// $("#a").attr("width", hero_width);
	// $('#a1a').find('td').attr('style', border_red);
	$('#a1a').find('img').attr('style', hero_height + hero_width).attr("height", hero_height).attr("width", hero_width);
	// $("#a1a").find("img").attr("src", imagepath + "NAS-MobileApp.png");
	$("#a1a").find("img").attr("src", imagepath + "NAS-email-hero.png");


	$('#a2a').find('td').attr('style', centered);
	$('#a3a').find('td').attr('style', centered);

	$('#a3a').find('td').attr('style', centered + pad3);
	$("#a3a").find("img").first().attr("src", imagepath + "Apple_icon_Website.png");
	$("#a3a").find("img").last().attr("src", imagepath + "Android_icon_Website.png");

	//==================================
	// B
	//==================================
	// $("#b").attr("width", hero_width);
	$('#b').attr( 'style', vital + ital + bold );
	$('#b').find('td').attr("style", pad_bot_2);
	$('#b').find('td').find('span').attr( 'style', uppercase )


	
	//========================
	// J
	//========================

	// $('#j').attr("style", );
	$('#j1').attr( "width", hero_width);
	$('#j1a td:first-child').attr('style', pad3 + capitalize + pad_bot_1 + word_wrap + row_heading_width);
	$('#j1a td:last-child').attr('style', pad3 + capitalize + pad_bot_1 + word_wrap + row_field_width);



	$('#j1b').find('td').attr('style', pad3 + capitalize + pad_bot_1 + word_wrap);
	$('#j1c').find('td').attr('style', pad3 + capitalize + pad_bot_1 + word_wrap);
	$('#j1d').find('td').attr('style', pad3 + capitalize + pad_bot_1 + word_wrap);


	$('#j1a').find('td').find('span').attr('style', bold + pad3 + capitalize + word_wrap);
	$('#j1b').find('td').find('span').attr('style', bold + pad3 + capitalize + word_wrap);
	$('#j1c').find('td').find('span').attr('style', bold + pad3 + capitalize + word_wrap);
	$('#j1d').find('td').find('span').attr('style', bold + pad3 + capitalize + word_wrap);
	//=========================
	// Q
	//=========================

	$('#q').children().first().attr( 'style', vital + align_center + pad_top_2);
	$('#q').children().first().find('button').attr( 'style', bg_accept + fg_white + button_dimens + uppercase + bold + margin1);
	$('#q').children().last().find('button').attr( 'style', bg_regect + fg_white + button_dimens + uppercase + bold + margin1);


	$("#divider").attr("style", pad_top_2 + align_center + pad_bot_2);



	//==================================
	// F_B
	//==================================
	// $("#b").attr("width", hero_width);
	$('#f_b').attr( 'style', vital + ital + bold);
	$('#f_b').find('td').attr("style", pad_bot_2);
	$('#f_b').find('td').find('span').attr( 'style', uppercase)

	//=======================
	// F_C
	//=======================
	// $("#c").attr("width", hero_width);
	$("#f_c").find('td').attr('style', pad_top_1 + pad_bot_2 + word_wrap);
	$('#f_c').find('td').find('span').attr('style', bold );

	
	//========================
	// F_J
	//========================

	$('#f_fj1').attr( "width", hero_width);
	$('#f_j1a td:first-child').attr('style', pad3 + capitalize + pad_bot_1 + word_wrap + row_heading_width);
	$('#f_j1a td:last-child').attr('style', pad3 + capitalize + pad_bot_1 + word_wrap + row_field_width);
	$('#f_j1c').find('td').attr('style', pad3 + capitalize + pad_bot_1 + word_wrap);
	$('#f_j1d').find('td').attr('style', pad3 + capitalize + pad_bot_1 + word_wrap);


	$('#f_j1a').find('td').find('span').attr('style', bold + pad3 + capitalize + word_wrap);
	$('#f_j1b').find('td').find('span').attr('style', bold + pad3 + capitalize + word_wrap);
	$('#f_j1c').find('td').find('span').attr('style', bold + pad3 + capitalize + word_wrap);
	$('#f_j1d').find('td').find('span').attr('style', bold + pad3 + capitalize + word_wrap);
	//=========================
	// F_Q
	//=========================

	$('#f_q').children().first().attr( 'style', vital + align_center + pad_top_2);
	$('#f_q').children().first().find('button').attr( 'style', bg_accept + fg_white + button_dimens + uppercase + bold + margin1);
	$('#f_q').children().last().find('button').attr( 'style', bg_regect + fg_white + button_dimens + uppercase + bold + margin1);

	
	//=========================
	//	G
	//=========================
	$('tr[id^="g"]').find("td").attr('style', fg_blue + pad_top_2);


	// $("#d").find('td').attr('style', centered + ital );
	$("#pt_val, #pt_val_star").attr('style', vital);
	$("#loan_value_star").attr('style', vital)



	console.log(document.getElementsByTagName('html')[0].innerHTML);

});
