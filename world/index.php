<?php

if ( array_key_exists("world",$_POST) ) {
	//we're making a new save
	$dirname = substr(str_replace('.','',microtime(TRUE)), 3);
	mkdir($dirname);
	file_put_contents($dirname . '/index.html', $_POST["world"]);
	die('http://' . $_SERVER["HTTP_HOST"] . $_SERVER["REQUEST_URI"] . '?' . $dirname);
} else if ( count($_REQUEST) > 0 ) {
	//we tryina fetch, nah mean?
	$dirname = array_keys($_REQUEST)[0];
	if(is_dir($dirname)) {
		$im = file_get_contents($dirname . '/index.html');
	} else {
		die("Couldn't find that world...");
	}
}

if (!im) die("Couldn't export that world.");
?>
<!DOCTYPE html>
<html><head><title>Importing...</title></head><body><script language="JavaScript">
localStorage["ld30zones.import"] = '<?php echo($im); ?>';
document.location = "../game.html";
</script></body></html>
