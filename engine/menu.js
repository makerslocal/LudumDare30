var Menu = [

	{
		Text : 'Help',
		Action: function() {
			var element = document.getElementById('help');

			if(element)
			{
				switch(element.style.display)
				{
					case 'none':
						Engine.Paused = true;
						Inventory.Render(element);
						element.style.display = 'block';
						break;

					default:
						element.style.display = 'none';
						Engine.Paused = false;
						break;
				}
			}
		}
	},
	{
		Text : 'Export World',
		Action : function(e) {
			theX = player.X >> 4 >> 7;// << 7 << 4;
			theY = player.Y >> 4 >> 7;// << 7 << 4;
			alert(theX + " " + theY);
			sizeX = theX + 1;
			sizeY = theY + 1;
			theX = theX << 7 << 4;
			theY = theY << 7 << 4;
			exported = world.Entities.Export(2048,2048,theX,theY);
                      	//jQuery('#qr').html('').qrcode(exported).show();
                        jQuery.ajax({
                      		type: "POST", url: "./world/",
                                data: {"world":exported},
                                success: function(x) {
                                	jQuery('#url').html('<a href="' + x + '">' + x + '</a>');
                                        jQuery('#qr').html('').qrcode(x);
                                        jQuery('#share').show();
                                }, dataType: "text"
                        });

                },

	},
	{
		Text : 'Inventory',
		Action: function() {
			var element = document.getElementById('inventory');

			if(element)
			{
				switch(element.style.display)
				{
					case 'none':
						Engine.Paused = true;
						Inventory.Render(element);
						element.style.display = 'block';
						break;

					default:
						element.style.display = 'none';
						Engine.Paused = false;
						break;
				}
			}
		}
	},
	{
		Text : 'Reset Game',
		Action : function() { PissOnLocalStorage(); }
	},
	{
		Text : 'Fork on GitHub',
		Action : function() {
			window.open('https://github.com/makerslocal/LudumDare30', '_blank');
		},
	},
];
