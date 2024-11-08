<?php

App::uses('AppController', 'Controller');

class ClientsController extends AppController
{
	public $helpers = array('Html', 'Form');
	public $uses = array('Clients');
	public $viewPath = 'ShowClients';
	public function list()
	{
		//if $admin == true
		$result = $this->Produit->find('all');
		$this->set('liste_clients', $result);
		$this->render('ShowClients');
	}
}

?>