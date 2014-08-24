var Controls = new Object();

Controls.__Values = new Object();

Controls.Get = function(control)
{
	if(!control)
	{
		return;
	}

	if(control.ID)
	{
		control = control.ID;
	}

	return this.__Values[control];
}

Controls.OnKeyDown = function(event)
{
	if(!Enums.Controls)
	{
		return;
	}

	for(var control in Enums.Controls)
	{
		if(!control)
		{
			continue;
		}

		if(!Enums.Controls[control].KeyCodes)
		{
			continue;
		}

		for(var keyCode in Enums.Controls[control].KeyCodes)
		{
			if(event.keyCode != Enums.Controls[control].KeyCodes[keyCode])
			{
				continue;
			}

			this.Set(Enums.Controls[control].ID, true);
		}
	}
};

Controls.OnKeyUp = function(event)
{
	if(!Enums.Controls)
	{
		return;
	}

	for(var control in Enums.Controls)
	{
		if(!control)
		{
			continue;
		}

		if(!Enums.Controls[control].KeyCodes)
		{
			continue;
		}

		for(var keyCode in Enums.Controls[control].KeyCodes)
		{
			if(event.keyCode != Enums.Controls[control].KeyCodes[keyCode])
			{
				continue;
			}

			this.Set(Enums.Controls[control].ID, false);
		}
	}
};

Controls.Set = function(control, value)
{
	if(!control)
	{
		return;
	}

	if(control.ID)
	{
		control = control.ID;
	}

	this.__Values[control]  = !!value;
}
