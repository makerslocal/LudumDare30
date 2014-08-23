var Engine = new Object();

Engine.Cycles = 0;

Engine.Listeners = new Array();

Engine.AddListener = function(listener)
{
	if(!this.Listeners)
	{
		return;
	}

	this.Listeners.push(listener);
};

Engine.Cycle = function()
{
	this.Cycles++;

	if(this.Listeners.length < 1)
	{
		return;
	}

	for(var i = 0; i < this.Listeners.length; i++)
	{
		if(!this.Listeners[i])
		{
			this.Listeners.splice(i--, 1);
			continue;
		}

		this.Listeners[i](this.Cycles);
	}
};

setInterval(function() { Engine.Cycle(); }, 50);