var Controls = new Object();

Controls.Directions = new Object();

Controls.Get = function(direction)
{
	return this.Directions[direction];
}

Controls.OnKeyDown = function(event)
{
	switch(event.keyCode)
	{
		case 37:  // Left
		case 100: // Left (num)
			this.Set('left', true);
			break;

		case 38:  // Up
		case 104: // Up (num)
			this.Set('up', true);
			break;

		case 39:  // Right
		case 102: // Right (num)
			this.Set('right', true);
			break;

		case 40: // Down
		case 98: // Down (num)
			this.Set('down', true);
			break;
	}
};

Controls.OnKeyUp = function(event)
{
	switch(event.keyCode)
	{
		case 37:  // Left
		case 100: // Left (num)
			this.Set('left', false);
			break;

		case 38:  // Up
		case 104: // Up (num)
			this.Set('up', false);
			break;

		case 39:  // Right
		case 102: // Right (num)
			this.Set('right', false);
			break;

		case 40: // Down
		case 98: // Down (num)
			this.Set('down', false);
			break;
	}
};

Controls.Set = function(direction, value)
{
	if(!direction)
	{
		return;
	}

	this.Directions[direction]  = !!value;
}
