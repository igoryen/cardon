$( document ).ready( function() {
	$('body').attr('style', "font-family:Arial,sans-serif;");
	// $('table').attr( 'style', 'width:100%;');
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

	var bold = 'font-weight:bold; '
	var button_dimens = "padding: 12px 80px; ";
	var capitalize = 'text-transform:capitalize; ';
	var centered = 'text-align:center; ';
	var fg_blue = 'color:#44546a; ';
	var fg_white = 'color:#fff; ';
	var font1_5em = 'font-size: 24px; ';
	var ital = 'font-style:italic; ';
	var margin1 = 'margin: 16px; ';
	var pad1 = 'padding: 16px; ';
	var pad3 = 'padding: 5px; ';
	var pad9 = 'padding: 14px; ';
	var pad_bot = 'padding-bottom: 5px; ';
	var pad_top = 'padding-top: 5px; ';
	var align_right = "text-align: right; ";
	var align_left = "text-align: left; ";
	var wide_half = 'width: 50%; ';
	var wide_40em = "width: 640px; ";
	var wide_13em = "width: 208px; ";
	var word_wrap = "word-break:break-all; ";

	// var hero_height = "height: 174px; ";
	// var hero_width = "max-width: 1080px; ";
	
	var hero_width = "width: 320; ";
	var hero_height = "height: auto; ";


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



	$("#main_table")
		.attr("width", 600)
		.attr("border", 0)
		.attr("valign", "top")
		.attr("align", "center")
		.attr("cellpadding", 0)
		.attr("cellspacing", 0);
	// $("#hero_pt1").attr('style', bkg_nas_logo + pad1);
	// $('#hero_pt1').attr("style", );

	$("#a1")
		.attr("width", "620")
		.attr("align", "center")
		.attr("valign", "top");

	// $("#hero_pt1b").attr("src", imagepath + "NAS-MobileApp-Header.jpg" );
	// $("#hero_pt1b").attr("src", imagepath + "NAS-MobileApp-Header.jpg" );

	// $("#a").attr("width", hero_width);
	// $('#a1a').find('td').attr('style', border_red);
	// $('#a1a').find('img').attr('style', hero_width);
	// $('#a1a').find('img').attr('style', hero_width);

	$("#a1a").find("td")
		.attr("width", "620")
		.attr("align", "center")
		.attr("valign", "top")
		.attr("style", "text-align:center;");

	// $("#a1a").find("img").attr("src", imagepath + "NAS-MobileApp.png");
	$("#a1a").find("img")
		.attr("src", imagepath + "NAS-email-hero.png")
		.attr("width", "620")
		.attr("alt", "NAS email hero image");





	$('#a2a').find('td').attr('style', centered);

	$('#a3a').find('td').attr('style', centered + pad3);
	$("#a3a").find("img").first().attr("src", imagepath + "Apple_icon_Website.png");
	$("#a3a").find("img").last().attr("src", imagepath + "Android_icon_Website.png");

	// $("#b").attr("width", hero_width);
	$('#b').attr( 'style', vital + ital + bold);
	$('#b').find('td').find('span').attr( 'style', uppercase)

	// $("#c").attr("width", hero_width);
	$("#c").find('td').attr('style', centered + font1_5em + fg_blue + pad_top + word_wrap);
	$('#c').find('td').find('span').attr('style', bold + capitalize + centered );

	$("#d").find('td').attr('style', centered + ital+ pad_bot + word_wrap );


	$("#e").find('td').attr('style', centered + pad_bot + word_wrap );
	$('#e').find('td').find('span').attr('style', bold + capitalize + centered);

	

	$("#f").find('td').attr('style', centered + pad_bot + word_wrap );
	$('#f').find('td').find('span').attr('style', bold + capitalize + centered);

	$('#g').children().first().attr('style',  bg_blue + fg_white + uppercase + bold + pad_head + word_wrap);

	// $('#h1').find('td').attr('style', capitalize);
	// $('#h1').find('td').find('span').attr('style', bold + capitalize);

	$('#h1a').find('td').attr('style', pad3 + capitalize);
	$('#h1b').find('td').attr('style', pad3 + capitalize);
	$('#h1c').find('td').attr('style', pad3 + capitalize);

	$('#h1a').find('td').find('span').attr('style', bold + pad3 + capitalize + word_wrap);
	$('#h1b').find('td').find('span').attr('style', bold + pad3 + capitalize + word_wrap);
	$('#h1c').find('td').find('span').attr('style', bold + pad3 + capitalize + word_wrap);

	$('#h2a').find('td').attr('style', pad3 + capitalize);
	$('#h2b').find('td').attr('style', pad3 + capitalize);
	$('#h2c').find('td').attr('style', pad3 + capitalize);

	$('#h2a').find('td').find('span').attr('style', bold + pad3 + capitalize + word_wrap);
	$('#h2b').find('td').find('span').attr('style', bold + pad3 + capitalize + word_wrap);
	$('#h2c').find('td').find('span').attr('style', bold + pad3 + capitalize + word_wrap);



	$('#i').children().first().attr('style',  bg_blue + fg_white + uppercase + bold + pad_head);

	$('#j1a').find('td').attr('style', pad3 + capitalize);
	$('#j1b').find('td').attr('style', pad3 + capitalize);
	$('#j1c').find('td').attr('style', pad3 + capitalize);

	$('#j1a').find('td').find('span').attr('style', bold + pad3 + capitalize + word_wrap + word_wrap);
	$('#j1b').find('td').find('span').attr('style', bold + pad3 + capitalize + word_wrap + word_wrap);
	$('#j1c').find('td').find('span').attr('style', bold + pad3 + capitalize + word_wrap + word_wrap);

	$('#j2a').find('td').attr('style', pad3 + capitalize);
	$('#j2b').find('td').attr('style', pad3 + capitalize);
	$('#j2c').find('td').attr('style', pad3 + capitalize);

	$('#j2a').find('td').find('span').attr('style', bold + pad3 + capitalize + word_wrap);
	$('#j2b').find('td').find('span').attr('style', bold + pad3 + capitalize + word_wrap);
	$('#j2c').find('td').find('span').attr('style', bold + pad3 + capitalize + word_wrap);

	$('#k').children().first().attr('style',  bg_blue + fg_white + uppercase + bold + pad_head + word_wrap);

	$('#l').find('td').attr('style', pad9 + word_wrap);

	
	$('#m').attr('style', bg_light_blue);
	$('#m').find('td').attr('style', pad9 + word_wrap);

	$('#n').find('td').attr('style', pad9 + word_wrap);

	$('#o').attr('style', bg_light_blue);
	$('#o').find('td').attr('style', pad9 + word_wrap);


	$('#p').attr('style', centered + bold);


	// Buttons



	$("#q0").attr("cellpadding", 10 )
		.attr("width", 600)
		.attr("border", 0)
		.attr("valign", "top")
		.attr("cellspacing", 10)
		.attr("align", "center");


	$('#q').children().first()
		.attr( 'style', "text-align: right;")
		;

	$('#q').children().last()
		.attr( 'style', "text-align: left;")
		;

	$('#q').children().first().find('a')
		.attr( 'style', bg_accept + fg_white  + uppercase + bold +  "padding:10px 30px;")
		
		;
	
	$('#q').children().last().find('a')
		.attr( 'style', bg_regect + fg_white  + uppercase + bold +  "padding:10px 30px;")

		;




	



	// $("#d").find('td').attr('style', centered + ital );
	$("#pt_val, #pt_val_star").attr('style', vital);
	$("#loan_value_star").attr('style', vital)



	console.log(document.getElementsByTagName('html')[0].innerHTML);

});
