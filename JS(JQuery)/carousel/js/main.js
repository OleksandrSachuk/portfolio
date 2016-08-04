$(document).ready(function()
		{
			//function for every slider
			$(".slider").each(function ()
			{
				//save current slider
				var obj = $(this);
				//add navigation block
				$(obj).append("<div class='nav'></div>");

				//function for every element of the slider
				$(obj).find("li").each(function ()
				{
					//add span with the number of clicked menu number
					$(obj).find(".nav").append("<span rel='"+$(this).index()+"'></span>");
					//adding class
					$(this).addClass("slider"+$(this).index());
				});

				//add class for current menu namber
				$(obj).find("span").first().addClass("on");
			});
		});

	function sliderJS (obj, sl) // slider function
	{
		//find ul
		var ul = $(sl).find("ul");
		var bl = $(sl).find("li.slider"+obj);
		//initiate step width 
		var step = $(bl).width();
		//animate changing image
		$(ul).animate({marginLeft: "-"+step*obj}, 500);
	}

	$(document).on("click", ".slider .nav span", function() // slider click navigate
	{
		var sl = $(this).closest(".slider");
		//remove class from previous active menu element
		$(sl).find("span").removeClass("on");
		//add class for active menu element
		$(this).addClass("on");
		var obj = $(this).attr("rel");
		//launch slider function
		sliderJS(obj, sl);
		return false;
	});
