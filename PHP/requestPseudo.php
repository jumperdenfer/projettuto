<?php
header('Expires:Mon, 26 Jul 1997 05:00:00 GMT');
header('Last-Modified:'.gmdate('D,dMYH:i:s').'GMT');
header('Cache-Control:no-cache, must-revalidate');
header('Pragma: no-cache') ;
header('Access-Control-Allow-Origin:*');

try {

$db=new PDO("mysql:host=developont.fr;dbname=developonteur;charset=utf8mb4","developonteur", "G4rdeP0n!");


//affiche les dix derniers pseudos

$req = $db->query('SELECT  pseudonyme FROM super_heros ORDER BY id DESC LIMIT 12');

	$liste = $req->fetchAll(PDO::FETCH_ASSOC);
	$liste = json_encode($liste);
	echo $liste;

}

 catch(PDOException $ex) {

}
