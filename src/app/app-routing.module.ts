import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrontPageComponent } from './1_front-page/front-page.component';

const routes: Routes = [
  { path: '', component: FrontPageComponent },
  // { path: 'imprint', component: ImprintComponent },
  // { path: 'dataprotection', component: DataprotectionComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
