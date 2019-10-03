import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OtherPageComponent } from './other-page.component';

const routes: Routes = [
	{
		path: '',
		component: OtherPageComponent
	}
]

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [],
	declarations: [OtherPageComponent],
})
export class OtherPageModule { }