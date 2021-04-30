import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';


const routes: Routes = [
  // { path: 'login', component: LoginComponent, data : { metadata : AppConstants.pageMetaData.LOGIN } },
  { path: '', loadChildren: () => import('./components/landing/landing.module').then(mod => mod.LandingModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    { preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
