import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './home/components/principal/principal.component';

const routes: Routes = [
  { path: '', component: PrincipalComponent },
  { path: '**', redirectTo: '' }, // Wildcard route for a 404 page https://angular.io/guide/router
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
