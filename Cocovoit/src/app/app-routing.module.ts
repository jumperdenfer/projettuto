import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { CreerTrajetComponent } from './creer-trajet/creer-trajet.component';
import { PropositionComponent } from './proposition/proposition.component';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { TrajetsComponent } from './trajets/trajets.component';




const routes: Routes = [
	{
		path: 'register',
		component: RegisterComponent
	},
	{
		path: 'home',
		component: LoginComponent
	},
	{
		path: 'admin',
		component: CreerTrajetComponent,
			children: [
				{
					path:'userList',
					component:AdminProfileComponent
				}
			]
		
	},
	{
		path: 'propose',
		component: PropositionComponent
	},
	{
		path: 'trajets',
		component: TrajetsComponent
	}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
