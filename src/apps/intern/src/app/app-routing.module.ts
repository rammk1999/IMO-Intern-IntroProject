import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AppComponent } from './app.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
      path: 'test',
      component: AppComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  { path: '**', redirectTo: '/home' }
];

export const routing = RouterModule.forRoot(routes, { useHash: true });

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
