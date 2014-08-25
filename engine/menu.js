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
