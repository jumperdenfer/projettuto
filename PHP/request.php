<?php
header('Expires:Mon, 26 Jul 1997 05:00:00 GMT');
header('Last-Modified:'.gmdate('D,dMYH:i:s').'GMT');
header('Cache-Control:no-cache, must-revalidate');
header('Pragma: no-cache') ;
header('Access-Control-Allow-Origin:*');

try {

    $db=new PDO("mysql:host=developont.fr;dbname=developonteur;charset=utf8mb4","developonteur", "G4rdeP0n!");

    /*$req = $db->query('SELECT  *  FROM super_heros WHERE editeur = "marvel" AND pseudonyme = "thor"');
    $donner = $req->fetch(PDO::FETCH_ASSOC);
    var_dump($donner);*/

        $editeur = htmlspecialchars($_GET['editeur']);
        $id = htmlspecialchars($_GET['id']);


        $req = $db->prepare('SELECT  *  FROM super_heros WHERE editeur = :editeur AND ID = :id');
        $req->execute(array(
            'editeur'=> $editeur,
            'id'=> $id
        ));


        $donner = $req->fetch(PDO::FETCH_ASSOC);
        if(empty($donner)) {
        	$donner = array(
                "info" => "Le personnage n'est pas présent"
            );
        	$donner = json_encode($donner);
        	echo $donner;
        }
        else {
            $donner = json_encode($donner);
        	echo $donner;
        }
    } catch(PDOException $ex) {
}



?>
