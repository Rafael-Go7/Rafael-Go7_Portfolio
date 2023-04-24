import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrontPageComponent } from './1_front-page/front-page.component';
import { ImprintComponent } from './7_imprint/imprint.component';

const routes: Routes = [
  { path: '', component: FrontPageComponent },
  { path: 'imprint', component: ImprintComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
