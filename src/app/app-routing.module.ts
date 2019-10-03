import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	{
		path: 'other-page',
		loadChildren: () => import('./other-page.module').then(m => m.OtherPageModule)
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes, {
		useHash: true
	})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
