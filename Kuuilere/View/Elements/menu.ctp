<table>
	<tr>
		<td>
			<button><?php echo $this->Html->link('Accueil','/',array('class' => 'button') ); ?></button>
			<button><?php echo $this->Html->link('Produits','/Produits',array('class' => 'button') ); ?></button>			
		</td>
		<td class="tdcenter">
			<?php echo $this->Html->image('kuuil.png', array('alt' => 'Kuuil',"height"=>142,"width"=>420)); ?>
		</td>
		<td class="tdend">
			<button><?php echo $this->Html->link('Se Connecter','/Logins',array('class' => 'button') ); ?></button>
			<button><?php echo $this->Html->link('S\'inscrire','/Registers',array('class' => 'button') ); ?></button>
		</td>
	</tr>
</table>