<?php

App::uses('AppHelper', 'View/Helper');

class KuuilHelper extends AppHelper {

	public $helpers = array('Html', 'Form');

	public function quantity($nb){
		$result= array();
		for($i=1;$i<=$nb;$i++)
			$result[]=$i;
		return $result;
	}

	public function print_prod_rec($produit){
		foreach ($produit as $key => $value) {
        	if(is_array($value)){
        		$this->print_prod_rec($value);
        		echo "<br />";
        	}
        	else if($key == "id")
        		$id=$value;
        	else if($key=="quantité")
        		  echo $this->Form->input($id, array(
        		  	  'label' => "Quantité",
				      'options' => $this->quantity($value),
				      'empty' => '0'
				  ));
        	else if($key!="created" && $key!="modified")
        		echo $key." ".$value."<br />";
        }
	}

    public function print_prod($produit) {

    	echo $this->Form->create('produits', array('action' => 'add'));

    	echo $this->print_prod_rec($produit);

    	echo $this->Form->end('Ajouter au panier');		
    }
}

?>