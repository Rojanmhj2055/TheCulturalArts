import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SiteHeaderComponent } from './site-header/site-header.component';

const routes: Routes = [
  { path:'',component: SiteHeaderComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
