<?php

if ( array_key_exists("zone",$_POST) ) {
	//we're making a new save
	$dirname = substr(str_replace('.','',microtime(TRUE)), 3);
	mkdir($dirname);
	file_put_contents($dirname . '/index.html', $_POST["zone"]);
	echo($_SERVER["HTTP_HOST"] . $_SERVER["REQUEST_URI"] . $dirname);
} else if ( array_key_exists(0,$_REQUEST) ) {
	//we tryina fetch, nah mean?
	$dirname = array_keys($_REQUEST)[0];
	if(is_dir($dirname)) {
		echo(file_get_contents($dirname . '/index.html'));
	}
}
