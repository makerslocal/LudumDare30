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
		case 69: // E
		case 32: // Space
			this.Set('action', true);
			break;

		case 65:  // A
		case 37:  // Left
		case 100: // Left (num)
			this.Set('left', true);
			break;

		case 87:  // W
		case 38:  // Up
		case 104: // Up (num)
			this.Set('up', true);
			break;

		case 68:  // D
		case 39:  // Right
		case 102: // Right (num)
			this.Set('right', true);
			break;

		case 83: // S
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
		case 69: // E
		case 32: // Space
			this.Set('action', false);
			break;

		case 65:  // A
		case 37:  // Left
		case 100: // Left (num)
			this.Set('left', false);
			break;

		case 87:  // W
		case 38:  // Up
		case 104: // Up (num)
			this.Set('up', false);
			break;

		case 68:  // D
		case 39:  // Right
		case 102: // Right (num)
			this.Set('right', false);
			break;

		case 83: // S
		case 40: // Down
		case 98: // Down (num)
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
