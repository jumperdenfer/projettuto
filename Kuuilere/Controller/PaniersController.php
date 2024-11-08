<?php

App::uses('AppController', 'Controller');

class PaniersController extends AppController
{
	public $helpers = array('Html', 'Form');
	public $uses = array('Clients','Paniers');
	public $viewPath = 'ShowPaniers';
	public function index()
	{
		//if $clientAuthentified == true
		$result = $this->Paniers->find('all');
		$this->set('panier', $result);
		$this->render('principal');
	}
}

?>