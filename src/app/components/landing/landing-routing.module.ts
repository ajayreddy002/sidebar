import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing.component';

const routes: Routes = [
  {path: '', component: LandingComponent, children: [
    { path: '', redirectTo: 'ad', pathMatch : "full" },
    {path: 'ad', loadChildren:() => import('../admin/admin.module').then(mod => mod.AdminModule)}
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingRoutingModule { }
