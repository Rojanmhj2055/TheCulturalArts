import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SiteFooterComponent } from './site-footer/site-footer.component';

const routes: Routes = [
  { path:'',component: AppComponent},
  {path:'footer',component:SiteFooterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
