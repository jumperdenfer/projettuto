<?php
class Clients extends AppModel
{
public $useTable = ’clients’; // sans le pr´efixe donc
public $primaryKey = ’id’; //Pas forcément nécessaire
public $displayField = ’login’;
public $order = array(’Clients.login ASC’, ’Clients.modified DESC’);
}
?>