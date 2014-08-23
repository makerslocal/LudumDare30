var Controls = new Object();

Controls.Directions = new Object();

Controls.OnKeyDown = function(event)
{
	switch(event.keyCode)
	{
		case 37:  // Left
		case 100: // Left (num)
			this.Directions['left']  = true;
			break;

		case 38:  // Up
		case 104: // Up (num)
			this.Directions['up']  = true;
			break;

		case 39:  // Right
		case 102: // Right (num)
			this.Directions['right']  = true;
			break;

		case 40: // Down
		case 98: // Down (num)
			this.Directions['down']  = true;
			break;
	}
};

Controls.OnKeyUp = function(event)
{
	switch(event.keyCode)
	{
		case 37:  // Left
		case 100: // Left (num)
			this.Directions['left'] = false;
			break;

		case 38:  // Up
		case 104: // Up (num)
			this.Directions['up']  = false;
			break;

		case 39:  // Right
		case 102: // Right (num)
			this.Directions['right']  = false;
			break;

		case 40: // Down
		case 98: // Down (num)
			this.Directions['down']  = false;
			break;
	}
};