<?php

if ( array_key_exists("world",$_POST) ) {
	//we're making a new save
	$dirname = substr(str_replace('.','',microtime(TRUE)), 3);
	mkdir($dirname);
	file_put_contents($dirname . '/index.html', $_POST["world"]);
	echo('http://' . $_SERVER["HTTP_HOST"] . $_SERVER["REQUEST_URI"] . '?' . $dirname);
} else if ( count($_REQUEST) > 0 ) {
	//we tryina fetch, nah mean?
	$dirname = array_keys($_REQUEST)[0];
	if(is_dir($dirname)) {
		echo(file_get_contents($dirname . '/index.html'));
	} else {
		echo("Couldn't find that world...");
	}
}
