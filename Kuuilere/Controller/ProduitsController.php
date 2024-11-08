<?php

App::uses('AppController', 'Controller');

class ProduitsController extends AppController
{
	public $helpers = array('Kuuil');
	public $uses = array('Produits','Paniers');
	public $viewPath = 'ShowProduits';
	public function index()
	{
		$result = $this->Produits->find('all',array('conditions' => array('Produits.quantité >' => 0)));
		$this->set('liste_produits', $result);
		$this->render('principal');
	}

	public function add(){
		//if authentified == true

		$data=$this->request->data['produits'];
		$this->set('data',$data);
		$this->render('secondaire');

		if($this->request->is('post')){
			foreach ($data as $key => $value) {
				$this->Paniers->save( 
					array(
						"client_id" => '1',	// TRUC DU COOKIE
						"produit_id" => $key,
						"quantité" => $value+1
						)
					);
			}
			
		}

	}

	public function showPro($produit_id)
	{
		$result = $this->Produits->find('all',array('conditions' => array('Produits.id =' => $produit_id)));
		$this->set('produit',$result);
		$this->render('secondaire');
	}
}

?>