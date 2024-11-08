<?php
class Produits extends AppModel
{
public $useTable = "produits"; // sans le pr´efixe donc
public $primaryKey = "id"; //Pas forcément nécessaire
public $displayField = "libellé";
//public $order = array(’Produits.libellé ASC’, ’Produits.modified DESC’);
}
?>