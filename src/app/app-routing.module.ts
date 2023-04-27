import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrontPageComponent } from './1_front-page/front-page.component';
import { LegalComponent } from './7_legal/legal.component';

const routes: Routes = [
  { path: '', component: FrontPageComponent },      // routing path 1 - FrontPage/ defined as "no subdirectory of domain needs to be adressed"
  { path: 'legal', component: LegalComponent }, // routing path 2 - imprint/ defined as "/imprint" subdiretory of doamin needs to be called to get opened

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
