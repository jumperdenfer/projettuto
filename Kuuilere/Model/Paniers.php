<?php
class Paniers extends AppModel
{
public $useTable = "paniers"; // sans le pr´efixe donc
public $primaryKey = "id"; //Pas forcément nécessaire
public $displayField = "produit_id";
//public $order = array(’Paniers.produit_id ASC’, ’Paniers.modified DESC’);
}
?>